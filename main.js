function mostrarSeccion(nombre) {
  const ruta = `html/${nombre}.html`;
  fetch(ruta)
    .then(res => res.text())
    .then(html => {
      document.getElementById("contenido-principal").innerHTML = html;
    })
    .catch(error => {
      document.getElementById("contenido-principal").innerHTML = "<p>Error al cargar la sección.</p>";
      console.error("Error cargando la sección:", error);
    });
}