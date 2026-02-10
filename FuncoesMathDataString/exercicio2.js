var palavra_A = " João, mariA, NicolaS, SocoRRo, zuLeiCa";

var palavra_B = (palavra_A.toLowerCase);

var palavra_C = (palavra_B.replace(" ",""));

const nomes_sujos= palavra_C.split(",");

let nomes_limpos = [];

for (let i = 0; i < nomes_sujos.length; i++) {
  nomes_limpos[i] = nomes_sujos[i].charAt(0).toUpperCase() + nomes_sujos[i].slice(1).toLowerCase();
}

console.log(nomes_limpos);