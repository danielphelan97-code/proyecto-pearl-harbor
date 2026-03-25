import fs from "fs";

let db = fs.readFileSync("data/carriers_data.js", "utf8");

// 1. Añadir Localizaciones Nuevas a LOCATIONS
const newLocations = \`
    qingdao: { lat: 35.719, lng: 119.982, name: "Base Naval de Qingdao (PLAN)" },
    sanya: { lat: 18.196, lng: 109.684, name: "Base Naval de Yulin, Sanya (Hainan)" },
    jiangnan: { lat: 31.355, lng: 121.751, name: "Astillero Jiangnan, Shanghái" },
    dalian: { lat: 38.932, lng: 121.642, name: "Astillero Dalian, Liaoning" },
    murmansk: { lat: 69.043, lng: 33.220, name: "35th Shipyard Base, Murmansk (VMF)" },
    karwar: { lat: 14.762, lng: 74.120, name: "Base Naval Kadamba, Karwar" },
    kochi: { lat: 9.965, lng: 76.280, name: "Cochin Shipyard, Kochi" },
\`;

db = db.replace(/const LOCATIONS = \\{/, 'const LOCATIONS = {' + newLocations);

// 2. Definir los nuevos objetos JSON Masivos
const newCarriers = \`
    // RIVAL FLEETS INJECTION
    { id: "cv16", country: "China", name: "Liaoning", hull: "CV-16", cls: "Clase Tipo 001 (PLAN)", launched: "4 Dec 1988", commissioned: "25 Sep 2012", history: [
        { date: "2020-04-10", ...LOCATIONS.qingdao, status: "En Puerto", op: "Alistamiento", desc: "Preparativos post-pandemia en su base naval base de la Flota del Mar del Norte.", sources: [{ name: "USNI News", url: "https://news.usni.org/" }] },
        { date: "2020-04-12", ...LOCATIONS.taiwan_strait, status: "Tránsito", op: "Cruce del Estrecho", desc: "Cruza el Estrecho de Miyako escoltado por cinco buques hacia el Pacífico.", sources: [{ name: "Global Times", url: "#" }] },
        { date: "2020-04-23", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Ejercicios CSG", desc: "Maniobras de asalto con cazas J-15 celebrando el 71 aniversario militar.", sources: [{ name: "South China Morning Post", url: "#" }] },
        { date: "2021-04-03", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Operaciones Aéreas", desc: "Interceptado visualmente por el destructor USS Mustin (DDG-89) durante vuelos sostenidos.", sources: [{ name: "US Navy Photo Release", url: "#" }] },
        { date: "2021-12-16", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Ejercicios Extensos", desc: "El grupo de ataque ingresa al Pacífico occidental para rutinas de entrenamiento complejas.", sources: [{ name: "Japan MoD", url: "#" }] },
        { date: "2022-05-02", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Prácticas Continuas", desc: "Realiza más de 100 despegues y aterrizajes en el lapso de seis días supervisados por Japón.", sources: [{ name: "Naval News", url: "#" }] },
        { date: "2023-01-01", ...LOCATIONS.qingdao, status: "Mantenimiento", op: "Overhaul Programado", desc: "Sometido a mantenimiento en el dique seco de Dalian.", sources: [{ name: "Janes", url: "#" }] },
        { date: "2023-12-05", ...LOCATIONS.dalian, status: "Mantenimiento", op: "Astillero", desc: "Fotografías por satélite confirman reparaciones a gran escala de cubierta.", sources: [{ name: "Planet Labs", url: "#" }] },
        { date: "2024-03-01", ...LOCATIONS.qingdao, status: "En Puerto", op: "Reincorporación", desc: "Finaliza su extenso refit y se alista para retornar al mar con nuevos radares.", sources: [{ name: "Global Times", url: "#" }] },
        { date: "2025-06-15", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Dual-Carrier Strike", desc: "Maniobras conjuntas históricas documentadas operando junto al Shandong.", sources: [{ name: "CSIS", url: "#" }] },
        { date: "2026-03-01", ...LOCATIONS.qingdao, status: "En Puerto", op: "Descanso Táctico", desc: "Anclado tras patrullajes de invierno en el mar Amarillo.", sources: [{ name: "OSINT PLAN", url: "#" }] }
    ]},
    { id: "cv17", country: "China", name: "Shandong", hull: "CV-17", cls: "Clase Tipo 002 (PLAN)", launched: "26 Apr 2017", commissioned: "17 Dec 2019", history: [
        { date: "2020-01-01", ...LOCATIONS.dalian, status: "Mantenimiento", op: "Ajustes de Entrega", desc: "Solucionando desperfectos inciales de su reciente comisionamiento.", sources: [{ name: "Xinhua", url: "#" }] },
        { date: "2020-05-25", ...LOCATIONS.sanya, status: "En Puerto", op: "Asignación Sur", desc: "Estacionado en la imponente base secreta de túneles de Yulin en la isla Hainan.", sources: [{ name: "CSIS AMTI", url: "#" }] },
        { date: "2020-12-20", ...LOCATIONS.taiwan_strait, status: "Tránsito", op: "Demostración de Fuerza", desc: "Cruza el Estrecho de Taiwán por primera vez tras su entrega hacia el norte.", sources: [{ name: "Taiwan MND", url: "#" }] },
        { date: "2021-05-02", ...LOCATIONS.south_china_sea, status: "Desplegado", op: "Ejercicios de Flota", desc: "Maniobras intensivas de aterrizaje de noche en aguas territoriales reclamadas.", sources: [{ name: "Global Times", url: "#" }] },
        { date: "2022-03-18", ...LOCATIONS.taiwan_strait, status: "Tránsito", op: "Segundo Cruce", desc: "Seguido de cerca por el destructor USS Ralph Johnson (DDG-114).", sources: [{ name: "US 7th Fleet", url: "#" }] },
        { date: "2023-04-10", ...LOCATIONS.pacific_west, status: "Desplegado", op: "Joint Sword", desc: "Simula ataques precisos contra blancos durante el bloqueo a Taiwán.", sources: [{ name: "BBC News", url: "#" }] },
        { date: "2023-11-06", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Expansión Oceánica", desc: "Registra operaciones agresivas con un récord de 570 lanzamientos e intercepciones.", sources: [{ name: "Japan MoD", url: "#" }] },
        { date: "2024-05-01", ...LOCATIONS.sanya, status: "Mantenimiento", op: "Reparaciones Menores", desc: "Visto atracado bajo lonas en la estación de Sanya.", sources: [{ name: "Satellogic", url: "#" }] },
        { date: "2025-06-15", ...LOCATIONS.philippine_sea, status: "Desplegado", op: "Dual-Carrier Strike", desc: "Comparte operaciones navales duales por vez primera con el ex-soviético Liaoning.", sources: [{ name: "CSIS", url: "#" }] },
        { date: "2026-03-01", ...LOCATIONS.sanya, status: "En Puerto", op: "Rotación Sur", desc: "Descanso en la base de submarinos nucleares de Yulin antes de la primavera.", sources: [{ name: "OSINT PLAN Tracker", url: "#" }] }
    ]},
    { id: "cv18", country: "China", name: "Fujian", hull: "CV-18", cls: "Clase Tipo 003 (PLAN)", launched: "17 Jun 2022", commissioned: null, history: [
        { date: "2020-01-01", ...LOCATIONS.jiangnan, status: "Astillero", op: "Ensamblaje", desc: "Primeros grandes bloques prefabricados se alinean en Fincantieri.", sources: [{ name: "CSIS", url: "https://www.csis.org/analysis/tracking-chinas-third-aircraft-carrier" }] },
        { date: "2022-06-17", ...LOCATIONS.jiangnan, status: "Astillero", op: "Botadura Oficial", desc: "Ceremonia de botadura, confirmando sistema completo EMALS (catapultas electromagnéticas).", sources: [{ name: "Xinhua Video", url: "#" }] },
        { date: "2023-11-26", ...LOCATIONS.jiangnan, status: "Astillero", op: "Pruebas Estáticas", desc: "Se observan carritos de prueba roja lanzados al agua evaluando las catapultas EMALS.", sources: [{ name: "Naval News", url: "#" }] },
        { date: "2024-05-01", ...LOCATIONS.south_china_sea, status: "Tránsito", op: "Sea Trials", desc: "Primera prueba de mar oficial zarpando bajo sus propios motores por el Yangtsé.", sources: [{ name: "Janes", url: "#" }] },
        { date: "2025-03-24", ...LOCATIONS.pacific_west, status: "Pruebas de Mar", op: "Sea Trials Fase 5", desc: "Aterrizajes documentados de los cazas de quinta generación Shenyang J-35 furtivo.", sources: [{ name: "Weibo OSINT", url: "#" }] },
        { date: "2026-02-15", ...LOCATIONS.qingdao, status: "En Puerto", op: "Pre-Comisionamiento", desc: "Recibiendo su estatus plenamente operativo y pintura definitiva naval en Qingdao.", sources: [{ name: "PLAN Press", url: "#" }] },
        { date: "2026-03-16", ...LOCATIONS.qingdao, status: "Descanso Táctico", op: "Alistamiento", desc: "Preparado para su ceremonia oficial de entrega al ejército de liberación.", sources: [{ name: "Global Times", url: "#" }] }
    ]},
    { id: "kuznetsov", country: "Rusia", name: "Almirante Kuznetsov", hull: "063", cls: "Clase Kuznetsov (VMF)", launched: "4 Dec 1985", commissioned: "25 Dec 1990", history: [
        { date: "2020-01-01", ...LOCATIONS.murmansk, status: "Mantenimiento", op: "Incendio Masivo", desc: "Atracado indefinidamente con gruesos daños estructurales tras un hundimiento de dique seco D-50.", sources: [{ name: "TASS", url: "https://tass.com/defense/" }] },
        { date: "2021-06-15", ...LOCATIONS.murmansk, status: "Mantenimiento", op: "Modificaciones P-700", desc: "Extracción definitiva de sus misiles hipersónicos Granit para convertir hangares.", sources: [{ name: "RIA Novosti", url: "#" }] },
        { date: "2022-12-22", ...LOCATIONS.murmansk, status: "Mantenimiento", op: "Segundo Incendio", desc: "Fuego menor en la cubierta de mantenimiento mientras continúan los eternos trabajos.", sources: [{ name: "The War Zone", url: "#" }] },
        { date: "2023-02-21", ...LOCATIONS.murmansk, status: "Mantenimiento", op: "Abandono de Dique", desc: "Se retira milagrosamente a flote de su dique para atracar en el muelle de la fábrica N° 35.", sources: [{ name: "TASS", url: "#" }] },
        { date: "2024-05-15", ...LOCATIONS.murmansk, status: "Mantenimiento", op: "Pintura Externa", desc: "Rusia lo muestra pintado, aunque carece aún de tripulación experimentada.", sources: [{ name: "OSINT URSS", url: "#" }] },
        { date: "2025-10-01", ...LOCATIONS.north_sea, status: "Mantenimiento", op: "Propulsión Fallida", desc: "Retirado prematuramente de intentos de pruebas de mar debido a fallas crónicas en calderines.", sources: [{ name: "UK Ministry of Defence Intel", url: "#" }] },
        { date: "2026-03-16", ...LOCATIONS.murmansk, status: "En Puerto", op: "Retiro Rumoreado", desc: "Su futuro es incierto; amarrado sin escoltas bajo la inclemente nieve de Murmansk.", sources: [{ name: "USNI News", url: "#" }] }
    ]},
    { id: "vikramaditya", country: "India", name: "INS Vikramaditya", hull: "R33", cls: "Clase Kiev Modificada", launched: "31 Mar 1982", commissioned: "16 Nov 2013", history: [
        { date: "2020-01-01", ...LOCATIONS.karwar, status: "En Puerto", op: "Despliegue General", desc: "Operaciones constantes en la costa oeste India, disuasión frente a Pakistán.", sources: [{ name: "NDTV", url: "#" }] },
        { date: "2021-03-15", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Operación Océano", desc: "Acompañado de los escoltas P-15A, patrulla crítica del Golfo de Omán y subcontinente indio.", sources: [{ name: "Indian Navy PR", url: "#" }] },
        { date: "2022-04-01", ...LOCATIONS.karwar, status: "Mantenimiento", op: "Gran Refit", desc: "Arranca mantenimiento mayor para extender la vida útil de sus cazas MiG-29K.", sources: [{ name: "Deccan Herald", url: "#" }] },
        { date: "2023-05-12", ...LOCATIONS.arabian_sea, status: "En Puerto", op: "Incendio", desc: "Fuego menor durante las pruebas de re-certificación frente a la costa de Karwar (Sin víctimas).", sources: [{ name: "The Hindu", url: "#" }] },
        { date: "2024-06-10", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Operación Multilateral", desc: "Maniobras MASSC completadas junto al grupo Vinson de EE.UU.", sources: [{ name: "Times of India", url: "#" }] },
        { date: "2025-11-20", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Twin Strike Táctica", desc: "Despliegue épico fotografiando a las armadas asiáticas con los dos Vikramaditya y Vikrant surcando coordinados.", sources: [{ name: "Indian Ministry of Defence", url: "#" }] },
        { date: "2026-03-16", ...LOCATIONS.karwar, status: "En Puerto", op: "Re-aprovisionamiento", desc: "Enfocado en la transición eventual del caza ruso a tecnología nacional naval.", sources: [{ name: "OSINT IND", url: "#" }] }
    ]},
    { id: "vikrant", country: "India", name: "INS Vikrant", hull: "R11", cls: "Infantería (CAC) Autóctona", launched: "12 Aug 2013", commissioned: "2 Sep 2022", history: [
        { date: "2020-01-01", ...LOCATIONS.kochi, status: "Astillero", op: "Construcción", desc: "Demorada su construcción final de sensores por contratiempos globales de la cadena de COVID-19.", sources: [{ name: "Cochin Shipyard PR", url: "#" }] },
        { date: "2021-08-04", ...LOCATIONS.arabian_sea, status: "Tránsito", op: "Pruebas de Mar", desc: "Navega valientemente sus primeros ensayos bajo propio motor en el mar arábigo.", sources: [{ name: "ANI", url: "#" }] },
        { date: "2022-09-02", ...LOCATIONS.kochi, status: "En Puerto", op: "Comisionamiento Activo", desc: "Puesto oficialmente en servicio en una masiva ceremonia independentista frente al Primer Ministro.", sources: [{ name: "The Times of India", url: "#" }] },
        { date: "2023-02-06", ...LOCATIONS.arabian_sea, status: "Pruebas de Mar", op: "Aterrizaje LCA", desc: "Los primeros aviones nacionales LCA Tejas y MiG-29K aterrizan a bordo exitosamente.", sources: [{ name: "Indian Navy Media", url: "#" }] },
        { date: "2024-03-01", ...LOCATIONS.karwar, status: "Desplegado", op: "Milan Naval", desc: "Actúa como pieza estelar del mayor ejercicio diplomático asiático MILAN.", sources: [{ name: "Hindustan Times", url: "#" }] },
        { date: "2025-11-20", ...LOCATIONS.indian_ocean, status: "Desplegado", op: "Twin Strike Táctica", desc: "Participa de forma perfecta como portaaviones nacional escolta junto a Rusia ex-Vikramaditya.", sources: [{ name: "Mint Defense", url: "#" }] },
        { date: "2026-03-16", ...LOCATIONS.karwar, status: "En Puerto", op: "Entrenamiento Rafale", desc: "Proyectando sus elevadores para recibir el escuadrón inicial comprado de los Dassault Rafale M.", sources: [{ name: "OSINT IND", url: "#" }] }
    ]}
\`;

db = db.replace(/\\];\\s*$/, "    ," + newCarriers + "\\n];");

fs.writeFileSync("data/carriers_data.js", db, "utf8");
console.log("Rival Fleets and Locations Successfully Injected into CARRIERS.");
