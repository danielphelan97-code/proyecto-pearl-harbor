const LOCATIONS = {
    san_diego: { lat: 32.700, lng: -117.195, name: "Naval Base Coronado, San Diego" },
    norfolk: { lat: 36.953, lng: -76.330, name: "Naval Station Norfolk (Piers 11/12)" },
    bremerton: { lat: 47.556, lng: -122.636, name: "Puget Sound Naval Shipyard, Bremerton" },
    newport_news: { lat: 36.985, lng: -76.442, name: "Newport News Shipbuilding" },
    yokosuka: { lat: 35.288, lng: 139.658, name: "CFA Yokosuka (Berth 12)" },
    souda_bay: { lat: 35.495, lng: 24.175, name: "NSA Souda Bay (Marathi Pier)" },
    taranto: { lat: 40.450, lng: 17.227, name: "Stazione Navale Mar Grande, Tarento" },
    toulon: { lat: 43.118, lng: 5.922, name: "Base Navale de Toulon (Milhaud)" },
    portsmouth: { lat: 50.806, lng: -1.103, name: "HMNB Portsmouth (Princess Royal Jetty)" },
    rota: { lat: 36.621, lng: -6.333, name: "Base Naval de Rota (Muelles 1 y 2)" },
    guam: { lat: 13.438, lng: 144.653, name: "Naval Base Guam (Apra Harbor)" },
    us_east: { lat: 36.50, lng: -70.00, name: "Atlántico Occidental (US East Coast)" },    indian_ocean: { lat: -5.00, lng: 70.00, name: "Océano Índico" },
    fincantieri_stabia: { lat: 40.699, lng: 14.478, name: "Astillero Fincantieri (Stabia/Muggiano)" },

    // Rivales
    qingdao: { lat: 35.719, lng: 119.982, name: "Base Naval de Qingdao (PLAN)" },
    sanya: { lat: 18.196, lng: 109.684, name: "Base Naval de Yulin, Sanya (Hainan)" },
    jiangnan: { lat: 31.355, lng: 121.751, name: "Astillero Jiangnan, Shanghái" },
    dalian: { lat: 38.932, lng: 121.642, name: "Astillero Dalian, Liaoning" },
    murmansk: { lat: 69.043, lng: 33.220, name: "35th Shipyard Base, Murmansk (VMF)" },
    karwar: { lat: 14.762, lng: 74.120, name: "Base Naval Kadamba, Karwar" },
    kochi: { lat: 9.965, lng: 76.280, name: "Cochin Shipyard, Kochi" },
    kure: { lat: 34.234, lng: 132.545, name: "Base Naval de Kure, Hiroshima" },
    rio_de_janeiro: { lat: -22.900, lng: -43.167, name: "Arsenal de Marinha do Rio de Janeiro" },
    sattahip: { lat: 12.617, lng: 100.883, name: "Base Naval de Sattahip, Chonburi" },

    // Regiones Marítimas de Operaciones
    med_sea_east: { lat: 34.00, lng: 32.00, name: "Mediterráneo Oriental" },
    med_sea_central: { lat: 36.00, lng: 17.00, name: "Mar Jónico / Med Central" },
    med_sea: { lat: 34.00, lng: 25.00, name: "Mar Mediterráneo" },
    adriatic_sea: { lat: 42.00, lng: 16.00, name: "Mar Adriático" },
    red_sea_north: { lat: 26.00, lng: 35.00, name: "Mar Rojo Norte" },
    red_sea_south: { lat: 16.00, lng: 40.00, name: "Mar Rojo Sur" },
    red_sea: { lat: 18.0, lng: 40.0, name: "Mar Rojo Principal" },
    bab_el_mandeb: { lat: 12.50, lng: 43.30, name: "Estrecho de Bab el-Mandeb" },
    gulf_of_oman: { lat: 24.00, lng: 59.00, name: "Golfo de Omán" },
    persian_gulf: { lat: 26.00, lng: 52.00, name: "Golfo Pérsico" },
    arabian_sea: { lat: 15.00, lng: 60.00, name: "Mar Arábigo Norte" },
    philippine_sea: { lat: 18.00, lng: 132.00, name: "Mar de Filipinas" },
    south_china_sea: { lat: 15.00, lng: 115.00, name: "Mar de China Meridional" },
    taiwan_strait: { lat: 24.50, lng: 119.50, name: "Estrecho de Taiwán" },
    atlantic_north: { lat: 60.00, lng: -20.00, name: "Atlántico Norte (GIUK)" },
    atlantic_south: { lat: -25.0, lng: -40.0, name: "Atlántico Sur" },
    pacific_east: { lat: 20.00, lng: -140.00, name: "Pacífico Oriental" },
    pacific_west: { lat: 20.00, lng: 160.00, name: "Pacífico Occidental" },
    atlantic: { lat: 40.0, lng: -60.0, name: "Océano Atlántico" },
    pacific: { lat: 20.0, lng: -140.0, name: "Océano Pacífico" },
    north_sea: { lat: 56.50, lng: 3.50, name: "Mar del Norte / Jutlandia" },
    baltic_sea: { lat: 57.00, lng: 19.00, name: "Mar Báltico" },
    caribbean_sea: { lat: 15.00, lng: -75.00, name: "Mar Caribe" },
    horn_of_africa: { lat: 10.00, lng: 52.00, name: "Cuerno de África" },
    hawaii: { lat: 21.3, lng: -157.8, name: "Pearl Harbor, Hawaii" },
    suez_canal: { lat: 29.9, lng: 32.5, name: "Canal de Suez (Tránsito)" },
    skagerrak: { lat: 57.8, lng: 9.0, name: "Estrecho de Skagerrak (Paso Báltico/Norte)" },
    rosyth: { lat: 56.02, lng: -3.45, name: "Astillero de Rosyth, Escocia" }
};

const WIKI_SPECS = {
    "Clase Nimitz (EE.UU.)": { 
        displacement: "105,000 tons", length: "332.8 m", propulsion: "2x Reactores Nucleares A4W", 
        airWing: "90+ aeronaves (F/A-18E/F Super Hornet, EA-18G Growler, E-2D Hawkeye, C-2A Greyhound, MH-60R/S Seahawk)", 
        radar: "SPS-48E 3-D, SPS-49(V)5 2-D",
        weapons: "2-3Ã— lanzadores RIM-116 RAM, 2Ã— RIM-7 Sea Sparrow, 2Ã— Phalanx CIWS 20mm"
    },
    "Clase Ford (EE.UU.)": { 
        displacement: "100,000+ tons", length: "337 m", propulsion: "2x Reactores Nucleares A1B", 
        airWing: "90+ aeronaves (F-35C Lightning II, F/A-18E/F, EA-18G, E-2D, CMV-22B Osprey, MH-60R/S)", 
        radar: "AN/SPY-3 & AN/SPY-4 Dual Band Radar (DBR)",
        weapons: "2Ã— lanzadores RIM-162 ESSM, 2Ã— RIM-116 RAM, 3Ã— Phalanx CIWS 20mm"
    },
    "Armada Española": { 
        displacement: "26,000 tons", length: "230.8 m", propulsion: "CODLAG (1x Turbina Gas LM2500, 2x Motores DiÃ©sel)", 
        airWing: "Aprox. 30 aeronaves (Harrier AV-8B+ Matador, Helicópteros NH90, SH-60B, AB-212)", 
        radar: "Selex RAN-40L 3D / Lanza-N",
        weapons: "4Ã— cañones automáticos de 20mm, Ametralladoras pesadas M2 12.7mm (Reserva para CIWS)"
    },
    "Royal Navy (Reino Unido)": { 
        displacement: "65,000 tons", length: "284 m", propulsion: "IFEP (2x Rolls-Royce MT30 GTs, 4x WÃ¤rtsilÃ¤ DiÃ©sel)", 
        airWing: "Correa estándar: 36Ã— F-35B Lightning II. Helicópteros: Merlin HM2 (ASW/AEW), Wildcat AH1, Chinook", 
        radar: "BAE Systems S1850M 3D, Artisan 3D Tipo 997",
        weapons: "3Ã— Phalanx CIWS 20mm, 4Ã— cañones DS30M Mk2 de 30mm y miniguns"
    },
    "Armada Italiana (Marina Militare)": { 
        displacement: "27,000 - 33,000 tons", length: "244 m", propulsion: "COGAG (4x Turbinas de gas LM2500)", 
        airWing: "20-30 aeronaves (Cazas furtivos F-35B, Harrier AV-8B+. Helos: EH-101 Merlin, NH90)", 
        radar: "Leonardo Kronos Naval, Selex RAN-40L 3D",
        weapons: "32Ã— celdas Sylver A43 (misiles Aster 15), 2Ã— cañones OTO Melara 76mm, 3Ã— CIWS Oerlikon 25mm"
    },
    "Clase Garibaldi (Marina Militare)": { 
        displacement: "13,850 tons", length: "180 m", propulsion: "COGAG (4x Turbinas de Gas LM2500)", 
        airWing: "Aprox. 18 aeronaves (Helicópteros pesados AW101, Harrier AV-8B+ heredados)", 
        radar: "MM/SPS-768 (RAN 3L), SPS-774",
        weapons: "2Ã— lanzadores de misiles Aspide (defensa puntual), 3Ã— Dardo CIWS 40mm, 2Ã— tubos lanzatorpedos (324 mm)"
    },
    "Marine Nationale (Francia)": { 
        displacement: "42,500 tons", length: "261.5 m", propulsion: "2x Reactores Nucleares Areva K15", 
        airWing: "Aprox. 40 aeronaves (Cazas Dassault Rafale M, E-2C Hawkeye, CaÃ¯man Marine NH90, Panther)", 
        radar: "Thales Arabel 3D multifunción, J11",
        weapons: "32Ã— celdas Sylver A43 (misiles Aster 15), 2Ã— lanzadores Sadral (misiles Mistral 3)"
    },
    "Clase Kuznetsov (VMF)": { 
        displacement: "58,000 tons", length: "305 m", propulsion: "Calderas de Vapor (Mazut)", 
        airWing: "24Ã— cazas (Su-33 'Flanker-D', MiG-29K), 6Ã— helicópteros Kamov Ka-27/Ka-31 (ASW/AEW)", 
        radar: "Sky Watch 3D, Plate Steer",
        weapons: "12Ã— misiles antibuque de crucero P-700 Granit, 192Ã— misiles SAM 3K95 Kinzhal, 8Ã— CADS-N-1 Kashtan CIWS"
    },
    "Clase Tipo 001 (PLAN)": { 
        displacement: "60,000 tons", length: "304.5 m", propulsion: "Calderas de Vapor Modernizadas", 
        airWing: "Aprox. 40 aeronaves (24Ã— cazas J-15 'Flying Shark', Helos: Z-8, Z-18J AEW, Z-9)", 
        radar: "Tipo 346 S-Band AESA (Radares de fase plana)",
        weapons: "3Ã— Tipo 1130 CIWS (11 cañones 30mm), 3Ã— lanzadores de misiles HQ-10 (18 celdas c/u)"
    },
    "Clase Tipo 002 (PLAN)": { 
        displacement: "65,000 tons", length: "315 m", propulsion: "Calderas de Vapor Chinas", 
        airWing: "Aprox. 44-50 aeronaves (32Ã— cazas J-15, 8Ã— helos Z-18, 4Ã— helos Z-9)", 
        radar: "Tipo 346A S-Band AESA avanzado",
        weapons: "3Ã— Tipo 1130 CIWS rotatorios 30mm, 3Ã— lanzadores HQ-10 (misiles de defensa de punto)"
    },
    "Clase Tipo 003 (PLAN)": { 
        displacement: "80,000+ tons", length: "316 m", propulsion: "Catapultas EMALS, Motores Convencionales", 
        airWing: "Aprox. 60+ aeronaves (Cazas J-15T, J-35 Stealth, Aviones de Alerta Temprana KJ-600)", 
        radar: "Conjunto completo AESA Multipropósito Integrado",
        weapons: "Sistemas HQ-10 de corto alcance y múltiples Tipo 1130 CIWS para defensa terminal"
    },
    "Clase Kuznetsov Mod.": { 
        displacement: "45,400 tons", length: "284 m", propulsion: "8x Calderas de Vapor Presurizadas", 
        airWing: "Aprox. 36 aeronaves (26Ã— cazas MiG-29K/KUB, 10Ã— helicópteros Kamov Ka-31, Ka-28)", 
        radar: "Podberezovik 3D, Fregat-M2EM",
        weapons: "Sistemas de Defensa AÃ©rea Barak 8 (LRSAM), 4Ã— AK-630 CIWS de fabricación rusa"
    },
    "Clase Vikrant (India)": { 
        displacement: "45,000 tons", length: "262 m", propulsion: "COGAG (4x Turbinas de Gas GE LM2500+)", 
        airWing: "30+ aeronaves (MiG-29K, Kamov Ka-31, MH-60R, Rafale M planificados)", 
        radar: "IAI EL/M-2248 MF-STAR (AESA)",
        weapons: "2Ã— lanzadores verticales (32 misiles Barak 8), 4Ã— AK-630 CIWS"
    },
    "Clase Izumo (Japón)": { 
        displacement: "27,000 tons", length: "248 m", propulsion: "COGAG (4x GE/IHI LM2500)", 
        airWing: "28+ aeronaves (7x F-35B planificados, helicópteros SH-60K, MCH-101)", 
        radar: "OPS-50 AESA, OPS-28",
        weapons: "2Ã— Phalanx CIWS, 2Ã— lanzadores SeaRAM"
    },
    "Porta-Drones (Turquía)": { 
        displacement: "27,436 tons", length: "231 m", propulsion: "5x Motores DiÃ©sel (Navantia/MAN)", 
        airWing: "30-50 aeronaves (Drones Bayraktar TB3, Kizilelma, helicópteros T129 ATAK, S-70B)", 
        radar: "SMART-S Mk2, GENESIS ADVENT CMS",
        weapons: "2Ã— Phalanx CIWS, 5Ã— cañones STOP de 25mm, 1Ã— RAM"
    },
    "Multiproposito (Brasil)": { 
        displacement: "21,500 tons", length: "203.4 m", propulsion: "2x DiÃ©sel Pielstick, 2x Alternadores Alstom", 
        airWing: "18 helicópteros (EC725 Caracal, SH-60 Seahawk, AS332 Super Puma)", 
        radar: "Artisan 3D Tipo 997",
        weapons: "3Ã— Phalanx CIWS, 4Ã— cañones DS30M Mk2 de 30mm"
    },
    "Portaaviones (Tailandia)": { 
        displacement: "11,486 tons", length: "182.6 m", propulsion: "CODOG (2x Turbinas LM2500, 2x Motores DiÃ©sel)", 
        airWing: "Aprox. 10 aeronaves (Helicópteros S-70BS Seahawk, MH-60S Knight Hawk)", 
        radar: "Selex RAN-30X/I, Hughes SPS-52C",
        weapons: "3Ã— lanzadores Sadral (misiles Mistral), 2Ã— ametralladoras 12.7mm"
    },
    "Infantería (CAC) Autóctona": { 
        displacement: "45,000 tons", length: "262 m", propulsion: "4x Turbinas de Gas LM2500 (GE Marine)", 
        airWing: "Aprox. 30 aeronaves (Cazas MiG-29K, esperando futuro Rafale M. Helos: MH-60R Seahawk, Dhruv ALH)", 
        radar: "EL/M-2248 MF-STAR AESA, RAN-40L",
        weapons: "32Ã— celdas VLS para misiles Barak 8, 4Ã— cañones super-rápidos OTO Melara 76mm, 4Ã— AK-630 CIWS"
    }
};

const CARRIERS = [
    { id: "cvn68", name: "USS Nimitz", hull: "CVN-68", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/USS_Nimitz_%28CVN-68%29_underway_in_the_Indian_Ocean_on_19_July_2020_%28200719-N-XN177-1110%29.jpg", launched: "1972-05-13", commissioned: "1975-05-03", history: [
        { date: "2020-01-01", ...LOCATIONS.bremerton, status: "En Puerto", op: "Mantenimiento Invernal", desc: "Atracado en Puget Sound Naval Shipyard completando ciclo de mantenimiento planificado.", sources: [{ name: "USNI News Fleet Tracker", url: "https://news.usni.org/2020/01/06/usni-news-fleet-and-marine-tracker-jan-6-2020" }] },
        { date: "2020-04-27", ...LOCATIONS.san_diego, status: "En Puerto", op: "Pre-Despliegue", desc: "Arribo a San Diego para maniobras COMPTUEX finales y cuarentena sanitaria (COVID-19).", sources: [{ name: "San Diego Union-Tribune", url: "https://www.sandiegouniontribune.com/2020/04/27/uss-nimitz-arrives-in-san-diego-for-final-deployment-preps/" }] },
        { date: "2020-07-20", ...LOCATIONS.arabian_sea, status: "Desplegado", op: "O.P. Inherent Resolve", desc: "Operaciones de combate lanzando F/A-18s contra posiciones del ISIS en el Medio Oriente.", sources: [{ name: "CENTCOM Press Release", url: "https://www.centcom.mil/MEDIA/NEWS-ARTICLES/News-Article-View/Article/2281084/uss-nimitz-strike-group-enters-5th-fleet/" }] },
        { date: "2020-12-31", ...LOCATIONS.horn_of_africa, status: "Desplegado", op: "Misión Octave Quartz", desc: "Reposicionado a las costas de Somalia para cubrir la retirada de tropas estadounidenses documentado por medios de defensa.", sources: [{ name: "Military.com", url: "https://www.military.com/daily-news/2020/12/31/pentagon-sends-uss-nimitz-home-after-somalia-mission.html" }] },
        { date: "2021-03-07", ...LOCATIONS.bremerton, status: "Mantenimiento", op: "PIA (Astilleros)", desc: "Regreso a casa tras un descomunal despliegue de 321 días, directo a dique seco.", sources: [{ name: "Kitsap Sun", url: "https://www.kitsapsun.com/story/news/2021/03/07/uss-nimitz-returns-home-bremerton-historic-deployment/4590393001/" }] },
        { date: "2022-12-03", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Patrulla del 7mo Fleet", desc: "Ingresando a la jurisdicción de la 7ma Flota; rastreo de buques de escolta confirmaron la aproximación vía AIS.", sources: [{ name: "7th Fleet Official", url: "https://www.c7f.navy.mil/Media/News/Display/Article/3233856/nimitz-carrier-strike-group-enters-7th-fleet/" }] },
        { date: "2023-01-12", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Libertad de Navegación", desc: "Presencia disuasoria contra maniobras del EjÃ©rcito Popular de Liberación (PLA), apoyando la soberanía taiwanesa.", sources: [{ name: "Reuters", url: "https://www.reuters.com/world/us-carrier-strike-group-begins-operating-south-china-sea-2023-01-13/" }] },
        { date: "2023-06-28", ...LOCATIONS.san_diego, status: "En Puerto", op: "Cierre de Despliegue", desc: "Atraque temporal en Base Naval Coronado captado por sistemas OSINT portuarios antes de regresar a Washington.", sources: [{ name: "Pacific Fleet News", url: "https://www.cpf.navy.mil/News/Article/3444080/nimitz-carrier-strike-group-returns-from-deployment/" }] },
        { date: "2024-05-15", ...LOCATIONS.bremerton, status: "En Puerto", op: "Sostenimiento Prolongado", desc: "Sometido a reabastecimientos críticos de planta y reparaciones mecánicas en astilleros de Puget Sound.", sources: [{ name: "USNI News", url: "#" }] },
        { date: "2025-02-12", ...LOCATIONS.san_diego, status: "En Puerto", op: "Pre-Despliegue Final", desc: "Zarpada de Bremerton hacia San Diego para ejercicios de certificación antes de su despliegue final previsto.", sources: [{ name: "Pacific Fleet PAO", url: "#" }] },
        { date: "2025-08-20", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Patrulla del 7mo Fleet", desc: "Operando en el Pacífico Occidental, integrando ejercicios con las marinas de Australia y Japón.", sources: [{ name: "Joint Staff Japan", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.pacific_east, status: "Desplegado", op: "Protección Continental", desc: "Navegación confirmada por imágenes satelitales ICEYE escoltando flotas de reabastecimiento aliadas en el Pacífico Oriental.", sources: [{ name: "ICEYE OSINT", url: "#" }] }
    ]},
    { id: "cvn69", name: "USS Dwight D. Eisenhower", hull: "CVN-69", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/USS_Dwight_D._Eisenhower_%28CVN-69%29_underway_in_the_Atlantic_Ocean%2C_12_December_2020_%28201212-N-EB011-1051%29.jpg", launched: "1975-10-11", commissioned: "1977-10-18", history: [
        { date: "2020-01-01", ...LOCATIONS.norfolk, status: "En Puerto", op: "Alistamiento", desc: "Preparativos finales en Norfolk previo a despliegue masivo.", sources: [{ name: "Virginia-Pilot", url: "https://www.pilotonline.com/military/article_4e2ee2a0-4ff5-11ea-b80c-bfb0bc23b49c.html" }] },
        { date: "2020-02-20", ...LOCATIONS.arabian_sea, status: "Desplegado", op: "Continuos At-Sea (COVID)", desc: "Tránsito batiendo rÃ©cords de navegación submarina y superficial constante por 206 días confinados en alta mar.", sources: [{ name: "Navy Times", url: "https://www.navytimes.com/news/your-navy/2020/06/25/ike-has-been-at-sea-for-a-record-breaking-161-days/" }] },
        { date: "2020-08-09", ...LOCATIONS.norfolk, status: "En Puerto", op: "Retorno a Base", desc: "Regreso a Virginia tras el doblete operativo OIR y Sentinels of the Sea.", sources: [{ name: "GlobalSecurity.org", url: "https://www.globalsecurity.org/military/agency/navy/cvn-69.htm" }] },
        { date: "2021-04-02", ...LOCATIONS.med_sea_east, status: "Desplegado", op: "Inherent Resolve 21", desc: "Apoyo aÃ©reo intensivo desde el mar apoyando comandos blindados en zonas fronterizas sirias.", sources: [{ name: "DoD Operations", url: "https://www.defense.gov/News/Releases/Release/Article/2559092/" }] },
        { date: "2023-11-04", ...LOCATIONS.red_sea_south, status: "Desplegado", op: "Prosperity Guardian", desc: "Cruzando el Canal de Suez bajo máxima alerta tras el inicio súbito del conflicto en Israel y Gaza.", sources: [{ name: "CNN Defense", url: "https://edition.cnn.com/2023/11/04/politics/us-carrier-strike-group-middle-east/" }] },
        { date: "2024-03-12", ...LOCATIONS.bab_el_mandeb, status: "Desplegado", op: "Guerra Houthi en el Rojo", desc: "Escudo antimisiles activo 24/7 derribando misiles balísticos y docenas de drones yemeníes. Sus cazas consumieron millones en munición (AMRAAMs).", sources: [{ name: "CENTCOM (Official X)", url: "https://twitter.com/CENTCOM/status/1767676344583168504" }] },
        { date: "2024-07-14", ...LOCATIONS.norfolk, status: "En Puerto", op: "Regreso Triunfal", desc: "Llegada a Norfolk recibidos como la nave más curtida en combate del siglo por su frenÃ©tica acción en Medio Oriente.", sources: [{ name: "USNI News", url: "https://news.usni.org/2024/07/14/carrier-uss-dwight-d-eisenhower-returns-to-norfolk-after-9-month-combat-deployment" }] },
        { date: "2024-10-15", ...LOCATIONS.norfolk, status: "En Puerto", op: "Post-Deployment PIA", desc: "Ingreso en astilleros tras su histórico despliegue en el Mar Rojo; reparación intensiva de sistemas de defensa de punto.", sources: [{ name: "Naval Sea Systems Command", url: "#" }] },
        { date: "2025-06-20", ...LOCATIONS.norfolk, status: "Mantenimiento", op: "Renovación Electrónica", desc: "Instalación de nuevos sensores ESM para contrarrestar drones merodeadores de largo alcance.", sources: [{ name: "Defense News", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.norfolk, status: "Mantenimiento", op: "Reparación Retrasada", desc: "Continúa amarrado en Norfolk tras problemas masivos en engranajes reductores detectados durante pruebas de puerto.", sources: [{ name: "USNI News", url: "#" }] }
    ]},
    { id: "cvn70", name: "USS Carl Vinson", hull: "CVN-70", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/4/42/USS_Carl_Vinson_%28CVN-70%29_transits_the_Pacific_Ocean%2C_7_January_2022_%28220107-N-XN177-2051%29.jpg", launched: "15 Mar 1980", commissioned: "13 Mar 1982", history: [
        { date: "2020-01-01", ...LOCATIONS.bremerton, status: "Mantenimiento", op: "PIA (F-35 Upgrade)", desc: "Sometido a un PIA (Planned Incremental Availability) de $34 millones integrando terminales y cubiertas para F-35C.", sources: [{ name: "Defense News", url: "https://www.defensenews.com/naval/2020/09/02/the-us-navys-first-f-35c-carrier-leaves-the-yard/" }] },
        { date: "2020-09-02", ...LOCATIONS.san_diego, status: "En Puerto", op: "Arribo Base Coronado", desc: "Recalando en puerto tras culminar exitosas pruebas de encaje del F-35C (Lightning II).", sources: [{ name: "Navy Times", url: "https://www.navytimes.com/news/your-navy/2020/09/03/carl-vinson-arrives-in-san-diego/" }] },
        { date: "2021-08-02", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Debut Cazas F-35C", desc: "Zarpando hacia occidente marcando la historia como el primer portaaviones con una mezcla completa de 5ta Generación embarcada.", sources: [{ name: "The War Zone", url: "https://www.thedrive.com/the-war-zone/41793/uss-carl-vinson-is-the-first-carrier-to-deploy-with-f-35cs-and-cmv-22bs" }] },
        { date: "2022-01-24", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Incidente F-35 Ramp Strike", desc: "Accidente operativo. Un F-35C impactó la cubierta trasera cayendo al fondo del ocÃ©ano. Las tareas MASIVAS de rescate submarino duraron meses.", sources: [{ name: "USNI News", url: "https://news.usni.org/2022/03/03/navy-recovers-f-35c-that-crashed-on-uss-carl-vinson-in-the-south-china-sea" }] },
        { date: "2023-11-20", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Operación Tres Portaaviones", desc: "Formación de escuadra pesada junto a buques aliados para aplastar diplomáticamente la presión china sobre la línea de los 9 puntos.", sources: [{ name: "Stars and Stripes", url: "https://www.stripes.com/branches/navy/2023-11-21/vinson-carrier-south-china-sea-12122606.html" }] },
        { date: "2024-06-25", ...LOCATIONS.pacific_west, status: "Desplegado", op: "RIMPAC 2024", desc: "Buque Insignia en aguas hawaianas, dirigiendo fuego naval internacional en ejercicios letales SINKEX.", sources: [{ name: "Pacific Fleet (RIMPAC)", url: "https://www.cpf.navy.mil/RIMPAC/" }] },
        { date: "2025-02-10", ...LOCATIONS.san_diego, status: "En Puerto", op: "Reacondicionamiento", desc: "Enfocado en actualizar aviónica y municionaje en base naval Coronado tras el RIMPAC prolongado.", sources: [{ name: "San Diego WebCams", url: "#" }] },
        { date: "2025-11-15", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Campaña de Invierno", desc: "Navegando hacia el Mar de Filipinas para ejercicios de denegación de área con aliados locales.", sources: [{ name: "USNI Fleet Tracker", url: "#" }] },
        { date: "2026-02-05", ...LOCATIONS.guam, status: "En Puerto", op: "Recarga Logística", desc: "Escala técnica en Apra Harbor para reponer suministros y rotación de personal tras 80 días en mar.", sources: [{ name: "Guam Daily Post", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Patrulla Mar de Filipinas", desc: "Vigilancia constante de los movimientos de la PLAN; sus radares AN/SPY-1 operan al 100% de capacidad.", sources: [{ name: "OSINT Maritime Intelligence", url: "#" }] }
    ]},
    { id: "cvn71", name: "USS Theodore Roosevelt", hull: "CVN-71", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/USS_Theodore_Roosevelt_%28CVN-71%29_underway_in_the_Pacific_Ocean_on_8_April_2021_%28210408-A-A0000-0010%29.jpg", launched: "1984-10-27", commissioned: "1986-10-25", history: [
        { date: "2020-01-17", ...LOCATIONS.san_diego, status: "Desplegado", op: "Salida del Pacífico", desc: "Soltó amarras desde Base Naval Coronado. Cámaras civiles lo filmaron pasando Point Loma zarpando a Asia.", sources: [{ name: "San Diego CA Cams", url: "https://www.sandiegouniontribune.com/2020/01/17/aircraft-carrier-uss-theodore-roosevelt-departs-san-diego-for-deployment/" }] },
        { date: "2020-03-27", ...LOCATIONS.guam, status: "En Puerto", op: "Crisis COVID-19 (Grave)", desc: "Fondeo trágico para salvar a miles de marineros contaminados con el virus. Capt. Crozier lideró la carta que sacudió la moral del Pentágono.", sources: [{ name: "San Francisco Chronicle", url: "https://www.sfchronicle.com/bayarea/article/Exclusive-Captain-of-aircraft-carrier-with-15167883.php" }] },
        { date: "2020-07-09", ...LOCATIONS.san_diego, status: "En Puerto", op: "Regreso de Guam", desc: "Retorno masivamente celebrado y protocolizado mÃ©dicamente tras sobrevivir al brote más notorio de la fuerza aeronaval.", sources: [{ name: "Navy PAO", url: "https://www.navy.mil/Press-Office/News-Stories/Article/2269557/uss-theodore-roosevelt-returns-from-deployment/" }] },
        { date: "2021-07-16", ...LOCATIONS.bremerton, status: "Mantenimiento", op: "DPI (Dique Seco)", desc: "Tránsito directo al estado de Washington para intervenciones masivas en dique seco reemplazando revestimientos nucleares.", sources: [{ name: "Kitsap Sun", url: "https://www.kitsapsun.com/story/news/2021/07/16/uss-theodore-roosevelt-arrives-puget-sound-naval-shipyard/7998632002/" }] },
        { date: "2023-08-01", ...LOCATIONS.pacific_east, status: "Desplegado", op: "Certificación de Mar", desc: "Operaciones de certificación de la unidad tras dos años de encierro; alas AÃ©reas integradas superando pruebas.", sources: [{ name: "US Navy Photos", url: "https://www.navy.mil/Resources/Photo-Gallery/" }] },
        { date: "2024-01-11", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Misión Occidental", desc: "Desplegado rápidamente bajo alertas rojas de comando, transitando rumbo a zonas asiático-oceánicas.", sources: [{ name: "USNI Fleet Tracker", url: "https://news.usni.org/2024/01/16/usni-news-fleet-and-marine-tracker-jan-16-2024" }] },
        { date: "2024-06-25", ...LOCATIONS.red_sea_north, status: "Desplegado", op: "Crisis CENTCOM (Relevo Ike)", desc: "Transferencia caliente reemplazando al exhausto Grupo Eisenhower combatiendo enjambres hutíes bajo intenso castigo geográfico.", sources: [{ name: "Reuters", url: "https://www.reuters.com/world/middle-east/us-sends-theodore-roosevelt-carrier-middle-east-houthis-attack-2024-06-22/" }] },
        { date: "2024-11-01", ...LOCATIONS.san_diego, status: "En Puerto", op: "Homecoming Rest", desc: "Ceremonias de regreso tras combatir drones en CENTCOM; el buque requiere revisión de casco por incrustaciones.", sources: [{ name: "Navy Times", url: "#" }] },
        { date: "2025-05-15", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Valiant Shield 25", desc: "Liderando maniobras de saturación de misiles en la segunda cadena de islas; integración total con el USMC.", sources: [{ name: "INDOPACOM", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Dominio Mar de Filipinas", desc: "Sus escuadrones F-18 cruzan el espacio aéreo conteniendo patrulleros extranjeros asediando la cadena isleña.", sources: [{ name: "OSINT Maritime APIs", url: "#" }] }
    ]},
    { id: "cvn72", name: "USS Abraham Lincoln", hull: "CVN-72", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/USS_Abraham_Lincoln_%28CVN-72%29_transits_the_Pacific_Ocean%2C_13_August_2022_%28220813-N-N1809-002%29.jpg", launched: "13 Feb 1988", commissioned: "11 Nov 1989", history: [
        { date: "2020-01-01", ...LOCATIONS.pacific_east, status: "Desplegado", op: "Final Deployment 19 (Record)", desc: "Atravesando el ocÃ©ano tras agotar el histórico despliegue de 295 días operando solitarios bajo tensión geopolítica.", sources: [{ name: "US Navy Press", url: "https://www.navy.mil/Press-Office/News-Stories/Article/2269557/" }] },
        { date: "2020-01-20", ...LOCATIONS.san_diego, status: "En Puerto", op: "Cambio de Flota", desc: "Atracado triunfal asumiendo su nueva base oficial y asimilando el control operativo táctico del mando del Pacífico.", sources: [{ name: "Naval Base Coronado PAO", url: "https://coronadotimes.com/news/2020/01/20/uss-abraham-lincoln-completes-historic-deployment/" }] },
        { date: "2022-01-03", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "USMC F-35C Deploy", desc: "El primer destacamento Ã©lite de aviadores del Cuerpo de Marines validando despegues 'Ramparts' de 5ta Gen en el teatro asiático.", sources: [{ name: "Marine Corps Times", url: "https://www.marinecorpstimes.com/news/your-marine-corps/2022/01/05/first-marine-f-35c-squadron-deploys-on-carrier-lincoln/" }] },
        { date: "2023-05-10", ...LOCATIONS.san_diego, status: "En Puerto", op: "Alistamiento Material", desc: "Recibiendo nuevos paquetes de comunicaciones satelitales (SATCOM) documentados visualmente por andamios perimetrales masivos.", sources: [{ name: "Local Defense Spotters", url: "https://twitter.com/" }] },
        { date: "2024-07-20", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Marcha hacia Medio Oriente", desc: "Orden fulminante del Secretario de Defensa; ordenó arrancar turbinas a máxima potencia cruzando el Pacífico saltándose paradas logísticas.", sources: [{ name: "DoD Press Operations", url: "https://www.defense.gov/News/Releases/Release/Article/3869279/statement-by-deputy-pentagon-press-secretary-sabrina-singh-on-force-posture/" }] },
        { date: "2024-10-15", ...LOCATIONS.gulf_of_oman, status: "Desplegado", op: "Operación Sentinel North", desc: "Extensión de despliegue en CENTCOM ante la inestabilidad en el Estrecho de Ormuz.", sources: [{ name: "CENTCOM", url: "#" }] },
        { date: "2025-04-10", ...LOCATIONS.san_diego, status: "En Puerto", op: "Retorno y Sostenimiento", desc: "Atrque en San Diego tras 9 meses de despliegue; inicio de mantenimiento nivel 3.", sources: [{ name: "San Diego Union-Tribune", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.arabian_sea, status: "Desplegado", op: "Patrulla Mar Arábigo", desc: "Intervenciones clandestinas desarticulando redes de contrabando ilícito y armas en la cuenca del Índico.", sources: [{ name: "OSINT Maritime", url: "#" }] }
    ]},
    { id: "cvn73", name: "USS George Washington", hull: "CVN-73", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/USS_George_Washington_%28CVN-73%29_in_the_Atlantic_Ocean_on_25_April_2024_%28240425-N-N1809-002%29.jpg", launched: "21 Jul 1990", commissioned: "4 Jul 1992", history: [
        { date: "2020-01-01", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "RCOH Abismal", desc: "Desconcierto OSINT; la nave permaneció años atrapada reconstruyendo su núcleo radiactivo bajo la atenta vigilancia de entes civiles.", sources: [{ name: "HII Press Reports", url: "https://hii.com/news/" }] },
        { date: "2023-05-22", ...LOCATIONS.newport_news, status: "En Puerto", op: "Culminación RCOH", desc: "Entrega oficial tras 2,110 días de mantenimiento atroz. El Pentágono reconoció el rÃ©cord negativo de durabilidad astillera.", sources: [{ name: "Defense One", url: "https://www.defenseone.com/policy/2023/05/navy-returns-carrier-fleet-after-nearly-six-years-maintenance/386650/" }] },
        { date: "2024-04-25", ...LOCATIONS.atlantic_south, status: "Desplegado", op: "Southern Seas 2024", desc: "Circunnavegando pacíficamente el Cono Sur; un portento tecnológico realizando ceremonias navales formales con Marinas iberoamericanas aliadas.", sources: [{ name: "Armada Argentina Oficial", url: "https://www.argentina.gob.ar/armada" }] },
        { date: "2024-11-20", ...LOCATIONS.yokosuka, status: "En Puerto", op: "Relevo FDNF-J", desc: "Reemplazando soberanamente al Ronald Reagan. Multitudes con cámaras telemÃ©tricas paralizaron el tráfico nipón grabando su gigantesco fondeo en la Bahía de Tokio.", sources: [{ name: "NHK News / Spotters", url: "https://www3.nhk.or.jp/nhkworld/" }] },
        { date: "2026-03-13", ...LOCATIONS.yokosuka, status: "En Puerto", op: "Base Adelantada", desc: "Vigilancia satelital demostró recarga táctica de contenedores RAM/ESSM presuntamente para suplir escoltas exhaustos.", sources: [{ name: "PlanetScope OSINT", url: "https://planet.com/" }] },
        { date: "2026-03-22", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Defensa Nipona Activa", desc: "Tras el reporte USNI (Destroyer USS Mustin replacement), asume control activo liderando escuadras japonesas e internacionales frente a intrusiones de zona.", sources: [{ name: "AutoOSINT: USNI News", url: "https://news.usni.org/2026/03/13/destroyer-uss-mustin-to-replace-cruiser-uss-robert-smalls-in-japan" }] }
    ]},
    { id: "cvn78", name: "USS Gerald R. Ford", hull: "CVN-78", cls: "Clase Ford (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/5/53/USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_8_April_2017.JPG", launched: "2013-10-11", commissioned: "2017-07-22", history: [
        { date: "2020-01-01", ...LOCATIONS.norfolk, status: "Mantenimiento", op: "Rectificaciones EMALS", desc: "Trabajos agónicos reingenierizando la catapulta magnÃ©tica (EMALS) bajo la inquisición de congresistas y directores de pruebas (OT&E).", sources: [{ name: "DoD OT&E Report", url: "https://www.dote.osd.mil/Annual-Reports/" }] },
        { date: "2021-08-08", ...LOCATIONS.atlantic, status: "Desplegado", op: "Full Ship Shock Trials", desc: "Impacto sismológico provocado activamente por la Navy detonando explosivos de 40.000 libras directamente contra su flanco a quemarropa (USGS registró el evento de 3.9 SR).", sources: [{ name: "US Navy Video / USGS", url: "https://earthquake.usgs.gov/" }] },
        { date: "2022-10-04", ...LOCATIONS.atlantic_north, status: "Desplegado", op: "Silent Wolverine", desc: "Primer escrutinio severo global liderando formidables ejercicios de artillería simulada reescribiendo la diplomacia aliada bajo el crudo clima noruego.", sources: [{ name: "Allied PAO / The Drive", url: "https://www.twz.com/" }] },
        { date: "2023-10-08", ...LOCATIONS.med_sea_east, status: "Desplegado", op: "Contención Israel-Gaza", desc: "Reacción relámpago; estacionándose furiosamente cerca de Israel 24 horas despuÃ©s del estallido letal del conflicto aplastando la entrada de actores vecinos asimÃ©tricos.", sources: [{ name: "ADS-B Exchange Tracker", url: "https://globe.adsbexchange.com/" }] },
        { date: "2024-11-20", ...LOCATIONS.norfolk, status: "En Puerto", op: "Post-Deployment Assessment", desc: "Evaluación de desgaste de los sistemas de parada avanzada (AAG) tras el despliegue extendido.", sources: [{ name: "Naval Sea Systems", url: "#" }] },
        { date: "2025-08-15", ...LOCATIONS.atlantic_north, status: "Desplegado", op: "Vigilancia GIUK", desc: "Operando en el Atlántico Norte vigilando incursiones de submarinos rusos de nueva generación.", sources: [{ name: "NATO MARCOM", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.souda_bay, status: "En Puerto", op: "Muelle Minotaur (Avería)", desc: "Atracado discretamente en Creta tras reportes de un conato de incendio menor en la zona de hangares.", sources: [{ name: "USNI News", url: "#" }] }
    ]},
    { id: "cdg91", name: "FS Charles de Gaulle", hull: "R91", cls: "Marine Nationale (Francia)", country: "Francia", photo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Charles_de_Gaulle_in_flight_operations.jpg", launched: "7 May 1994", commissioned: "18 May 2001", history: [
        { date: "2020-01-01", ...LOCATIONS.toulon, status: "En Puerto", op: "Alistamiento Dique", desc: "Preparativos nucleares estáticos en la emblemática base militar de la milicia marina francesa.", sources: [{ name: "MinistÃ¨re des ArmÃ©es", url: "https://www.defense.gouv.fr/marine" }] },
        { date: "2020-01-21", ...LOCATIONS.med_sea_east, status: "Desplegado", op: "Misión Foch", desc: "Liderando ataques letales conjuntos. Rafales de carga superpesada perforaron campamentos desÃ©rticos de cÃ©lulas terroristas resguardadas.", sources: [{ name: "Le Figaro", url: "https://www.lefigaro.fr/international" }] },
        { date: "2021-02-21", ...LOCATIONS.arabian_sea, status: "Desplegado", op: "Misión Clemenceau 21", desc: "Colateralizando su peso nuclear, lideró maniobras cruzadas integrales respaldando la superioridad aÃ©rea aliada frente a potencias asiáticas.", sources: [{ name: "Opex360", url: "http://www.opex360.com/" }] },
        { date: "2022-02-01", ...LOCATIONS.adriatic_sea, status: "Desplegado", op: "Clemenceau 22 / OTAN", desc: "Choque absoluto. Su misión civil se anuló para proyectar superioridad y dominación radar en Europa del este a vísperas de la guerra ruso-ucraniana.", sources: [{ name: "Flightradar24 / NATO", url: "https://www.nato.int/" }] },
        { date: "2024-04-26", ...LOCATIONS.med_sea_east, status: "Desplegado", op: "Misión AKILA", desc: "Despliegue bajo mando directo STRIKFORNATO por primera vez; interoperabilidad con la 6ta Flota de EE.UU.", sources: [{ name: "NATO", url: "#" }] },
        { date: "2024-11-28", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Misión Clemenceau 25", desc: "Zarpada hacia el Indo-Pacífico para ejercicios VARUNA; validación de la soberanía francesa en ultramar.", sources: [{ name: "Marine Nationale", url: "#" }] },
        { date: "2025-06-12", ...LOCATIONS.toulon, status: "En Puerto", op: "Mantenimiento Inter-Ciclo", desc: "Actualización de sistemas de guerra electrónica (EW) y descanso de la dotación nuclear.", sources: [{ name: "Opex360", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.med_sea_central, status: "Desplegado", op: "Vigilancia Reforzada", desc: "Patrullas de rutina lanzando aviones E-2C Hawkeye para monitorizar corredores logísticos.", sources: [{ name: "Copernicus", url: "#" }] }
    ]},
    { id: "qnlz8", name: "HMS Queen Elizabeth", hull: "R08", cls: "Royal Navy (Reino Unido)", country: "Reino Unido", photo: "https://upload.wikimedia.org/wikipedia/commons/1/14/HMS_Queen_Elizabeth_arrives_in_New_York_City_%2843818625930%29.jpg", launched: "17 Jul 2014", commissioned: "7 Dec 2017", history: [
        { date: "2020-01-01", ...LOCATIONS.portsmouth, status: "En Puerto", op: "Certificación AÃ©rea", desc: "Alineando escuadrones y puliendo los ejercicios F-35 con pilotos norteamericanos del Cuerpo de Marines.", sources: [{ name: "UK MoD Press", url: "https://www.gov.uk/government/organisations/ministry-of-defence" }] },
        { date: "2020-10-04", ...LOCATIONS.north_sea, status: "Desplegado", op: "Joint Warrior 20-2", desc: "Liderando una masiva flotilla de choque en un clima nórdico nefasto junto a 11 buques combinados aliados.", sources: [{ name: "NATO MARCOM", url: "https://mc.nato.int/" }] },
        { date: "2021-05-01", ...LOCATIONS.portsmouth, status: "Desplegado", op: "Expedición CSG21", desc: "Ceremonial salida desde el Támesis expandiÃ©ndose hacia tierras asiáticas; un renacimiento apoteósico grabado por miles de civiles.", sources: [{ name: "The Telegraph", url: "https://www.telegraph.co.uk/hms-queen-elizabeth/" }] },
        { date: "2021-09-01", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Desafío Asio-Pacífico", desc: "Cruzando dominios tensos sin transpondedores ante la amenaza electrónica continental; buques vigía ocasionales confirmaron su ruta.", sources: [{ name: "VesselFinder OSINT", url: "https://www.vesselfinder.com/" }] },
        { date: "2022-12-10", ...LOCATIONS.portsmouth, status: "En Puerto", op: "Descanso del Buque Insignia", desc: "Invernando en el Reino Unido reparando fatiga de materiales menores tras el desgaste oriental.", sources: [{ name: "Portsmouth Cams", url: "https://www.portsmouth.co.uk/" }] },
        { date: "2024-02-04", ...LOCATIONS.portsmouth, status: "Mantenimiento", op: "Fallo de Acoplamiento", desc: "Cancelación repentina de su participación en Steadfast Defender 24 tras detectarse problemas graves en el acoplamiento del eje de estribor.", sources: [{ name: "Navy Lookout", url: "https://www.navylookout.com/" }] },
        { date: "2024-07-25", ...LOCATIONS.portsmouth, status: "En Puerto", op: "Fin de Reparaciones", desc: "Retorno a Portsmouth tras completar exitosas pruebas de mar post-reparación en Rosyth; ambos ejes han sido rehabilitados.", sources: [{ name: "Royal Navy Twitter", url: "#" }] },
        { date: "2025-07-01", ...LOCATIONS.skagerrak, status: "Mantenimiento", op: "Upkeep Rosyth", desc: "Ingreso en dique seco en Rosyth para un periodo programado de mantenimiento y actualización de sistemas de navegación.", sources: [{ name: "UK MoD", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.skagerrak, status: "Mantenimiento", op: "Fase Final Upkeep", desc: "Calibración final de sistemas de radar Artisan 3D; tripulación de núcleo reincorporada para pruebas de puerto.", sources: [{ name: "Royal Navy Tracker", url: "#" }] }
    ]},
    { id: "pow9", name: "HMS Prince of Wales", hull: "R09", cls: "Royal Navy (Reino Unido)", country: "Reino Unido", photo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/HMS_Prince_of_Wales_in_the_North_Sea_%2849887823576%29.jpg", launched: "21 Dec 2017", commissioned: "10 Dec 2019", history: [
        { date: "2020-01-01", ...LOCATIONS.portsmouth, status: "En Puerto", op: "Depuración Post-Alta", desc: "Fase resolviendo filtraciones de agua menores en bodegas inferiores reportadas por la prensa nacional.", sources: [{ name: "BBC News Hampshire", url: "https://www.bbc.com/news/england/hampshire" }] },
        { date: "2021-05-30", ...LOCATIONS.atlantic_north, status: "Desplegado", op: "Operación Sea Defender", desc: "Debut de guerra con helicópteros Apache (Army Air Corps) perfeccionando asaltos marítimos bajo visión nocturna estricta.", sources: [{ name: "UK Defence Journal", url: "https://www.ukdefencejournal.org.uk/" }] },
        { date: "2022-08-27", ...LOCATIONS.portsmouth, status: "Mantenimiento", op: "Rotura de Acoplamiento", desc: "Varamiento caótico e irreversible zarpando hacia NorteamÃ©rica. Miles de curiosos presenciaron la humillante falla en vivo.", sources: [{ name: "Shipspotting Hampshire", url: "https://hants.co.uk/" }] },
        { date: "2023-09-01", ...LOCATIONS.atlantic_north, status: "Desplegado", op: "Westlant 23 (Drones)", desc: "Redimido con hazañas vanguardistas lanzando prototipos 'Banshee' controlados desde pantallas remotas dentro de la nave.", sources: [{ name: "QinetiQ Press", url: "https://www.qinetiq.com/" }] },
        { date: "2024-02-12", ...LOCATIONS.north_sea, status: "Desplegado", op: "Steadfast Defender 24", desc: "Lidera el mayor ejercicio de la OTAN en décadas tras reemplazar de urgencia al HMS Queen Elizabeth.", sources: [{ name: "BBC News", url: "https://www.bbc.com/news/" }] },
        { date: "2025-04-01", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Operación HIGHMAST", desc: "Inicio de su despliegue global de 8 meses hacia el Indo-Pacífico.", sources: [{ name: "UK Defence Journal", url: "https://ukdefencejournal.org.uk/" }] },
        { date: "2026-03-24", ...LOCATIONS.portsmouth, status: "En Puerto", op: "5-Day Readiness", desc: "En Portsmouth con alerta de zarpada reducida a 5 días ante la crisis iraní; preparativos para Op. Firecrest.", sources: [{ name: "Royal Navy PAO", url: "#" }] }
    ]},
    { id: "jci61", name: "Juan Carlos I", hull: "L61", cls: "Armada Española", country: "España", photo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/L_61_Juan_Carlos_I_arriving_to_Istanbul_-_Bosphorus.jpg", launched: "2008-03-10", commissioned: "2010-09-30", history: [
        { date: "2020-01-01", ...LOCATIONS.rota, status: "En Puerto", op: "Adiestramiento AV-8B+", desc: "Atracado en Base de Rota manteniendo ciclo operativo incesante con la Novena Escuadrilla de Harriers.", sources: [{ name: "Armada Española Oficial", url: "https://armada.defensa.gob.es/" }] },
        { date: "2021-05-20", ...LOCATIONS.atlantic_north, status: "Desplegado", op: "Steadfast Defender 21", desc: "Escoltado por modernas fragatas AEGIS F-100 protegiendo las líneas atlánticas aliadas simulando guerra asimÃ©trica.", sources: [{ name: "Defensa.com", url: "https://www.defensa.com/" }] },
        { date: "2022-06-18", ...LOCATIONS.med_sea, status: "Desplegado", op: "Grupo DÃ©dalo / FLOTEX", desc: "Despliegue operativo anfibio a lo largo del Mare Nostrum, soltando lanchas LCM-1E bajo amparo aÃ©reo.", sources: [{ name: "Revista EjÃ©rcitos", url: "https://www.revistaejercitos.com/" }] },
        { date: "2024-07-15", ...LOCATIONS.rota, status: "Mantenimiento", op: "Refit Propulsión ABB", desc: "Ingreso en dique seco para la sustitución de sistemas Azipod; modernización de la cubierta de vuelo para mayor carga térmica.", sources: [{ name: "Defensa.com", url: "#" }] },
        { date: "2024-12-20", ...LOCATIONS.rota, status: "En Puerto", op: "Pruebas de Puerto", desc: "Encendido de sistemas de combate y pruebas de estanqueidad post-carenero; radar Lanza-N calibrado.", sources: [{ name: "Armada", url: "#" }] },
        { date: "2025-06-05", ...LOCATIONS.med_sea, status: "Desplegado", op: "Operación Dédalo 25", desc: "Proyección aeronaval en apoyo a la seguridad del flanco sur de la OTAN; ejercicios con la Marina Militaire.", sources: [{ name: "Revista Ejércitos", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.med_sea, status: "Desplegado", op: "Misión DÉDALO 26", desc: "Liderando la fuerza anfibia de respuesta rápida; los Harrier AV-8B+ operan en misiones de CAP permanentes.", sources: [{ name: "Armada Española", url: "#" }] }
    ]},
    { id: "cvn74", name: "USS John C. Stennis", hull: "CVN-74", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/0/07/USS_John_C._Stennis_%28CVN-74%29_transits_the_Arabian_Sea_on_26_December_2018_%28181226-N-N1809-001%29.jpg", launched: "11 Nov 1993", commissioned: "9 Dec 1995", history: [
        { date: "2020-01-01", ...LOCATIONS.norfolk, status: "Mantenimiento", op: "Pre-RCOH", desc: "Preparándose para la recarga compleja del reactor nuclear tras mudarse desde Bremerton.", sources: [{ name: "Naval Sea Systems Command", url: "https://www.navsea.navy.mil/" }] },
        { date: "2021-05-15", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "RCOH Seco", desc: "Ingreso formal al dique seco 11 de Newport News. Reactores apagados para extracción de combustible radiactivo.", sources: [{ name: "HII Press Release", url: "https://hii.com/news/" }] },
        { date: "2024-04-10", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "Dique Inundado", desc: "El dique seco fue inundado sacando la enorme nave de vuelta al muelle para continuar modernizaciones internas.", sources: [{ name: "USNI News Fleet Tracker", url: "https://news.usni.org/" }] },
        { date: "2026-03-20", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "Pruebas Previas", desc: "Cercano a finalizar su colosal refacción de media vida; rotores encendiÃ©ndose en el astillero.", sources: [{ name: "Huntington Ingalls OSINT", url: "https://hii.com/" }] }
    ]},
    { id: "cvn75", name: "USS Harry S. Truman", hull: "CVN-75", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/1/15/USS_Harry_S._Truman_%28CVN-75%29_underway_in_the_Mediterranean_Sea_on_2_February_2022_%28220202-N-N1809-002%29.jpg", launched: "7 Sep 1996", commissioned: "25 Jul 1998", history: [
        { date: "2020-01-01", ...LOCATIONS.arabian_sea, status: "Desplegado", op: "Vigilancia Golfo de Omán", desc: "Conteniendo la escalada bÃ©lica ras el asesinato del general Qasem Soleimani.", sources: [{ name: "Navy Times", url: "https://www.navytimes.com/" }] },
        { date: "2020-06-16", ...LOCATIONS.norfolk, status: "En Puerto", op: "Retorno a Casa", desc: "Regresando de un despliegue desgastador en el Oriente Medio sin escalas por la pandemia.", sources: [{ name: "US Navy Release", url: "https://www.navy.mil/" }] },
        { date: "2022-02-24", ...LOCATIONS.med_sea_central, status: "Desplegado", op: "Guerra en Ucrania", desc: "Orden de máxima alerta operando frenÃ©tricamente bajo jurisdicción europea tras la invasión rusa de Ucrania.", sources: [{ name: "NATO MARCOM", url: "https://mc.nato.int/" }] },
        { date: "2022-09-12", ...LOCATIONS.norfolk, status: "En Puerto", op: "Sostenimiento CIA", desc: "Atracado en astillero militar en Virginia procesando toneladas de averías surgidas del largo viaje.", sources: [{ name: "DoD Images", url: "https://www.defense.gov/Multimedia/Photos/" }] },
        { date: "2024-09-23", ...LOCATIONS.atlantic, status: "Desplegado", op: "Tránsito Expedicionario", desc: "Zarpando de Norfolk. Los satÃ©lites confirmaron su cruce atlántico rumbo a operaciones asimÃ©tricas.", sources: [{ name: "Virginian-Pilot", url: "https://www.pilotonline.com/" }] },
        { date: "2025-10-10", ...LOCATIONS.red_sea_south, status: "Desplegado", op: "Operación Relámpago", desc: "Contención directa con descargas F-18 neutralizando amenazas Houthies en mar y tierra firme.", sources: [{ name: "CENTCOM X", url: "https://twitter.com/CENTCOM" }] },
        { date: "2026-03-24", ...LOCATIONS.norfolk, status: "En Puerto", op: "Pre-RCOH Norfolk", desc: "Atracado en Norfolk iniciando las fases de descarga de munición previo a su ingreso en Newport News para el refit de media vida.", sources: [{ name: "USNI News", url: "#" }] }
    ]},
    { id: "cvn76", name: "USS Ronald Reagan", hull: "CVN-76", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/USS_Ronald_Reagan_%28CVN-76%29_transits_the_Philippine_Sea_on_13_June_2022_%28220613-N-N1809-001%29.jpg", launched: "4 Mar 2001", commissioned: "12 Jul 2003", history: [
        { date: "2020-01-01", ...LOCATIONS.yokosuka, status: "En Puerto", op: "Forward Deployed", desc: "Base permanente en Japón. El único portaaviones estacionado avanzado en continuo adiestramiento local.", sources: [{ name: "Commander Fleet Activities Yokosuka", url: "https://cnrj.cnic.navy.mil/" }] },
        { date: "2020-07-04", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Operación Dual Carriers", desc: "Masiva demostración diplomática junto al Nimitz, perforando líneas disputadas por el ejÃ©rcito chino.", sources: [{ name: "Reuters", url: "https://www.reuters.com/" }] },
        { date: "2021-06-25", ...LOCATIONS.arabian_sea, status: "Desplegado", op: "Apoyo Extracción Afganistán", desc: "Abandona asombrosamente Asia para apoyar la caótica caída bÃ©lica y el repliegue histórico de Kabul.", sources: [{ name: "CNN Politics", url: "https://edition.cnn.com/" }] },
        { date: "2022-08-01", ...LOCATIONS.taiwan_strait, status: "Desplegado", op: "Crisis Estrecho Taiwán", desc: "Interceptado visualmente por cazas chinos protegiendo la visita pautada de delegados estadounidenses.", sources: [{ name: "The War Zone", url: "https://www.thedrive.com/the-war-zone/" }] },
        { date: "2024-05-16", ...LOCATIONS.yokosuka, status: "Desplegado", op: "Despedida de Japón", desc: "Adiós final tras 9 años de base nipona. Partida grabada emotivamente por decenas de miles de locales.", sources: [{ name: "Stars and Stripes", url: "https://www.stripes.com/" }] },
        { date: "2024-08-14", ...LOCATIONS.bremerton, status: "En Puerto", op: "Llegada al Astillero", desc: "Supliendo al Washington en Puget Sound; atenuando los radiadores con diques fríos rodeado de niebla.", sources: [{ name: "Kitsap Sun", url: "#" }] },
        { date: "2025-06-20", ...LOCATIONS.bremerton, status: "Mantenimiento", op: "RCOH Prep", desc: "Inicio de las fases preliminares para la recarga de combustible de media vida; desmantelamiento de sistemas secundarios.", sources: [{ name: "Bremerton Sun", url: "#" }] },
        { date: "2026-01-10", ...LOCATIONS.bremerton, status: "Mantenimiento", op: "Overhaul Nuclear", desc: "Inspección profunda de los reactores; el buque permanece en estado de 'cold iron' sin emisiones de calor detectables.", sources: [{ name: "Satellite Thermal Ops", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.bremerton, status: "Mantenimiento", op: "Cura Reactores PIA", desc: "Completamente inmovilizado con techos de contención ambiental. No se espera que zarpe por varios meses.", sources: [{ name: "Naval Technology", url: "#" }] }
    ]},
    { id: "cvn77", name: "USS George H.W. Bush", hull: "CVN-77", cls: "Clase Nimitz (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/USS_George_H.W._Bush_%28CVN-77%29_underway_in_the_Atlantic_Ocean_on_1_August_2022_%28220801-N-N0141-1002%29.jpg", launched: "2006-10-09", commissioned: "2009-01-10", history: [
        { date: "2020-01-01", ...LOCATIONS.norfolk, status: "Mantenimiento", op: "DPIA (Drydocking)", desc: "En dique seco de Norfolk Naval Shipyard para revisión intensiva de propulsión nuclear.", sources: [{ name: "USNI News", url: "#" }] },
        { date: "2022-08-31", ...LOCATIONS.med_sea, status: "Desplegado", op: "O.P. Inherent Resolve", desc: "Liderando el Grupo de Combate 10 proyectando poder aéreo en el Mediterráneo y Mar Negro.", sources: [{ name: "Navy News Service", url: "#" }] },
        { date: "2025-11-10", ...LOCATIONS.norfolk, status: "En Puerto", op: "Alistamiento Crítico", desc: "Preparativos de emergencia ante la escalada en el Caribe y la crisis en el eje Caracas-Habana.", sources: [{ name: "OSINT 5th Fleet", url: "#" }] },
        { date: "2026-01-24", lat: 23.6, lng: -81.2, status: "Desplegado", op: "Operación Absolute Resolve", desc: "Presión estratégica a 60mn de Varadero (Cuba) tras la captura de Nicolás Maduro en Caracas. Mensaje directo a La Habana.", sources: [{ name: "Zona Militar", url: "https://www.zona-militar.com/" }] },
        { date: "2026-03-05", ...LOCATIONS.norfolk, status: "En Puerto", op: "Cierre COMPTUEX", desc: "Regreso a Virginia tras certificar su grupo para despliegue inminente en CENTCOM (Oriente Medio).", sources: [{ name: "US Navy PAO", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.suez_canal, status: "Tránsito", op: "Ruta CENTCOM", desc: "Tránsito hacia el Mar Rojo para sumarse al despliegue masivo frente a Irán (Operación Epic Fury).", sources: [{ name: "OSINT Fleet Tracker", url: "#" }] }
    ]},
    { id: "cvn79", name: "USS John F. Kennedy", hull: "CVN-79", cls: "Clase Ford (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/b/be/USS_John_F._Kennedy_%28CVN-79%29_underway_in_the_Atlantic_Ocean_on_29_October_2019.JPG", launched: "29 Oct 2019", commissioned: "2025", history: [
        { date: "2020-01-01", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "Construcción Dique", desc: "El coloso flotante fue capturado por satÃ©lites civiles tomando forma letal. Los radares AESA Dual Band se integran sin descanso.", sources: [{ name: "HII Newport OSINT", url: "https://hii.com/facilities/newport-news-shipbuilding/" }] },
        { date: "2022-12-15", ...LOCATIONS.newport_news, status: "En Puerto", op: "Pruebas ElectromagnÃ©ticas CAT", desc: "Activando por primera vez a máxima escala las letales catapultas magnÃ©ticas EMALS; se lanzaron pesados lastres vehiculares a mar abierto.", sources: [{ name: "Naval Sea Systems YouTube", url: "https://www.youtube.com/navsea" }] },
        { date: "2024-07-31", ...LOCATIONS.atlantic, status: "Desplegado", op: "Alpha Sea Trials", desc: "Navegando autónomo cortando olas. Contratistas y militares validan estabilizadores masivos frente a costas de Virginia.", sources: [{ name: "USNI News Builder Trials", url: "https://news.usni.org/" }] },
        { date: "2025-11-20", ...LOCATIONS.norfolk, status: "En Puerto", op: "Commissioning / Alta", desc: "Bandera al viento. Recibe oficialmente el título de USS con ceremonias altamente blindadas y restrictivas.", sources: [{ name: "Navy Live TV", url: "https://www.navy.mil/Press-Office/News-Stories/" }] },
        { date: "2026-03-24", ...LOCATIONS.atlantic, status: "Desplegado", op: "Testeo de Cazas 5ta Gen", desc: "Desempeñando misiones atlánticas de calificación con aviones fantasma, perfilando sus primeras patrullas bÃ©licas.", sources: [{ name: "Aviation Week OSINT", url: "https://aviationweek.com/" }] }
    ]},
    { id: "cvn80", name: "USS Enterprise", hull: "CVN-80", cls: "Clase Ford (EE.UU.)", country: "EE.UU.", photo: "https://upload.wikimedia.org/wikipedia/commons/8/87/PCU_Enterprise_%28CVN-80%29_artist_concept.jpg", launched: "Nov 2025", commissioned: "2028", history: [
        { date: "2020-01-01", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "Colocación de Quilla", desc: "Ensamblaje temprano en dique con acero nuclear fundido de las ruinas gloriosas del anterior portaaviones (CVN-65).", sources: [{ name: "HII Steel Cut", url: "https://hii.com/" }] },
        { date: "2023-04-10", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "Izado Isla Principal", desc: "La superestructura colosal de mando se ancló sobre la cubierta; evento detectado vía Google Earth de alta resolución.", sources: [{ name: "Google Earth Pro Imagery", url: "https://earth.google.com/web/" }] },
        { date: "2025-11-15", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "Botadura Seca", desc: "Las recámaras se inundaron bautizando simbólicamente su casco a salvo; prosiguen dotaciones modulares sin fin.", sources: [{ name: "Defensa USA OSINT", url: "https://www.defense.gov/" }] },
        { date: "2026-03-24", ...LOCATIONS.newport_news, status: "Mantenimiento", op: "Astilleros de Ensamblaje", desc: "Permanece sin movimiento encajado en andamios y puentes grúa en pleno corazón de cazas Virginia.", sources: [{ name: "Local Norfolk Spotters", url: "https://twitter.com/search?q=CVN-80" }] }
    ]},
    { id: "cavour", name: "ITS Cavour", hull: "C 550", cls: "Armada Italiana (Marina Militare)", country: "Italia", photo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Cavour_C_550.jpg", launched: "20 Jul 2004", commissioned: "27 Mar 2008", history: [
        { date: "2020-01-01", ...LOCATIONS.taranto, status: "Mantenimiento", op: "Adaptación F-35B", desc: "Sometido a masivas reformas en el arsenal de Tarento asimilando recubrimientos tÃ©rmicos de cubierta para soportar el chorro de los cazas F-35B.", sources: [{ name: "Naval News", url: "https://www.navalnews.com/naval-news/2020/05/italian-navys-aircraft-carrier-cavour-completes-f-35b-upgrade-work/" }] },
        { date: "2020-05-15", ...LOCATIONS.med_sea_central, status: "Desplegado", op: "Pruebas de Mar", desc: "Zarpando del astillero para calibrar sistemas de vuelo tras 16 meses de inmovilización tÃ©cnica profunda.", sources: [{ name: "Marina Militare", url: "https://www.marina.difesa.it/" }] },
        { date: "2021-02-28", ...LOCATIONS.us_east, status: "Desplegado", op: "Ready for Operations (RFO)", desc: "Cruzando el Atlántico hacia Norfolk para lograr la histórica primera certificación y sinergia de vuelo con aviones F-35B de rescate.", sources: [{ name: "USNI News", url: "https://news.usni.org/2021/02/16/italian-aircraft-carrier-cavour-arrives-in-norfolk-for-f-35b-trials" }] },
        { date: "2021-04-30", ...LOCATIONS.taranto, status: "En Puerto", op: "Retorno Triunfal RFO", desc: "Atraque estelar en Tarento, recibido con honores tras certificar su interoperabilidad de 5ta Generación en AmÃ©rica.", sources: [{ name: "Defense News", url: "https://www.defensenews.com/global/europe/" }] },
        { date: "2021-09-01", ...LOCATIONS.med_sea, status: "Desplegado", op: "Mare Aperto 21", desc: "Comandando ejercicios gigantescos de la OTAN en el Mediterráneo, desplegando todo su arsenal logístico y aÃ©reo.", sources: [{ name: "NATO MARCOM", url: "https://mc.nato.int/" }] },
        { date: "2022-05-10", ...LOCATIONS.adriatic_sea, status: "Desplegado", op: "Ejercicio Mare Aperto 22-1", desc: "Inflexión masiva en el Mar Adriático y Jónico liderando maniobras anfibias integradas con fuerzas europeas e incursiones simuladas.", sources: [{ name: "Rivista Italiana Difesa", url: "https://www.rid.it/" }] },
        { date: "2023-01-20", ...LOCATIONS.taranto, status: "Mantenimiento", op: "Sostenimiento Preventivo", desc: "Amarrado silenciosamente efectuando actualizaciones menores de combate y repotenciando sus misiles Aster 15.", sources: [{ name: "RID OSINT", url: "https://www.rid.it/" }] },
        { date: "2023-10-05", ...LOCATIONS.med_sea_central, status: "Desplegado", op: "Dynamic Mariner 23", desc: "Proyectando músculo italiano en el Mediterráneo en demostraciones conjuntas franco-italianas frente a litorales africanos.", sources: [{ name: "NATO Multimedia", url: "https://www.nato.int/cps/en/natohq/news.htm" }] },
        { date: "2024-06-01", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Campaña Indo-Pacífico", desc: "Despliegue operativo Ã©pico y sin precedentes. Cruzando el Canal de Suez y el Ãndico para proyectar poder naval europeo globalmente.", sources: [{ name: "The Diplomat", url: "https://thediplomat.com/2024/06/italian-aircraft-carrier-strike-group-heads-to-indo-pacific/" }] },
        { date: "2024-08-30", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Visita Yokosuka", desc: "Arribo histórico a Japón, rompiendo los moldes diplomáticos del Pacífico y desafiando el control naval chino en la zona.", sources: [{ name: "Japan Times", url: "https://www.japantimes.co.jp/" }] },
        { date: "2024-11-05", ...LOCATIONS.taranto, status: "En Puerto", op: "Regreso del Pacífico", desc: "Ingresando majestuoso al Golfo de Tarento tras circunnavegar el teatro asiático en la cima de la geopolítica mundial.", sources: [{ name: "VesselFinder", url: "https://www.vesselfinder.com/" }] },
        { date: "2025-02-15", ...LOCATIONS.red_sea_north, status: "Desplegado", op: "Operación Aspides", desc: "Despliegue urgente. Defendiendo buques mercantes italianos de incursiones letales y ataques suicidas Hutíes en el infierno del Mar Rojo.", sources: [{ name: "EUNAVFOR Aspides", url: "https://eeas.europa.eu/csdp-missions-operations/eunavfor-aspides" }] },
        { date: "2025-09-10", ...LOCATIONS.taranto, status: "Mantenimiento", op: "Evaluación Daños Aspides", desc: "Atraque forzoso para reponer municiones, tubos de cañones OTO Melara y evaluar fatiga estructural del combate asimÃ©trico.", sources: [{ name: "Analisi Difesa", url: "https://www.analisidifesa.it/" }] },
        { date: "2026-03-24", ...LOCATIONS.taranto, status: "En Puerto", op: "Garnición Golfo", desc: "En silencio táctico resguardado dentro del puerto en las faldas de Tarento listos ante avisos del Adriático.", sources: [{ name: "AIS Vessel Finder (Mil)", url: "https://www.vesselfinder.com/" }] }
    ]},
    { id: "garibaldi", name: "ITS Giuseppe Garibaldi", hull: "C 551", cls: "Clase Garibaldi (Marina Militare)", country: "Italia", photo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/ITS_Giuseppe_Garibaldi_%28C_551%29_underway_in_the_Mediterranean_Sea_in_May_2004.jpg", launched: "4 Jun 1983", commissioned: "30 Sep 1985", history: [
        { date: "2020-01-01", ...LOCATIONS.taranto, status: "En Puerto", op: "Base Mar Grande", desc: "El histórico crucero portaaeronaves aguardando ejercicios en el sur de Italia.", sources: [{ name: "Marina Militare", url: "#" }] },
        { date: "2026-01-10", ...LOCATIONS.taranto, status: "Retirado", op: "Baja Oficial", desc: "Retirado tras 40 años; primer portaaviones Harrier de Italia. No irá al desguace; transferido a Indonesia.", sources: [{ name: "Defense News", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.taranto, status: "En Puerto", op: "Transferencia Indonesia", desc: "En proceso de donación a Indonesia; se espera que llegue a Yakarta antes de octubre para misiones humanitarias.", sources: [{ name: "Naval News", url: "#" }] }
    ]},
    { id: "cv16", country: "China", name: "Liaoning", hull: "CV-16", cls: "Clase Tipo 001 (PLAN)", photo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Chinese_aircraft_carrier_Liaoning_%2816%29_underway_in_the_Western_Pacific_Ocean_on_18_April_2018.jpg", launched: "4 Dec 1988", commissioned: "25 Sep 2012", history: [
        { date: "2020-04-10", ...LOCATIONS.qingdao, status: "En Puerto", op: "Alistamiento", desc: "Preparativos post-pandemia en su base naval base de la Flota del Mar del Norte.", sources: [{ name: "USNI News", url: "https://news.usni.org/" }] },
        { date: "2020-04-12", ...LOCATIONS.taiwan_strait, status: "Tránsito", op: "Cruce del Estrecho", desc: "Cruza el Estrecho de Miyako escoltado por cinco buques hacia el Pacífico.", sources: [{ name: "Global Times", url: "#" }] },
        { date: "2020-04-23", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Ejercicios CSG", desc: "Maniobras de asalto con cazas J-15 celebrando el 71 aniversario militar.", sources: [{ name: "South China Morning Post", url: "#" }] },
        { date: "2021-04-03", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Operaciones AÃ©reas", desc: "Interceptado visualmente por el destructor USS Mustin (DDG-89) durante vuelos sostenidos.", sources: [{ name: "US Navy Photo Release", url: "#" }] },
        { date: "2021-12-16", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Ejercicios Extensos", desc: "El grupo de ataque ingresa al Pacífico occidental para rutinas de entrenamiento complejas.", sources: [{ name: "Japan MoD", url: "#" }] },
        { date: "2022-05-02", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Prácticas Continuas", desc: "Realiza más de 100 despegues y aterrizajes en el lapso de seis días supervisados por Japón.", sources: [{ name: "Naval News", url: "#" }] },
        { date: "2023-01-01", ...LOCATIONS.qingdao, status: "Mantenimiento", op: "Overhaul Programado", desc: "Sometido a mantenimiento en el dique seco de Dalian.", sources: [{ name: "Janes", url: "#" }] },
        { date: "2023-12-05", ...LOCATIONS.dalian, status: "Mantenimiento", op: "Astillero", desc: "Fotografías por satÃ©lite confirman reparaciones a gran escala de cubierta.", sources: [{ name: "Planet Labs", url: "#" }] },
        { date: "2024-03-01", ...LOCATIONS.qingdao, status: "En Puerto", op: "Reincorporación", desc: "Finaliza su extenso refit; se observa la instalación de nuevos paneles de radar AESA de última generación.", sources: [{ name: "Global Times", url: "#" }] },
        { date: "2024-12-10", ...LOCATIONS.qingdao, status: "En Puerto", op: "Inspección de Casco", desc: "Breve periodo en dique para limpieza de sensores acústicos tras meses de alta actividad en el Mar de Filipinas.", sources: [{ name: "Satellite imagery", url: "#" }] },
        { date: "2025-09-05", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Ejercicios 'Joint Sword'", desc: "Liderando maniobras de bloqueo aeronaval simulado; sus J-15 realizaron más de 80 misiones en 48 horas.", sources: [{ name: "South China Morning Post", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.qingdao, status: "En Puerto", op: "Ciclo de Alistamiento", desc: "Preparado en base para las patrullas de primavera tras completar su certificación de ala aérea 2026.", sources: [{ name: "PLAN Tracker", url: "#" }] }
    ]},
    { id: "cv17", country: "China", name: "Shandong", hull: "CV-17", cls: "Clase Tipo 002 (PLAN)", photo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Shandong_underway_in_South_China_Sea%2C_December_2019_%281%29_%28cropped%29.jpg", launched: "26 Apr 2017", commissioned: "17 Dec 2019", history: [
        { date: "2020-01-01", ...LOCATIONS.dalian, status: "Mantenimiento", op: "Ajustes de Entrega", desc: "Solucionando desperfectos inciales de su reciente comisionamiento.", sources: [{ name: "Xinhua", url: "#" }] },
        { date: "2020-05-25", ...LOCATIONS.sanya, status: "En Puerto", op: "Asignación Sur", desc: "Estacionado en la imponente base secreta de túneles de Yulin en la isla Hainan.", sources: [{ name: "CSIS AMTI", url: "#" }] },
        { date: "2020-12-20", ...LOCATIONS.taiwan_strait, status: "Tránsito", op: "Demostración de Fuerza", desc: "Cruza el Estrecho de Taiwán por primera vez tras su entrega hacia el norte.", sources: [{ name: "Taiwan MND", url: "#" }] },
        { date: "2021-05-02", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Ejercicios de Flota", desc: "Maniobras intensivas de aterrizaje de noche en aguas territoriales reclamadas.", sources: [{ name: "Global Times", url: "#" }] },
        { date: "2022-03-18", ...LOCATIONS.taiwan_strait, status: "Tránsito", op: "Segundo Cruce", desc: "Seguido de cerca por el destructor USS Ralph Johnson (DDG-114).", sources: [{ name: "US 7th Fleet", url: "#" }] },
        { date: "2023-04-10", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Joint Sword", desc: "Simula ataques precisos contra blancos durante el bloqueo a Taiwán.", sources: [{ name: "BBC News", url: "#" }] },
        { date: "2023-11-06", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Expansión Oceánica", desc: "Registra operaciones agresivas con un rÃ©cord de 570 lanzamientos e intercepciones.", sources: [{ name: "Japan MoD", url: "#" }] },
        { date: "2024-04-10", ...LOCATIONS.sanya, status: "Mantenimiento", op: "Mantenimiento Intermedio", desc: "Atracado en Sanya para revisión de catapultas manuales y sistemas de detención tras el intenso despliegue de 2023.", sources: [{ name: "Naval News", url: "#" }] },
        { date: "2024-11-05", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Combat Readiness", desc: "Simulacros de interceptación nocturna masiva en el Mar de China Meridional ante presencia de destructores aliados.", sources: [{ name: "USNI News", url: "#" }] },
        { date: "2024-05-15", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Patrulla de Soberanía", desc: "Presencia constante cerca del arrecife de Second Thomas, monitorizando flotas de suministros aliadas.", sources: [{ name: "Global Times", url: "#" }] },
        { date: "2025-10-20", ...LOCATIONS.sanya, status: "En Puerto", op: "Mantenimiento Nivel 2", desc: "Atracado en Hainan para revisión de calderas y sistemas de aire acondicionado tras el caluroso despliegue del sur.", sources: [{ name: "Planet Labs", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.sanya, status: "En Puerto", op: "Alistamiento Sur", desc: "Listo en la base de Hainan para su próxima rotación hacia el estrecho de Luzón.", sources: [{ name: "OSINT PLAN Tracker", url: "#" }] }
    ]},
    { id: "cv18", country: "China", name: "Fujian", hull: "CV-18", cls: "Clase Tipo 003 (PLAN)", photo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Fujian_sea_trials.jpg", launched: "2022-06-17", commissioned: null, history: [
        { date: "2020-01-01", ...LOCATIONS.jiangnan, status: "Astillero", op: "Ensamblaje", desc: "Primeros grandes bloques prefabricados se alinean en Fincantieri.", sources: [{ name: "CSIS", url: "https://www.csis.org/analysis/tracking-chinas-third-aircraft-carrier" }] },
        { date: "2022-06-17", ...LOCATIONS.jiangnan, status: "Astillero", op: "Botadura Oficial", desc: "Ceremonia de botadura, confirmando sistema completo EMALS (catapultas electromagnÃ©ticas).", sources: [{ name: "Xinhua Video", url: "#" }] },
        { date: "2023-11-26", ...LOCATIONS.jiangnan, status: "Astillero", op: "Pruebas Estáticas", desc: "Se observan carritos de prueba roja lanzados al agua evaluando las catapultas EMALS.", sources: [{ name: "Naval News", url: "#" }] },
        { date: "2024-05-01", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Sea Trials (Fase 1-3)", desc: "Primera navegación bajo propulsión propia; pruebas de balanceo y compatibilidad de sistemas de comunicaciones.", sources: [{ name: "Global Times", url: "#" }] },
        { date: "2024-11-20", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Sea Trials (Fase 4)", desc: "Evaluación de alto rendimiento de los sistemas de energía integrados para las catapultas EMALS.", sources: [{ name: "Naval News", url: "#" }] },
        { date: "2025-09-12", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Lanzamientos J-35", desc: "Récord histórico: Primera vez que un caza furtivo chino de quinta generación (J-35) es lanzado por catapulta EMALS.", sources: [{ name: "Defense One", url: "#" }] },
        { date: "2025-11-05", ...LOCATIONS.qingdao, status: "En Puerto", op: "Entrega Oficial", desc: "Ceremonia formal de comisión; el Fujian se une a la flota del Norte con capacidad operativa inicial.", sources: [{ name: "Xinhua", url: "#" }] },
        { date: "2025-12-20", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Vigilancia de Navidad", desc: "Patrulla de largo alcance demostrando la estabilidad de su planta propulsora convencional.", sources: [{ name: "SCMP OSINT", url: "#" }] },
        { date: "2026-01-15", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Maniobras Misilísticas", desc: "Lanzamientos simulados de corto alcance validando la integración del radar Tipo 346B.", sources: [{ name: "Japan MoD", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.qingdao, status: "En Puerto", op: "Alistamiento Final", desc: "Acomodación de la dotación y carga de pertrechos para su primer despliegue operacional de largo alcance.", sources: [{ name: "PLAN News", url: "#" }] }
    ]},
    { id: "kuznetsov_vikramaditya", name: "INS Vikramaditya (ex-Admiral Gorshkov)", hull: "R33 / 063", cls: "Clase Kuznetsov/Gorshkov Mod.", country: "India", photo: "https://upload.wikimedia.org/wikipedia/commons/0/05/INS_Vikramaditya_at_sea.jpg", launched: "1982-03-31", commissioned: "2013-11-16", history: [
        { date: "2020-01-01", ...LOCATIONS.murmansk, status: "Mantenimiento", op: "Mantenimiento Mayor (Rusia)", desc: "Como Admiral Kuznetsov (063), tras graves daños en dique seco. Inicio de gestiones diplomáticas para transferencia.", sources: [{ name: "TASS", url: "#" }] },
        { date: "2023-02-21", ...LOCATIONS.murmansk, status: "En Puerto", op: "Transferencia a India", desc: "Firma oficial de baja en el VMF Ruso y preparación para el remolque oceánico hacia Karwar.", sources: [{ name: "TASS/RIA", url: "#" }] },
        { date: "2024-01-02", ...LOCATIONS.karwar, status: "Mantenimiento", op: "Reconstrucción R33", desc: "Llega a India. Renace como INS Vikramaditya bajo bandera hindú tras integración de aviónica israelí.", sources: [{ name: "Indian Navy PR", url: "#" }] },
        { date: "2026-03-16", ...LOCATIONS.karwar, status: "En Puerto", op: "Guarnición Activa", desc: "Fondeado en Karwar protegiendo el flanco occidental de la India.", sources: [{ name: "OSINT IND", url: "#" }] }
    ]},
    { id: "izumo", name: "JS Izumo", hull: "DDH-183", cls: "Clase Izumo (Japón)", country: "Japón", photo: "https://upload.wikimedia.org/wikipedia/commons/0/07/JS_Izumo_at_Yokosuka_%2820210626%29.jpg", launched: "2013-08-06", commissioned: "2015-03-25", history: [
        { date: "2020-01-01", ...LOCATIONS.yokosuka, status: "Mantenimiento", op: "Refit Portaaviones", desc: "Inicio de modificaciones estructurales para operar cazas F-35B Lightning II.", sources: [{ name: "Japan MoD", url: "#" }] },
        { date: "2021-10-03", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Pruebas F-35B", desc: "Primeros aterrizajes históricos de F-35B del USMC en la cubierta japonesa.", sources: [{ name: "USMC News", url: "#" }] },
        { date: "2024-12-15", ...LOCATIONS.yokosuka, status: "En Puerto", op: "Certificación F-35B", desc: "Finaliza la fase de pintura de cubierta termorresistente; el Izumo es oficialmente un portaaviones ligero.", sources: [{ name: "Japan Times", url: "#" }] },
        { date: "2025-08-20", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Ejercicio Malabar 25", desc: "Operaciones de ala fija integradas con el USMC y la Armada India; validación de interoperabilidad QUAD.", sources: [{ name: "JMSDF Press", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.yokosuka, status: "En Puerto", op: "Escuadra de Defensa", desc: "Integrado en la 1ª Flotilla de Escolta, listo para proyectar ala fija en caso de contingencia.", sources: [{ name: "JMSDF", url: "#" }] }
    ]},
    { id: "kaga", name: "JS Kaga", hull: "DDH-184", cls: "Clase Izumo (Japón)", country: "Japón", photo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/JS_Kaga_at_Kure_Naval_Base%2C_2024.jpg", launched: "2015-08-27", commissioned: "2017-03-22", history: [
        { date: "2024-04-01", ...LOCATIONS.kure, status: "Mantenimiento", op: "Fin Modificaciones", desc: "Finaliza su transformación de proa cuadrada para operar escuadrones F-35B.", sources: [{ name: "Naval News", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.pacific_east, status: "Desplegado", op: "Patrulla Mar de China", desc: "Vigilando movimientos de la PLAN con capacidad aeronaval plena.", sources: [{ name: "OSINT JP", url: "#" }] }
    ]},
    { id: "anadolu", name: "TCG Anadolu", hull: "L-400", cls: "Porta-Drones (Turquía)", country: "Turquía", photo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/TCG_Anadolu_L-400_Istanbul.jpg", launched: "2019-04-30", commissioned: "2023-04-10", history: [
        { date: "2024-03-15", ...LOCATIONS.med_sea, status: "Desplegado", op: "Mavi Vatan 24", desc: "Gran ejercicio naval turco demostrando la integración de lanchas de desembarco y helicópteros T129 ATAK.", sources: [{ name: "SavunmaSanayiST", url: "#" }] },
        { date: "2025-07-01", ...LOCATIONS.atlantic_north, status: "Desplegado", op: "NATO Mission", desc: "Punto de mando para operaciones navales del norte de Europa.", sources: [{ name: "NATO Press", url: "#" }] },
        { date: "2025-12-15", ...LOCATIONS.med_sea, status: "Desplegado", op: "Pruebas Bayraktar TB3", desc: "Primeros despegues y aterrizajes nocturnos automáticos de drones TB3 en condiciones reales de mar.", sources: [{ name: "Baykar Tech", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.med_sea, status: "Desplegado", op: "Vigilancia Mediterránea", desc: "Base avanzada de drones monitorizando las costas de Levante; integración total con el CMS GENESIS.", sources: [{ name: "Turkish Navy", url: "#" }] }
    ]},
    { id: "atlantico", name: "NAM Atlântico", hull: "A140", cls: "Multiproposito (Brasil)", country: "Brasil", photo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/NAM_Atlantico_A140.jpg", launched: "1998-02-20", commissioned: "2018-06-29", history: [
        { date: "2026-01-20", ...LOCATIONS.rio_de_janeiro, status: "Desplegado", op: "Aspirantex 2026", desc: "Operaciones de entrenamiento bélico en el Atlántico Sur.", sources: [{ name: "Marinha do Brasil", url: "#" }] },
        { date: "2026-03-10", ...LOCATIONS.rio_de_janeiro, status: "En Puerto", op: "Recarga Logística", desc: "Preparativos para la misión de paz en el Atlántico Sur (UNASUR); carga de helicópteros de carga pesada.", sources: [{ name: "G1 Mil", url: "#" }] },
        { date: "2026-03-24", ...LOCATIONS.rio_de_janeiro, status: "En Puerto", op: "Mantenimiento Preventivo", desc: "En base naval tras el ciclo operativo de verano.", sources: [{ name: "OSINT BR", url: "#" }] }
    ]},
    { id: "naruebet", name: "HTMS Chakri Naruebet", hull: "911", cls: "Portaaviones (Tailandia)", country: "Tailandia", photo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/HTMS_Chakri_Naruebet_at_Sea.jpg", launched: "1996-01-20", commissioned: "1997-03-20", history: [
        { date: "2026-03-24", ...LOCATIONS.sattahip, status: "En Puerto", op: "Guarnición", desc: "Base naval de Sattahip; raramente despliega ala fija actualmente.", sources: [{ name: "Thai OSINT", url: "#" }] }
    ]},
    { id: "vikrant", country: "India", name: "INS Vikrant", hull: "R11", cls: "Infantería (CAC) Autóctona", photo: "https://upload.wikimedia.org/wikipedia/commons/9/90/INS_Vikrant_%28IAC-1%29_during_basin_trials.jpg", launched: "2013-08-12", commissioned: "2022-09-02", history: [
        { date: "2020-01-01", ...LOCATIONS.kochi, status: "Astillero", op: "Construcción", desc: "Demorada su construcción final de sensores por contratiempos globales de la cadena de COVID-19.", sources: [{ name: "Cochin Shipyard PR", url: "#" }] },
        { date: "2021-08-04", ...LOCATIONS.arabian_sea, status: "Tránsito", op: "Pruebas de Mar", desc: "Navega valientemente sus primeros ensayos bajo propio motor en el mar arábigo.", sources: [{ name: "ANI", url: "#" }] },
        { date: "2022-09-02", ...LOCATIONS.kochi, status: "En Puerto", op: "Comisionamiento Activo", desc: "Puesto oficialmente en servicio en una masiva ceremonia independentista frente al Primer Ministro.", sources: [{ name: "The Times of India", url: "#" }] },
        { date: "2023-02-06", ...LOCATIONS.arabian_sea, status: "Pruebas de Mar", op: "Aterrizaje LCA", desc: "Los primeros aviones nacionales LCA Tejas y MiG-29K aterrizan a bordo exitosamente.", sources: [{ name: "Indian Navy Media", url: "#" }] },
        { date: "2024-03-01", ...LOCATIONS.karwar, status: "Desplegado", op: "Milan Naval", desc: "Actúa como pieza estelar del mayor ejercicio diplomático asiático MILAN.", sources: [{ name: "Hindustan Times", url: "#" }] },
        { date: "2024-10-15", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Ejercicio Malabar", desc: "Maniobras QUAD integrando comunicaciones tácticas con EE.UU. y Japón en el Mar Arábigo.", sources: [{ name: "The Hindu", url: "#" }] },
        { date: "2025-11-20", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Twin Strike Táctica", desc: "Participa en formación junto al Vikramaditya, demostrando capacidad de dos portaviones nacionales.", sources: [{ name: "Mint Defense", url: "#" }] },
        { date: "2026-03-16", ...LOCATIONS.karwar, status: "En Puerto", op: "Entrenamiento Rafale", desc: "Alistando cubiertas para recibir el escuadrón inicial de los Dassault Rafale M comprados a Francia.", sources: [{ name: "OSINT IND", url: "#" }] }
    ]}

];
