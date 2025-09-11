// === MENÚ RESPONSIVE ===
function mostrarOcultarMenu() {
    let nav = document.getElementById("nav");
    nav.classList.toggle("responsive"); // añade o quita la clase sin borrar las demás
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList.remove("responsive");
}

// === ANIMACIÓN DE HABILIDADES ===
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    if (!skills) return; // evita errores si no existe la sección

    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.querySelectorAll(".skill .progreso");

        // Valores finales de tus skills (ajústalos si cambias algo)
        let porcentajes = [75, 89, 95, 81, 55, 80, 70, 99, 65, 94];

        habilidades.forEach((barra, i) => {
            if (!barra.classList.contains("animado")) { 
                barra.classList.add("animado");

                let valorFinal = porcentajes[i];
                let ancho = 0;
                let intervalo = setInterval(() => {
                    if (ancho >= valorFinal) {
                        clearInterval(intervalo);
                    } else {
                        ancho++;
                        barra.style.width = ancho + "%";

                        // Crear el span solo si no existe
                        if (!barra.querySelector("span")) {
                            let span = document.createElement("span");
                            barra.appendChild(span);
                        }
                        barra.querySelector("span").innerText = ancho + "%";
                    }
                }, 15); 
            }
        });
    }
}

// Detecto el scroll para aplicar la animación
window.addEventListener("scroll", efectoHabilidades);
