// 1 - Variáveis
let nome = "Matheus";

console.log(nome);

nome = "Matheus Battisti";

console.log(nome);

const idade = 31;

console.log(idade);

// idade = 32;

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Battisti";

const nomeCompleto = "João da Silva";

console.log(nomecompleto, nomeCompleto);

let _teste = "válido";

let $teste = "válido";

console.log(_teste, $teste);

// 3 - prompt

// const age = prompt("Digite sua idade: ");

// console.log(`Você tem ${age} anos!`);

// 4 - alert

// alert("Testando");

// const z = 10;

// alert(`O número é ${z}`);

// 5 - Math

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - console

console.log("teste");

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10;

if (m > 5) {
  console.log("M é maior que 5!");
}

const user = "João";

if (user === "João") {
  console.log("Olá João!");
}

if (user === "Maria") {
  console.log("Olá Maria!");
}

// 8 - else

const loggedIn = false;

if (loggedIn) {
  console.log("Usuário autenticado");
} else {
  console.log("Usuário não autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos!");
} else {
  console.log("Os números não são alto suficientes!");
}

// 9 - else if
if (1 > 2) {
  console.log("Teste");
} else if (2 > 3) {
  console.log("Teste 2");
} else if (5 > 1) {
  console.log("Agora sim!");
}

const userName = "Matheus";
const userAge = 31;

if (userName === "José") {
  console.log("Bem vindo José!");
} else if (userName === "Matheus" && userAge === 31) {
  console.log("Olá Matheus, você tem 31 anos!");
} else {
  console.log("Nenhuma condição aceita!");
}

// 10 while
let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p++;
}

// loop infinito
// let x = 10;
// while (x > 5) {
//   console.log(`Imprimindo ${x}`);
// }

// 11 - do while
let o = 10;

do {
  console.log(`Valor de o: ${o}`);
  o = o - 1;
} while (o > 1);

// 12 - for
for (let t = 0; t < 10; t++) {
  console.log("Repetindo algo...");
}

let r = 10;

for (r; r > 0; r = r - 1) {
  console.log(`O r está diminuindo: ${r}`);
}

console.log(r);

// 13 - identaçao
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("deu 0!");
    }
  }
}

// 14 - break
for (let g = 20; g > 10; g--) {
  console.log(`O g é: ${g}`);

  if (g === 12) {
    console.log("Chegamos no 12!");
    break;
  }
}

// 15 - continue
for (s = 0; s < 10; s++) {
  if (s % 2 === 0) {
    console.log("Número par!");
    continue;
  }
  console.log(s);
}

// 15 - switch
const job = "Advogado";

switch (job) {
  case "Programador":
    console.log("Voce é um programador!");
    break;
  case "Advogado":
    console.log("Voce é um advogado!");
    break;
  case "Engenheiro":
    console.log("Voce é um engenheiro!");
    break;
  default:
    console.log("Profissão não encontrada");
}

// switch "errado"
const l = 100;

switch (l) {
  case 200:
    console.log("L é 200!");
  case 100:
    console.log("L é 100!");
  case 10:
    console.log("L é 10!");
  default:
    console.log("L não foi encontrado");
}
