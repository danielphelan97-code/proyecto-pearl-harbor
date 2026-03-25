import fs from "fs";

let db = fs.readFileSync("data/carriers_data.js", "utf8");
let lines = db.split('\\n');

const countryMap = {
    "EE.UU.": ["cvn68", "cvn69", "cvn70", "cvn71", "cvn72", "cvn73", "cvn74", "cvn75", "cvn76", "cvn77", "cvn78", "cvn79", "cvn80"],
    "Francia": ["cdg91"],
    "Reino Unido": ["qnlz8", "pow9"],
    "España": ["jci61"],
    "Italia": ["cavour", "trieste"]
};

for (let i = 0; i < lines.length; i++) {
    for (const [country, ids] of Object.entries(countryMap)) {
        for (const id of ids) {
            const searchStr = 'id: "' + id + '"';
            if (lines[i].includes(searchStr)) {
                // Reemplazamos cls: "Algo", por cls: "Algo", country: "EE.UU.",
                lines[i] = lines[i].replace(/cls: ".*?",/, "$& country: \\"" + country + "\\",");
            }
        }
    }
}

fs.writeFileSync("data/carriers_data.js", lines.join('\\n'), "utf8");
console.log("Country properties successfully injected line by line.");
