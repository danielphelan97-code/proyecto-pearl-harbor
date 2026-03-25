const fs = require('fs');
const path = require('path');
const readline = require('readline');

const dataPath = path.join(__dirname, 'data', 'carriers_data.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

async function main() {
    console.log("==========================================");
    console.log("   OSINT UPDATER AI - Terminal Manual     ");
    console.log("==========================================\n");

    try {
        const carrierId = await ask("1. ID del Portaaviones (ej. cvn69, cvn78, qnlz8, jci61): ");
        const dateStr = await ask("2. Fecha de Inteligencia (YYYY-MM-DD): ");
        const region = await ask("3. Nodo Geográfico (ej. red_sea, pac_west, norfolk, med_sea): ");
        const status = await ask("4. Estado (Desplegado / En Puerto / Mantenimiento): ");
        const op = await ask("5. Nombre de Operación (opcional, Intro para saltar): ");
        const desc = await ask("6. Descripción táctica del evento: ");
        const sourceName = await ask("7. Nombre de la Fuente OSINT (ej. USNI News, Sentinel-2): ");
        let sourceUrl = await ask("8. URL de Evidencia (opcional, Intro para usar ruta web estandar): ");

        if (!sourceUrl) sourceUrl = "#";

        let content = fs.readFileSync(dataPath, 'utf8');

        // Búsqueda en el archivo de texto
        const carrierIdx = content.indexOf(`id: "${carrierId}"`);
        if (carrierIdx === -1) {
            console.error(`\n❌ ERROR: No se encontró el buque con ID '${carrierId}'. Revisa carriers_data.js`);
            process.exit(1);
        }

        // Buscar el final de su bloque history
        const endHistoryIdx = content.indexOf(']}', carrierIdx);
        if (endHistoryIdx === -1) {
            console.error("\n❌ ERROR: Sintaxis de historial rota en el archivo JS.");
            process.exit(1);
        }

        // Encontrar la última llave '}' de su último evento
        const lastBraceIdx = content.lastIndexOf('}', endHistoryIdx);
        
        let opString = op ? `op: "${op}", ` : "";
        const newEntry = `\n                { date: "${dateStr}", ...LOCATIONS.${region}, status: "${status}", ${opString}desc: "${desc}", sources: [{ name: "${sourceName}", url: "${sourceUrl}" }] }`;

        // Modificando texto crudo, preservando sintaxis spread '...LOCATIONS'
        const part1 = content.slice(0, lastBraceIdx + 1);
        const part2 = content.slice(lastBraceIdx + 1);
        content = part1 + ',' + newEntry + part2;

        fs.writeFileSync(dataPath, content, 'utf8');

        console.log("\n✅ ¡ÉXITO! Base de datos OSINT actualizada.");
        console.log("Abre 'ProyectoPearlHarbor.html' en tu navegador y verás proyectada esta inteligencia en el tiempo.");
        
    } catch(e) {
        console.error("\n❌ Fallo el proceso de actualización:", e);
    } finally {
        rl.close();
    }
}

main();
