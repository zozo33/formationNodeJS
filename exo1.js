// compter le nombre de valeurs communes aux deux tableaux
const max = 20; // max 
let valeurs1 = []; // tableau
for (let i = 0; i < max; i++) {
    let v = Math.random() * max;
    v = Math.ceil(v);
    valeurs1.push(v)
}
let valeurs2 = []; // tableau
for (let i = 0; i < max; i++) {
    let v = Math.random() * max;
    v = Math.ceil(v);
    valeurs2.push(v)
}

let compteur = 0;
let compteurUnique = 0;

let tableauNombreCommun = [];
for (let i of valeurs1) {
    if (valeurs2.includes(valeurs1[i])) {
        compteur++;
        if (!tableauNombreCommun.includes(valeurs1[i])) {
            compteurUnique++;
        }
        tableauNombreCommun.push(valeurs1[i]);
    }
}
console.log(valeurs1);
console.log(valeurs2);
console.log(compteur);
console.log(compteurUnique);