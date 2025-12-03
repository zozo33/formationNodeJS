import express from "express";
import cors from "cors";
import pg from "pg";

const db = new pg.Client({
    host: "localhost",
    port: 5432,
    user: "formationNode",
    password: "formationNode",
    database: "formationNode"
});

// Connexion à la base de données au démarrage
await db.connect();
console.log("Connexion PostgreSQL établie");

const app = express();

// configurer sérialisation
app.use(express.json())

// securisé cors
app.use(cors());

// reponse à get + url
// mapping entre url et code 
// curl -X GET http://localhost:8000/
app.get('/', async function (req, res) {
    try {
        // Contacter la base de données et retourner les rows/json
        let query = "SELECT * FROM cours";
        const result = await db.query(query);
        console.log("Rows:", result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error("Erreur:", err);
        res.status(500).json({ error: err.message });
    }
})

app.get('/:id', async function (req, res) {
    try {
        // Contacter la base de données et retourner les rows/json
        let query = "SELECT * FROM cours WHERE id = $1";
        const result = await db.query(query, [req.params.id]);
        console.log("Rows:", result.rows);

        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: "Cours non trouvé" });
        }
    } catch (err) {
        console.error("Erreur:", err);
        res.status(500).json({ error: err.message });
    }
})

app.listen('8000', function () {
    console.log("Le service écoute sur le port 8000")
})

// Fermer la connexion proprement lors de l'arrêt
process.on('SIGINT', async () => {
    await db.end();
    console.log("Connexion PostgreSQL fermée");
    process.exit(0);
});