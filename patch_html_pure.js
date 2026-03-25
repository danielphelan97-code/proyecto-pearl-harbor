import fs from "fs";

let html = fs.readFileSync("ProyectoPearlHarbor.html", "utf8");

// Reemplazar la declaración grouped
const searchGroup = 'const grouped = { "EE.UU.": [], "Italia": [], "Francia": [], "Reino Unido": [], "España": [] };';
const replaceGroup = 'const grouped = { "EE.UU.": [], "China": [], "Rusia": [], "India": [], "Italia": [], "Francia": [], "Reino Unido": [], "España": [] };';
html = html.replace(searchGroup, replaceGroup);

// Reemplazar el diccionario old flags
const searchFlags = 'const flags = { "EE.UU.": "🇺🇸", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸" };';
const replaceFlags = '';
html = html.replace(searchFlags, replaceFlags);

// Insertar globalFlags
const searchFunc = 'function renderCarrierList() {';
const replaceFunc = 'const globalFlags = { "EE.UU.": "🇺🇸", "China": "🇨🇳", "Rusia": "🇷🇺", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸", "India": "🇮🇳" };\\n\\n        function renderCarrierList() {';
html = html.replace(searchFunc, replaceFunc);

// Reemplazar la logica de parseo
const searchLogic = \`filtered.forEach(c => {
                let country = "EE.UU.";
                if (c.cls.includes("Italia")) country = "Italia";
                else if (c.cls.includes("Francia")) country = "Francia";
                else if (c.cls.includes("Reino Unido")) country = "Reino Unido";
                else if (c.cls.includes("Española") || c.cls.includes("España")) country = "España";
                
                if(!grouped[country]) grouped[country] = [];
                grouped[country].push(c);
            });\`;
const replaceLogic = \`filtered.forEach(c => {
                const country = c.country || "EE.UU.";
                if(!grouped[country]) grouped[country] = [];
                grouped[country].push(c);
            });\`;
// Normalizando line endings para que replace de javascript raw no falle por crlf
html = html.replace(searchLogic.replace(/\\r\\n/g, '\\n'), replaceLogic);
html = html.replace(searchLogic, replaceLogic);

// Reemplazar la bandera del UI accordion
html = html.replace(/\\$\\{flags\\[countryKey\\] \|\| '🏴'\\}/, "${globalFlags[countryKey] || '🏴'}");

// Modificar el SVG
const searchSvg = \`const carrierSvg = \\\`
                <svg width="\${svgWidth}" height="\${svgHeight}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.6)); \${isDeployed ? 'animation: pulse 2s infinite;' : ''} \${isSelected ? 'transform: scale(1.1);' : ''} transition: transform 0.2s;">
                  <path d="M 28 4 L 36 4 L 40 12 L 40 54 L 32 62 L 24 54 L 24 12 Z" fill="\${color}" stroke="\${strokeColor}" stroke-width="\${isSelected ? '2.5' : '1.5'}"/>
                  <polygon points="24 20, 14 46, 24 46" fill="\${color}" stroke="\${strokeColor}" stroke-width="\${isSelected ? '1.5' : '1'}"/>
                  <rect x="36" y="28" width="6" height="12" fill="#1e293b" />
                  <line x1="32" y1="10" x2="32" y2="56" stroke="rgba(255,255,255,0.6)" stroke-width="1" stroke-dasharray="3,3"/>
                  <line x1="22" y1="44" x2="34" y2="20" stroke="rgba(255,255,255,0.6)" stroke-width="1" stroke-dasharray="3,3"/>
                </svg>\\\`;\`;

const replaceSvg = \`const carrierSvg = \\\`
                <div class="relative flex items-center justify-center pointer-events-none" style="width: \${svgWidth}px; height: \${svgHeight}px;">
                    <svg width="\${svgWidth}" height="\${svgHeight}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.6)); \${isDeployed ? 'animation: pulse 2s infinite;' : ''} \${isSelected ? 'transform: scale(1.1);' : ''} transition: transform 0.2s;">
                      <path d="M 28 4 L 36 4 L 40 12 L 40 54 L 32 62 L 24 54 L 24 12 Z" fill="\${color}" stroke="\${strokeColor}" stroke-width="\${isSelected ? '2.5' : '1.5'}"/>
                      <polygon points="24 20, 14 46, 24 46" fill="\${color}" stroke="\${strokeColor}" stroke-width="\${isSelected ? '1.5' : '1'}"/>
                      <rect x="36" y="28" width="6" height="12" fill="#1e293b" />
                      <line x1="32" y1="10" x2="32" y2="56" stroke="rgba(255,255,255,0.6)" stroke-width="1" stroke-dasharray="3,3"/>
                      <line x1="22" y1="44" x2="34" y2="20" stroke="rgba(255,255,255,0.6)" stroke-width="1" stroke-dasharray="3,3"/>
                    </svg>
                    <div class="absolute -top-1 -right-2 bg-slate-950 rounded-full w-5 h-5 flex items-center justify-center text-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.9)] border border-slate-700 z-10 opacity-90" style="pointer-events: auto;">
                        \${globalFlags[c.country] || "🏴"}
                    </div>
                </div>\\\`;\`;

html = html.replace(searchSvg.replace(/\\r\\n/g, '\\n'), replaceSvg);
html = html.replace(searchSvg, replaceSvg);

fs.writeFileSync("ProyectoPearlHarbor.html", html, "utf8");
console.log("HTML Patched cleanly with node.");
