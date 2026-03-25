import fs from 'fs';
const file = fs.readFileSync('data/carriers_data.js', 'utf8');

const locsMatch = file.match(/const LOCATIONS = \{([\s\S]*?)\};/);
if (locsMatch) {
    const locsDef = locsMatch[1];
    const definedKeys = [...locsDef.matchAll(/([a-zA-Z_0-9]+)\s*:/g)].map(m => m[1]);
    const usedKeys = [...file.matchAll(/\.\.\.LOCATIONS\.([a-zA-Z_0-9]+)/g)].map(m => m[1]);
    const uniqueUsed = [...new Set(usedKeys)];
    const missing = uniqueUsed.filter(k => !definedKeys.includes(k));
    console.log("Missing locations used in history:", missing);
}
