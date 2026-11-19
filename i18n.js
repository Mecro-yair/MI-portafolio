// === IDIOMAS ===
// Cada texto de la página tiene un atributo data-i18n="clave".
// Para cambiar o agregar un texto, edita la clave aquí en los 5 idiomas.
// Idioma por defecto: inglés. La elección del visitante se recuerda en su navegador.

const IDIOMAS = {
  en: "English",
  es: "Español",
  zh: "中文",
  de: "Deutsch",
  fr: "Français",
};
const IDIOMA_POR_DEFECTO = "en";

// Banderas dibujadas en SVG (se ven igual en todos los sistemas; los emojis
// de banderas no funcionan en Windows). El CSS las recorta en círculo.
function estrella(cx, cy, r, giro = 0) {
  const puntos = [];
  for (let i = 0; i < 10; i++) {
    const radio = i % 2 === 0 ? r : r * 0.38;
    const ang = (Math.PI / 5) * i - Math.PI / 2 + giro;
    puntos.push((cx + radio * Math.cos(ang)).toFixed(2) + "," + (cy + radio * Math.sin(ang)).toFixed(2));
  }
  return `<polygon points="${puntos.join(" ")}"/>`;
}

const BANDERAS = {
  en: (() => { // Estados Unidos
    let franjas = "";
    for (let i = 0; i < 13; i += 2) franjas += `<rect y="${(i * 30 / 13).toFixed(2)}" width="30" height="${(30 / 13).toFixed(2)}"/>`;
    let puntos = "";
    for (let f = 0; f < 4; f++) for (let c = 0; c < 4; c++) puntos += `<circle cx="${2 + c * 3.4 + (f % 2) * 1.2}" cy="${2.2 + f * 3.8}" r=".7"/>`;
    return `<rect width="30" height="30" fill="#fff"/><g fill="#b22234">${franjas}</g>` +
           `<rect width="15" height="16.2" fill="#3c3b6e"/><g fill="#fff">${puntos}</g>`;
  })(),
  es: `<rect width="30" height="30" fill="#c60b1e"/><rect y="7.5" width="30" height="15" fill="#ffc400"/>`,
  zh: `<rect width="30" height="30" fill="#de2910"/><g fill="#ffde00">` +
      estrella(9, 10, 5) + estrella(16.5, 4.5, 1.6, .9) + estrella(19.5, 8, 1.6, 1.3) +
      estrella(19.5, 12.5, 1.6, 1.9) + estrella(16.5, 15.5, 1.6, 2.3) + `</g>`,
  de: `<rect width="30" height="10" fill="#000"/><rect y="10" width="30" height="10" fill="#dd0000"/><rect y="20" width="30" height="10" fill="#ffce00"/>`,
  fr: `<rect width="10" height="30" fill="#002395"/><rect x="10" width="10" height="30" fill="#fff"/><rect x="20" width="10" height="30" fill="#ed2939"/>`,
};

function banderaSVG(codigo) {
  return `<svg class="bandera" viewBox="0 0 30 30" aria-hidden="true">${BANDERAS[codigo]}</svg>`;
}

const T = {
  // ---------- Menú ----------
  "nav.home":      { en: "HOME", es: "INICIO", zh: "首页", de: "START", fr: "ACCUEIL" },
  "nav.about":     { en: "ABOUT ME", es: "SOBRE MÍ", zh: "关于我", de: "ÜBER MICH", fr: "À PROPOS" },
  "nav.projects":  { en: "PROJECTS", es: "PROYECTOS", zh: "项目", de: "PROJEKTE", fr: "PROJETS" },
  "nav.resume":    { en: "RESUME", es: "CURRICULUM", zh: "简历", de: "LEBENSLAUF", fr: "CV" },
  "nav.portfolio": { en: "PORTFOLIO", es: "PORTFOLIO", zh: "作品集", de: "PORTFOLIO", fr: "PORTFOLIO" },
  "nav.contact":   { en: "CONTACT", es: "CONTACTO", zh: "联系", de: "KONTAKT", fr: "CONTACT" },
  "lang.label":    { en: "Language", es: "Idioma", zh: "语言", de: "Sprache", fr: "Langue" },

  // ---------- Visión de colores (daltonismo) ----------
  "vision.label":  { en: "Color vision", es: "Visión de colores", zh: "色觉模式", de: "Farbsehen", fr: "Vision des couleurs" },
  "vision.normal": { en: "Default colors", es: "Colores normales", zh: "默认颜色", de: "Standardfarben", fr: "Couleurs par défaut" },
  "vision.protan": { en: "Protanopia (red)", es: "Protanopía (rojo)", zh: "红色盲", de: "Protanopie (Rot)", fr: "Protanopie (rouge)" },
  "vision.deutan": { en: "Deuteranopia (green)", es: "Deuteranopía (verde)", zh: "绿色盲", de: "Deuteranopie (Grün)", fr: "Deutéranopie (vert)" },
  "vision.tritan": { en: "Tritanopia (blue)", es: "Tritanopía (azul)", zh: "蓝色盲", de: "Tritanopie (Blau)", fr: "Tritanopie (bleu)" },
  "vision.mono":   { en: "High contrast", es: "Alto contraste", zh: "高对比度", de: "Hoher Kontrast", fr: "Contraste élevé" },

  // ---------- Portada ----------
  "hero.subtitle": {
    en: "Computer & Systems Engineer",
    es: "Ingeniero en Informática y Sistemas",
    zh: "计算机与系统工程师",
    de: "Informatik- und Systemingenieur",
    fr: "Ingénieur en informatique et systèmes",
  },
  "hero.photo": {
    en: "Photo of Danny Yair Luque Pari", es: "Foto de Danny Yair Luque Pari", zh: "Danny Yair Luque Pari 的照片",
    de: "Foto von Danny Yair Luque Pari", fr: "Photo de Danny Yair Luque Pari",
  },

  // ---------- Sobre mí ----------
  "about.title": { en: "About Me", es: "Sobre Mí", zh: "关于我", de: "Über mich", fr: "À propos de moi" },
  "about.p1": {
    en: "<span>Hi, I'm Danny Yair Luque Pari.</span> I'm 22 years old and I finished school at I.E. Emblemática Coronel Bolognesi. I'm currently in the 6th semester of Computer and Systems Engineering at Universidad Nacional Jorge Basadre Grohmann (UNJBG). I'm very interested in programming, especially web development, artificial intelligence and cybersecurity (ethical hacking). My personal goal is to build a custom virtual assistant that can be used worldwide.",
    es: "<span>Hola, soy Danny Yair Luque Pari.</span> Tengo 22 años y culminé mis estudios en la I.E. Emblemática Coronel Bolognesi. Actualmente curso el 6.º ciclo de la carrera de Ingeniería en Informática y Sistemas en la Universidad Nacional Jorge Basadre Grohmann (UNJBG). Tengo un gran interés en la programación, especialmente en el desarrollo web, la inteligencia artificial y la ciberseguridad (hacking ético). Mi propósito personal es crear un asistente virtual personalizado que pueda utilizarse a nivel global.",
    zh: "<span>你好，我是 Danny Yair Luque Pari。</span>我今年 22 岁，毕业于 I.E. Emblemática Coronel Bolognesi 中学。目前我在豪尔赫·巴萨德雷·格罗曼国立大学（UNJBG）攻读计算机与系统工程专业，现为第六学期。我对编程非常感兴趣，尤其是 Web 开发、人工智能和网络安全（道德黑客）。我的个人目标是打造一个可以在全球使用的个性化虚拟助手。",
    de: "<span>Hallo, ich bin Danny Yair Luque Pari.</span> Ich bin 22 Jahre alt und habe meinen Schulabschluss an der I.E. Emblemática Coronel Bolognesi gemacht. Derzeit studiere ich im 6. Semester Informatik und Systemtechnik an der Universidad Nacional Jorge Basadre Grohmann (UNJBG). Ich interessiere mich sehr für Programmierung, besonders für Webentwicklung, künstliche Intelligenz und Cybersicherheit (Ethical Hacking). Mein persönliches Ziel ist es, einen personalisierten virtuellen Assistenten zu entwickeln, der weltweit genutzt werden kann.",
    fr: "<span>Bonjour, je suis Danny Yair Luque Pari.</span> J'ai 22 ans et j'ai terminé mes études secondaires à l'I.E. Emblemática Coronel Bolognesi. Je suis actuellement en 6e semestre d'ingénierie informatique et systèmes à l'Université nationale Jorge Basadre Grohmann (UNJBG). Je m'intéresse beaucoup à la programmation, en particulier au développement web, à l'intelligence artificielle et à la cybersécurité (hacking éthique). Mon objectif personnel est de créer un assistant virtuel personnalisé utilisable dans le monde entier.",
  },
  "about.p2": {
    en: "I love football and music (quena, guitar and piano). I learn quickly and adapt easily to new challenges and technologies. I know Python, web development (HTML, CSS and JavaScript) and software development. I also have teamwork and communication skills. I see myself as a professional specialized in Full Stack development, artificial intelligence and cybersecurity.",
    es: "Me apasionan el fútbol y la música (quena, guitarra y piano). Soy una persona que aprende rápido y se adapta fácilmente a nuevos retos y tecnologías. Tengo conocimientos en Python, desarrollo web (HTML, CSS y JavaScript) y desarrollo de software. Además, cuento con habilidades en trabajo en equipo y comunicación efectiva. Me visualizo como un profesional especializado en desarrollo Full Stack, inteligencia artificial y ciberseguridad.",
    zh: "我热爱足球和音乐（克纳笛、吉他和钢琴）。我学习能力强，能够很快适应新的挑战和技术。我掌握 Python、Web 开发（HTML、CSS 和 JavaScript）以及软件开发。此外，我具备团队合作和良好沟通的能力。我希望成为一名专注于全栈开发、人工智能和网络安全的专业人士。",
    de: "Ich liebe Fußball und Musik (Quena, Gitarre und Klavier). Ich lerne schnell und passe mich leicht an neue Herausforderungen und Technologien an. Ich habe Kenntnisse in Python, Webentwicklung (HTML, CSS und JavaScript) und Softwareentwicklung. Außerdem bringe ich Teamfähigkeit und gute Kommunikation mit. In Zukunft sehe ich mich als Fachmann für Full-Stack-Entwicklung, künstliche Intelligenz und Cybersicherheit.",
    fr: "Je suis passionné de football et de musique (quena, guitare et piano). J'apprends vite et je m'adapte facilement aux nouveaux défis et aux nouvelles technologies. J'ai des connaissances en Python, en développement web (HTML, CSS et JavaScript) et en développement logiciel. Je sais aussi travailler en équipe et communiquer efficacement. Je me vois comme un professionnel spécialisé en développement Full Stack, en intelligence artificielle et en cybersécurité.",
  },
  "about.personal": { en: "Personal Info", es: "Datos Personales", zh: "个人信息", de: "Persönliche Daten", fr: "Informations personnelles" },
  "label.name":     { en: "Name:", es: "Nombre:", zh: "姓名：", de: "Name:", fr: "Nom :" },
  "label.age":      { en: "Age:", es: "Edad:", zh: "年龄：", de: "Alter:", fr: "Âge :" },
  "age.value":      { en: "22 years old", es: "22 años", zh: "22 岁", de: "22 Jahre", fr: "22 ans" },
  "label.city":     { en: "City:", es: "Ciudad:", zh: "城市：", de: "Stadt:", fr: "Ville :" },
  "city.value":     { en: "Tacna, Peru", es: "Tacna, Perú", zh: "秘鲁 塔克纳", de: "Tacna, Peru", fr: "Tacna, Pérou" },
  "label.university": { en: "University:", es: "Universidad:", zh: "大学：", de: "Universität:", fr: "Université :" },
  "label.major":    { en: "Major:", es: "Carrera:", zh: "专业：", de: "Studiengang:", fr: "Filière :" },
  "major.value": {
    en: "Computer and Systems Engineering", es: "Ingeniería en Informática y Sistemas", zh: "计算机与系统工程",
    de: "Informatik und Systemtechnik", fr: "Ingénierie informatique et systèmes",
  },
  "cv.download":    { en: "Download CV", es: "Descargar CV", zh: "下载简历", de: "Lebenslauf herunterladen", fr: "Télécharger le CV" },
  "about.interests": { en: "Interests", es: "Intereses", zh: "兴趣", de: "Interessen", fr: "Centres d'intérêt" },
  "int.programming": { en: "Programming", es: "Programación", zh: "编程", de: "Programmieren", fr: "Programmation" },
  "int.ai":          { en: "AI", es: "IA", zh: "人工智能", de: "KI", fr: "IA" },
  "int.cyber":       { en: "Cybersecurity", es: "Ciberseguridad", zh: "网络安全", de: "Cybersicherheit", fr: "Cybersécurité" },
  "int.football":    { en: "Football", es: "Fútbol", zh: "足球", de: "Fußball", fr: "Football" },
  "int.music":       { en: "Music", es: "Música", zh: "音乐", de: "Musik", fr: "Musique" },
  "int.instruments": { en: "Instruments", es: "Instrumentos", zh: "乐器", de: "Instrumente", fr: "Instruments" },
  "int.games":       { en: "Video games", es: "Videojuegos", zh: "电子游戏", de: "Videospiele", fr: "Jeux vidéo" },

  // ---------- Proyectos ----------
  "projects.title": { en: "Projects", es: "Proyectos", zh: "项目", de: "Projekte", fr: "Projets" },
  "p1.title": { en: "Sales Report Automation", es: "Automatización de Reportes de Ventas", zh: "销售报告自动化", de: "Automatisierte Verkaufsberichte", fr: "Automatisation des rapports de ventes" },
  "p1.desc": {
    en: "Merges each store's Excel files, cleans errors and builds a report with charts. (Completed)",
    es: "Une los Excels de cada tienda, limpia errores y genera un reporte con gráficos. (Completado)",
    zh: "合并各门店的 Excel 文件，清理错误数据并生成带图表的报告。（已完成）",
    de: "Führt die Excel-Dateien jeder Filiale zusammen, bereinigt Fehler und erstellt einen Bericht mit Diagrammen. (Fertig)",
    fr: "Fusionne les fichiers Excel de chaque magasin, corrige les erreurs et génère un rapport avec graphiques. (Terminé)",
  },
  "p2.title": { en: "Personal Program", es: "Programa Personal", zh: "个人程序", de: "Persönliches Programm", fr: "Programme personnel" },
  "p2.desc": {
    en: "Automates everyday tasks. (In progress)", es: "Automatiza tareas cotidianas. (En proceso)", zh: "自动化日常任务。（进行中）",
    de: "Automatisiert alltägliche Aufgaben. (In Arbeit)", fr: "Automatise les tâches quotidiennes. (En cours)",
  },
  "p3.title": { en: "Scientific Calculator", es: "Calculadora Científica", zh: "科学计算器", de: "Wissenschaftlicher Rechner", fr: "Calculatrice scientifique" },
  "p3.desc": {
    en: "Expressions, trigonometry, equations, statistics and number bases. (Completed)",
    es: "Expresiones, trigonometría, ecuaciones, estadística y bases numéricas. (Completado)",
    zh: "表达式、三角函数、方程、统计和进制转换。（已完成）",
    de: "Ausdrücke, Trigonometrie, Gleichungen, Statistik und Zahlensysteme. (Fertig)",
    fr: "Expressions, trigonométrie, équations, statistiques et bases numériques. (Terminé)",
  },
  "p4.title": { en: "Web Portfolio", es: "Portfolio Web", zh: "作品集网站", de: "Web-Portfolio", fr: "Portfolio web" },
  "p4.desc": {
    en: "Personal website. (In progress)", es: "Sitio web personal. (En proceso)", zh: "个人网站。（进行中）",
    de: "Persönliche Website. (In Arbeit)", fr: "Site web personnel. (En cours)",
  },
  "p5.title": { en: "Facial Recognition", es: "Reconocimiento Facial", zh: "人脸识别", de: "Gesichtserkennung", fr: "Reconnaissance faciale" },
  "p5.desc": {
    en: "Face detection with OpenCV. (In progress)", es: "Detección de rostros con OpenCV. (En proceso)", zh: "使用 OpenCV 进行人脸检测。（进行中）",
    de: "Gesichtserkennung mit OpenCV. (In Arbeit)", fr: "Détection de visages avec OpenCV. (En cours)",
  },

  // ---------- Curriculum ----------
  "resume.title":      { en: "Resume", es: "Curriculum", zh: "简历", de: "Lebenslauf", fr: "CV" },
  "resume.education":  { en: "Education", es: "Educación", zh: "教育背景", de: "Ausbildung", fr: "Formation" },
  "resume.present":    { en: "Present", es: "Actualidad", zh: "至今", de: "heute", fr: "aujourd'hui" },
  "edu1.desc": {
    en: "6th semester, focused on web development, AI and cybersecurity.", es: "6.º ciclo, con interés en desarrollo web, IA y ciberseguridad.",
    zh: "第六学期，关注 Web 开发、人工智能和网络安全。", de: "6. Semester, Schwerpunkte Webentwicklung, KI und Cybersicherheit.",
    fr: "6e semestre, intérêt pour le développement web, l'IA et la cybersécurité.",
  },
  "edu2.title": { en: "Primary and Secondary School", es: "Educación Básica Regular", zh: "中小学教育", de: "Grund- und Sekundarschule", fr: "Enseignement primaire et secondaire" },
  "edu2.desc": {
    en: "School education with an emphasis on science and technology.", es: "Formación escolar con énfasis en ciencias y tecnología.",
    zh: "以科学和技术为重点的基础教育。", de: "Schulbildung mit Schwerpunkt auf Naturwissenschaften und Technik.",
    fr: "Scolarité axée sur les sciences et la technologie.",
  },
  "resume.experience": { en: "Experience", es: "Experiencia", zh: "经历", de: "Erfahrung", fr: "Expérience" },
  "exp1.title": { en: "Personal Projects", es: "Proyectos Personales", zh: "个人项目", de: "Persönliche Projekte", fr: "Projets personnels" },
  "exp1.place": { en: "Independent development", es: "Desarrollo independiente", zh: "独立开发", de: "Eigenständige Entwicklung", fr: "Développement indépendant" },
  "exp1.desc": {
    en: "Python, C++ and web projects applied to automation, AI and development.", es: "Proyectos en Python, C++ y web aplicados a automatización, IA y desarrollo.",
    zh: "使用 Python、C++ 和 Web 技术开发的自动化、人工智能和软件项目。", de: "Projekte mit Python, C++ und Webtechnologien in Automatisierung, KI und Entwicklung.",
    fr: "Projets en Python, C++ et web appliqués à l'automatisation, à l'IA et au développement.",
  },

  // ---------- Portfolio ----------
  "portfolio.title": { en: "Portfolio", es: "Portfolio", zh: "作品集", de: "Portfolio", fr: "Portfolio" },
  "gallery.title":   { en: "Creative Design", es: "Diseño Creativo", zh: "创意设计", de: "Kreatives Design", fr: "Design créatif" },
  "gallery.sub":     { en: "Photography", es: "Fotografía", zh: "摄影", de: "Fotografie", fr: "Photographie" },

  // ---------- Contacto ----------
  "contact.title": { en: "Contact", es: "Contacto", zh: "联系方式", de: "Kontakt", fr: "Contact" },
  "ph.name":    { en: "Your name", es: "Tu Nombre", zh: "您的姓名", de: "Ihr Name", fr: "Votre nom" },
  "ph.phone":   { en: "Phone number", es: "Número telefónico", zh: "电话号码", de: "Telefonnummer", fr: "Numéro de téléphone" },
  "ph.email":   { en: "Email", es: "Correo electrónico", zh: "电子邮箱", de: "E-Mail-Adresse", fr: "Adresse e-mail" },
  "ph.subject": { en: "Subject", es: "Tema", zh: "主题", de: "Betreff", fr: "Sujet" },
  "ph.message": { en: "Message", es: "Mensaje", zh: "留言", de: "Nachricht", fr: "Message" },
  "contact.send":  { en: "Send Message", es: "Enviar Mensaje", zh: "发送消息", de: "Nachricht senden", fr: "Envoyer le message" },
  "contact.call":  { en: "Call:", es: "Llamar:", zh: "电话：", de: "Anrufen:", fr: "Appeler :" },
  "contact.email": { en: "Email:", es: "Email:", zh: "邮箱：", de: "E-Mail:", fr: "E-mail :" },
  // textos del correo que se arma al enviar el formulario
  "mail.subject": { en: "Contact from portfolio", es: "Contacto desde el portafolio", zh: "来自作品集网站的联系", de: "Kontakt über das Portfolio", fr: "Contact depuis le portfolio" },
  "mail.name":    { en: "Name", es: "Nombre", zh: "姓名", de: "Name", fr: "Nom" },
  "mail.email":   { en: "Email", es: "Correo", zh: "邮箱", de: "E-Mail", fr: "E-mail" },
  "mail.phone":   { en: "Phone", es: "Teléfono", zh: "电话", de: "Telefon", fr: "Téléphone" },

  // ---------- Página de detalle de proyectos ----------
  "detail.doc":     { en: "Project Details", es: "Detalle de Proyecto", zh: "项目详情", de: "Projektdetails", fr: "Détails du projet" },
  "detail.heading": { en: "Project Details", es: "Proyectos Detallados", zh: "项目详情", de: "Projektdetails", fr: "Projets en détail" },
  "detail.shots":   { en: "Screenshots:", es: "Capturas:", zh: "截图：", de: "Screenshots:", fr: "Captures d'écran :" },
  "detail.tech":    { en: "Technologies used:", es: "Tecnologías usadas:", zh: "使用的技术：", de: "Verwendete Technologien:", fr: "Technologies utilisées :" },
  "detail.back":    { en: "← Back to Projects", es: "← Volver a Proyectos", zh: "← 返回项目", de: "← Zurück zu den Projekten", fr: "← Retour aux projets" },
  "d1.title": { en: "Automatic Sales Report Generator", es: "Generador Automático de Reportes de Ventas", zh: "销售报告自动生成器", de: "Automatischer Verkaufsbericht-Generator", fr: "Générateur automatique de rapports de ventes" },
  "d1.desc": {
    en: "A Python program that automates a company's monthly sales report. It reads the Excel file from each store, fixes common errors (empty rows, misspelled names, wrong categories, missing data and duplicate sales) and logs every change. Then it calculates revenue, units, average ticket and sales by store, month, product and salesperson, and generates a formatted Excel report with charts. A task that takes hours by hand now takes seconds.",
    es: "Programa en Python que automatiza el reporte mensual de ventas de una empresa. Lee el Excel de cada tienda, corrige los errores más comunes (filas vacías, nombres mal escritos, categorías equivocadas, datos faltantes y ventas repetidas) y registra cada cambio. Luego calcula ingresos, unidades, ticket promedio y ventas por tienda, mes, producto y vendedor, y genera un reporte en Excel con formato y gráficos. Una tarea de horas pasa a tomar segundos.",
    zh: "一个用 Python 编写的程序，可自动生成企业的月度销售报告。它读取每家门店的 Excel 文件，修正常见错误（空行、名称拼写错误、类别错误、缺失数据和重复销售）并记录每一处修改。随后计算收入、销量、平均客单价，以及按门店、月份、产品和销售人员的销售情况，并生成带格式和图表的 Excel 报告。原本需要几个小时的工作现在只需几秒钟。",
    de: "Ein Python-Programm, das den monatlichen Verkaufsbericht eines Unternehmens automatisiert. Es liest die Excel-Datei jeder Filiale, korrigiert typische Fehler (leere Zeilen, falsch geschriebene Namen, falsche Kategorien, fehlende Daten und doppelte Verkäufe) und protokolliert jede Änderung. Anschließend berechnet es Umsatz, Stückzahlen, durchschnittlichen Bon und Verkäufe nach Filiale, Monat, Produkt und Verkäufer und erstellt einen formatierten Excel-Bericht mit Diagrammen. Eine Aufgabe von Stunden dauert jetzt nur Sekunden.",
    fr: "Programme Python qui automatise le rapport mensuel des ventes d'une entreprise. Il lit le fichier Excel de chaque magasin, corrige les erreurs courantes (lignes vides, noms mal écrits, mauvaises catégories, données manquantes et ventes en double) et enregistre chaque modification. Il calcule ensuite le chiffre d'affaires, les unités, le panier moyen et les ventes par magasin, mois, produit et vendeur, puis génère un rapport Excel mis en forme avec des graphiques. Une tâche de plusieurs heures ne prend plus que quelques secondes.",
  },
  "d1.tech": { en: "Python, pandas, openpyxl, matplotlib, Excel", es: "Python, pandas, openpyxl, matplotlib, Excel", zh: "Python、pandas、openpyxl、matplotlib、Excel", de: "Python, pandas, openpyxl, matplotlib, Excel", fr: "Python, pandas, openpyxl, matplotlib, Excel" },
  "detail.github": { en: "View code on GitHub", es: "Ver código en GitHub", zh: "在 GitHub 上查看代码", de: "Code auf GitHub ansehen", fr: "Voir le code sur GitHub" },
  "d2.title": { en: "Personal Automation Program", es: "Programa de Automatización Personal", zh: "个人自动化程序", de: "Programm zur persönlichen Automatisierung", fr: "Programme d'automatisation personnelle" },
  "d2.desc": {
    en: "This program automates everyday computer tasks, such as renaming files, moving folders and generating automatic reports.",
    es: "Este programa permite automatizar tareas cotidianas en la computadora, como renombrar archivos, mover carpetas y generar reportes automáticos.",
    zh: "该程序可以自动完成电脑上的日常任务，例如重命名文件、移动文件夹和自动生成报告。",
    de: "Dieses Programm automatisiert alltägliche Aufgaben am Computer, zum Beispiel Dateien umbenennen, Ordner verschieben und automatische Berichte erstellen.",
    fr: "Ce programme automatise les tâches quotidiennes sur l'ordinateur, comme renommer des fichiers, déplacer des dossiers et générer des rapports automatiques.",
  },
  "d2.tech": { en: "Python, Tkinter, Task automation", es: "Python, Tkinter, Automatización de tareas", zh: "Python、Tkinter、任务自动化", de: "Python, Tkinter, Aufgabenautomatisierung", fr: "Python, Tkinter, Automatisation des tâches" },
  "d3.title": { en: "Scientific Calculator in C++", es: "Calculadora Científica en C++", zh: "C++ 科学计算器", de: "Wissenschaftlicher Rechner in C++", fr: "Calculatrice scientifique en C++" },
  "d3.desc": {
    en: "A console scientific calculator written in C++17 without external libraries. It evaluates complete expressions such as 2*sin(30) + sqrt(16)^2 using its own parser (lexical analysis and recursive descent) that respects operator precedence and parentheses. It includes trigonometry in degrees or radians, logarithms, factorials and combinatorics, quadratic equations with complex roots, 2x2 systems (Cramer's rule), statistics (mean, median, mode, variance and standard deviation) and conversion between decimal, binary, octal and hexadecimal. It shows clear error messages and is verified by 108 automated tests.",
    es: "Calculadora científica de consola escrita en C++17, sin librerías externas. Evalúa expresiones completas como 2*sin(30) + sqrt(16)^2 con un analizador propio (análisis léxico y descenso recursivo) que respeta la precedencia de operadores y los paréntesis. Incluye trigonometría en grados o radianes, logaritmos, factorial y combinatoria, ecuaciones de segundo grado con raíces complejas, sistemas 2x2 (regla de Cramer), estadística (media, mediana, moda, varianza y desviación estándar) y conversión entre decimal, binario, octal y hexadecimal. Muestra mensajes de error claros y está verificada con 108 pruebas automáticas.",
    zh: "一个用 C++17 编写的控制台科学计算器，不依赖任何外部库。它使用自己编写的解析器（词法分析和递归下降）计算完整的表达式，例如 2*sin(30) + sqrt(16)^2，并遵循运算符优先级和括号。功能包括角度或弧度制的三角函数、对数、阶乘和组合数学、带复数根的一元二次方程、二元一次方程组（克莱姆法则）、统计（平均数、中位数、众数、方差和标准差）以及十进制、二进制、八进制和十六进制之间的转换。它会显示清晰的错误信息，并通过了 108 项自动化测试。",
    de: "Ein wissenschaftlicher Konsolen-Taschenrechner in C++17 ohne externe Bibliotheken. Er berechnet vollständige Ausdrücke wie 2*sin(30) + sqrt(16)^2 mit einem eigenen Parser (lexikalische Analyse und rekursiver Abstieg), der Operatorrangfolge und Klammern beachtet. Er bietet Trigonometrie in Grad oder Bogenmaß, Logarithmen, Fakultät und Kombinatorik, quadratische Gleichungen mit komplexen Lösungen, 2x2-Gleichungssysteme (Cramersche Regel), Statistik (Mittelwert, Median, Modus, Varianz und Standardabweichung) sowie die Umrechnung zwischen Dezimal-, Binär-, Oktal- und Hexadezimalsystem. Er zeigt verständliche Fehlermeldungen und wird durch 108 automatisierte Tests geprüft.",
    fr: "Calculatrice scientifique en console écrite en C++17, sans bibliothèque externe. Elle évalue des expressions complètes comme 2*sin(30) + sqrt(16)^2 grâce à son propre analyseur (analyse lexicale et descente récursive) qui respecte la priorité des opérateurs et les parenthèses. Elle propose la trigonométrie en degrés ou en radians, les logarithmes, la factorielle et la combinatoire, les équations du second degré avec racines complexes, les systèmes 2x2 (règle de Cramer), les statistiques (moyenne, médiane, mode, variance et écart type) et la conversion entre décimal, binaire, octal et hexadécimal. Elle affiche des messages d'erreur clairs et est vérifiée par 108 tests automatisés.",
  },
  "d3.tech": { en: "C++17, g++, Makefile, automated tests", es: "C++17, g++, Makefile, pruebas automáticas", zh: "C++17、g++、Makefile、自动化测试", de: "C++17, g++, Makefile, automatisierte Tests", fr: "C++17, g++, Makefile, tests automatisés" },
};

// ---------- Lógica ----------
let idiomaActual = IDIOMA_POR_DEFECTO;

// Devuelve el texto de una clave en el idioma actual
function t(clave) {
  const fila = T[clave];
  if (!fila) return clave;
  return fila[idiomaActual] ?? fila[IDIOMA_POR_DEFECTO];
}

function leerIdiomaGuardado() {
  try { return localStorage.getItem("idioma"); } catch (e) { return null; }
}

function guardarIdioma(codigo) {
  try { localStorage.setItem("idioma", codigo); } catch (e) { /* modo privado: no pasa nada */ }
}

// El subtítulo de la portada tiene un efecto de "escritura" que necesita
// saber el ancho exacto del texto, que cambia con cada idioma.
function reiniciarEfectoEscritura() {
  const h2 = document.querySelector(".inicio .contenido-banner h2");
  if (!h2) return;
  h2.style.animation = "none";
  h2.style.setProperty("--ancho-escritura", h2.scrollWidth + 4 + "px");
  void h2.offsetWidth; // fuerza al navegador a reiniciar la animación
  h2.style.animation = "";
}

function aplicarIdioma(codigo) {
  if (!IDIOMAS[codigo]) codigo = IDIOMA_POR_DEFECTO;
  idiomaActual = codigo;
  document.documentElement.lang = codigo;

  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

  const tituloDoc = document.documentElement.dataset.i18nTitle;
  if (tituloDoc) document.title = t(tituloDoc) + " - Danny Yair Luque Pari";

  // botón del menú: bandera + código del idioma actual
  const boton = document.querySelector(".idioma-boton");
  if (boton) {
    boton.querySelector(".idioma-actual").innerHTML = banderaSVG(codigo) + `<span>${codigo.toUpperCase()}</span>`;
    boton.setAttribute("aria-label", t("lang.label") + ": " + IDIOMAS[codigo]);
  }
  document.querySelectorAll(".idioma-menu button").forEach(b => {
    b.setAttribute("aria-selected", b.dataset.lang === codigo);
  });

  reiniciarEfectoEscritura();
}

// Arma el menú desplegable de idiomas
(function iniciarIdiomas() {
  const caja = document.querySelector(".idioma");
  if (caja) {
    const boton = caja.querySelector(".idioma-boton");
    const menu = caja.querySelector(".idioma-menu");
    menu.innerHTML = Object.entries(IDIOMAS).map(([codigo, nombre]) =>
      `<li><button type="button" role="option" data-lang="${codigo}" lang="${codigo}">` +
      `${banderaSVG(codigo)}<span>${nombre}</span><i class="fa-solid fa-check"></i></button></li>`
    ).join("");

    const abrir = (si) => {
      caja.classList.toggle("abierto", si);
      boton.setAttribute("aria-expanded", si);
    };
    boton.addEventListener("click", (e) => {
      e.stopPropagation();
      abrir(!caja.classList.contains("abierto"));
      // en celular, cierra el menú de secciones si estaba abierto
      document.getElementById("nav")?.classList.remove("responsive");
    });
    menu.addEventListener("click", (e) => {
      const opcion = e.target.closest("button[data-lang]");
      if (!opcion) return;
      guardarIdioma(opcion.dataset.lang);
      aplicarIdioma(opcion.dataset.lang);
      abrir(false);
      boton.focus();
    });
    document.addEventListener("click", (e) => { if (!caja.contains(e.target)) abrir(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") abrir(false); });
  }
  aplicarIdioma(leerIdiomaGuardado() || IDIOMA_POR_DEFECTO);
  // al cargar la fuente el ancho del texto cambia un poco
  if (document.fonts) document.fonts.ready.then(reiniciarEfectoEscritura);
})();
