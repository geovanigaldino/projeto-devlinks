function tooggleMode() {
  const html = document.body;
  html.classList.toggle('light');
  
  // pegar a tag img
  const img = document.querySelector('#profile img');

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/perfil-light.png");
    img.setAttribute("alt", "Foto do perfil de Geovani no modo claro");
  } else {
    // se tiver sem light, manter a imagem normal
    img.setAttribute('src', './assets/perfil.png');
    img.setAttribute("alt", "Foto do perfil de Geovani");
  }
}