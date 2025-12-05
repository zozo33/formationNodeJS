import { Worker } from 'worker_threads';

console.log("=== Exemple de Worker Threads en Node.js ===\n");

// Exemple 1: Worker simple avec calcul intensif
function exemple1_CalculIntensif() {
    console.log("--- Exemple 1: Calcul intensif dans un Worker ---");

    const worker = new Worker(`
        const { parentPort, workerData } = require('worker_threads');
        
        // Fonction qui simule un calcul intensif
        function calculerFactorielle(n) {
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
        
        const resultat = calculerFactorielle(workerData.nombre);
        parentPort.postMessage({ resultat });
    `, {
        eval: true,
        workerData: { nombre: 20 }
    });

    worker.on('message', (msg) => {
        console.log(`Factorielle calculée: ${msg.resultat}`);
    });

    worker.on('error', (err) => {
        console.error('Erreur dans le worker:', err);
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker arrêté avec le code ${code}`);
        }
    });
}

// Exemple 2: Plusieurs workers en parallèle
function exemple2_WorkersParalleles() {
    console.log("\n--- Exemple 2: Plusieurs Workers en parallèle ---");

    const nombres = [10, 15, 20, 25];
    let compteur = 0;

    nombres.forEach((nombre, index) => {
        const worker = new Worker(`
            const { parentPort, workerData } = require('worker_threads');
            
            function fibonacci(n) {
                if (n <= 1) return n;
                return fibonacci(n - 1) + fibonacci(n - 2);
            }
            
            const resultat = fibonacci(workerData.nombre);
            parentPort.postMessage({ 
                index: workerData.index,
                nombre: workerData.nombre,
                resultat 
            });
        `, {
            eval: true,
            workerData: { nombre, index }
        });

        worker.on('message', (msg) => {
            console.log(`Worker ${msg.index}: Fibonacci(${msg.nombre}) = ${msg.resultat}`);
            compteur++;

            if (compteur === nombres.length) {
                console.log("Tous les workers ont terminé!");
                exemple3_CommunicationBidirectionnelle();
            }
        });
    });
}

// Exemple 3: Communication bidirectionnelle
function exemple3_CommunicationBidirectionnelle() {
    console.log("\n--- Exemple 3: Communication bidirectionnelle ---");

    const worker = new Worker(`
        const { parentPort } = require('worker_threads');
        
        parentPort.on('message', (msg) => {
            if (msg.commande === 'calculer') {
                const resultat = msg.a + msg.b;
                parentPort.postMessage({ 
                    type: 'resultat',
                    valeur: resultat 
                });
            } else if (msg.commande === 'stop') {
                parentPort.postMessage({ type: 'bye' });
                process.exit(0);
            }
        });
        
        parentPort.postMessage({ type: 'ready' });
    `, { eval: true });

    worker.on('message', (msg) => {
        if (msg.type === 'ready') {
            console.log("Worker prêt, envoi de calculs...");
            worker.postMessage({ commande: 'calculer', a: 10, b: 20 });
            worker.postMessage({ commande: 'calculer', a: 5, b: 15 });

            setTimeout(() => {
                worker.postMessage({ commande: 'stop' });
            }, 1000);
        } else if (msg.type === 'resultat') {
            console.log(`Résultat reçu du worker: ${msg.valeur}`);
        } else if (msg.type === 'bye') {
            console.log("Worker terminé proprement");
        }
    });
}

// Exemple 4: Pool de workers (version simplifiée)
function exemple4_PoolDeWorkers() {
    console.log("\n--- Exemple 4: Pool de Workers ---");

    const POOL_SIZE = 3;
    const workers = [];
    const taches = [100, 200, 300, 400, 500, 600];
    let tacheIndex = 0;

    // Créer le pool
    for (let i = 0; i < POOL_SIZE; i++) {
        const worker = new Worker(`
            const { parentPort } = require('worker_threads');
            
            parentPort.on('message', (tache) => {
                // Simuler un traitement
                setTimeout(() => {
                    parentPort.postMessage({ 
                        workerId: tache.workerId,
                        tacheId: tache.id,
                        resultat: tache.valeur * 2 
                    });
                }, Math.random() * 1000);
            });
        `, { eval: true });

        worker.on('message', (msg) => {
            console.log(`Worker ${msg.workerId} a terminé la tâche ${msg.tacheId}: ${msg.resultat}`);

            // Assigner une nouvelle tâche si disponible
            if (tacheIndex < taches.length) {
                worker.postMessage({
                    workerId: i,
                    id: tacheIndex,
                    valeur: taches[tacheIndex]
                });
                tacheIndex++;
            } else {
                worker.terminate();
            }
        });

        workers.push(worker);
    }

    // Distribuer les premières tâches
    workers.forEach((worker, i) => {
        if (tacheIndex < taches.length) {
            worker.postMessage({
                workerId: i,
                id: tacheIndex,
                valeur: taches[tacheIndex]
            });
            tacheIndex++;
        }
    });
}

// Exécution des exemples
console.log("Démarrage des exemples...\n");

exemple1_CalculIntensif();

setTimeout(() => {
    exemple2_WorkersParalleles();
}, 1000);

setTimeout(() => {
    exemple4_PoolDeWorkers();
}, 5000);
