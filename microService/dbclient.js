/*
import pg from "pg";

const db = new pg.Client({
    host: "localhost",
    port: 5432,
    user: "formationNode",
    password: "formationNode",
    database: "formationNode"
});

// Fonction principale asynchrone
async function main() {
    try {
        // Connexion à la base de données
        await db.connect();
        console.log("Connexion établie");

        // Créer une table
        let sql = "CREATE TABLE IF NOT EXISTS cours (id INT PRIMARY KEY, libelle VARCHAR(255))";
        await db.query(sql);
        console.log("Table cours créée");

        // Insertion de données
        sql = "INSERT INTO cours (id, libelle) VALUES (1, 'NodeJS') ON CONFLICT (id) DO NOTHING";
        const insertResult = await db.query(sql);
        console.log("Insertion effectuée");

        // Sélection des données
        sql = "SELECT * FROM cours";
        const result = await db.query(sql);
        console.log("Rows:", result.rows);

    } catch (err) {
        console.log("Erreur:", err);
    } finally {
        // Fermer la connexion
        await db.end();
        console.log("Connexion fermée");
    }
}

// Exécuter la fonction principale
main();
*/

import { Client } from 'pg'

const client = new Client({
    user: 'formationNode',
    password: 'formationNode',
    host: 'localhost',
    port: 5432,
    database: 'formationNode',
})

client.connect().then(async () => {
    //let res = await client.query('SELECT NOW()')
    let res = await client.query('select * from cours')
    console.log(res.rows)
    //await client.query("insert into cours values (3,'Karaté')")
    await client.end()
})
