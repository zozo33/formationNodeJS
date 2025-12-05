// 1. Importer la classe EventEmitter du module 'events'
const EventEmitter = require('events');

// émettre des événements et d'enregistrer des écouteurs.
const machineACafe = new EventEmitter();

// --- Étape 3: Définir les écouteurs d'événements (Listeners) ---

// On attache un premier écouteur à l'événement 'cafeFait'
machineACafe.on('cafeFait', (typeDeCafe) => {
    console.log(`[Ecouteur 1] ☕ Le café est prêt ! C'est un ${typeDeCafe}.`);
});

// On attache un deuxième écouteur au même événement 'cafeFait'
machineACafe.on('cafeFait', () => {
    console.log('[Ecouteur 2] 🔔 Sonnerie : N\'oubliez pas de le boire tant qu\'il est chaud !');
});

// On attache un écouteur à un autre événement 'erreur'
machineACafe.on('erreur', (message) => {
    console.error(`[Gestionnaire d'Erreur] ❌ ERREUR : ${message}`);
});

// --- Étape 4: Émettre les événements ---
console.log('--- Démarrage de la machine ---');

// 1. Émission de l'événement 'cafeFait'
// Tous les écouteurs attachés à 'cafeFait' sont appelés séquentiellement.
// Les arguments passés à emit() (ici 'Espresso') sont transmis aux fonctions d'écoute.
machineACafe.emit('cafeFait', 'Espresso');

console.log('------------------------------');

// 2. Émission d'un autre événement 'cafeFait' avec un argument différent
machineACafe.emit('cafeFait', 'Latte');

console.log('------------------------------');

// 3. Émission de l'événement 'erreur'
machineACafe.emit('erreur', 'Manque d\'eau dans le réservoir.');