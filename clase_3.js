let frutas = ["fresa", "mango", "limón", "plátano", "durazno", "pera", "piña", "sandia", "kiwi", "mango", "fresa", "piña"];

let fresa = 0;
let mango = 0;
let limón = 0;
let plátano = 0;
let durazno = 0;
let pera = 0;
let piña = 0;
let sandia = 0;
let kiwi = 0;

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] == "fresa") {
        fresa++;
    } else if (frutas[i] == "mango") {
        mango++;
    } else if (frutas[i] == "limón") {
        limón++;
    } else if (frutas[i] == "plátano") {
        plátano++;
    } else if (frutas[i] == "durazno") {
        durazno++;
    } else if (frutas[i] == "pera") {
        pera++;
    } else if (frutas[i] == "piña") {
        piña++;
    } else if (frutas[i] == "sandia") {
        sandia++;
    } else if (frutas[i] == "kiwi") {
        kiwi++;
    }
}

console.log(fresa);
console.log(mango);
console.log(limón);
console.log(plátano);
console.log(durazno);
console.log(pera);
console.log(piña);
console.log(sandia);
console.log(kiwi);