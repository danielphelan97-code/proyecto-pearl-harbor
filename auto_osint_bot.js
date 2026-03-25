import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Parser from 'rss-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';

// ==========================================
// 🔑 CONFIGURACIÓN DE IA (GEMINI PREMIUM)
// ==========================================
// Pega tu API KEY de Google AI Studio entre las comillas simples:
const GEMINI_API_KEY = 'AIzaSyATtl7hd98_W-X8JwU7_nWowx59bUuhyb8';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, 'data', 'carriers_data.js');

const parser = new Parser();

// URLs de Inteligencia Abierta
const RSS_FEEDS = [
    'https://news.usni.org/feed', // US Naval Institute News
    'https://www.navalnews.com/feed/' // Naval News
];

// Nodos geográficos del sistema
const VALID_NODES = [
    'san_diego', 'norfolk', 'bremerton', 'newport_news', 'yokosuka', 'souda_bay', 'taranto', 'toulon',
    'portsmouth', 'rota', 'guam', 'med_sea_east', 'med_sea_central', 'med_sea', 'adriatic_sea',
    'red_sea_north', 'red_sea_south', 'red_sea', 'bab_el_mandeb', 'gulf_of_oman', 'persian_gulf',
    'arabian_sea', 'philippine_sea', 'south_china_sea', 'taiwan_strait', 'atlantic_north',
    'atlantic_south', 'pacific_east', 'pacific_west', 'atlantic', 'pacific', 'north_sea', 'baltic_sea',
    'caribbean_sea', 'horn_of_africa'
];

async function analyzeWithGemini(text) {
    if (!GEMINI_API_KEY) return null; // Si no hay llave, saltar IA

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
        Eres un analista de inteligencia naval OSINT. Analiza esta noticia militar:
        "${text}"

        Extrae la ubicación de portaaviones. Responde ÚNICAMENTE con un JSON en este formato estricto (o un array vacío [] si no hay portaaviones activos). No añadas markdown ni texto adicional:
        [{
            "carrierId": "cvn69", // IDs validos: cvn68, cvn69, cvn70, cvn71, cvn72, cvn73, cvn74, cvn75, cvn76, cvn77, cvn78, cvn79, cvn80, cavour550, cdg91, qnlz8, pow9, jci61
            "region": "red_sea", // DEBE ser uno de los exactos siguientes: ${VALID_NODES.join(', ')}
            "estado": "Desplegado", // ("Desplegado", "En Puerto", "Mantenimiento")
            "resumen_tactico": "Breve frase OSINT de un par de líneas con contexto de esta operación."
        }]
        `;

        const result = await model.generateContent(prompt);
        let rawJSON = result.response.text().trim();

        // Limpiar backticks del markdown de código si la IA los puso
        if (rawJSON.startsWith('```json')) {
            rawJSON = rawJSON.substring(7, rawJSON.length - 3).trim();
        } else if (rawJSON.startsWith('```')) {
            rawJSON = rawJSON.substring(3, rawJSON.length - 3).trim();
        }

        return JSON.parse(rawJSON);
    } catch (e) {
        console.error("Error en la IA Gemini:", e.message);
        return null;
    }
}

// Fallback Rudimentario (si no configuras la IA)
const FALLBACK_NODES = { 'red sea': 'red_sea', 'mediterranean': 'med_sea', 'pacific': 'pacific_west', 'south china': 'south_china_sea', 'rabian': 'arabian_sea' };
const FALLBACK_CARRIERS = { 'eisenhower': 'cvn69', 'ike': 'cvn69', 'ford': 'cvn78', 'nimitz': 'cvn68', 'vinson': 'cvn70', 'lincoln': 'cvn72', 'reagan': 'cvn76', 'washington': 'cvn73' };

async function fetchIntelligence() {
    console.log("🌐 Conectando a fuentes OSINT Globales...");
    let intelligenceReports = [];

    for (const url of RSS_FEEDS) {
        try {
            const feed = await parser.parseURL(url);
            console.log(`📡 Analizando en vivo: ${feed.title}...`);

            // Limitamos a unas pocas noticias para no saturar la API
            const recientes = feed.items.slice(0, 3);

            for (const item of recientes) {
                const textToAnalyze = (item.title + ". " + (item.contentSnippet || "")).toLowerCase();
                const date = new Date(item.pubDate);
                const isoDate = date.toISOString().split('T')[0];

                // Evitamos noticias muy viejas
                if (date.getTime() < (Date.now() - 30 * 24 * 60 * 60 * 1000)) continue;

                if (GEMINI_API_KEY) {
                    process.stdout.write("."); // Indicador de progreso IA
                    const aiResult = await analyzeWithGemini(textToAnalyze);
                    if (aiResult && aiResult.length > 0) {
                        aiResult.forEach(report => {
                            if(VALID_NODES.includes(report.region)) { // Asegurar integridad DB
                                intelligenceReports.push({
                                    carrierId: report.carrierId,
                                    date: isoDate,
                                    region: report.region,
                                    status: report.estado || "Desplegado",
                                    desc: report.resumen_tactico.replace(/"/g, "'"), // Evitar romper TS
                                    sourceName: feed.title + " vía Gemini-OSINT",
                                    sourceUrl: item.link
                                });
                            }
                        });
                    }
                    // Retraso protector para evitar límite de cuota (Free Tier: 5 rq/min o similar)
                    await new Promise(resolve => setTimeout(resolve, 13000));
                } else {
                    // MODO FALLBACK HEURÍSTICO
                    let fId = null, fReg = null;
                    for (const [kw, cId] of Object.entries(FALLBACK_CARRIERS)) { if (textToAnalyze.includes(kw)) fId = cId; }
                    for (const [kw, rNode] of Object.entries(FALLBACK_NODES)) { if (textToAnalyze.includes(kw)) fReg = rNode; }

                    if (fId && fReg) {
                        intelligenceReports.push({
                            carrierId: fId, date: isoDate, region: fReg, status: "Desplegado",
                            desc: item.title.replace(/"/g, "'"),
                            sourceName: "Heuris-OSINT: " + feed.title, sourceUrl: item.link
                        });
                    }
                }
            }
        } catch (e) {
            console.error(`Error leyendo feed ${url}:`, e.message);
        }
    }
    return intelligenceReports;
}

function injectToDatabase(report) {
    let content = fs.readFileSync(dataPath, 'utf8');
    const carrierIdx = content.indexOf(`id: "${report.carrierId}"`);
    if (carrierIdx === -1) return false;

    const urlSafe = report.sourceUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const duplicateRegex = new RegExp(urlSafe);
    if (duplicateRegex.test(content)) return false; // Evita inyectar la misma noticia

    const endHistoryIdx = content.indexOf(']}', carrierIdx);
    if (endHistoryIdx === -1) return false;

    const lastBraceIdx = content.lastIndexOf('}', endHistoryIdx);

    const newEntry = `\n                { date: "${report.date}", ...LOCATIONS.${report.region}, status: "${report.status}", desc: "${report.desc}", sources: [{ name: "${report.sourceName}", url: "${report.sourceUrl}" }] }`;

    const part1 = content.slice(0, lastBraceIdx + 1);
    const part2 = content.slice(lastBraceIdx + 1);

    fs.writeFileSync(dataPath, part1 + ',' + newEntry + part2, 'utf8');
    return true;
}

async function main() {
    console.log("\n==========================================");
    console.log("🤖 MOTOR AUTÓNOMO DE RASTREO OSINT        ");
    console.log(GEMINI_API_KEY ? "✨ IA: Activada (Google Gemini Premium)" : "⚠️ IA: Desactivada (Modo Básico. Requiere API KEY)");
    console.log("==========================================\n");

    const reports = await fetchIntelligence();

    console.log(`\n\n🧠 Inteligencia extraída: ${reports.length} reportes válidos procesados.`);

    let added = 0;
    for (const report of reports) {
        if (injectToDatabase(report)) {
            console.log(`✅ [INYECCIÓN DB] ${report.date} | ${report.carrierId.toUpperCase()} ubicado en ${report.region}`);
            added++;
        }
    }

    if (added === 0) {
        console.log("\n💤 La simulación ya está al día. No hay movimientos nuevos detectados en la red.");
    } else {
        console.log(`\n🚀 ¡Geopolítica actualizada con ${added} nuevas locaciones en la DB!`);
    }
}

main();
