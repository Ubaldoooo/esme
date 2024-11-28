function mostrarImagen(url) {
  const contenedor = document.getElementById("imagen-playa");
  contenedor.innerHTML = `<img src="${url}" alt="Imagen de la playa">`;
}
