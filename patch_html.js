import fs from 'fs';

let content = fs.readFileSync('ProyectoPearlHarbor.html', 'utf8');

// 1. Añadir globalFlags justo antes de function renderCarrierList()
const globalFlags = \`
        const globalFlags = { "EE.UU.": "🇺🇸", "China": "🇨🇳", "Rusia": "🇷🇺", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸", "India": "🇮🇳" };

        function renderCarrierList() {
\`;
content = content.replace(/\\bfunction renderCarrierList\\(\\)\\s*\\{/, globalFlags);

// 2. Simplificar grouped array definition and fill it using c.country
const newGroupedLogic = \`
            const grouped = { "EE.UU.": [], "China": [], "Rusia": [], "India": [], "Italia": [], "Francia": [], "Reino Unido": [], "España": [] };

            filtered.forEach(c => {
                const country = c.country || "EE.UU.";
                if(!grouped[country]) grouped[country] = [];
                grouped[country].push(c);
            });
\`;
content = content.replace(/const grouped = \{ "EE\.UU\.": \[\], "Italia": \[\], "Francia": \[\], "Reino Unido": \[\], "España": \[\] \};[\s\S]*?grouped\[country\]\.push\(c\);\s*\}\);/, newGroupedLogic);

// 3. Remove old local flags
content = content.replace(/const flags = \{ "EE\.UU\.": "🇺🇸", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸" \};/, "");

// 4. Update the accordion header to use globalFlags instead of flags
content = content.replace(/<span class="text-lg">\\$\\{flags\\[countryKey\\] \|\| '🏴'\\}<\\/span>/, '<span class="text-lg">${globalFlags[countryKey] || \'🏴\'}</span>');

// 5. Update updateMarkers SVG to wrap in div and add floating flag
const oldSvgTemplate = \`<svg width="\\\${svgWidth}" height="\\\${svgHeight}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.6)); \\\${isDeployed \\? 'animation: pulse 2s infinite;' : ''} \\\${isSelected \\? 'transform: scale\\(1\\.1\\);' : ''} transition: transform 0\\.2s;">
                  <path d="M 28 4 L 36 4 L 40 12 L 40 54 L 32 62 L 24 54 L 24 12 Z" fill="\\\${color}" stroke="\\\${strokeColor}" stroke-width="\\\${isSelected \\? '2\\.5' : '1\\.5'}"/>
                  <polygon points="24 20, 14 46, 24 46" fill="\\\${color}" stroke="\\\${strokeColor}" stroke-width="\\\${isSelected \\? '1\\.5' : '1'}"/>
                  <rect x="36" y="28" width="6" height="12" fill="#1e293b" />
                  <line x1="32" y1="10" x2="32" y2="56" stroke="rgba\\(255,255,255,0\\.6\\)" stroke-width="1" stroke-dasharray="3,3"/>
                  <line x1="22" y1="44" x2="34" y2="20" stroke="rgba\\(255,255,255,0\\.6\\)" stroke-width="1" stroke-dasharray="3,3"/>
                </svg>\`;

const newSvgTemplate = \`<div class="relative flex items-center justify-center pointer-events-none" style="width: \${svgWidth}px; height: \${svgHeight}px;">
                    <svg width="\${svgWidth}" height="\${svgHeight}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.6)); \${isDeployed ? 'animation: pulse 2s infinite;' : ''} \${isSelected ? 'transform: scale(1.1);' : ''} transition: transform 0.2s;">
                      <path d="M 28 4 L 36 4 L 40 12 L 40 54 L 32 62 L 24 54 L 24 12 Z" fill="\${color}" stroke="\${strokeColor}" stroke-width="\${isSelected ? '2.5' : '1.5'}"/>
                      <polygon points="24 20, 14 46, 24 46" fill="\${color}" stroke="\${strokeColor}" stroke-width="\${isSelected ? '1.5' : '1'}"/>
                      <rect x="36" y="28" width="6" height="12" fill="#1e293b" />
                      <line x1="32" y1="10" x2="32" y2="56" stroke="rgba(255,255,255,0.6)" stroke-width="1" stroke-dasharray="3,3"/>
                      <line x1="22" y1="44" x2="34" y2="20" stroke="rgba(255,255,255,0.6)" stroke-width="1" stroke-dasharray="3,3"/>
                    </svg>
                    <div class="absolute -top-1 -right-1 bg-slate-900 rounded-full w-5 h-5 flex items-center justify-center text-[11px] shadow-[0_0_10px_rgba(0,0,0,0.8)] border border-slate-700 z-10" style="pointer-events: auto;">
                        \${globalFlags[c.country] || "🏴"}
                    </div>
                </div>\`;

content = content.replace(new RegExp(oldSvgTemplate, 'g'), newSvgTemplate);

fs.writeFileSync('ProyectoPearlHarbor.html', content, 'utf8');
console.log("HTML successfully patched with globalFlags and new wrapper SVG marker.");
