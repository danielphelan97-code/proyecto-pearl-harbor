import fs from 'fs';

let html = fs.readFileSync('ProyectoPearlHarbor.html', 'utf8');

// 1. Inyectar Filtros en UI (debajo de search)
const searchInject = \`                        </svg>
                    </div>\`;
const filtersUI = \`<div class="flex gap-2 mt-4 overflow-x-auto pb-1 text-[10px] font-bold uppercase tracking-wider" id="filter-controls">
                        <button class="filter-btn px-3 py-1.5 bg-blue-600 border border-blue-500 rounded text-white shadow-md transition-colors whitespace-nowrap" onclick="filterFaction('Todos', this)">🌐 Global</button>
                        <button class="filter-btn px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap" onclick="filterFaction('OTAN', this)">🛡️ OTAN/Aliados</button>
                        <button class="filter-btn px-3 py-1.5 bg-slate-900 border border-red-900/50 rounded text-red-500 hover:text-red-400 hover:bg-slate-800 transition-colors whitespace-nowrap" onclick="filterFaction('Rival', this)">⚔️ Rivales</button>
                    </div>\`;

html = html.replace(searchInject, searchInject + "\\n" + filtersUI);

// 2. Variable global de filtro
const constFlagsStr = 'const globalFlags = { "EE.UU.": "🇺🇸", "China": "🇨🇳", "Rusia": "🇷🇺", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸", "India": "🇮🇳" };';
const newVars = \`let activeFaction = 'Todos';

        window.filterFaction = function(faction, btnElement) {
            activeFaction = faction;
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.className = "filter-btn px-3 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap";
                if (b.innerText.includes('Rivales')) b.classList.add('border-red-900/50', 'text-red-500');
            });
            btnElement.className = \`filter-btn px-3 py-1.5 \${faction === 'Todos' ? 'bg-blue-600 border-blue-500 text-white' : faction === 'OTAN' ? 'bg-blue-800 border-blue-600 text-white' : 'bg-red-800 border-red-600 text-white'} rounded shadow-md transition-colors whitespace-nowrap\`;
            
            renderCarrierList();
            updateMarkers();
            updateFleetStats();
        };

        const globalFlags = { "EE.UU.": "🇺🇸", "China": "🇨🇳", "Rusia": "🇷🇺", "Italia": "🇮🇹", "Francia": "🇫🇷", "Reino Unido": "🇬🇧", "España": "🇪🇸", "India": "🇮🇳" };\`;

html = html.replace(constFlagsStr, newVars);

// 3. Modificar renderCarrierList
const oldFilterRender = \`const filtered = CARRIERS.filter(c => 
                c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                c.hull.toLowerCase().includes(searchQuery.toLowerCase())
            );\`;
const newFilterRender = \`const filtered = CARRIERS.filter(c => {
                const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.hull.toLowerCase().includes(searchQuery.toLowerCase());
                if (!matchesSearch) return false;
                
                if (activeFaction === 'OTAN' && !["EE.UU.", "Italia", "Francia", "Reino Unido", "España"].includes(c.country)) return false;
                if (activeFaction === 'Rival' && !["China", "Rusia", "India"].includes(c.country)) return false;
                
                return true;
            });\`;
html = html.replace(oldFilterRender, newFilterRender);

// 4. Modificar updateMarkers
const oldMarkerLogic = \`        function updateMarkers() {
            CARRIERS.forEach(c => {
                // Lógica de "Desaparición" de navíos no botados aún
                if (c.launched) {
                    const launchTime = new Date(c.launched).getTime();
                    if (!isNaN(launchTime) && currentDate.getTime() < launchTime) {
                        if (mapMarkers[c.id]) {
                            map.removeLayer(mapMarkers[c.id]);
                            delete mapMarkers[c.id];
                        }
                        return; // Omitir el dibujado del marcador SVG si en este año aún no tocaba el agua
                    }
                }\`;
const newMarkerLogic = \`        function updateMarkers() {
            CARRIERS.forEach(c => {
                let isVisible = true;
                if (activeFaction === 'OTAN' && !["EE.UU.", "Italia", "Francia", "Reino Unido", "España"].includes(c.country)) isVisible = false;
                if (activeFaction === 'Rival' && !["China", "Rusia", "India"].includes(c.country)) isVisible = false;

                if (c.launched) {
                    const launchTime = new Date(c.launched).getTime();
                    if (!isNaN(launchTime) && currentDate.getTime() < launchTime) isVisible = false;
                }

                if (!isVisible) {
                    if (mapMarkers[c.id]) {
                        map.removeLayer(mapMarkers[c.id]);
                        delete mapMarkers[c.id];
                    }
                    if (selectedCarrierId === c.id) {
                        selectedCarrierId = null;
                        document.getElementById('carrier-details').classList.add('hidden');
                        if (mapPath) { map.removeLayer(mapPath); mapPath = null; }
                    }
                    return;
                }\`;

html = html.replace(oldMarkerLogic.replace(/\\r\\n/g, '\\n'), newMarkerLogic);
html = html.replace(oldMarkerLogic, newMarkerLogic);

// 5. Update stats count
const oldStatsLogic = \`        function updateFleetStats() {
            const stats = { deployed: 0, port: 0, maintenance: 0 };
            CARRIERS.forEach(c => {
                const state = getCarrierStateAtDate(c, currentDate);
                if (state.status === "Desplegado") stats.deployed++;
                else if (state.status === "Mantenimiento") stats.maintenance++;
                else stats.port++;
            });\`;
const newStatsLogic = \`        function updateFleetStats() {
            const stats = { deployed: 0, port: 0, maintenance: 0 };
            CARRIERS.forEach(c => {
                let isVisible = true;
                if (activeFaction === 'OTAN' && !["EE.UU.", "Italia", "Francia", "Reino Unido", "España"].includes(c.country)) isVisible = false;
                if (activeFaction === 'Rival' && !["China", "Rusia", "India"].includes(c.country)) isVisible = false;
                if (c.launched) {
                    const launchTime = new Date(c.launched).getTime();
                    if (!isNaN(launchTime) && currentDate.getTime() < launchTime) isVisible = false;
                }
                
                if (!isVisible) return; // Only count visible entities

                const state = getCarrierStateAtDate(c, currentDate);
                if (state.status === "Desplegado") stats.deployed++;
                else if (state.status === "Mantenimiento") stats.maintenance++;
                else stats.port++;
            });\`;
html = html.replace(oldStatsLogic.replace(/\\r\\n/g, '\\n'), newStatsLogic);
html = html.replace(oldStatsLogic, newStatsLogic);

fs.writeFileSync('ProyectoPearlHarbor.html', html, 'utf8');
console.log("Filtros Tacticos inyectados con exito.");
