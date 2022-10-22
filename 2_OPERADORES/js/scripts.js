// 1 - Number
console.log(typeof 2);
console.log(typeof 2.2);
console.log(typeof -4);

// 2 - Ops. aritméticas

console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

// 3 - Special Numbers
console.log(typeof Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings
console.log("Um texto");
console.log(`Mais um texto`);

console.log(typeof "Opa");

// 5 - Símbolos especiais em string
console.log("Testando \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi, " + " tudo " + "bem?");

console.log(`Testando ` + `Concatenação`);

// 7 - Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa ${console.log("teste")}`);

// 8 - Booleans
console.log(5 > 2);

console.log(30 > 100);

console.log(typeof true);

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - op logico na prática
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(10 > 2 || 5 > 100);

console.log(!50 > 10);

// 12 - empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - mudança de tipos
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);
