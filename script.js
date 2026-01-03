function toggleMode() {
  /* document = é a representação do nosso documento (pagina), "."= acessando propriedade e funcionalidades, documentElement=html */
  const html = document.documentElement
  html.classList.toggle("light")

  /*querySelector == Pesquisa pelo seletor*/
  const img = document.querySelector("#profile img")
  /* if condicional*/
  if (html.classList.contains("light")) {
    //
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  /* pegar a tag img, subistituir a img.
  Se tiver light mode, pegar a img light, se nãoo manter a img normal */
}
