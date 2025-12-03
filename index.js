
function sayHello() {
    console.log("hello world");
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
sayHello();

class Afficher {
    run(max) {
        for (let i = 0; i < max; i++) console.log("Je compte ", i)
    }
}

let a = new Afficher()
a.run(100)

// créer un tableau de 10 val aleatoires
// Math.random() * 20 => [0,19] a virgules
// convertir un nombre a virgule en val entiere = Math.round()
// affciher le nombre de valeurs paires dans le tableau

let tableau = [];
for (let i = 0; i < 20; i++) {
    let v = Math.random() * i;
    tableau.push(Math.ceil(v));
}
console.log(tableau);

let compteur = 0;
for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] % 2 == 0) {
        compteur++;
    }
}
console.log("Nombre de nombres pairs : ", compteur);


