let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// === Función que aplica las animaciones de las habilidades ===
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.querySelectorAll(".skill .progreso");
        
        // Valores finales de tus skills (ajústalos si cambias algo)
        let porcentajes = [75, 89, 95, 81, 55, 80, 70, 99, 65, 94];

        habilidades.forEach((barra, i) => {
            if (!barra.classList.contains("animado")) { // evita reiniciar la animación en cada scroll
                barra.classList.add("animado");

                let valorFinal = porcentajes[i];
                let ancho = 0;
                let intervalo = setInterval(() => {
                    if (ancho >= valorFinal) {
                        clearInterval(intervalo);
                    } else {
                        ancho++;
                        barra.style.width = ancho + "%";

                        // si no existe el span, lo creamos
                        if (!barra.querySelector("span")) {
                            let span = document.createElement("span");
                            barra.appendChild(span);
                        }
                        barra.querySelector("span").innerText = ancho + "%";
                    }
                }, 15); // velocidad de la animación
            }
        });
    }
}

// Detecto el scrolling para aplicar la animación de las barras
window.onscroll = function () {
    efectoHabilidades();
};
