// 1 - setTimeout
console.log("Ainda não executou");

setTimeout(function () {
  console.log("Requisição assíncrona!");
}, 2000);

console.log("Ainda não executou 2");

// 2 - setInterval
console.log("Ainda não começou");

// setInterval(function () {
//   console.log("Intervalo assíncrono");
// }, 3000);

console.log("Ainda não começou 2");

// 3 - Promise
const promessa = Promise.resolve(5 + 5);

console.log("Algum código!");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é: ${value}`));

// 4 - Falha na promise

Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos!");
    }
  })
  .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5 - rejeição
function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10!`);
    } else {
      reject(new Error("Número muito baixo!"));
    }
  });
}

const a = checkNumber(20);

const b = checkNumber(1);

a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

// 6 - resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("Erro!");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - async functions
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é: ${value}`);
});

// 8 - await
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu Promise");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando Promise, e esperando resultado...");
  const result = await resolveComDelay();
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 9 - generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
