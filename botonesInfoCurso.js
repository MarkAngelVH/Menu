document.addEventListener('DOMContentLoaded', function () {
    // Mostrar solo la descripción de Acerca De al inicio
    mostrarSeccion('acercaDe');
  });

  function mostrarSeccion(seccion) {
    // Ocultar todas las descripciones y mostrar la seleccionada
    var descripciones = document.querySelectorAll('.descripcionesdelcurso > div');
    descripciones.forEach(function (descripcion) {
      descripcion.style.display = 'none';
    });

    var descripcionSeleccionada = document.querySelector('.descripcion-de-' + seccion);
    if (descripcionSeleccionada) {
      descripcionSeleccionada.style.display = 'block';
    }
  }

  