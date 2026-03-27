const LOCATIONS = {
    "san_diego": {
        "lat": 32.7,
        "lng": -117.195,
        "name": "Naval Base Coronado, San Diego"
    },
    "norfolk": {
        "lat": 36.953,
        "lng": -76.33,
        "name": "Naval Station Norfolk (Piers 11/12)"
    },
    "bremerton": {
        "lat": 47.556,
        "lng": -122.636,
        "name": "Puget Sound Naval Shipyard, Bremerton"
    },
    "newport_news": {
        "lat": 36.985,
        "lng": -76.442,
        "name": "Newport News Shipbuilding"
    },
    "yokosuka": {
        "lat": 35.288,
        "lng": 139.658,
        "name": "CFA Yokosuka (Berth 12)"
    },
    "souda_bay": {
        "lat": 35.495,
        "lng": 24.175,
        "name": "NSA Souda Bay (Marathi Pier)"
    },
    "taranto": {
        "lat": 40.45,
        "lng": 17.227,
        "name": "Stazione Navale Mar Grande, Tarento"
    },
    "toulon": {
        "lat": 43.118,
        "lng": 5.922,
        "name": "Base Navale de Toulon (Milhaud)"
    },
    "portsmouth": {
        "lat": 50.806,
        "lng": -1.103,
        "name": "HMNB Portsmouth (Princess Royal Jetty)"
    },
    "rota": {
        "lat": 36.621,
        "lng": -6.333,
        "name": "Base Naval de Rota (Muelles 1 y 2)"
    },
    "guam": {
        "lat": 13.438,
        "lng": 144.653,
        "name": "Naval Base Guam (Apra Harbor)"
    },
    "us_east": {
        "lat": 36.5,
        "lng": -70,
        "name": "Atlántico Occidental (US East Coast)"
    },
    "indian_ocean": {
        "lat": -5,
        "lng": 70,
        "name": "Océano Índico"
    },
    "fincantieri_stabia": {
        "lat": 40.699,
        "lng": 14.478,
        "name": "Astillero Fincantieri (Stabia/Muggiano)"
    },
    "qingdao": {
        "lat": 35.719,
        "lng": 119.982,
        "name": "Base Naval de Qingdao (PLAN)"
    },
    "sanya": {
        "lat": 18.196,
        "lng": 109.684,
        "name": "Base Naval de Yulin, Sanya (Hainan)"
    },
    "jiangnan": {
        "lat": 31.355,
        "lng": 121.751,
        "name": "Astillero Jiangnan, Shanghái"
    },
    "dalian": {
        "lat": 38.932,
        "lng": 121.642,
        "name": "Astillero Dalian, Liaoning"
    },
    "murmansk": {
        "lat": 69.043,
        "lng": 33.22,
        "name": "35th Shipyard Base, Murmansk (VMF)"
    },
    "karwar": {
        "lat": 14.762,
        "lng": 74.12,
        "name": "Base Naval Kadamba, Karwar"
    },
    "kochi": {
        "lat": 9.965,
        "lng": 76.28,
        "name": "Cochin Shipyard, Kochi"
    },
    "kure": {
        "lat": 34.234,
        "lng": 132.545,
        "name": "Base Naval de Kure, Hiroshima"
    },
    "rio_de_janeiro": {
        "lat": -22.9,
        "lng": -43.167,
        "name": "Arsenal de Marinha do Rio de Janeiro"
    },
    "sattahip": {
        "lat": 12.617,
        "lng": 100.883,
        "name": "Base Naval de Sattahip, Chonburi"
    },
    "med_sea_east": {
        "lat": 34,
        "lng": 32,
        "name": "Mediterráneo Oriental"
    },
    "med_sea_central": {
        "lat": 36,
        "lng": 17,
        "name": "Mar Jónico / Med Central"
    },
    "med_sea": {
        "lat": 34,
        "lng": 25,
        "name": "Mar Mediterráneo"
    },
    "adriatic_sea": {
        "lat": 42,
        "lng": 16,
        "name": "Mar Adriático"
    },
    "red_sea_north": {
        "lat": 26,
        "lng": 35,
        "name": "Mar Rojo Norte"
    },
    "red_sea_south": {
        "lat": 16,
        "lng": 40,
        "name": "Mar Rojo Sur"
    },
    "red_sea": {
        "lat": 18,
        "lng": 40,
        "name": "Mar Rojo Principal"
    },
    "bab_el_mandeb": {
        "lat": 12.5,
        "lng": 43.3,
        "name": "Estrecho de Bab el-Mandeb"
    },
    "gulf_of_oman": {
        "lat": 24,
        "lng": 59,
        "name": "Golfo de Omán"
    },
    "persian_gulf": {
        "lat": 26,
        "lng": 52,
        "name": "Golfo Pérsico"
    },
    "arabian_sea": {
        "lat": 15,
        "lng": 60,
        "name": "Mar Arábigo Norte"
    },
    "philippine_sea": {
        "lat": 18,
        "lng": 132,
        "name": "Mar de Filipinas"
    },
    "south_china_sea": {
        "lat": 15,
        "lng": 115,
        "name": "Mar de China Meridional"
    },
    "taiwan_strait": {
        "lat": 24.5,
        "lng": 119.5,
        "name": "Estrecho de Taiwán"
    },
    "atlantic_north": {
        "lat": 60,
        "lng": -20,
        "name": "Atlántico Norte (GIUK)"
    },
    "atlantic_south": {
        "lat": -25,
        "lng": -40,
        "name": "Atlántico Sur"
    },
    "pacific_east": {
        "lat": 20,
        "lng": -140,
        "name": "Pacífico Oriental"
    },
    "pacific_west": {
        "lat": 20,
        "lng": 160,
        "name": "Pacífico Occidental"
    },
    "atlantic": {
        "lat": 40,
        "lng": -60,
        "name": "Océano Atlántico"
    },
    "pacific": {
        "lat": 20,
        "lng": -140,
        "name": "Océano Pacífico"
    },
    "north_sea": {
        "lat": 56.5,
        "lng": 3.5,
        "name": "Mar del Norte / Jutlandia"
    },
    "baltic_sea": {
        "lat": 57,
        "lng": 19,
        "name": "Mar Báltico"
    },
    "caribbean_sea": {
        "lat": 15,
        "lng": -75,
        "name": "Mar Caribe"
    },
    "horn_of_africa": {
        "lat": 10,
        "lng": 52,
        "name": "Cuerno de África"
    },
    "hawaii": {
        "lat": 21.3,
        "lng": -157.8,
        "name": "Pearl Harbor, Hawaii"
    },
    "suez_canal": {
        "lat": 29.9,
        "lng": 32.5,
        "name": "Canal de Suez (Tránsito)"
    },
    "skagerrak": {
        "lat": 57.8,
        "lng": 9,
        "name": "Estrecho de Skagerrak (Paso Báltico/Norte)"
    },
    "rosyth": {
        "lat": 56.02,
        "lng": -3.45,
        "name": "Astillero de Rosyth, Escocia"
    }
};

const WIKI_SPECS = {
    "Clase Nimitz (EE.UU.)": {
        "displacement": "105,000 tons",
        "length": "332.8 m",
        "propulsion": "2x Reactores Nucleares A4W",
        "airWing": "90+ aeronaves (F/A-18E/F Super Hornet, EA-18G Growler, E-2D Hawkeye, C-2A Greyhound, MH-60R/S Seahawk)",
        "radar": "SPS-48E 3-D, SPS-49(V)5 2-D",
        "weapons": "2-3× lanzadores RIM-116 RAM, 2× RIM-7 Sea Sparrow, 2× Phalanx CIWS 20mm"
    },
    "Clase Ford (EE.UU.)": {
        "displacement": "100,000+ tons",
        "length": "337 m",
        "propulsion": "2x Reactores Nucleares A1B",
        "airWing": "90+ aeronaves (F-35C Lightning II, F/A-18E/F, EA-18G, E-2D, CMV-22B Osprey, MH-60R/S)",
        "radar": "AN/SPY-3 & AN/SPY-4 Dual Band Radar (DBR)",
        "weapons": "2× lanzadores RIM-162 ESSM, 2× RIM-116 RAM, 3× Phalanx CIWS 20mm"
    },
    "Armada Española": {
        "displacement": "26,000 tons",
        "length": "230.8 m",
        "propulsion": "CODLAG (1x Turbina Gas LM2500, 2x Motores Diésel)",
        "airWing": "Aprox. 30 aeronaves (Harrier AV-8B+ Matador, Helicópteros NH90, SH-60B, AB-212)",
        "radar": "Selex RAN-40L 3D / Lanza-N",
        "weapons": "4× cañones automáticos de 20mm, Ametralladoras pesadas M2 12.7mm (Reserva para CIWS)"
    },
    "Royal Navy (Reino Unido)": {
        "displacement": "65,000 tons",
        "length": "284 m",
        "propulsion": "IFEP (2x Rolls-Royce MT30 GTs, 4x Wärtsilä Diésel)",
        "airWing": "Correa estándar: 36× F-35B Lightning II. Helicópteros: Merlin HM2 (ASW/AEW), Wildcat AH1, Chinook",
        "radar": "BAE Systems S1850M 3D, Artisan 3D Tipo 997",
        "weapons": "3× Phalanx CIWS 20mm, 4× cañones DS30M Mk2 de 30mm y miniguns"
    },
    "Armada Italiana (Marina Militare)": {
        "displacement": "27,000 - 33,000 tons",
        "length": "244 m",
        "propulsion": "COGAG (4x Turbinas de gas LM2500)",
        "airWing": "20-30 aeronaves (Cazas furtivos F-35B, Harrier AV-8B+. Helos: EH-101 Merlin, NH90)",
        "radar": "Leonardo Kronos Naval, Selex RAN-40L 3D",
        "weapons": "32× celdas Sylver A43 (misiles Aster 15), 2× cañones OTO Melara 76mm, 3× CIWS Oerlikon 25mm"
    },
    "Clase Garibaldi (Marina Militare)": {
        "displacement": "13,850 tons",
        "length": "180 m",
        "propulsion": "COGAG (4x Turbinas de Gas LM2500)",
        "airWing": "Aprox. 18 aeronaves (Helicópteros pesados AW101, Harrier AV-8B+ heredados)",
        "radar": "MM/SPS-768 (RAN 3L), SPS-774",
        "weapons": "2× lanzadores de misiles Aspide (defensa puntual), 3× Dardo CIWS 40mm, 2× tubos lanzatorpedos (324 mm)"
    },
    "Marine Nationale (Francia)": {
        "displacement": "42,500 tons",
        "length": "261.5 m",
        "propulsion": "2x Reactores Nucleares Areva K15",
        "airWing": "Aprox. 40 aeronaves (Cazas Dassault Rafale M, E-2C Hawkeye, Caïman Marine NH90, Panther)",
        "radar": "Thales Arabel 3D multifunción, J11",
        "weapons": "32× celdas Sylver A43 (misiles Aster 15), 2× lanzadores Sadral (misiles Mistral 3)"
    },
    "Clase Kuznetsov (VMF)": {
        "displacement": "58,000 tons",
        "length": "305 m",
        "propulsion": "Calderas de Vapor (Mazut)",
        "airWing": "24× cazas (Su-33 'Flanker-D', MiG-29K), 6× helicópteros Kamov Ka-27/Ka-31 (ASW/AEW)",
        "radar": "Sky Watch 3D, Plate Steer",
        "weapons": "12× misiles antibuque de crucero P-700 Granit, 192× misiles SAM 3K95 Kinzhal, 8× CADS-N-1 Kashtan CIWS"
    },
    "Clase Tipo 001 (PLAN)": {
        "displacement": "60,000 tons",
        "length": "304.5 m",
        "propulsion": "Calderas de Vapor Modernizadas",
        "airWing": "Aprox. 40 aeronaves (24× cazas J-15 'Flying Shark', Helos: Z-8, Z-18J AEW, Z-9)",
        "radar": "Tipo 346 S-Band AESA (Radares de fase plana)",
        "weapons": "3× Tipo 1130 CIWS (11 cañones 30mm), 3× lanzadores de misiles HQ-10 (18 celdas c/u)"
    },
    "Clase Tipo 002 (PLAN)": {
        "displacement": "65,000 tons",
        "length": "315 m",
        "propulsion": "Calderas de Vapor Chinas",
        "airWing": "Aprox. 44-50 aeronaves (32× cazas J-15, 8× helos Z-18, 4× helos Z-9)",
        "radar": "Tipo 346A S-Band AESA avanzado",
        "weapons": "3× Tipo 1130 CIWS rotatorios 30mm, 3× lanzadores HQ-10 (misiles de defensa de punto)"
    },
    "Clase Tipo 003 (PLAN)": {
        "displacement": "80,000+ tons",
        "length": "316 m",
        "propulsion": "Catapultas EMALS, Motores Convencionales",
        "airWing": "Aprox. 60+ aeronaves (Cazas J-15T, J-35 Stealth, Aviones de Alerta Temprana KJ-600)",
        "radar": "Conjunto completo AESA Multipropósito Integrado",
        "weapons": "Sistemas HQ-10 de corto alcance y múltiples Tipo 1130 CIWS para defensa terminal"
    },
    "Clase Gorshkov Mod.": {
        "displacement": "45,400 tons",
        "length": "284 m",
        "propulsion": "8x Calderas de Vapor Presurizadas",
        "airWing": "Aprox. 36 aeronaves (26× cazas MiG-29K/KUB, 10× helicópteros Kamov Ka-31, Ka-28)",
        "radar": "Podberezovik 3D, Fregat-M2EM",
        "weapons": "Sistemas de Defensa Aérea Barak 8 (LRSAM), 4× AK-630 CIWS de fabricación rusa"
    },
    "Clase Kuznetsov Mod.": {
        "displacement": "45,400 tons",
        "length": "284 m",
        "propulsion": "8x Calderas de Vapor Presurizadas",
        "airWing": "Aprox. 36 aeronaves (26× cazas MiG-29K/KUB, 10× helicópteros Kamov Ka-31, Ka-28)",
        "radar": "Podberezovik 3D, Fregat-M2EM",
        "weapons": "Sistemas de Defensa Aérea Barak 8 (LRSAM), 4× AK-630 CIWS de fabricación rusa"
    },
    "Clase Vikrant (India)": {
        "displacement": "45,000 tons",
        "length": "262 m",
        "propulsion": "COGAG (4x Turbinas de Gas GE LM2500+)",
        "airWing": "30+ aeronaves (MiG-29K, Kamov Ka-31, MH-60R, Rafale M planificados)",
        "radar": "IAI EL/M-2248 MF-STAR (AESA)",
        "weapons": "2× lanzadores verticales (32 misiles Barak 8), 4× AK-630 CIWS"
    },
    "Clase Izumo (Japón)": {
        "displacement": "27,000 tons",
        "length": "248 m",
        "propulsion": "COGAG (4x GE/IHI LM2500)",
        "airWing": "28+ aeronaves (7x F-35B planificados, helicópteros SH-60K, MCH-101)",
        "radar": "OPS-50 AESA, OPS-28",
        "weapons": "2× Phalanx CIWS, 2× lanzadores SeaRAM"
    },
    "Porta-Drones (Turquía)": {
        "displacement": "27,436 tons",
        "length": "231 m",
        "propulsion": "5x Motores Diésel (Navantia/MAN)",
        "airWing": "30-50 aeronaves (Drones Bayraktar TB3, Kizilelma, helicópteros T129 ATAK, S-70B)",
        "radar": "SMART-S Mk2, GENESIS ADVENT CMS",
        "weapons": "2× Phalanx CIWS, 5× cañones STOP de 25mm, 1× RAM"
    },
    "Multiproposito (Brasil)": {
        "displacement": "21,500 tons",
        "length": "203.4 m",
        "propulsion": "2x Diésel Pielstick, 2x Alternadores Alstom",
        "airWing": "18 helicópteros (EC725 Caracal, SH-60 Seahawk, AS332 Super Puma)",
        "radar": "Artisan 3D Tipo 997",
        "weapons": "3× Phalanx CIWS, 4× cañones DS30M Mk2 de 30mm"
    },
    "Portaaviones (Tailandia)": {
        "displacement": "11,486 tons",
        "length": "182.6 m",
        "propulsion": "CODOG (2x Turbinas LM2500, 2x Motores Diésel)",
        "airWing": "Aprox. 10 aeronaves (Helicópteros S-70BS Seahawk, MH-60S Knight Hawk)",
        "radar": "Selex RAN-30X/I, Hughes SPS-52C",
        "weapons": "3× lanzadores Sadral (misiles Mistral), 2× ametralladoras 12.7mm"
    },
    "Infantería (CAC) Autóctona": {
        "displacement": "45,000 tons",
        "length": "262 m",
        "propulsion": "4x Turbinas de Gas LM2500 (GE Marine)",
        "airWing": "Aprox. 30 aeronaves (Cazas MiG-29K, esperando futuro Rafale M. Helos: MH-60R Seahawk, Dhruv ALH)",
        "radar": "EL/M-2248 MF-STAR AESA, RAN-40L",
        "weapons": "32× celdas VLS para misiles Barak 8, 4× cañones super-rápidos OTO Melara 76mm, 4× AK-630 CIWS"
    },
    "Type 001": {
        "displacement": "60,000 tons",
        "length": "304.5 m",
        "propulsion": "Calderas de Vapor",
        "airWing": "Aprox. 24-40 cazas J-15 Flying Shark, helicópteros Z-18 AEW",
        "radar": "Tipo 346 S-Band AESA",
        "weapons": "3× HQ-10 SAM, 3× Tipo 1130 CIWS 30mm"
    },
    "Type 002": {
        "displacement": "65,000 tons",
        "length": "315 m",
        "propulsion": "Calderas de Vapor Chinas",
        "airWing": "Aprox. 44-50 aeronaves: 32× cazas J-15, helicópteros Z-18",
        "radar": "Tipo 346A S-Band AESA avanzado",
        "weapons": "3× Tipo 1130 CIWS, 3× HQ-10 SAM"
    },
    "Type 003": {
        "displacement": "80,000+ tons",
        "length": "316 m",
        "propulsion": "EMALS catapultas, propulsión convencional",
        "airWing": "60+ aeronaves: J-15T, J-35 furtivo, KJ-600 AEW",
        "radar": "AESA Multipropósito integrado",
        "weapons": "HQ-10 SAM y múltiples CIWS Tipo 1130"
    },
    "Clase Queen Elizabeth": {
        "displacement": "65,000 tons",
        "length": "284 m",
        "propulsion": "IFEP (2x Rolls-Royce MT30, 4x Wärtsilä Diésel)",
        "airWing": "36× F-35B Lightning II, helicópteros Merlin HM2, Wildcat AH1",
        "radar": "S1850M 3D, Artisan 3D Tipo 997",
        "weapons": "3× Phalanx CIWS, 4× cañones DS30M 30mm"
    },
    "Clase Charles de Gaulle": {
        "displacement": "42,500 tons",
        "length": "261.5 m",
        "propulsion": "2× Reactores Nucleares Areva K15",
        "airWing": "40 aeronaves: Rafale M, E-2C Hawkeye, NH90 Caïman",
        "radar": "Thales Arabel 3D, J11 long-range",
        "weapons": "32× Sylver A43 (Aster 15), 2× Sadral (Mistral)"
    },
    "Clase Cavour": {
        "displacement": "27,000 tons",
        "length": "244 m",
        "propulsion": "COGAG (4× LM2500 GE)",
        "airWing": "20-30 aeronaves: F-35B, Harrier AV-8B+, EH-101 Merlin, NH90",
        "radar": "Leonardo Kronos Naval, Selex RAN-40L",
        "weapons": "32× Sylver A43 (Aster 15), 2× OTO Melara 76mm, 3× CIWS 25mm"
    },
    "Clase Garibaldi": {
        "displacement": "13,850 tons",
        "length": "180 m",
        "propulsion": "COGAG (4× LM2500 GE)",
        "airWing": "18 aeronaves: Harrier AV-8B+, AW101, NHIndustries NH90",
        "radar": "MM/SPS-768 RAN 3L, SPS-774",
        "weapons": "2× Aspide SAM, 3× Dardo CIWS 40mm, tubos lanzatorpedos 324mm"
    },
    "Clase Juan Carlos I": {
        "displacement": "26,000 tons",
        "length": "230.8 m",
        "propulsion": "CODLAG (1× LM2500 GT, 2× motores Diésel)",
        "airWing": "30 aeronaves: Harrier AV-8B+ Matador, NH90, SH-60B Seahawk",
        "radar": "Selex RAN-40L 3D, Lanza-N",
        "weapons": "4× cañones 20mm, ametralladoras M2 pesadas"
    }
};

const GLOBAL_OSINT_SOURCES = {
    "AIS / Tráfico Marítimo": [
        { name: "MarineTraffic", url: "https://www.marinetraffic.com/", desc: "Visualización en tiempo real de tráfico mundial y datos AIS." },
        { name: "VesselFinder", url: "https://www.vesselfinder.com/", desc: "Histórico y tiempo real para rastreo de buques logísticos y escoltas." },
        { name: "Cruising Earth", url: "https://www.cruisingearth.com/military-ship-tracker/", desc: "Agregador gratuito de posiciones y despliegues militares globales." }
    ],
    "Institutos & Bases de Datos": [
        { name: "USNI Fleet Tracker", url: "https://news.usni.org/category/fleet-tracker", desc: "Mapas semanales con las estimaciones más precisas de la US Navy." },
        { name: "Go! Navy", url: "http://www.gonavy.jp/CVLocation.html", desc: "Base de datos histórica inigualable de portaaviones de EE. UU." },
        { name: "Stratfor / RANE", url: "https://worldview.stratfor.com/topic/tracking-us-naval-power", desc: "Informes de inteligencia sobre proyección de poder naval global." },
        { name: "CSIS / AMTI", url: "https://amti.csis.org/", desc: "Rastreo crítico del Indo-Pacífico y milicia marítima china." },
        { name: "IISS Military Balance", url: "https://www.iiss.org/the-military-balance-plus/", desc: "Auditoría de capacidades e inventarios de 170 países." }
    ],
    "Inteligencia Satelital (SAR)": [
        { name: "ICEYE SAR", url: "https://www.iceye.com/sar-maritime-awareness", desc: "Detección de flotas en mar abierto con radar de apertura sintética." },
        { name: "Capella Space", url: "https://www.capellaspace.com/", desc: "Imágenes SAR de alta resolución para monitoreo de bases y costas." }
    ]
};

const CARRIERS = [
    {
        "id": "cvn68",
        "name": "USS Nimitz",
        "hull": "CVN-68",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_nimitz_cvn68.png",
        "launched": "1972-05-13",
        "commissioned": "1975-05-03",
        "history": [
            {
                "date": "1980-04-24",
                "lat": 26,
                "lng": 52,
                "name": "Golfo Pérsico",
                "status": "Desplegado",
                "op": "Operación Eagle Claw",
                "desc": "Participación en el intento de rescate de rehenes en Irán.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "1991-01-17",
                "lat": 26,
                "lng": 52,
                "name": "Golfo Pérsico",
                "status": "Desplegado",
                "op": "Operación Desert Storm",
                "desc": "Lanzamiento de ataques aéreos masivos contra Irak.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-01-01",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "En Puerto",
                "op": "Mantenimiento Invernal",
                "desc": "Atracado en Puget Sound Naval Shipyard completando ciclo de mantenimiento planificado.",
                "sources": [
                    {
                        "name": "USNI News Fleet Tracker",
                        "url": "https://news.usni.org/2020/01/06/usni-news-fleet-and-marine-tracker-jan-6-2020"
                    }
                ]
            },
            {
                "date": "2020-04-27",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Pre-Despliegue",
                "desc": "Arribo a San Diego para maniobras COMPTUEX finales y cuarentena sanitaria (COVID-19).",
                "sources": [
                    {
                        "name": "San Diego Union-Tribune",
                        "url": "https://www.sandiegouniontribune.com/2020/04/27/uss-nimitz-arrives-in-san-diego-for-final-deployment-preps/"
                    }
                ]
            },
            {
                "date": "2020-07-20",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Desplegado",
                "op": "O.P. Inherent Resolve",
                "desc": "Operaciones de combate lanzando F/A-18s contra posiciones del ISIS en el Medio Oriente.",
                "sources": [
                    {
                        "name": "CENTCOM Press Release",
                        "url": "https://www.centcom.mil/MEDIA/NEWS-ARTICLES/News-Article-View/Article/2281084/uss-nimitz-strike-group-enters-5th-fleet/"
                    }
                ]
            },
            {
                "date": "2020-12-31",
                "lat": 10,
                "lng": 52,
                "name": "Cuerno de África",
                "status": "Desplegado",
                "op": "Misión Octave Quartz",
                "desc": "Reposicionado a las costas de Somalia para cubrir la retirada de tropas estadounidenses documentado por medios de defensa.",
                "sources": [
                    {
                        "name": "Military.com",
                        "url": "https://www.military.com/daily-news/2020/12/31/pentagon-sends-uss-nimitz-home-after-somalia-mission.html"
                    }
                ]
            },
            {
                "date": "2021-03-07",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "Mantenimiento",
                "op": "PIA (Astilleros)",
                "desc": "Regreso a casa tras un descomunal despliegue de 321 días, directo a dique seco.",
                "sources": [
                    {
                        "name": "Kitsap Sun",
                        "url": "https://www.kitsapsun.com/story/news/2021/03/07/uss-nimitz-returns-home-bremerton-historic-deployment/4590393001/"
                    }
                ]
            },
            {
                "date": "2022-12-03",
                "lat": 18,
                "lng": 132,
                "name": "Mar de Filipinas",
                "status": "Desplegado",
                "op": "Patrulla del 7mo Fleet",
                "desc": "Ingresando a la jurisdicción de la 7ma Flota; rastreo de buques de escolta confirmaron la aproximación vía AIS.",
                "sources": [
                    {
                        "name": "7th Fleet Official",
                        "url": "https://www.c7f.navy.mil/Media/News/Display/Article/3233856/nimitz-carrier-strike-group-enters-7th-fleet/"
                    }
                ]
            },
            {
                "date": "2023-01-12",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Libertad de Navegación",
                "desc": "Presencia disuasoria contra maniobras del Ejército Popular de Liberación (PLA), apoyando la soberanía taiwanesa.",
                "sources": [
                    {
                        "name": "Reuters",
                        "url": "https://www.reuters.com/world/us-carrier-strike-group-begins-operating-south-china-sea-2023-01-13/"
                    }
                ]
            },
            {
                "date": "2023-06-28",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Cierre de Despliegue",
                "desc": "Atraque temporal en Base Naval Coronado captado por sistemas OSINT portuarios antes de regresar a Washington.",
                "sources": [
                    {
                        "name": "Pacific Fleet News",
                        "url": "https://www.cpf.navy.mil/News/Article/3444080/nimitz-carrier-strike-group-returns-from-deployment/"
                    }
                ]
            },
            {
                "date": "2024-05-15",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "En Puerto",
                "op": "Sostenimiento Prolongado",
                "desc": "Sometido a reabastecimientos críticos de planta y reparaciones mecánicas en astilleros de Puget Sound.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-02-12",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Pre-Despliegue Final",
                "desc": "Zarpada de Bremerton hacia San Diego para ejercicios de certificación antes de su despliegue final previsto.",
                "sources": [
                    {
                        "name": "Pacific Fleet PAO",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-08-15",
                "lat": 26,
                "lng": 52,
                "name": "Golfo Pérsico",
                "status": "Desplegado",
                "op": "Operación Sentinel Storm (Guerra 2025)",
                "desc": "Lideró la primera oleada de ataques contra bases de lanchas rápidas iraníes en el Estrecho.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-08-20",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Patrulla del 7mo Fleet",
                "desc": "Operando en el Pacífico Occidental, integrando ejercicios con las marinas de Australia y Japón.",
                "sources": [
                    {
                        "name": "Joint Staff Japan",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Regreso de Operaciones",
                "desc": "Zarpada de relevo completada; la unidad se encuentra en puerto para reabastecimiento tras su patrulla en el Pacífico Occidental.",
                "sources": [
                    {
                        "name": "OSINT Track",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn69",
        "name": "USS Dwight D. Eisenhower",
        "hull": "CVN-69",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_ike_cvn69.png",
        "launched": "1975-10-11",
        "commissioned": "1977-10-18",
        "history": [
            {
                "date": "1990-08-01",
                "lat": 26,
                "lng": 52,
                "name": "Golfo Pérsico",
                "status": "Desplegado",
                "op": "Operación Desert Shield",
                "desc": "Primera respuesta ante la invasión de Kuwait.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-01-01",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Alistamiento",
                "desc": "Preparativos finales en Norfolk previo a despliegue masivo.",
                "sources": [
                    {
                        "name": "Virginia-Pilot",
                        "url": "https://www.pilotonline.com/military/article_4e2ee2a0-4ff5-11ea-b80c-bfb0bc23b49c.html"
                    }
                ]
            },
            {
                "date": "2020-02-15",
                "lat": 36.9,
                "lng": -76.3,
                "name": "Norfolk",
                "status": "Desplegado",
                "op": "Despliegue COVID",
                "desc": "Despliegue récord de 206 días seguidos en el mar sin escalas en puerto debido a protocolos sanitarios.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-02-20",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Desplegado",
                "op": "Continuos At-Sea (COVID)",
                "desc": "Tránsito batiendo récords de navegación submarina y superficial constante por 206 días confinados en alta mar.",
                "sources": [
                    {
                        "name": "Navy Times",
                        "url": "https://www.navytimes.com/news/your-navy/2020/06/25/ike-has-been-at-sea-for-a-record-breaking-161-days/"
                    }
                ]
            },
            {
                "date": "2020-08-09",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Retorno a Base",
                "desc": "Regreso a Virginia tras el doblete operativo OIR y Sentinels of the Sea.",
                "sources": [
                    {
                        "name": "GlobalSecurity.org",
                        "url": "https://www.globalsecurity.org/military/agency/navy/cvn-69.htm"
                    }
                ]
            },
            {
                "date": "2021-04-02",
                "lat": 34,
                "lng": 32,
                "name": "Mediterráneo Oriental",
                "status": "Desplegado",
                "op": "Inherent Resolve 21",
                "desc": "Apoyo aéreo intensivo desde el mar apoyando comandos blindados en zonas fronterizas sirias.",
                "sources": [
                    {
                        "name": "DoD Operations",
                        "url": "https://www.defense.gov/News/Releases/Release/Article/2559092/"
                    }
                ]
            },
            {
                "date": "2023-10-14",
                "lat": 12,
                "lng": 43,
                "name": "Estrecho de Bab al-Mandab",
                "status": "Desplegado",
                "op": "O.P. Prosperity Guardian",
                "desc": "Interceptación activa de misiles balísticos y drones hutíes atacando el tráfico comercial.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-11-04",
                "lat": 16,
                "lng": 40,
                "name": "Mar Rojo Sur",
                "status": "Desplegado",
                "op": "Prosperity Guardian",
                "desc": "Cruzando el Canal de Suez bajo máxima alerta tras el inicio súbito del conflicto en Israel y Gaza.",
                "sources": [
                    {
                        "name": "CNN Defense",
                        "url": "https://edition.cnn.com/2023/11/04/politics/us-carrier-strike-group-middle-east/"
                    }
                ]
            },
            {
                "date": "2023-11-15",
                "lat": 26,
                "lng": 52,
                "name": "Golfo Pérsico",
                "status": "Desplegado",
                "op": "Operación Prosperity Guardian",
                "desc": "Defensa activa contra enjambres de drones hutíes en el Mar Rojo.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-03-12",
                "lat": 12.5,
                "lng": 43.3,
                "name": "Estrecho de Bab el-Mandeb",
                "status": "Desplegado",
                "op": "Guerra Houthi en el Rojo",
                "desc": "Escudo antimisiles activo 24/7 derribando misiles balísticos y docenas de drones yemeníes. Sus cazas consumieron millones en munición (AMRAAMs).",
                "sources": [
                    {
                        "name": "CENTCOM (Official X)",
                        "url": "https://twitter.com/CENTCOM/status/1767676344583168504"
                    }
                ]
            },
            {
                "date": "2024-07-14",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Regreso Triunfal",
                "desc": "Llegada a Norfolk recibidos como la nave más curtida en combate del siglo por su frenética acción en Medio Oriente.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "https://news.usni.org/2024/07/14/carrier-uss-dwight-d-eisenhower-returns-to-norfolk-after-9-month-combat-deployment"
                    }
                ]
            },
            {
                "date": "2024-10-15",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Post-Deployment PIA",
                "desc": "Ingreso en astilleros tras su histórico despliegue en el Mar Rojo; reparación intensiva de sistemas de defensa de punto.",
                "sources": [
                    {
                        "name": "Naval Sea Systems Command",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-01-10",
                "lat": 36.9,
                "lng": -76.3,
                "name": "Norfolk",
                "status": "Mantenimiento",
                "op": "PIA (Astilleros)",
                "desc": "Ingreso en dique seco tras 9 meses de combate intenso en el Mar Rojo.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-06-20",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "Mantenimiento",
                "op": "Renovación Electrónica",
                "desc": "Instalación de nuevos sensores ESM para contrarrestar drones merodeadores de largo alcance.",
                "sources": [
                    {
                        "name": "Defense News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-09-01",
                "lat": 26,
                "lng": 52,
                "name": "Golfo Pérsico",
                "status": "Desplegado",
                "op": "Operación Sentinel Storm (Guerra 2025)",
                "desc": "Escudo antimisiles en el Mar Arábigo durante la escalada con Irán.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-22",
                "lat": 26,
                "lng": 52,
                "name": "Golfo Pérsico",
                "status": "Desplegado",
                "op": "Operación Epic Fury (2026 Actual)",
                "desc": "Asegurando el Canal de Suez contra ataques de saturación drones/misiles.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "Mantenimiento",
                "op": "Reparación Retrasada",
                "desc": "Continúa amarrado en Norfolk tras problemas masivos en engranajes reductores detectados durante pruebas de puerto.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn70",
        "name": "USS Carl Vinson",
        "hull": "CVN-70",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_vinson_cvn70.png",
        "launched": "15 Mar 1980",
        "commissioned": "13 Mar 1982",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "Mantenimiento",
                "op": "PIA (F-35 Upgrade)",
                "desc": "Sometido a un PIA (Planned Incremental Availability) de $34 millones integrando terminales y cubiertas para F-35C.",
                "sources": [
                    {
                        "name": "Defense News",
                        "url": "https://www.defensenews.com/naval/2020/09/02/the-us-navys-first-f-35c-carrier-leaves-the-yard/"
                    }
                ]
            },
            {
                "date": "2020-09-02",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Arribo Base Coronado",
                "desc": "Recalando en puerto tras culminar exitosas pruebas de encaje del F-35C (Lightning II).",
                "sources": [
                    {
                        "name": "Navy Times",
                        "url": "https://www.navytimes.com/news/your-navy/2020/09/03/carl-vinson-arrives-in-san-diego/"
                    }
                ]
            },
            {
                "date": "2021-08-02",
                "lat": 18,
                "lng": 132,
                "name": "Mar de Filipinas",
                "status": "Desplegado",
                "op": "Debut Cazas F-35C",
                "desc": "Zarpando hacia occidente marcando la historia como el primer portaaviones con una mezcla completa de 5ta Generación embarcada.",
                "sources": [
                    {
                        "name": "The War Zone",
                        "url": "https://www.thedrive.com/the-war-zone/41793/uss-carl-vinson-is-the-first-carrier-to-deploy-with-f-35cs-and-cmv-22bs"
                    }
                ]
            },
            {
                "date": "2022-01-24",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Incidente F-35 Ramp Strike",
                "desc": "Accidente operativo. Un F-35C impactó la cubierta trasera cayendo al fondo del océano. Las tareas MASIVAS de rescate submarino duraron meses.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "https://news.usni.org/2022/03/03/navy-recovers-f-35c-that-crashed-on-uss-carl-vinson-in-the-south-china-sea"
                    }
                ]
            },
            {
                "date": "2023-11-20",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Operación Tres Portaaviones",
                "desc": "Formación de escuadra pesada junto a buques aliados para aplastar diplomáticamente la presión china sobre la línea de los 9 puntos.",
                "sources": [
                    {
                        "name": "Stars and Stripes",
                        "url": "https://www.stripes.com/branches/navy/2023-11-21/vinson-carrier-south-china-sea-12122606.html"
                    }
                ]
            },
            {
                "date": "2024-06-25",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "RIMPAC 2024",
                "desc": "Buque Insignia en aguas hawaianas, dirigiendo fuego naval internacional en ejercicios letales SINKEX.",
                "sources": [
                    {
                        "name": "Pacific Fleet (RIMPAC)",
                        "url": "https://www.cpf.navy.mil/RIMPAC/"
                    }
                ]
            },
            {
                "date": "2025-02-10",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Reacondicionamiento",
                "desc": "Enfocado en actualizar aviónica y municionaje en base naval Coronado tras el RIMPAC prolongado.",
                "sources": [
                    {
                        "name": "San Diego WebCams",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-11-15",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Campaña de Invierno",
                "desc": "Navegando hacia el Mar de Filipinas para ejercicios de denegación de área con aliados locales.",
                "sources": [
                    {
                        "name": "USNI Fleet Tracker",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-02-05",
                "lat": 13.438,
                "lng": 144.653,
                "name": "Naval Base Guam (Apra Harbor)",
                "status": "En Puerto",
                "op": "Recarga Logística",
                "desc": "Escala técnica en Apra Harbor para reponer suministros y rotación de personal tras 80 días en mar.",
                "sources": [
                    {
                        "name": "Guam Daily Post",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-01",
                "lat": 32.7,
                "lng": -117.19,
                "name": "NAS North Island, San Diego",
                "status": "En Puerto",
                "op": "Mantenimiento Programado",
                "desc": "Pierside tras el despliegue de 2025; ciclo de mantenimiento y descanso de tripulación.",
                "sources": [
                    {
                        "name": "OSINT Intelligence",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Mantenimiento Preventivo",
                "desc": "Atracado en North Island para rotación de tripulación y actualización de sistemas de defensa puntual. No desplegado en Epic Fury.",
                "sources": [
                    {
                        "name": "OSINT Track",
                        "url": "#"
                    }
                ]
            }
        ],
        "status": "En Puerto"
    },
    {
        "id": "cvn71",
        "name": "USS Theodore Roosevelt",
        "hull": "CVN-71",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_roosevelt_cvn71.png",
        "launched": "1984-10-27",
        "commissioned": "1986-10-25",
        "history": [
            {
                "date": "2020-01-17",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "Desplegado",
                "op": "Salida del Pacífico",
                "desc": "Soltó amarras desde Base Naval Coronado. Cámaras civiles lo filmaron pasando Point Loma zarpando a Asia.",
                "sources": [
                    {
                        "name": "San Diego CA Cams",
                        "url": "https://www.sandiegouniontribune.com/2020/01/17/aircraft-carrier-uss-theodore-roosevelt-departs-san-diego-for-deployment/"
                    }
                ]
            },
            {
                "date": "2020-03-24",
                "lat": 13.4,
                "lng": 144.7,
                "name": "Guam",
                "status": "Aislado",
                "op": "Crisis Sanitaria",
                "desc": "Atracado en Guam tras brote masivo de COVID-19 en la tripulación y relevo del Capitán Crozier.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-03-27",
                "lat": 13.438,
                "lng": 144.653,
                "name": "Naval Base Guam (Apra Harbor)",
                "status": "En Puerto",
                "op": "Crisis COVID-19 (Grave)",
                "desc": "Fondeo trágico para salvar a miles de marineros contaminados con el virus. Capt. Crozier lideró la carta que sacudió la moral del Pentágono.",
                "sources": [
                    {
                        "name": "San Francisco Chronicle",
                        "url": "https://www.sfchronicle.com/bayarea/article/Exclusive-Captain-of-aircraft-carrier-with-15167883.php"
                    }
                ]
            },
            {
                "date": "2020-07-09",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Regreso de Guam",
                "desc": "Retorno masivamente celebrado y protocolizado médicamente tras sobrevivir al brote más notorio de la fuerza aeronaval.",
                "sources": [
                    {
                        "name": "Navy PAO",
                        "url": "https://www.navy.mil/Press-Office/News-Stories/Article/2269557/uss-theodore-roosevelt-returns-from-deployment/"
                    }
                ]
            },
            {
                "date": "2021-01-23",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Libertad de Navegación",
                "desc": "Operaciones de ala fija para asegurar el libre tránsito en aguas internacionales en disputa.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2021-07-16",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "Mantenimiento",
                "op": "DPI (Dique Seco)",
                "desc": "Tránsito directo al estado de Washington para intervenciones masivas en dique seco reemplazando revestimientos nucleares.",
                "sources": [
                    {
                        "name": "Kitsap Sun",
                        "url": "https://www.kitsapsun.com/story/news/2021/07/16/uss-theodore-roosevelt-arrives-puget-sound-naval-shipyard/7998632002/"
                    }
                ]
            },
            {
                "date": "2023-08-01",
                "lat": 20,
                "lng": -140,
                "name": "Pacífico Oriental",
                "status": "Desplegado",
                "op": "Certificación de Mar",
                "desc": "Operaciones de certificación de la unidad tras dos años de encierro; alas Aéreas integradas superando pruebas.",
                "sources": [
                    {
                        "name": "US Navy Photos",
                        "url": "https://www.navy.mil/Resources/Photo-Gallery/"
                    }
                ]
            },
            {
                "date": "2024-01-11",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Misión Occidental",
                "desc": "Desplegado rápidamente bajo alertas rojas de comando, transitando rumbo a zonas asiático-oceánicas.",
                "sources": [
                    {
                        "name": "USNI Fleet Tracker",
                        "url": "https://news.usni.org/2024/01/16/usni-news-fleet-and-marine-tracker-jan-16-2024"
                    }
                ]
            },
            {
                "date": "2024-06-25",
                "lat": 26,
                "lng": 35,
                "name": "Mar Rojo Norte",
                "status": "Desplegado",
                "op": "Crisis CENTCOM (Relevo Ike)",
                "desc": "Transferencia caliente reemplazando al exhausto Grupo Eisenhower combatiendo enjambres hutíes bajo intenso castigo geográfico.",
                "sources": [
                    {
                        "name": "Reuters",
                        "url": "https://www.reuters.com/world/middle-east/us-sends-theodore-roosevelt-carrier-middle-east-houthis-attack-2024-06-22/"
                    }
                ]
            },
            {
                "date": "2024-11-01",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Homecoming Rest",
                "desc": "Ceremonias de regreso tras combatir drones en CENTCOM; el buque requiere revisión de casco por incrustaciones.",
                "sources": [
                    {
                        "name": "Navy Times",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-05-15",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Valiant Shield 25",
                "desc": "Liderando maniobras de saturación de misiles en la segunda cadena de islas; integración total con el USMC.",
                "sources": [
                    {
                        "name": "INDOPACOM",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 21.3,
                "lng": -157.8,
                "name": "Pearl Harbor, Hawaii",
                "status": "En Puerto",
                "op": "Escala de Tránsito",
                "desc": "Arribo a Pearl Harbor para reabastecimiento antes de continuar su despliegue hacia el Pacífico Occidental.",
                "sources": [
                    {
                        "name": "OSINT Hawaii",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn72",
        "name": "USS Abraham Lincoln",
        "hull": "CVN-72",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_lincoln_cvn72.png",
        "launched": "13 Feb 1988",
        "commissioned": "11 Nov 1989",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 20,
                "lng": -140,
                "name": "Pacífico Oriental",
                "status": "Desplegado",
                "op": "Final Deployment 19 (Record)",
                "desc": "Atravesando el océano tras agotar el histórico despliegue de 295 días operando solitarios bajo tensión geopolítica.",
                "sources": [
                    {
                        "name": "US Navy Press",
                        "url": "https://www.navy.mil/Press-Office/News-Stories/Article/2269557/"
                    }
                ]
            },
            {
                "date": "2020-01-20",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Cambio de Flota",
                "desc": "Atracado triunfal asumiendo su nueva base oficial y asimilando el control operativo táctico del mando del Pacífico.",
                "sources": [
                    {
                        "name": "Naval Base Coronado PAO",
                        "url": "https://coronadotimes.com/news/2020/01/20/uss-abraham-lincoln-completes-historic-deployment/"
                    }
                ]
            },
            {
                "date": "2022-01-03",
                "lat": 18,
                "lng": 132,
                "name": "Mar de Filipinas",
                "status": "Desplegado",
                "op": "USMC F-35C Deploy",
                "desc": "El primer destacamento élite de aviadores del Cuerpo de Marines validando despegues 'Ramparts' de 5ta Gen en el teatro asiático.",
                "sources": [
                    {
                        "name": "Marine Corps Times",
                        "url": "https://www.marinecorpstimes.com/news/your-marine-corps/2022/01/05/first-marine-f-35c-squadron-deploys-on-carrier-lincoln/"
                    }
                ]
            },
            {
                "date": "2023-05-10",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Alistamiento Material",
                "desc": "Recibiendo nuevos paquetes de comunicaciones satelitales (SATCOM) documentados visualmente por andamios perimetrales masivos.",
                "sources": [
                    {
                        "name": "Local Defense Spotters",
                        "url": "https://twitter.com/"
                    }
                ]
            },
            {
                "date": "2024-07-20",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Marcha hacia Medio Oriente",
                "desc": "Orden fulminante del Secretario de Defensa; ordenó arrancar turbinas a máxima potencia cruzando el Pacífico saltándose paradas logísticas.",
                "sources": [
                    {
                        "name": "DoD Press Operations",
                        "url": "https://www.defense.gov/News/Releases/Release/Article/3869279/statement-by-deputy-pentagon-press-secretary-sabrina-singh-on-force-posture/"
                    }
                ]
            },
            {
                "date": "2024-08-11",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo",
                "status": "Desplegado",
                "op": "Epic Fury Prep",
                "desc": "Rápido tránsito desde el Pacífico para reforzar el CENTCOM.",
                "sources": [
                    {
                        "name": "OSINT Historical Archive",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-10-15",
                "lat": 24,
                "lng": 59,
                "name": "Golfo de Omán",
                "status": "Desplegado",
                "op": "Operación Sentinel North",
                "desc": "Extensión de despliegue en CENTCOM ante la inestabilidad en el Estrecho de Ormuz.",
                "sources": [
                    {
                        "name": "CENTCOM",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-05-12",
                "lat": 26,
                "lng": 52,
                "name": "Golfo Pérsico",
                "status": "Desplegado",
                "op": "Guerra de Irán (Epic Fury)",
                "desc": "Participación activa en misiones de supresión de defensas aéreas (SEAD). Sus F/A-18E neutralizaron baterías costeras en la Isla de Qeshm.",
                "sources": [
                    {
                        "name": "OSINT Tactical Reports",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-09-10",
                "lat": 32.7,
                "lng": -117.195,
                "name": "Naval Base Coronado, San Diego",
                "status": "En Puerto",
                "op": "Retorno de Combate",
                "desc": "Arribo a San Diego tras 14 meses de despliegue batiendo récords de permanencia en zona de guerra.",
                "sources": [
                    {
                        "name": "Pacific Fleet PAO",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Desplegado",
                "op": "Patrulla Mar Arábigo",
                "desc": "Intervenciones clandestinas desarticulando redes de contrabando ilícito y armas en la cuenca del Índico.",
                "sources": [
                    {
                        "name": "OSINT Maritime",
                        "url": "#"
                    }
                ]
            }
        ],
        "status": "Desplegado"
    },
    {
        "id": "cvn73",
        "name": "USS George Washington",
        "hull": "CVN-73",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_washington_cvn73.png",
        "launched": "21 Jul 1990",
        "commissioned": "4 Jul 1992",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "RCOH Abismal",
                "desc": "Desconcierto OSINT; la nave permaneció años atrapada reconstruyendo su núcleo radiactivo bajo la atenta vigilancia de entes civiles.",
                "sources": [
                    {
                        "name": "HII Press Reports",
                        "url": "https://hii.com/news/"
                    }
                ]
            },
            {
                "date": "2023-05-22",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "En Puerto",
                "op": "Culminación RCOH",
                "desc": "Entrega oficial tras 2,110 días de mantenimiento atroz. El Pentágono reconoció el récord negativo de durabilidad astillera.",
                "sources": [
                    {
                        "name": "Defense One",
                        "url": "https://www.defenseone.com/policy/2023/05/navy-returns-carrier-fleet-after-nearly-six-years-maintenance/386650/"
                    }
                ]
            },
            {
                "date": "2024-04-25",
                "lat": -25,
                "lng": -40,
                "name": "Atlántico Sur",
                "status": "Desplegado",
                "op": "Southern Seas 2024",
                "desc": "Circunnavegando pacíficamente el Cono Sur; un portento tecnológico realizando ceremonias navales formales con Marinas iberoamericanas aliadas.",
                "sources": [
                    {
                        "name": "Armada Argentina Oficial",
                        "url": "https://www.argentina.gob.ar/armada"
                    }
                ]
            },
            {
                "date": "2024-11-20",
                "lat": 35.288,
                "lng": 139.658,
                "name": "CFA Yokosuka (Berth 12)",
                "status": "En Puerto",
                "op": "Relevo FDNF-J",
                "desc": "Reemplazando soberanamente al Ronald Reagan. Multitudes con cámaras telemétricas paralizaron el tráfico nipón grabando su gigantesco fondeo en la Bahía de Tokio.",
                "sources": [
                    {
                        "name": "NHK News / Spotters",
                        "url": "https://www3.nhk.or.jp/nhkworld/"
                    }
                ]
            },
            {
                "date": "2026-03-10",
                "lat": 35.29,
                "lng": 139.67,
                "name": "Yokosuka, Japón",
                "status": "En Puerto",
                "op": "Fuerza Desplegada (FDNF-J)",
                "desc": "Asume oficialmente el rol de portaaviones de respuesta inmediata en el Pacífico Occidental tras relevar al USS Ronald Reagan.",
                "sources": [
                    {
                        "name": "OSINT Intelligence",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-13",
                "lat": 35.288,
                "lng": 139.658,
                "name": "CFA Yokosuka (Berth 12)",
                "status": "En Puerto",
                "op": "Base Adelantada",
                "desc": "Vigilancia satelital demostró recarga táctica de contenedores RAM/ESSM presuntamente para suplir escoltas exhaustos.",
                "sources": [
                    {
                        "name": "PlanetScope OSINT",
                        "url": "https://planet.com/"
                    }
                ]
            }
        ],
        "status": "En Puerto"
    },
    {
        "id": "cvn78",
        "name": "USS Gerald R. Ford",
        "hull": "CVN-78",
        "cls": "Clase Ford (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_ford_cvn78.png",
        "launched": "2013-11-09",
        "commissioned": "2017-07-22",
        "history": [
            {
                "date": "2017-07-22",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "Mantenimiento",
                "op": "Entrada en Servicio",
                "desc": "Ceremonia de entrada en servicio de la unidad líder de su clase.",
                "sources": [{ "name": "US Navy", "url": "#" }]
            },
            {
                "date": "2021-08-08",
                "lat": 40,
                "lng": -60,
                "name": "Océano Atlántico",
                "status": "Desplegado",
                "op": "Full Ship Shock Trials",
                "desc": "Pruebas de choque con explosivos reales para validar la resistencia del casco Clase Ford.",
                "sources": [{ "name": "USNI News", "url": "https://news.usni.org/2021/08/09/uss-gerald-r-ford-completes-final-explosive-event-of-full-ship-shock-trials" }]
            },
            {
                "date": "2022-10-04",
                "lat": 60,
                "lng": -20,
                "name": "Atlántico Norte (GIUK)",
                "status": "Desplegado",
                "op": "Silent Wolverine",
                "desc": "Primer despliegue operativo limitado integrando la 2da Flota.",
                "sources": [{ "name": "OSINT Track", "url": "#" }]
            },
            {
                "date": "2023-05-02",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "Desplegado",
                "op": "Carrier Strike Group 12",
                "desc": "Zarpada para su primer despliegue completo de larga duración hacia el Mediterráneo.",
                "sources": [{ "name": "USNI", "url": "#" }]
            },
            {
                "date": "2023-10-08",
                "lat": 34,
                "lng": 32,
                "name": "Mediterráneo Oriental",
                "status": "Desplegado",
                "op": "Contención Israel-Gaza",
                "desc": "Reposicionamiento inmediato ante el conflicto regional para disuasión estratégica.",
                "sources": [{ "name": "CENTCOM", "url": "#" }]
            },
            {
                "date": "2024-01-17",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Retorno de Despliegue",
                "desc": "Fin del despliegue extendido de 239 días en el Mediterráneo.",
                "sources": [{ "name": "Navy Times", "url": "#" }]
            },
            {
                "date": "2025-01-10",
                "lat": 15,
                "lng": -75,
                "name": "Mar Caribe",
                "status": "Desplegado",
                "op": "Operación Libertad (Caribe)",
                "desc": "Presencia naval en el Caribe para protección de rutas comerciales ante inestabilidad política.",
                "sources": [{ "name": "Intel Brief", "url": "#" }]
            },
            {
                "date": "2026-03-12",
                "lat": 35.49,
                "lng": 24.08,
                "name": "NSA Souda Bay, Creta",
                "status": "Averiado",
                "op": "Emergencia en Mar",
                "desc": "Incendio accidental en zona de habitabilidad; atraque de emergencia en Souda Bay.",
                "sources": [{ "name": "OSINT Intelligence", "url": "#" }]
            },
            {
                "date": "2026-03-24",
                "lat": 35.495,
                "lng": 24.175,
                "name": "NSA Souda Bay (Marathi Pier)",
                "status": "Averiado",
                "op": "Operación Epic Fury (Logística)",
                "desc": "Capacidad de combate mermada. Reparaciones críticas en curso mientras coordina enlace de datos con la flota.",
                "sources": [{ "name": "USNI Fleet Tracker", "url": "#" }]
            }
        ],
        "status": "Averiado / Reparación"
    },
    {
        "id": "cdg91",
        "name": "FS Charles de Gaulle",
        "hull": "R91",
        "cls": "Marine Nationale (Francia)",
        "country": "Francia",
        "photo": "./assets/ships/cdg_r91.png",
        "launched": "7 May 1994",
        "commissioned": "18 May 2001",
        "history": [
            {
                "date": "2001-12-01",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Desplegado",
                "op": "Operación Héraclès (Afganistán)",
                "desc": "Primer despliegue de combate tras el 9/11 apoyando a la coalición.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2011-03-20",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Operación Harmattan (Libia)",
                "desc": "Más de 1,350 salidas de combate contra las fuerzas de Gadafi.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2015-02-23",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Operación Chammal (Siria/Irak)",
                "desc": "Ataques sostenidos contra el ISIS (Daesh).",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-01-01",
                "lat": 43.118,
                "lng": 5.922,
                "name": "Base Navale de Toulon (Milhaud)",
                "status": "En Puerto",
                "op": "Alistamiento Dique",
                "desc": "Preparativos nucleares estáticos en la emblemática base militar de la milicia marina francesa.",
                "sources": [
                    {
                        "name": "Ministère des Armées",
                        "url": "https://www.defense.gouv.fr/marine"
                    }
                ]
            },
            {
                "date": "2020-01-21",
                "lat": 34,
                "lng": 32,
                "name": "Mediterráneo Oriental",
                "status": "Desplegado",
                "op": "Misión Foch",
                "desc": "Liderando ataques letales conjuntos. Rafales de carga superpesada perforaron campamentos desérticos de células terroristas resguardadas.",
                "sources": [
                    {
                        "name": "Le Figaro",
                        "url": "https://www.lefigaro.fr/international"
                    }
                ]
            },
            {
                "date": "2021-02-21",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Desplegado",
                "op": "Misión Clemenceau 21",
                "desc": "Colateralizando su peso nuclear, lideró maniobras cruzadas integrales respaldando la superioridad aérea aliada frente a potencias asiáticas.",
                "sources": [
                    {
                        "name": "Opex360",
                        "url": "http://www.opex360.com/"
                    }
                ]
            },
            {
                "date": "2022-02-01",
                "lat": 42,
                "lng": 16,
                "name": "Mar Adriático",
                "status": "Desplegado",
                "op": "Clemenceau 22 / OTAN",
                "desc": "Choque absoluto. Su misión civil se anuló para proyectar superioridad y dominación radar en Europa del este a vísperas de la guerra ruso-ucraniana.",
                "sources": [
                    {
                        "name": "Flightradar24 / NATO",
                        "url": "https://www.nato.int/"
                    }
                ]
            },
            {
                "date": "2024-04-26",
                "lat": 34,
                "lng": 32,
                "name": "Mediterráneo Oriental",
                "status": "Desplegado",
                "op": "Misión AKILA",
                "desc": "Despliegue bajo mando directo STRIKFORNATO por primera vez; interoperabilidad con la 6ta Flota de EE.UU.",
                "sources": [
                    {
                        "name": "NATO",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-11-28",
                "lat": -5,
                "lng": 70,
                "name": "Océano Índico",
                "status": "Desplegado",
                "op": "Misión Clemenceau 25",
                "desc": "Zarpada hacia el Indo-Pacífico para ejercicios VARUNA; validación de la soberanía francesa en ultramar.",
                "sources": [
                    {
                        "name": "Marine Nationale",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-06-12",
                "lat": 43.118,
                "lng": 5.922,
                "name": "Base Navale de Toulon (Milhaud)",
                "status": "En Puerto",
                "op": "Mantenimiento Inter-Ciclo",
                "desc": "Actualización de sistemas de guerra electrónica (EW) y descanso de la dotación nuclear.",
                "sources": [
                    {
                        "name": "Opex360",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-22",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Campaña del Mediterráneo",
                "desc": "Vigilancia reforzada ante la inestabilidad en el flanco sur de la OTAN.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 36,
                "lng": 17,
                "name": "Mar Jónico / Med Central",
                "status": "Desplegado",
                "op": "Vigilancia Reforzada",
                "desc": "Patrullas de rutina lanzando aviones E-2C Hawkeye para monitorizar corredores logísticos.",
                "sources": [
                    {
                        "name": "Copernicus",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "qnlz8",
        "name": "HMS Queen Elizabeth",
        "hull": "R08",
        "cls": "Royal Navy (Reino Unido)",
        "country": "Reino Unido",
        "photo": "./assets/ships/hms_queen_elizabeth_r08.png",
        "launched": "17 Jul 2014",
        "commissioned": "7 Dec 2017",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 50.806,
                "lng": -1.103,
                "name": "HMNB Portsmouth (Princess Royal Jetty)",
                "status": "En Puerto",
                "op": "Certificación Aérea",
                "desc": "Alineando escuadrones y puliendo los ejercicios F-35 con pilotos norteamericanos del Cuerpo de Marines.",
                "sources": [
                    {
                        "name": "UK MoD Press",
                        "url": "https://www.gov.uk/government/organisations/ministry-of-defence"
                    }
                ]
            },
            {
                "date": "2020-10-04",
                "lat": 56.5,
                "lng": 3.5,
                "name": "Mar del Norte / Jutlandia",
                "status": "Desplegado",
                "op": "Joint Warrior 20-2",
                "desc": "Liderando una masiva flotilla de choque en un clima nórdico nefasto junto a 11 buques combinados aliados.",
                "sources": [
                    {
                        "name": "NATO MARCOM",
                        "url": "https://mc.nato.int/"
                    }
                ]
            },
            {
                "date": "2021-05-01",
                "lat": 50.806,
                "lng": -1.103,
                "name": "HMNB Portsmouth (Princess Royal Jetty)",
                "status": "Desplegado",
                "op": "Expedición CSG21",
                "desc": "Ceremonial salida desde el Támesis expandiéndose hacia tierras asiáticas; un renacimiento apoteósico grabado por miles de civiles.",
                "sources": [
                    {
                        "name": "The Telegraph",
                        "url": "https://www.telegraph.co.uk/hms-queen-elizabeth/"
                    }
                ]
            },
            {
                "date": "2021-06-18",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Operación Shader (Irak/Siria)",
                "desc": "Primeros ataques de combate del F-35B británico contra el ISIS.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2021-09-01",
                "lat": 18,
                "lng": 132,
                "name": "Mar de Filipinas",
                "status": "Desplegado",
                "op": "Desafío Asio-Pacífico",
                "desc": "Cruzando dominios tensos sin transpondedores ante la amenaza electrónica continental; buques vigía ocasionales confirmaron su ruta.",
                "sources": [
                    {
                        "name": "VesselFinder OSINT",
                        "url": "https://www.vesselfinder.com/"
                    }
                ]
            },
            {
                "date": "2022-12-10",
                "lat": 50.806,
                "lng": -1.103,
                "name": "HMNB Portsmouth (Princess Royal Jetty)",
                "status": "En Puerto",
                "op": "Descanso del Buque Insignia",
                "desc": "Invernando en el Reino Unido reparando fatiga de materiales menores tras el desgaste oriental.",
                "sources": [
                    {
                        "name": "Portsmouth Cams",
                        "url": "https://www.portsmouth.co.uk/"
                    }
                ]
            },
            {
                "date": "2024-02-04",
                "lat": 50.806,
                "lng": -1.103,
                "name": "HMNB Portsmouth (Princess Royal Jetty)",
                "status": "Mantenimiento",
                "op": "Fallo de Acoplamiento",
                "desc": "Cancelación repentina de su participación en Steadfast Defender 24 tras detectarse problemas graves en el acoplamiento del eje de estribor.",
                "sources": [
                    {
                        "name": "Navy Lookout",
                        "url": "https://www.navylookout.com/"
                    }
                ]
            },
            {
                "date": "2024-07-25",
                "lat": 50.806,
                "lng": -1.103,
                "name": "HMNB Portsmouth (Princess Royal Jetty)",
                "status": "En Puerto",
                "op": "Fin de Reparaciones",
                "desc": "Retorno a Portsmouth tras completar exitosas pruebas de mar post-reparación en Rosyth; ambos ejes han sido rehabilitados.",
                "sources": [
                    {
                        "name": "Royal Navy Twitter",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-07-01",
                "lat": 57.8,
                "lng": 9,
                "name": "Estrecho de Skagerrak (Paso Báltico/Norte)",
                "status": "Mantenimiento",
                "op": "Upkeep Rosyth",
                "desc": "Ingreso en dique seco en Rosyth para un periodo programado de mantenimiento y actualización de sistemas de navegación.",
                "sources": [
                    {
                        "name": "UK MoD",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-10-10",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Crisis de Ormuz (2025)",
                "desc": "Despliegue preventivo en el Índico para asegurar el comercio global del petróleo.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 57.8,
                "lng": 9,
                "name": "Estrecho de Skagerrak (Paso Báltico/Norte)",
                "status": "Mantenimiento",
                "op": "Fase Final Upkeep",
                "desc": "Calibración final de sistemas de radar Artisan 3D; tripulación de núcleo reincorporada para pruebas de puerto.",
                "sources": [
                    {
                        "name": "Royal Navy Tracker",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "pow9",
        "name": "HMS Prince of Wales",
        "hull": "R09",
        "cls": "Royal Navy (Reino Unido)",
        "country": "Reino Unido",
        "photo": "./assets/ships/hms_prince_of_wales_r09.png",
        "launched": "21 Dec 2017",
        "commissioned": "10 Dec 2019",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 50.806,
                "lng": -1.103,
                "name": "HMNB Portsmouth (Princess Royal Jetty)",
                "status": "En Puerto",
                "op": "Depuración Post-Alta",
                "desc": "Fase resolviendo filtraciones de agua menores en bodegas inferiores reportadas por la prensa nacional.",
                "sources": [
                    {
                        "name": "BBC News Hampshire",
                        "url": "https://www.bbc.com/news/england/hampshire"
                    }
                ]
            },
            {
                "date": "2021-05-30",
                "lat": 60,
                "lng": -20,
                "name": "Atlántico Norte (GIUK)",
                "status": "Desplegado",
                "op": "Operación Sea Defender",
                "desc": "Debut de guerra con helicópteros Apache (Army Air Corps) perfeccionando asaltos marítimos bajo visión nocturna estricta.",
                "sources": [
                    {
                        "name": "UK Defence Journal",
                        "url": "https://www.ukdefencejournal.org.uk/"
                    }
                ]
            },
            {
                "date": "2022-08-27",
                "lat": 50.806,
                "lng": -1.103,
                "name": "HMNB Portsmouth (Princess Royal Jetty)",
                "status": "Mantenimiento",
                "op": "Rotura de Acoplamiento",
                "desc": "Varamiento caótico e irreversible zarpando hacia Norteamérica. Miles de curiosos presenciaron la humillante falla en vivo.",
                "sources": [
                    {
                        "name": "Shipspotting Hampshire",
                        "url": "https://hants.co.uk/"
                    }
                ]
            },
            {
                "date": "2023-09-01",
                "lat": 60,
                "lng": -20,
                "name": "Atlántico Norte (GIUK)",
                "status": "Desplegado",
                "op": "Westlant 23 (Drones)",
                "desc": "Redimido con hazañas vanguardistas lanzando prototipos 'Banshee' controlados desde pantallas remotas dentro de la nave.",
                "sources": [
                    {
                        "name": "QinetiQ Press",
                        "url": "https://www.qinetiq.com/"
                    }
                ]
            },
            {
                "date": "2024-02-12",
                "lat": 56.5,
                "lng": 3.5,
                "name": "Mar del Norte / Jutlandia",
                "status": "Desplegado",
                "op": "Steadfast Defender 24",
                "desc": "Lidera el mayor ejercicio de la OTAN en décadas tras reemplazar de urgencia al HMS Queen Elizabeth.",
                "sources": [
                    {
                        "name": "BBC News",
                        "url": "https://www.bbc.com/news/"
                    }
                ]
            },
            {
                "date": "2025-04-01",
                "lat": -5,
                "lng": 70,
                "name": "Océano Índico",
                "status": "Desplegado",
                "op": "Operación HIGHMAST",
                "desc": "Inicio de su despliegue global de 8 meses hacia el Indo-Pacífico.",
                "sources": [
                    {
                        "name": "UK Defence Journal",
                        "url": "https://ukdefencejournal.org.uk/"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 50.806,
                "lng": -1.103,
                "name": "HMNB Portsmouth (Princess Royal Jetty)",
                "status": "En Puerto",
                "op": "5-Day Readiness",
                "desc": "En Portsmouth con alerta de zarpada reducida a 5 días; preparativos de logística para Op. Firecrest.",
                "sources": [
                    {
                        "name": "Royal Navy PAO",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "jci61",
        "name": "Juan Carlos I",
        "hull": "L61",
        "cls": "Armada Española",
        "country": "España",
        "photo": "./assets/ships/esp_juan_carlos_l61.png",
        "launched": "2008-03-10",
        "commissioned": "2010-09-30",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 36.621,
                "lng": -6.333,
                "name": "Base Naval de Rota (Muelles 1 y 2)",
                "status": "En Puerto",
                "op": "Adiestramiento AV-8B+",
                "desc": "Atracado en Base de Rota manteniendo ciclo operativo incesante con la Novena Escuadrilla de Harriers.",
                "sources": [
                    {
                        "name": "Armada Española Oficial",
                        "url": "https://armada.defensa.gob.es/"
                    }
                ]
            },
            {
                "date": "2021-05-20",
                "lat": 60,
                "lng": -20,
                "name": "Atlántico Norte (GIUK)",
                "status": "Desplegado",
                "op": "Steadfast Defender 21",
                "desc": "Escoltado por fragatas AEGIS F-100 protegiendo las líneas atlánticas aliadas.",
                "sources": [
                    {
                        "name": "Defensa.com",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2022-06-18",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Grupo Dédalo / FLOTEX",
                "desc": "Despliegue operativo anfibio a lo largo del Mare Nostrum.",
                "sources": [
                    {
                        "name": "Revista Ejércitos",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-07-15",
                "lat": 36.621,
                "lng": -6.333,
                "name": "Base Naval de Rota (Muelles 1 y 2)",
                "status": "Mantenimiento",
                "op": "Refit Propulsión ABB",
                "desc": "Ingreso en dique seco para la sustitución de sistemas Azipod; modernización de la cubierta de vuelo para mayor carga térmica.",
                "sources": [
                    {
                        "name": "Defensa.com",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-12-20",
                "lat": 36.621,
                "lng": -6.333,
                "name": "Base Naval de Rota (Muelles 1 y 2)",
                "status": "En Puerto",
                "op": "Pruebas de Puerto",
                "desc": "Encendido de sistemas de combate y pruebas de estanqueidad post-carenero; radar Lanza-N calibrado.",
                "sources": [
                    {
                        "name": "Armada",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-06-05",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Operación Dédalo 25",
                "desc": "Proyección aeronaval en apoyo a la seguridad del flanco sur de la OTAN; ejercicios con la Marina Militaire.",
                "sources": [
                    {
                        "name": "Revista Ejércitos",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Misión DÉDALO 26",
                "desc": "Liderando la fuerza anfibia de respuesta rápida; los Harrier AV-8B+ operan en misiones de CAP permanentes.",
                "sources": [
                    {
                        "name": "Armada Española",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn74",
        "name": "USS John C. Stennis",
        "hull": "CVN-74",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_stennis_cvn74.png",
        "launched": "11 Nov 1993",
        "commissioned": "9 Dec 1995",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "Mantenimiento",
                "op": "Pre-RCOH",
                "desc": "Preparándose para la recarga compleja del reactor nuclear tras mudarse desde Bremerton.",
                "sources": [
                    {
                        "name": "Naval Sea Systems Command",
                        "url": "https://www.navsea.navy.mil/"
                    }
                ]
            },
            {
                "date": "2021-05-06",
                "lat": 37,
                "lng": -76.4,
                "name": "Newport News",
                "status": "Mantenimiento",
                "op": "RCOH (Media Vida)",
                "desc": "Inicio del proceso de recarga de combustible nuclear y modernización total; estimado hasta finales de 2026.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2021-05-15",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "RCOH Seco",
                "desc": "Ingreso formal al dique seco 11 de Newport News. Reactores apagados para extracción de combustible radiactivo.",
                "sources": [
                    {
                        "name": "HII Press Release",
                        "url": "https://hii.com/news/"
                    }
                ]
            },
            {
                "date": "2024-04-10",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "Dique Inundado",
                "desc": "El dique seco fue inundado sacando la enorme nave de vuelta al muelle para continuar modernizaciones internas.",
                "sources": [
                    {
                        "name": "USNI News Fleet Tracker",
                        "url": "https://news.usni.org/"
                    }
                ]
            },
            {
                "date": "2026-03-20",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "Pruebas Previas",
                "desc": "Cercano a finalizar su colosal refacción de media vida; rotores encendiéndose en el astillero.",
                "sources": [
                    {
                        "name": "Huntington Ingalls OSINT",
                        "url": "https://hii.com/"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn75",
        "name": "USS Harry S. Truman",
        "hull": "CVN-75",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_truman_cvn75.png",
        "launched": "7 Sep 1996",
        "commissioned": "25 Jul 1998",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Desplegado",
                "op": "Vigilancia Golfo de Omán",
                "desc": "Conteniendo la escalada bélica ras el asesinato del general Qasem Soleimani.",
                "sources": [
                    {
                        "name": "Navy Times",
                        "url": "https://www.navytimes.com/"
                    }
                ]
            },
            {
                "date": "2020-06-16",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Retorno a Casa",
                "desc": "Regresando de un despliegue desgastador en el Oriente Medio sin escalas por la pandemia.",
                "sources": [
                    {
                        "name": "US Navy Release",
                        "url": "https://www.navy.mil/"
                    }
                ]
            },
            {
                "date": "2022-02-24",
                "lat": 36,
                "lng": 17,
                "name": "Mar Jónico / Med Central",
                "status": "Desplegado",
                "op": "Guerra en Ucrania",
                "desc": "Orden de máxima alerta operando frenétricamente bajo jurisdicción europea tras la invasión rusa de Ucrania.",
                "sources": [
                    {
                        "name": "NATO MARCOM",
                        "url": "https://mc.nato.int/"
                    }
                ]
            },
            {
                "date": "2022-09-12",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Sostenimiento CIA",
                "desc": "Atracado en astillero militar en Virginia procesando toneladas de averías surgidas del largo viaje.",
                "sources": [
                    {
                        "name": "DoD Images",
                        "url": "https://www.defense.gov/Multimedia/Photos/"
                    }
                ]
            },
            {
                "date": "2024-09-23",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Pre-RCOH Norfolk",
                "desc": "Atracado en Norfolk iniciando las fases de descarga de munición previo a su ingreso en Newport News.",
                "sources": [
                    {
                        "name": "Naval Sea Systems",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-12-05",
                "lat": 26,
                "lng": 34,
                "name": "Mar Rojo",
                "status": "Desplegado",
                "op": "O.P. Inherent Resolve",
                "desc": "Tránsito del Canal de Suez y ataques contra milicias pro-iraníes en apoyo a la estabilidad regional.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-22",
                "lat": 36.9,
                "lng": -76.3,
                "name": "Norfolk",
                "status": "En Puerto",
                "op": "Preparación RCOH",
                "desc": "Ciclo final de operaciones antes de su desactivación para recarga nuclear prevista en junio 2026.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Alistamiento Dique",
                "desc": "Atracado en Norfolk; el grupo aéreo ha sido desembarcado antes del inicio del refit de media vida.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn76",
        "name": "USS Ronald Reagan",
        "hull": "CVN-76",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_reagan_cvn76.png",
        "launched": "4 Mar 2001",
        "commissioned": "12 Jul 2003",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 35.288,
                "lng": 139.658,
                "name": "CFA Yokosuka (Berth 12)",
                "status": "En Puerto",
                "op": "Forward Deployed",
                "desc": "Base permanente en Japón. El único portaaviones estacionado avanzado en continuo adiestramiento local.",
                "sources": [
                    {
                        "name": "Commander Fleet Activities Yokosuka",
                        "url": "https://cnrj.cnic.navy.mil/"
                    }
                ]
            },
            {
                "date": "2020-07-04",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Operación Dual Carriers",
                "desc": "Masiva demostración diplomática junto al Nimitz, perforando líneas disputadas por el ejército chino.",
                "sources": [
                    {
                        "name": "Reuters",
                        "url": "https://www.reuters.com/"
                    }
                ]
            },
            {
                "date": "2021-06-25",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Desplegado",
                "op": "Apoyo Extracción Afganistán",
                "desc": "Abandona asombrosamente Asia para apoyar la caótica caída bélica y el repliegue histórico de Kabul.",
                "sources": [
                    {
                        "name": "CNN Politics",
                        "url": "https://edition.cnn.com/"
                    }
                ]
            },
            {
                "date": "2022-08-01",
                "lat": 24.5,
                "lng": 119.5,
                "name": "Estrecho de Taiwán",
                "status": "Desplegado",
                "op": "Crisis Estrecho Taiwán",
                "desc": "Interceptado visualmente por cazas chinos protegiendo la visita pautada de delegados estadounidenses.",
                "sources": [
                    {
                        "name": "The War Zone",
                        "url": "https://www.thedrive.com/the-war-zone/"
                    }
                ]
            },
            {
                "date": "2024-05-16",
                "lat": 35.288,
                "lng": 139.658,
                "name": "CFA Yokosuka (Berth 12)",
                "status": "Desplegado",
                "op": "Despedida de Japón",
                "desc": "Adiós final tras 9 años de base nipona. Partida grabada emotivamente por decenas de miles de locales.",
                "sources": [
                    {
                        "name": "Stars and Stripes",
                        "url": "https://www.stripes.com/"
                    }
                ]
            },
            {
                "date": "2024-08-14",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "En Puerto",
                "op": "Llegada al Astillero",
                "desc": "Supliendo al Washington en Puget Sound; atenuando los radiadores con diques fríos rodeado de niebla.",
                "sources": [
                    {
                        "name": "Kitsap Sun",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-01-15",
                "lat": 47.5,
                "lng": -122.6,
                "name": "Bremerton",
                "status": "Mantenimiento",
                "op": "DPIA (Gran Escala)",
                "desc": "Inicia periodo de dique seco de 17 meses tras relevar su puesto en Japón.",
                "sources": [
                    {
                        "name": "OSINT Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-06-20",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "Mantenimiento",
                "op": "RCOH Prep",
                "desc": "Inicio de las fases preliminares para la recarga de combustible de media vida; desmantelamiento de sistemas secundarios.",
                "sources": [
                    {
                        "name": "Bremerton Sun",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-01-10",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "Mantenimiento",
                "op": "Overhaul Nuclear",
                "desc": "Inspección profunda de los reactores; el buque permanece en estado de 'cold iron' sin emisiones de calor detectables.",
                "sources": [
                    {
                        "name": "Satellite Thermal Ops",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 47.556,
                "lng": -122.636,
                "name": "Puget Sound Naval Shipyard, Bremerton",
                "status": "Mantenimiento",
                "op": "Cura Reactores PIA",
                "desc": "Completamente inmovilizado con techos de contención ambiental. No se espera que zarpe por varios meses.",
                "sources": [
                    {
                        "name": "Naval Technology",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn77",
        "name": "USS George H.W. Bush",
        "hull": "CVN-77",
        "cls": "Clase Nimitz (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_bush_cvn77.png",
        "launched": "2006-10-09",
        "commissioned": "2009-01-10",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "Mantenimiento",
                "op": "DPIA (Drydocking)",
                "desc": "En dique seco de Norfolk Naval Shipyard para revisión intensiva de propulsión nuclear.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-08-30",
                "lat": 37,
                "lng": -76.4,
                "name": "Newport News",
                "status": "Mantenimiento",
                "op": "DPIA",
                "desc": "Salida del dique seco tras 28 meses de reparaciones estructurales.",
                "sources": [
                    {
                        "name": "OSINT Historical Archive",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2022-08-10",
                "lat": 34,
                "lng": 25,
                "name": "Mediterráneo",
                "status": "Desplegado",
                "op": "Neptune Strike",
                "desc": "Liderando ejercicios de alta intensidad con la OTAN en respuesta a la crisis europea.",
                "sources": [
                    {
                        "name": "OSINT Historical Archive",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2022-08-31",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "O.P. Inherent Resolve",
                "desc": "Liderando el Grupo de Combate 10 proyectando poder aéreo en el Mediterráneo y Mar Negro.",
                "sources": [
                    {
                        "name": "Navy News Service",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-11-10",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Alistamiento Crítico",
                "desc": "Preparativos de emergencia ante la escalada en el Caribe y la crisis en el eje Caracas-Habana.",
                "sources": [
                    {
                        "name": "OSINT 5th Fleet",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-01-24",
                "lat": 23.6,
                "lng": -81.2,
                "status": "Desplegado",
                "op": "Operación Absolute Resolve",
                "desc": "Presión estratégica a 60mn de Varadero (Cuba) tras la captura de Nicolás Maduro en Caracas. Mensaje directo a La Habana.",
                "sources": [
                    {
                        "name": "Zona Militar",
                        "url": "https://www.zona-militar.com/"
                    }
                ]
            },
            {
                "date": "2026-03-05",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Cierre COMPTUEX",
                "desc": "Regreso a Virginia tras certificar su grupo para despliegue inminente en CENTCOM (Oriente Medio).",
                "sources": [
                    {
                        "name": "US Navy PAO",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 29.9,
                "lng": 32.5,
                "name": "Canal de Suez (Tránsito)",
                "status": "Tránsito",
                "op": "Ruta CENTCOM",
                "desc": "Tránsito hacia el Mar Rojo para sumarse al despliegue masivo frente a Irán (Operación Epic Fury).",
                "sources": [
                    {
                        "name": "OSINT Fleet Tracker",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-25",
                "lat": 36.9,
                "lng": -76.3,
                "name": "Norfolk",
                "status": "En Puerto",
                "op": "Despliegue Inminente",
                "desc": "Alistamiento final para zarpar hacia el Mediterráneo Oriental (Epic Fury).",
                "sources": [
                    {
                        "name": "OSINT Historical Archive",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn79",
        "name": "USS John F. Kennedy",
        "hull": "CVN-79",
        "cls": "Clase Ford (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_kennedy_cvn79.png",
        "launched": "29 Oct 2019",
        "commissioned": "2025",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "Construcción Dique",
                "desc": "El coloso flotante fue capturado por satélites civiles tomando forma letal. Los radares AESA Dual Band se integran sin descanso.",
                "sources": [
                    {
                        "name": "HII Newport OSINT",
                        "url": "https://hii.com/facilities/newport-news-shipbuilding/"
                    }
                ]
            },
            {
                "date": "2022-12-15",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "En Puerto",
                "op": "Pruebas Electromagnéticas CAT",
                "desc": "Activando por primera vez a máxima escala las letales catapultas magnéticas EMALS; se lanzaron pesados lastres vehiculares a mar abierto.",
                "sources": [
                    {
                        "name": "Naval Sea Systems YouTube",
                        "url": "https://www.youtube.com/navsea"
                    }
                ]
            },
            {
                "date": "2024-07-31",
                "lat": 40,
                "lng": -60,
                "name": "Océano Atlántico",
                "status": "Desplegado",
                "op": "Alpha Sea Trials",
                "desc": "Navegando autónomo cortando olas. Contratistas y militares validan estabilizadores masivos frente a costas de Virginia.",
                "sources": [
                    {
                        "name": "USNI News Builder Trials",
                        "url": "https://news.usni.org/"
                    }
                ]
            },
            {
                "date": "2025-11-20",
                "lat": 36.953,
                "lng": -76.33,
                "name": "Naval Station Norfolk (Piers 11/12)",
                "status": "En Puerto",
                "op": "Commissioning / Alta",
                "desc": "Bandera al viento. Recibe oficialmente el título de USS con ceremonias altamente blindadas y restrictivas.",
                "sources": [
                    {
                        "name": "Navy Live TV",
                        "url": "https://www.navy.mil/Press-Office/News-Stories/"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 40,
                "lng": -60,
                "name": "Océano Atlántico",
                "status": "Desplegado",
                "op": "Testeo de Cazas 5ta Gen",
                "desc": "Desempeñando misiones atlánticas de calificación con aviones fantasma, perfilando sus primeras patrullas bélicas.",
                "sources": [
                    {
                        "name": "Aviation Week OSINT",
                        "url": "https://aviationweek.com/"
                    }
                ]
            }
        ]
    },
    {
        "id": "cvn80",
        "name": "USS Enterprise",
        "hull": "CVN-80",
        "cls": "Clase Ford (EE.UU.)",
        "country": "EE.UU.",
        "photo": "./assets/ships/uss_enterprise_cvn80.png",
        "launched": "Nov 2025",
        "commissioned": "2028",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "Colocación de Quilla",
                "desc": "Ensamblaje temprano en dique con acero nuclear fundido de las ruinas gloriosas del anterior portaaviones (CVN-65).",
                "sources": [
                    {
                        "name": "HII Steel Cut",
                        "url": "https://hii.com/"
                    }
                ]
            },
            {
                "date": "2023-04-10",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "Izado Isla Principal",
                "desc": "La superestructura colosal de mando se ancló sobre la cubierta; evento detectado vía Google Earth de alta resolución.",
                "sources": [
                    {
                        "name": "Google Earth Pro Imagery",
                        "url": "https://earth.google.com/web/"
                    }
                ]
            },
            {
                "date": "2025-11-15",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "Botadura Seca",
                "desc": "Las recámaras se inundaron bautizando simbólicamente su casco a salvo; prosiguen dotaciones modulares sin fin.",
                "sources": [
                    {
                        "name": "Defensa USA OSINT",
                        "url": "https://www.defense.gov/"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 36.985,
                "lng": -76.442,
                "name": "Newport News Shipbuilding",
                "status": "Mantenimiento",
                "op": "Astilleros de Ensamblaje",
                "desc": "Permanece sin movimiento encajado en andamios y puentes grúa en pleno corazón de cazas Virginia.",
                "sources": [
                    {
                        "name": "Local Norfolk Spotters",
                        "url": "https://twitter.com/search?q=CVN-80"
                    }
                ]
            }
        ]
    },
    {
        "id": "cavour",
        "name": "ITS Cavour",
        "hull": "C 550",
        "cls": "Armada Italiana (Marina Militare)",
        "country": "Italia",
        "photo": "./assets/ships/ita_cavour_c550.png",
        "launched": "20 Jul 2004",
        "commissioned": "27 Mar 2008",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "Mantenimiento",
                "op": "Adaptación F-35B",
                "desc": "Sometido a masivas reformas en el arsenal de Tarento asimilando recubrimientos térmicos de cubierta para soportar el chorro de los cazas F-35B.",
                "sources": [
                    {
                        "name": "Naval News",
                        "url": "https://www.navalnews.com/naval-news/2020/05/italian-navys-aircraft-carrier-cavour-completes-f-35b-upgrade-work/"
                    }
                ]
            },
            {
                "date": "2020-05-15",
                "lat": 36,
                "lng": 17,
                "name": "Mar Jónico / Med Central",
                "status": "Desplegado",
                "op": "Pruebas de Mar",
                "desc": "Zarpando del astillero para calibrar sistemas de vuelo tras 16 meses de inmovilización técnica profunda.",
                "sources": [
                    {
                        "name": "Marina Militare",
                        "url": "https://www.marina.difesa.it/"
                    }
                ]
            },
            {
                "date": "2021-02-28",
                "lat": 36.5,
                "lng": -70,
                "name": "Atlántico Occidental (US East Coast)",
                "status": "Desplegado",
                "op": "Ready for Operations (RFO)",
                "desc": "Cruzando el Atlántico hacia Norfolk para lograr la histórica primera certificación y sinergia de vuelo con aviones F-35B de rescate.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "https://news.usni.org/2021/02/16/italian-aircraft-carrier-cavour-arrives-in-norfolk-for-f-35b-trials"
                    }
                ]
            },
            {
                "date": "2021-04-30",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "En Puerto",
                "op": "Retorno Triunfal RFO",
                "desc": "Atraque estelar en Tarento, recibido con honores tras certificar su interoperabilidad de 5ta Generación en América.",
                "sources": [
                    {
                        "name": "Defense News",
                        "url": "https://www.defensenews.com/global/europe/"
                    }
                ]
            },
            {
                "date": "2021-09-01",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Mare Aperto 21",
                "desc": "Comandando ejercicios gigantescos de la OTAN en el Mediterráneo, desplegando todo su arsenal logístico y aéreo.",
                "sources": [
                    {
                        "name": "NATO MARCOM",
                        "url": "https://mc.nato.int/"
                    }
                ]
            },
            {
                "date": "2022-05-10",
                "lat": 42,
                "lng": 16,
                "name": "Mar Adriático",
                "status": "Desplegado",
                "op": "Ejercicio Mare Aperto 22-1",
                "desc": "Inflexión masiva en el Mar Adriático y Jónico liderando maniobras anfibias integradas con fuerzas europeas e incursiones simuladas.",
                "sources": [
                    {
                        "name": "Rivista Italiana Difesa",
                        "url": "https://www.rid.it/"
                    }
                ]
            },
            {
                "date": "2023-01-20",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "Mantenimiento",
                "op": "Sostenimiento Preventivo",
                "desc": "Amarrado silenciosamente efectuando actualizaciones menores de combate y repotenciando sus misiles Aster 15.",
                "sources": [
                    {
                        "name": "RID OSINT",
                        "url": "https://www.rid.it/"
                    }
                ]
            },
            {
                "date": "2023-10-05",
                "lat": 36,
                "lng": 17,
                "name": "Mar Jónico / Med Central",
                "status": "Desplegado",
                "op": "Dynamic Mariner 23",
                "desc": "Proyectando músculo italiano en el Mediterráneo en demostraciones conjuntas franco-italianas frente a litorales africanos.",
                "sources": [
                    {
                        "name": "NATO Multimedia",
                        "url": "https://www.nato.int/cps/en/natohq/news.htm"
                    }
                ]
            },
            {
                "date": "2024-06-01",
                "lat": -5,
                "lng": 70,
                "name": "Océano Índico",
                "status": "Desplegado",
                "op": "Campaña Indo-Pacífico",
                "desc": "Despliegue operativo épico y sin precedentes. Cruzando el Canal de Suez y el Índico para proyectar poder naval europeo globalmente.",
                "sources": [
                    {
                        "name": "The Diplomat",
                        "url": "https://thediplomat.com/2024/06/italian-aircraft-carrier-strike-group-heads-to-indo-pacific/"
                    }
                ]
            },
            {
                "date": "2024-08-30",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Visita Yokosuka",
                "desc": "Arribo histórico a Japón, rompiendo los moldes diplomáticos del Pacífico y desafiando el control naval chino en la zona.",
                "sources": [
                    {
                        "name": "Japan Times",
                        "url": "https://www.japantimes.co.jp/"
                    }
                ]
            },
            {
                "date": "2024-11-05",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "En Puerto",
                "op": "Regreso del Pacífico",
                "desc": "Ingresando majestuoso al Golfo de Tarento tras circunnavegar el teatro asiático en la cima de la geopolítica mundial.",
                "sources": [
                    {
                        "name": "VesselFinder",
                        "url": "https://www.vesselfinder.com/"
                    }
                ]
            },
            {
                "date": "2025-02-15",
                "lat": 26,
                "lng": 35,
                "name": "Mar Rojo Norte",
                "status": "Desplegado",
                "op": "Operación Aspides",
                "desc": "Despliegue urgente. Defendiendo buques mercantes italianos de incursiones letales y ataques suicidas Hutíes en el infierno del Mar Rojo.",
                "sources": [
                    {
                        "name": "EUNAVFOR Aspides",
                        "url": "https://eeas.europa.eu/csdp-missions-operations/eunavfor-aspides"
                    }
                ]
            },
            {
                "date": "2025-09-10",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "Mantenimiento",
                "op": "Evaluación Daños Aspides",
                "desc": "Atraque forzoso para reponer municiones, tubos de cañones OTO Melara y evaluar fatiga estructural del combate asimétrico.",
                "sources": [
                    {
                        "name": "Analisi Difesa",
                        "url": "https://www.analisidifesa.it/"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "En Puerto",
                "op": "Garnición Golfo",
                "desc": "En silencio táctico resguardado dentro del puerto en las faldas de Tarento listos ante avisos del Adriático.",
                "sources": [
                    {
                        "name": "AIS Vessel Finder (Mil)",
                        "url": "https://www.vesselfinder.com/"
                    }
                ]
            }
        ]
    },
    {
        "id": "garibaldi",
        "name": "ITS Giuseppe Garibaldi",
        "hull": "C 551",
        "cls": "Clase Garibaldi (Marina Militare)",
        "country": "Italia",
        "photo": "./assets/ships/ita_garibaldi_c551.png",
        "launched": "4 Jun 1983",
        "commissioned": "30 Sep 1985",
        "history": [
            {
                "date": "1999-03-24",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Operación Allied Force (Kosovo)",
                "desc": "30 salidas de combate de Harriers italianos sobre Yugoslavia.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2011-03-20",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Operación Unified Protector (Libia)",
                "desc": "Lanzamiento de 160 bombas guiadas contra objetivos militares libios.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-01-01",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "En Puerto",
                "op": "Base Mar Grande",
                "desc": "El histórico crucero portaaeronaves aguardando ejercicios en el sur de Italia.",
                "sources": [
                    {
                        "name": "Marina Militare",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-01-10",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "Retirado",
                "op": "Baja Oficial",
                "desc": "Retirado tras 40 años; primer portaaviones Harrier de Italia. No irá al desguace; transferido a Indonesia.",
                "sources": [
                    {
                        "name": "Defense News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 40.45,
                "lng": 17.227,
                "name": "Stazione Navale Mar Grande, Tarento",
                "status": "En Puerto",
                "op": "Transferencia Indonesia",
                "desc": "En proceso de donación a Indonesia para misiones humanitarias; llegada prevista antes de octubre 2026.",
                "sources": [
                    {
                        "name": "Naval News",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cv16",
        "country": "China",
        "name": "Liaoning",
        "hull": "CV-16",
        "cls": "Clase Tipo 001 (PLAN)",
        "photo": "./assets/ships/plan_liaoning_cv16.png",
        "launched": "4 Dec 1988",
        "commissioned": "25 Sep 2012",
        "history": [
            {
                "date": "2020-04-10",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "En Puerto",
                "op": "Alistamiento",
                "desc": "Preparativos post-pandemia en su base naval base de la Flota del Mar del Norte.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "https://news.usni.org/"
                    }
                ]
            },
            {
                "date": "2020-04-12",
                "lat": 24.5,
                "lng": 119.5,
                "name": "Estrecho de Taiwán",
                "status": "Tránsito",
                "op": "Cruce del Estrecho",
                "desc": "Cruza el Estrecho de Miyako escoltado por cinco buques hacia el Pacífico.",
                "sources": [
                    {
                        "name": "Global Times",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-04-23",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Ejercicios CSG",
                "desc": "Maniobras de asalto con cazas J-15 celebrando el 71 aniversario militar.",
                "sources": [
                    {
                        "name": "South China Morning Post",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-06-15",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "Operativo",
                "op": "Operaciones COVID",
                "desc": "Patrullas de soberanía restringidas por protocolos de pandemia mundial.",
                "sources": [
                    {
                        "name": "OSINT Historical Archive",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2021-04-03",
                "lat": 18,
                "lng": 132,
                "name": "Mar de Filipinas",
                "status": "Desplegado",
                "op": "Operaciones Aéreas",
                "desc": "Interceptado visualmente por el destructor USS Mustin (DDG-89) durante vuelos sostenidos.",
                "sources": [
                    {
                        "name": "US Navy Photo Release",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2021-12-16",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Ejercicios Extensos",
                "desc": "El grupo de ataque ingresa al Pacífico occidental para rutinas de entrenamiento complejas.",
                "sources": [
                    {
                        "name": "Japan MoD",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2022-05-02",
                "lat": 18,
                "lng": 132,
                "name": "Mar de Filipinas",
                "status": "Desplegado",
                "op": "Prácticas Continuas",
                "desc": "Realiza más de 100 despegues y aterrizajes en el lapso de seis días supervisados por Japón.",
                "sources": [
                    {
                        "name": "Naval News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-01-01",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "Mantenimiento",
                "op": "Overhaul Programado",
                "desc": "Sometido a mantenimiento en el dique seco de Dalian.",
                "sources": [
                    {
                        "name": "Janes",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-11-20",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "Operativo",
                "op": "Misión Disuasión",
                "desc": "Ejercicios regionales para asegurar la estabilidad de las líneas de comunicación marítima.",
                "sources": [
                    {
                        "name": "OSINT Historical Archive",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-12-05",
                "lat": 38.932,
                "lng": 121.642,
                "name": "Astillero Dalian, Liaoning",
                "status": "Mantenimiento",
                "op": "Astillero",
                "desc": "Fotografías por satélite confirman reparaciones a gran escala de cubierta.",
                "sources": [
                    {
                        "name": "Planet Labs",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-03-01",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "En Puerto",
                "op": "Reincorporación",
                "desc": "Finaliza su extenso refit; se observa la instalación de nuevos paneles de radar AESA de última generación.",
                "sources": [
                    {
                        "name": "Global Times",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-12-10",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "En Puerto",
                "op": "Inspección de Casco",
                "desc": "Breve periodo en dique para limpieza de sensores acústicos tras meses de alta actividad en el Mar de Filipinas.",
                "sources": [
                    {
                        "name": "Satellite imagery",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-09-05",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Ejercicios 'Joint Sword'",
                "desc": "Liderando maniobras de bloqueo aeronaval simulado; sus J-15 realizaron más de 80 misiones en 48 horas.",
                "sources": [
                    {
                        "name": "South China Morning Post",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "En Puerto",
                "op": "Ciclo de Alistamiento",
                "desc": "Preparado en base para las patrullas de primavera tras completar su certificación de ala aérea 2026.",
                "sources": [
                    {
                        "name": "PLAN Tracker",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cv17",
        "country": "China",
        "name": "Shandong",
        "hull": "CV-17",
        "cls": "Clase Tipo 002 (PLAN)",
        "photo": "./assets/ships/plan_shandong_cv17.png",
        "launched": "26 Apr 2017",
        "commissioned": "17 Dec 2019",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 38.932,
                "lng": 121.642,
                "name": "Astillero Dalian, Liaoning",
                "status": "Mantenimiento",
                "op": "Ajustes de Entrega",
                "desc": "Solucionando desperfectos inciales de su reciente comisionamiento.",
                "sources": [
                    {
                        "name": "Xinhua",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-05-25",
                "lat": 18.196,
                "lng": 109.684,
                "name": "Base Naval de Yulin, Sanya (Hainan)",
                "status": "En Puerto",
                "op": "Asignación Sur",
                "desc": "Estacionado en la imponente base secreta de túneles de Yulin en la isla Hainan.",
                "sources": [
                    {
                        "name": "CSIS AMTI",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-06-15",
                "lat": 38.932,
                "lng": 121.642,
                "name": "Astillero Dalian, Liaoning",
                "status": "Operativo",
                "op": "Operaciones COVID",
                "desc": "Patrullas de soberanía restringidas por protocolos de pandemia mundial.",
                "sources": [
                    {
                        "name": "OSINT Historical Archive",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-12-20",
                "lat": 24.5,
                "lng": 119.5,
                "name": "Estrecho de Taiwán",
                "status": "Tránsito",
                "op": "Demostración de Fuerza",
                "desc": "Cruza el Estrecho de Taiwán por primera vez tras su entrega hacia el norte.",
                "sources": [
                    {
                        "name": "Taiwan MND",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2021-05-02",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Ejercicios de Flota",
                "desc": "Maniobras intensivas de aterrizaje de noche en aguas territoriales reclamadas.",
                "sources": [
                    {
                        "name": "Global Times",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2022-03-18",
                "lat": 24.5,
                "lng": 119.5,
                "name": "Estrecho de Taiwán",
                "status": "Tránsito",
                "op": "Segundo Cruce",
                "desc": "Seguido de cerca por el destructor USS Ralph Johnson (DDG-114).",
                "sources": [
                    {
                        "name": "US 7th Fleet",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-04-08",
                "lat": 24.5,
                "lng": 119.5,
                "name": "Estrecho de Taiwán",
                "status": "Desplegado",
                "op": "Joint Sword (Taiwán)",
                "desc": "Simulación de bloqueo total a la isla con 620 aterrizajes/despegues récord.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-04-10",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Joint Sword",
                "desc": "Simula ataques precisos contra blancos durante el bloqueo a Taiwán.",
                "sources": [
                    {
                        "name": "BBC News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-11-06",
                "lat": 18,
                "lng": 132,
                "name": "Mar de Filipinas",
                "status": "Desplegado",
                "op": "Expansión Oceánica",
                "desc": "Registra operaciones agresivas con un récord de 570 lanzamientos e intercepciones.",
                "sources": [
                    {
                        "name": "Japan MoD",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-11-20",
                "lat": 38.932,
                "lng": 121.642,
                "name": "Astillero Dalian, Liaoning",
                "status": "Operativo",
                "op": "Misión Disuasión",
                "desc": "Ejercicios regionales para asegurar la estabilidad de las líneas de comunicación marítima.",
                "sources": [
                    {
                        "name": "OSINT Historical Archive",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-04-10",
                "lat": 18.196,
                "lng": 109.684,
                "name": "Base Naval de Yulin, Sanya (Hainan)",
                "status": "Mantenimiento",
                "op": "Mantenimiento Intermedio",
                "desc": "Atracado en Sanya para revisión de catapultas manuales y sistemas de detención tras el intenso despliegue de 2023.",
                "sources": [
                    {
                        "name": "Naval News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-05-15",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Patrulla de Soberanía",
                "desc": "Presencia constante cerca del arrecife de Second Thomas, monitorizando flotas de suministros aliadas.",
                "sources": [
                    {
                        "name": "Global Times",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-11-05",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Combat Readiness",
                "desc": "Simulacros de interceptación nocturna masiva en el Mar de China Meridional ante presencia de destructores aliados.",
                "sources": [
                    {
                        "name": "USNI News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-05-01",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Strait Thunder 2025A",
                "desc": "Aproximación récord a 24 millas náuticas de la costa de Taiwán.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-10-20",
                "lat": 18.196,
                "lng": 109.684,
                "name": "Base Naval de Yulin, Sanya (Hainan)",
                "status": "En Puerto",
                "op": "Mantenimiento Nivel 2",
                "desc": "Atracado en Hainan para revisión de calderas y sistemas de aire acondicionado tras el caluroso despliegue del sur.",
                "sources": [
                    {
                        "name": "Planet Labs",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 18.196,
                "lng": 109.684,
                "name": "Base Naval de Yulin, Sanya (Hainan)",
                "status": "En Puerto",
                "op": "Alistamiento Sur",
                "desc": "Listo en la base de Hainan para su próxima rotación hacia el estrecho de Luzón.",
                "sources": [
                    {
                        "name": "OSINT PLAN Tracker",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "cv18",
        "country": "China",
        "name": "Fujian",
        "hull": "CV-18",
        "cls": "Clase Tipo 003 (PLAN)",
        "photo": "./assets/ships/plan_fujian_cv18.png",
        "launched": "2022-06-17",
        "commissioned": null,
        "history": [
            {
                "date": "2020-01-01",
                "lat": 31.355,
                "lng": 121.751,
                "name": "Astillero Jiangnan, Shanghái",
                "status": "Astillero",
                "op": "Ensamblaje",
                "desc": "Primeros grandes bloques prefabricados se alinean en Fincantieri.",
                "sources": [
                    {
                        "name": "CSIS",
                        "url": "https://www.csis.org/analysis/tracking-chinas-third-aircraft-carrier"
                    }
                ]
            },
            {
                "date": "2022-06-17",
                "lat": 31.355,
                "lng": 121.751,
                "name": "Astillero Jiangnan, Shanghái",
                "status": "Astillero",
                "op": "Botadura Oficial",
                "desc": "Ceremonia de botadura, confirmando sistema completo EMALS (catapultas electromagnéticas).",
                "sources": [
                    {
                        "name": "Xinhua Video",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-11-26",
                "lat": 31.355,
                "lng": 121.751,
                "name": "Astillero Jiangnan, Shanghái",
                "status": "Astillero",
                "op": "Pruebas Estáticas",
                "desc": "Se observan carritos de prueba roja lanzados al agua evaluando las catapultas EMALS.",
                "sources": [
                    {
                        "name": "Naval News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-05-01",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Sea Trials (Fase 1-3)",
                "desc": "Primera navegación bajo propulsión propia; pruebas de balanceo y compatibilidad de sistemas de comunicaciones.",
                "sources": [
                    {
                        "name": "Global Times",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-11-20",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Sea Trials (Fase 4)",
                "desc": "Evaluación de alto rendimiento de los sistemas de energía integrados para las catapultas EMALS.",
                "sources": [
                    {
                        "name": "Naval News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-09-12",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Lanzamientos J-35",
                "desc": "Récord histórico: Primera vez que un caza furtivo chino de quinta generación (J-35) es lanzado por catapulta EMALS.",
                "sources": [
                    {
                        "name": "Defense One",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-11-05",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "En Puerto",
                "op": "Entrega Oficial",
                "desc": "Ceremonia formal de comisión; el Fujian se une a la flota del Norte con capacidad operativa inicial.",
                "sources": [
                    {
                        "name": "Xinhua",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-12-20",
                "lat": 15,
                "lng": 115,
                "name": "Mar de China Meridional",
                "status": "Desplegado",
                "op": "Vigilancia de Navidad",
                "desc": "Patrulla de largo alcance demostrando la estabilidad de su planta propulsora convencional.",
                "sources": [
                    {
                        "name": "SCMP OSINT",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-01-15",
                "lat": 18,
                "lng": 132,
                "name": "Mar de Filipinas",
                "status": "Desplegado",
                "op": "Maniobras Misilísticas",
                "desc": "Lanzamientos simulados de corto alcance validando la integración del radar Tipo 346B.",
                "sources": [
                    {
                        "name": "Japan MoD",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 35.719,
                "lng": 119.982,
                "name": "Base Naval de Qingdao (PLAN)",
                "status": "En Puerto",
                "op": "Alistamiento Final",
                "desc": "Acomodación de la dotación y carga de pertrechos para su primer despliegue operacional de largo alcance.",
                "sources": [
                    {
                        "name": "PLAN News",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "kuznetsov",
        "country": "Rusia",
        "name": "Admiral Kuznetsov",
        "hull": "063",
        "cls": "Clase Kuznetsov (VMF)",
        "photo": "./assets/ships/vmf_kuznetsov_063.png",
        "launched": "1985-12-04",
        "commissioned": "1991-01-20",
        "history": [
            {
                "date": "2016-11-15",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Operación en Siria",
                "desc": "Lanzamiento de 420 salidas de combate sobre Alepo apoyando al gobierno sirio.",
                "sources": [
                    {
                        "name": "OSINT Defense Record",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2020-01-01",
                "lat": 69.043,
                "lng": 33.22,
                "name": "35th Shipyard Base, Murmansk (VMF)",
                "status": "Mantenimiento",
                "op": "Overhaul Crítico",
                "desc": "Sometido a reparaciones tras incendios y fallos de dique seco.",
                "sources": [
                    {
                        "name": "TASS",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-05-10",
                "lat": 69.043,
                "lng": 33.22,
                "name": "35th Shipyard Base, Murmansk (VMF)",
                "status": "Mantenimiento",
                "op": "Astillero 35",
                "desc": "Pruebas de calderas en puerto; se reportan humos negros densos.",
                "sources": [
                    {
                        "name": "Sputnik",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 69.043,
                "lng": 33.22,
                "name": "35th Shipyard Base, Murmansk (VMF)",
                "status": "Mantenimiento",
                "op": "Reactividad Limitada",
                "desc": "Permanece en Múrmansk con dotación reducida; salida postergada indefinidamente.",
                "sources": [
                    {
                        "name": "OSINT",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "vikramaditya",
        "name": "INS Vikramaditya",
        "hull": "R33",
        "cls": "Clase Gorshkov Mod.",
        "country": "India",
        "photo": "./assets/ships/ins_vikramaditya_r33.png",
        "launched": "1982-03-31",
        "commissioned": "2013-11-16",
        "history": [
            {
                "date": "2024-01-02",
                "lat": 14.762,
                "lng": 74.12,
                "name": "Base Naval Kadamba, Karwar",
                "status": "Desplegado",
                "op": "Escuadra Oeste",
                "desc": "Operando como el núcleo de la fuerza de ataque india en el Mar Arábigo.",
                "sources": [
                    {
                        "name": "Indian Navy",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 14.762,
                "lng": 74.12,
                "name": "Base Naval Kadamba, Karwar",
                "status": "En Puerto",
                "op": "Guarnición Activa",
                "desc": "Fondeado en Karwar protegiendo el flanco occidental.",
                "sources": [
                    {
                        "name": "OSINT IND",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "izumo",
        "name": "JS Izumo",
        "hull": "DDH-183",
        "cls": "Clase Izumo (Japón)",
        "country": "Japón",
        "photo": "./assets/ships/jmsdf_izumo_183.png",
        "launched": "2013-08-06",
        "commissioned": "2015-03-25",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 35.288,
                "lng": 139.658,
                "name": "CFA Yokosuka (Berth 12)",
                "status": "Mantenimiento",
                "op": "Refit Portaaviones",
                "desc": "Inicio de modificaciones estructurales para operar cazas F-35B Lightning II.",
                "sources": [
                    {
                        "name": "Japan MoD",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2021-10-03",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Pruebas F-35B",
                "desc": "Primeros aterrizajes históricos de F-35B del USMC en la cubierta japonesa.",
                "sources": [
                    {
                        "name": "USMC News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-12-15",
                "lat": 35.288,
                "lng": 139.658,
                "name": "CFA Yokosuka (Berth 12)",
                "status": "En Puerto",
                "op": "Certificación F-35B",
                "desc": "Finaliza la fase de pintura de cubierta termorresistente; el Izumo es oficialmente un portaaviones ligero.",
                "sources": [
                    {
                        "name": "Japan Times",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-08-20",
                "lat": 20,
                "lng": 160,
                "name": "Pacífico Occidental",
                "status": "Desplegado",
                "op": "Ejercicio Malabar 25",
                "desc": "Operaciones de ala fija integradas con el USMC y la Armada India; validación de interoperabilidad QUAD.",
                "sources": [
                    {
                        "name": "JMSDF Press",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 35.288,
                "lng": 139.658,
                "name": "CFA Yokosuka (Berth 12)",
                "status": "En Puerto",
                "op": "Escuadra de Defensa",
                "desc": "Integrado en la 1ª Flotilla de Escolta, listo para proyectar ala fija en caso de contingencia.",
                "sources": [
                    {
                        "name": "JMSDF",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "kaga",
        "name": "JS Kaga",
        "hull": "DDH-184",
        "cls": "Clase Izumo (Japón)",
        "country": "Japón",
        "photo": "./assets/ships/jmsdf_kaga_184.png",
        "launched": "2015-08-27",
        "commissioned": "2017-03-22",
        "history": [
            {
                "date": "2024-04-01",
                "lat": 34.234,
                "lng": 132.545,
                "name": "Base Naval de Kure, Hiroshima",
                "status": "Mantenimiento",
                "op": "Fin Modificaciones",
                "desc": "Finaliza su transformación de proa cuadrada para operar escuadrones F-35B.",
                "sources": [
                    {
                        "name": "Naval News",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 20,
                "lng": -140,
                "name": "Pacífico Oriental",
                "status": "Desplegado",
                "op": "Patrulla Mar de China",
                "desc": "Vigilando movimientos de la PLAN con capacidad aeronaval plena.",
                "sources": [
                    {
                        "name": "OSINT JP",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "anadolu",
        "name": "TCG Anadolu",
        "hull": "L-400",
        "cls": "Porta-Drones (Turquía)",
        "country": "Turquía",
        "photo": "./assets/ships/tur_anadolu_l400.png",
        "type": "drone-carrier",
        "launched": "2019-04-30",
        "commissioned": "2023-04-10",
        "history": [
            {
                "date": "2024-03-15",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Mavi Vatan 24",
                "desc": "Gran ejercicio naval turco demostrando la integración de lanchas de desembarco y helicópteros T129 ATAK.",
                "sources": [
                    {
                        "name": "SavunmaSanayiST",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-07-01",
                "lat": 60,
                "lng": -20,
                "name": "Atlántico Norte (GIUK)",
                "status": "Desplegado",
                "op": "NATO Mission",
                "desc": "Punto de mando para operaciones navales del norte de Europa.",
                "sources": [
                    {
                        "name": "NATO Press",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-12-15",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Pruebas Bayraktar TB3",
                "desc": "Primeros despegues y aterrizajes nocturnos automáticos de drones TB3 en condiciones reales de mar.",
                "sources": [
                    {
                        "name": "Baykar Tech",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": 34,
                "lng": 25,
                "name": "Mar Mediterráneo",
                "status": "Desplegado",
                "op": "Vigilancia Mediterránea",
                "desc": "Base avanzada de drones monitorizando las costas de Levante; integración total con el CMS GENESIS.",
                "sources": [
                    {
                        "name": "Turkish Navy",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "atlantico",
        "name": "NAM Atlântico",
        "hull": "A140",
        "cls": "Multiproposito (Brasil)",
        "country": "Brasil",
        "photo": "./assets/ships/bra_atlantico_a140.png",
        "launched": "1998-02-20",
        "commissioned": "2018-06-29",
        "history": [
            {
                "date": "2026-01-20",
                "lat": -22.9,
                "lng": -43.167,
                "name": "Arsenal de Marinha do Rio de Janeiro",
                "status": "Desplegado",
                "op": "Aspirantex 2026",
                "desc": "Operaciones de entrenamiento bélico en el Atlántico Sur.",
                "sources": [
                    {
                        "name": "Marinha do Brasil",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-10",
                "lat": -22.9,
                "lng": -43.167,
                "name": "Arsenal de Marinha do Rio de Janeiro",
                "status": "En Puerto",
                "op": "Recarga Logística",
                "desc": "Preparativos para la misión de paz en el Atlántico Sur (UNASUR); carga de helicópteros de carga pesada.",
                "sources": [
                    {
                        "name": "G1 Mil",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-24",
                "lat": -22.9,
                "lng": -43.167,
                "name": "Arsenal de Marinha do Rio de Janeiro",
                "status": "En Puerto",
                "op": "Mantenimiento Preventivo",
                "desc": "En base naval tras el ciclo operativo de verano.",
                "sources": [
                    {
                        "name": "OSINT BR",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "naruebet",
        "name": "HTMS Chakri Naruebet",
        "hull": "911",
        "cls": "Portaaviones (Tailandia)",
        "country": "Tailandia",
        "photo": "./assets/ships/thai_naruebet_911.png",
        "launched": "1996-01-20",
        "commissioned": "1997-03-20",
        "history": [
            {
                "date": "2026-03-24",
                "lat": 12.617,
                "lng": 100.883,
                "name": "Base Naval de Sattahip, Chonburi",
                "status": "En Puerto",
                "op": "Guarnición",
                "desc": "Base naval de Sattahip; raramente despliega ala fija actualmente.",
                "sources": [
                    {
                        "name": "Thai OSINT",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "vikrant",
        "country": "India",
        "name": "INS Vikrant",
        "hull": "R11",
        "cls": "Infantería (CAC) Autóctona",
        "photo": "./assets/ships/ins_vikrant_r11.png",
        "launched": "2013-08-12",
        "commissioned": "2022-09-02",
        "history": [
            {
                "date": "2020-01-01",
                "lat": 9.965,
                "lng": 76.28,
                "name": "Cochin Shipyard, Kochi",
                "status": "Astillero",
                "op": "Construcción",
                "desc": "Demorada su construcción final de sensores por contratiempos globales de la cadena de COVID-19.",
                "sources": [
                    {
                        "name": "Cochin Shipyard PR",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2021-08-04",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Tránsito",
                "op": "Pruebas de Mar",
                "desc": "Navega valientemente sus primeros ensayos bajo propio motor en el mar arábigo.",
                "sources": [
                    {
                        "name": "ANI",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2022-09-02",
                "lat": 9.965,
                "lng": 76.28,
                "name": "Cochin Shipyard, Kochi",
                "status": "En Puerto",
                "op": "Comisionamiento Activo",
                "desc": "Puesto oficialmente en servicio en una masiva ceremonia independentista frente al Primer Ministro.",
                "sources": [
                    {
                        "name": "The Times of India",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2023-02-06",
                "lat": 15,
                "lng": 60,
                "name": "Mar Arábigo Norte",
                "status": "Pruebas de Mar",
                "op": "Aterrizaje LCA",
                "desc": "Los primeros aviones nacionales LCA Tejas y MiG-29K aterrizan a bordo exitosamente.",
                "sources": [
                    {
                        "name": "Indian Navy Media",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-03-01",
                "lat": 14.762,
                "lng": 74.12,
                "name": "Base Naval Kadamba, Karwar",
                "status": "Desplegado",
                "op": "Milan Naval",
                "desc": "Actúa como pieza estelar del mayor ejercicio diplomático asiático MILAN.",
                "sources": [
                    {
                        "name": "Hindustan Times",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2024-10-15",
                "lat": -5,
                "lng": 70,
                "name": "Océano Índico",
                "status": "Desplegado",
                "op": "Ejercicio Malabar",
                "desc": "Maniobras QUAD integrando comunicaciones tácticas con EE.UU. y Japón en el Mar Arábigo.",
                "sources": [
                    {
                        "name": "The Hindu",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2025-11-20",
                "lat": -5,
                "lng": 70,
                "name": "Océano Índico",
                "status": "Desplegado",
                "op": "Twin Strike Táctica",
                "desc": "Participa en formación junto al Vikramaditya, demostrando capacidad de dos portaviones nacionales.",
                "sources": [
                    {
                        "name": "Mint Defense",
                        "url": "#"
                    }
                ]
            },
            {
                "date": "2026-03-16",
                "lat": 14.762,
                "lng": 74.12,
                "name": "Base Naval Kadamba, Karwar",
                "status": "En Puerto",
                "op": "Entrenamiento Rafale",
                "desc": "Alistando cubiertas para recibir el escuadrón inicial de los Dassault Rafale M comprados a Francia.",
                "sources": [
                    {
                        "name": "OSINT IND",
                        "url": "#"
                    }
                ]
            }
        ]
    },
    {
        "id": "bagheri",
        "name": "Shahid Bagheri",
        "hull": "IRGCN",
        "cls": "Porta-Drones (Irán)",
        "country": "Irán",
        "photo": "./assets/ships/iran_bagheri_irgcn.png",
        "type": "drone-carrier",
        "launched": "2024-02",
        "commissioned": "2025-03",
        "history": [
            {
                "date": "2024-02-15",
                "lat": 27.183,
                "lng": 56.267,
                "name": "Astillero Shahid Darvishi, Bandar Abbas",
                "status": "Astillero",
                "op": "Conversión Hull",
                "desc": "Se observa la adición de una pista de aterrizaje angulada de 180 metros sobre un casco de portacontenedores.",
                "sources": [{ "name": "OSINT Iran", "url": "#" }]
            },
            {
                "date": "2026-03-24",
                "lat": 25.5,
                "lng": 58.5,
                "name": "Mar de Omán",
                "status": "Desplegado",
                "op": "Vigilancia Estrecho",
                "desc": "Operando como base avanzada de drones Shahed y Mohajer-6 monitorizando el tráfico en el Estrecho de Ormuz.",
                "sources": [{ "name": "IRGCN Intelligence", "url": "#" }]
            }
        ]
    }
];

console.log('--- OSINT INTEL v11.0 FINAL ---');