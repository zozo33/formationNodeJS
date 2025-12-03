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

// valeurs.include(22) true ou false
valeurs1 = [22, 44, 55]
valeurs2 = [22, 22, 22]
let commun = 0;
for (let v1 of valeurs1) {
    if (valeurs2.includes(v1)) commun++;
}
console.log(commun)