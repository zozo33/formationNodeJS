const { Worker } = require('worker_threads');

//le travailleur fasse la somme de 1+2+3....+20
const worker = new Worker('./worker.js');

// une fois le travail du worker effetué, il renvoie le cumul
worker.on('message', (cumul) => {
    console.log(`Résultat du Worker: cumul = ${cumul.valeur}`);
});

worker.postMessage(20); // Envoie une valeur au Worker

setTimeout(() => process.exit(0), 3000)