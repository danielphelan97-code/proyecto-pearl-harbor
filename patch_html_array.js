import fs from "fs";
let lines = fs.readFileSync("ProyectoPearlHarbor.html", "utf8").split("\\n");

for(let i=0; i<lines.length; i++) {
    if(lines[i].includes('let accordionState = { "EE.UU.": true, "Italia": true')) {
        lines[i] = '        let accordionState = { "EE.UU.": true, "China": true, "Rusia": true, "India": true, "Italia": true, "Francia": true, "Reino Unido": true, "España": true };\\n        const globalFlags = { "EE.UU.": "🇺🇸", "China": "🇨🇳", "Rusia": "🇷🇺", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸", "India": "🇮🇳" };';
    }
    if(lines[i].includes('const grouped = { "EE.UU.": [], "Italia": [],')) {
        lines[i] = '            const grouped = { "EE.UU.": [], "China": [], "Rusia": [], "India": [], "Italia": [], "Francia": [], "Reino Unido": [], "España": [] };';
        lines[i+3] = '                const country = c.country || "EE.UU.";';
        lines[i+4] = '                if(!grouped[country]) grouped[country] = [];';
        lines[i+5] = '                grouped[country].push(c);';
        lines[i+6] = '';
        lines[i+7] = '';
    }
    if(lines[i].includes('const flags = { "EE.UU.": "🇺🇸", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸" };')) {
        lines[i] = '';
    }
    if(lines[i].includes("${flags[countryKey] || '🏴'}")) {
        lines[i] = lines[i].replace("${flags[countryKey] || '🏴'}", "${globalFlags[countryKey] || '🏴'}");
    }
    if(lines[i].includes("</svg>`")) {
        if(lines[i-7] && lines[i-7].includes('const carrierSvg = `')) {
            lines[i-7] = '                const carrierSvg = `<div class="relative flex items-center justify-center pointer-events-none" style="width: ${svgWidth}px; height: ${svgHeight}px;">' + lines[i-7].replace('const carrierSvg = `', '');
            lines[i] = '                </svg><div class="absolute -top-1 -right-2 bg-slate-950 rounded-full w-5 h-5 flex items-center justify-center text-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.9)] border border-slate-700 z-10 opacity-90" style="pointer-events: auto;">${globalFlags[c.country] || "🏴"}</div></div>`;';
        }
    }
}
fs.writeFileSync("ProyectoPearlHarbor.html", lines.join("\\n"), "utf8");
console.log("HTML Patched cleanly with node array loop.");
