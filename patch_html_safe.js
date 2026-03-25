import fs from 'fs';

let html = fs.readFileSync('ProyectoPearlHarbor.html', 'utf8');

const s1 = 'let accordionState = { "EE.UU.": true, "Italia": true, "Francia": true, "Reino Unido": true, "España": true };';
const r1 = 'let accordionState = { "EE.UU.": true, "China": true, "Rusia": true, "India": true, "Italia": true, "Francia": true, "Reino Unido": true, "España": true };\\n\\n        const globalFlags = { "EE.UU.": "🇺🇸", "China": "🇨🇳", "Rusia": "🇷🇺", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸", "India": "🇮🇳" };';
html = html.replace(s1, r1);

const s2 = 'const grouped = { "EE.UU.": [], "Italia": [], "Francia": [], "Reino Unido": [], "España": [] };';
const r2 = 'const grouped = { "EE.UU.": [], "China": [], "Rusia": [], "India": [], "Italia": [], "Francia": [], "Reino Unido": [], "España": [] };';
html = html.replace(s2, r2);

const regexCountryLogic = /filtered\.forEach\(c => \\{[\\s\\S]*?if\\(!grouped\\[country\\]\\) grouped\\[country\\] = \\[\\];\\s*grouped\\[country\\]\\.push\\(c\\);\\s*\\}\\);/;
const r3 = \`filtered.forEach(c => {
                const country = c.country || "EE.UU.";
                if(!grouped[country]) grouped[country] = [];
                grouped[country].push(c);
            });\`;
html = html.replace(regexCountryLogic, r3);

const s4 = 'const flags = { "EE.UU.": "🇺🇸", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸" };';
html = html.replace(s4, "");

const s5 = "${flags[countryKey] || '🏴'}";
const r5 = "${globalFlags[countryKey] || '🏴'}";
html = html.replace(s5, r5);

const sgvRegex = /const carrierSvg = \`[\\s\\S]*?<\\/svg>\`;/;
const sgvNew = \`const carrierSvg = \\\`
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

html = html.replace(sgvRegex, sgvNew);

fs.writeFileSync('ProyectoPearlHarbor.html', html, 'utf8');
console.log("HTML Patched cleanly with node.");
