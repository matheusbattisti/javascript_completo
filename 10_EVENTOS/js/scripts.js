// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou aqui!");
});

// 2 - removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento de evento
const title = document.querySelector("#my-title");

title.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.srcElement);
  console.log(e.offsetX);
  console.log(e.pointerType);
});

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  // sem isso acontece a propagação
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - removendo efeito padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não alterou a página");
});

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Pressionou a tecla ${e.key}`);
});

// 7 - outros eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou botão");
});

mouseEvents.addEventListener("mousedown", () => {
  console.log("Soltou botão");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("Clique duplo");
});

// 8 - movimento do mouse
document.addEventListener("mousemove", (e) => {
  console.log(`No eixo X: ${e.x}`);
  console.log(`No eixo Y: ${e.y}`);
});
