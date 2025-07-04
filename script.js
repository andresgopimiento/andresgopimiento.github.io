
  document.addEventListener("DOMContentLoaded", () => {
    const imagenPerfil = document.getElementById("imagenPerfil");
    const foto = document.getElementById("fotoPerfil");

    const originalSrc = "yo.jpg";
    const primeraGata = "gatita.jpg";
    const segundaGato = "/gatito.gif";

    let cambioSecundario;

    imagenPerfil.addEventListener("mouseenter", () => {
      foto.src = primeraGata;

      cambioSecundario = setTimeout(() => {
        foto.src = segundaGato;
      }, 2000); // espera 2 segundos
    });

    imagenPerfil.addEventListener("mouseleave", () => {
      clearTimeout(cambioSecundario);
      foto.src = originalSrc;
    });
  });


  



  document.addEventListener("DOMContentLoaded", () => {
    const habilidades = document.querySelectorAll(".habilidad");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    habilidades.forEach(hab => observer.observe(hab));
  });



  function animarSkills() {
    const seccion = document.getElementById("skills");
    const distancia = seccion.getBoundingClientRect();

    if (
      distancia.top < window.innerHeight &&
      distancia.bottom > 0 &&
      !seccion.classList.contains("visible")
    ) {
      seccion.classList.add("visible");

      const barras = document.querySelectorAll(".progreso");
      barras.forEach(barra => {
        barra.classList.add("animado");
      });
    }
  }

  window.addEventListener("scroll", animarSkills);
  window.addEventListener("load", animarSkills);
