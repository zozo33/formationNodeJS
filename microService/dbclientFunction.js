import { Client } from 'pg'

const client = new Client({
    user: 'formationNode',
    password: 'formationNode',
    host: 'localhost',
    port: 5432,
    database: 'formationNode',
})

// Connexion unique au démarrage
await client.connect();
console.log("Connexion PostgreSQL établie dans dbclientFunction");

// interroger la base 
export async function lire() {
    try {
        const res = await client.query('select * from cours');
        console.log(res.rows);
        return res.rows;
    } catch (err) {
        console.error("Erreur lors de la lecture:", err);
        throw err;
    }
}

// Fermer proprement la connexion lors de l'arrêt
process.on('SIGINT', async () => {
    await client.end();
    console.log("Connexion PostgreSQL fermée");
    process.exit(0);
});

export default { lire }

