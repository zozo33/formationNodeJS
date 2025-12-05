// worker.js (Thread Ouvrier)
const { parentPort } = require('worker_threads');

// effectuer le cumul sur la base de max
parentPort.on('message', (max) => {
    let cumul = 0;
    for (let i = 1; i <= max; i++) {
        cumul += i;
    }

    // renvoi au parent le resultat
    parentPort.postMessage({
        valeur: cumul
    });
});