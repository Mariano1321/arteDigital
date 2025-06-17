async function mostrarSeccion(seccion) {
  const contenedor = document.getElementById('contenido');
  try {
    const response = await fetch(html/${seccion}.html);
    if (!response.ok) throw new Error('No se pudo cargar la sección');
    const html = await response.text();
    contenedor.innerHTML = html;
  } catch (err) {
    contenedor.innerHTML = <p>Error al cargar la sección: ${err.message}</p>;
  }
}

// Cargar sección inicial al abrir la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion('inicio');
})