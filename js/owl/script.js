let maisInformacoes = document.getElementById("informacoes");
function clicarInformacoes() {
  maisInformacoes.style.display = "block";
}

//pegando todas as imagens dentro da div com classe .slider
var slider = document.querySelectorAll(".slider img");

var imagens_slider = [];

//varrendo array e pegando imagens do src para um novo array
for (cont = 0; cont < slider.length; cont++) {
  imagens_slider.push(slider[cont].src);
}

console.log(imagens_slider);
