function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("lights")) {
    img.setAttribute("src", "./assets/escudo.png")
  } else {
    img.setAttribute("src", "./assets/escudo.png")
  }

  // pegar a tag img

  // se tiver light mode, adicionar a imagem light mode
  // substituir a imagem
}
