document.addEventListener('DOMContentLoaded', function () {  //Questo è un evento che viene attivato quando il documento HTML è stato completamente caricato 
  const sections = document.querySelectorAll('.section-animate'); //seleziona tutti gli elementi della pagina che hanno la classe CSS section-animate

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('appear');
        }, 120); // Ritardo di 120 millisecondi (0,12 secondi)
      } else {
        entry.target.classList.remove('appear');
      }
    });
  }, { threshold: 0 }); //deve essere attivato non appena anche una minima parte dell'elemento target diventa visibile nella viewport

  sections.forEach(section => {
    observer.observe(section); //ogni sezione della pagina è osservata per determinare quando diventa visibile durante lo scroll
  });
});