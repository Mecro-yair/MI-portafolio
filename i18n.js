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

const T = {
  // ---------- Menú ----------
  "nav.home":      { en: "HOME", es: "INICIO", zh: "首页", de: "START", fr: "ACCUEIL" },
  "nav.about":     { en: "ABOUT ME", es: "SOBRE MÍ", zh: "关于我", de: "ÜBER MICH", fr: "À PROPOS" },
  "nav.projects":  { en: "PROJECTS", es: "PROYECTOS", zh: "项目", de: "PROJEKTE", fr: "PROJETS" },
  "nav.resume":    { en: "RESUME", es: "CURRICULUM", zh: "简历", de: "LEBENSLAUF", fr: "CV" },
  "nav.portfolio": { en: "PORTFOLIO", es: "PORTFOLIO", zh: "作品集", de: "PORTFOLIO", fr: "PORTFOLIO" },
  "nav.contact":   { en: "CONTACT", es: "CONTACTO", zh: "联系", de: "KONTAKT", fr: "CONTACT" },
  "lang.label":    { en: "Language", es: "Idioma", zh: "语言", de: "Sprache", fr: "Langue" },

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
  "p1.title": { en: "Business Automation", es: "Automatización Empresarial", zh: "企业自动化", de: "Geschäftsautomatisierung", fr: "Automatisation d'entreprise" },
  "p1.desc": {
    en: "Optimizing repetitive tasks. (In progress)", es: "Optimización de tareas repetitivas. (En proceso)", zh: "优化重复性任务。（进行中）",
    de: "Optimierung wiederkehrender Aufgaben. (In Arbeit)", fr: "Optimisation des tâches répétitives. (En cours)",
  },
  "p2.title": { en: "Personal Program", es: "Programa Personal", zh: "个人程序", de: "Persönliches Programm", fr: "Programme personnel" },
  "p2.desc": {
    en: "Automates everyday tasks. (In progress)", es: "Automatiza tareas cotidianas. (En proceso)", zh: "自动化日常任务。（进行中）",
    de: "Automatisiert alltägliche Aufgaben. (In Arbeit)", fr: "Automatise les tâches quotidiennes. (En cours)",
  },
  "p3.title": { en: "Scientific Calculator", es: "Calculadora Científica", zh: "科学计算器", de: "Wissenschaftlicher Rechner", fr: "Calculatrice scientifique" },
  "p3.desc": {
    en: "Trigonometric and algebraic functions. (In progress)", es: "Funciones trigonométricas y algebraicas. (En proceso)", zh: "三角函数和代数函数。（进行中）",
    de: "Trigonometrische und algebraische Funktionen. (In Arbeit)", fr: "Fonctions trigonométriques et algébriques. (En cours)",
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
  "d1.title": { en: "Business Process Automation", es: "Automatización de un Proceso Empresarial", zh: "企业流程自动化", de: "Automatisierung eines Geschäftsprozesses", fr: "Automatisation d'un processus d'entreprise" },
  "d1.desc": {
    en: "This project focuses on automating repetitive tasks within a company, using scripts and macros to save time and reduce human error.",
    es: "Este proyecto se enfoca en la automatización de tareas repetitivas dentro de una empresa, utilizando scripts y macros para optimizar tiempos y reducir errores humanos.",
    zh: "本项目专注于企业内部重复性任务的自动化，利用脚本和宏来节省时间并减少人为错误。",
    de: "Dieses Projekt automatisiert wiederkehrende Aufgaben in einem Unternehmen mit Skripten und Makros, um Zeit zu sparen und menschliche Fehler zu reduzieren.",
    fr: "Ce projet porte sur l'automatisation des tâches répétitives au sein d'une entreprise, à l'aide de scripts et de macros pour gagner du temps et réduire les erreurs humaines.",
  },
  "d1.tech": { en: "Python, Excel, Process automation", es: "Python, Excel, Automatización de procesos", zh: "Python、Excel、流程自动化", de: "Python, Excel, Prozessautomatisierung", fr: "Python, Excel, Automatisation des processus" },
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
    en: "A C++ console project that performs advanced math calculations, including trigonometric, algebraic and statistical functions.",
    es: "Proyecto de consola en C++ que realiza cálculos matemáticos avanzados, incluyendo funciones trigonométricas, algebraicas y estadísticas.",
    zh: "一个 C++ 控制台项目，可以进行高级数学计算，包括三角函数、代数函数和统计函数。",
    de: "Ein C++-Konsolenprojekt für fortgeschrittene mathematische Berechnungen, darunter trigonometrische, algebraische und statistische Funktionen.",
    fr: "Projet console en C++ qui effectue des calculs mathématiques avancés, notamment des fonctions trigonométriques, algébriques et statistiques.",
  },
  "d3.tech": { en: "C++, Console, Math functions", es: "C++, Consola, Funciones matemáticas", zh: "C++、控制台、数学函数", de: "C++, Konsole, Mathematische Funktionen", fr: "C++, Console, Fonctions mathématiques" },
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

  const selector = document.getElementById("selector-idioma");
  if (selector) selector.value = codigo;

  reiniciarEfectoEscritura();
}

// Llena el selector del menú y escucha los cambios
(function iniciarIdiomas() {
  const selector = document.getElementById("selector-idioma");
  if (selector) {
    selector.innerHTML = Object.entries(IDIOMAS)
      .map(([codigo, nombre]) => `<option value="${codigo}">${nombre}</option>`)
      .join("");
    selector.addEventListener("change", () => {
      guardarIdioma(selector.value);
      aplicarIdioma(selector.value);
    });
  }
  aplicarIdioma(leerIdiomaGuardado() || IDIOMA_POR_DEFECTO);
  // al cargar la fuente el ancho del texto cambia un poco
  if (document.fonts) document.fonts.ready.then(reiniciarEfectoEscritura);
})();
