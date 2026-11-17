// === MODOS PARA DALTONISMO ===
// El botón del ojo cambia los colores de acento de la página (ver "MODOS PARA
// DALTONISMO" en styles.css). La elección se recuerda en el navegador.
// Este archivo se carga antes que i18n.js para que los textos del menú se traduzcan.

const MODOS_VISION = [
  // código, clave de traducción, los dos colores que se muestran en el menú
  { codigo: "normal", clave: "vision.normal", colores: ["#00e5ff", "#ff2da1"] },
  { codigo: "protan", clave: "vision.protan", colores: ["#56b4e9", "#e69f00"] },
  { codigo: "deutan", clave: "vision.deutan", colores: ["#56b4e9", "#e69f00"] },
  { codigo: "tritan", clave: "vision.tritan", colores: ["#ff7aa2", "#00c9a7"] },
  { codigo: "mono",   clave: "vision.mono",   colores: ["#ffffff", "#ffd60a"] },
];

function leerVisionGuardada() {
  try { return localStorage.getItem("vision"); } catch (e) { return null; }
}

function guardarVision(codigo) {
  try { localStorage.setItem("vision", codigo); } catch (e) { /* modo privado */ }
}

function aplicarVision(codigo) {
  if (!MODOS_VISION.some(m => m.codigo === codigo)) codigo = "normal";
  if (codigo === "normal") delete document.documentElement.dataset.vision;
  else document.documentElement.dataset.vision = codigo;
  document.querySelectorAll(".vision-menu button").forEach(b => {
    b.setAttribute("aria-selected", b.dataset.vision === codigo);
  });
}

(function iniciarVision() {
  // se aplica enseguida para que la página no parpadee con los colores normales
  aplicarVision(leerVisionGuardada() || "normal");

  const caja = document.querySelector(".vision");
  if (!caja) return;
  const boton = caja.querySelector(".desplegable-boton");
  const menu = caja.querySelector(".desplegable-menu");

  menu.innerHTML =
    `<li class="titulo-menu" data-i18n="vision.label">Color vision</li>` +
    MODOS_VISION.map(m =>
      `<li><button type="button" role="option" data-vision="${m.codigo}">` +
      `<span class="muestra" aria-hidden="true"><i style="background:${m.colores[0]}"></i><i style="background:${m.colores[1]}"></i></span>` +
      `<span data-i18n="${m.clave}"></span><i class="fa-solid fa-check"></i></button></li>`
    ).join("");
  aplicarVision(leerVisionGuardada() || "normal"); // marca la opción elegida

  const abrir = (si) => {
    caja.classList.toggle("abierto", si);
    boton.setAttribute("aria-expanded", si);
  };
  boton.addEventListener("click", (e) => {
    e.stopPropagation();
    abrir(!caja.classList.contains("abierto"));
    document.getElementById("nav")?.classList.remove("responsive");
  });
  menu.addEventListener("click", (e) => {
    const opcion = e.target.closest("button[data-vision]");
    if (!opcion) return;
    guardarVision(opcion.dataset.vision);
    aplicarVision(opcion.dataset.vision);
    abrir(false);
    boton.focus();
  });
  document.addEventListener("click", (e) => { if (!caja.contains(e.target)) abrir(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") abrir(false); });
})();
