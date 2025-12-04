import express from "express";
import pg from "pg";
const app = express();

const db = new pg.Client({
    host: "localhost",
    port: 5432,
    user: "formationNode",
    password: "formationNode",
    database: "formationNode"
});

await db.connect();
//fusion un template + data => rendu final
app.set("view engine", "ejs");
app.use('/statics', express.static('statics'));

app.get("/", async (req, res) => {

    try {
        // Contacter la base de données et retourner les rows/json
        let query = "SELECT * FROM cours";
        const result = await db.query(query);
        console.log("Rows:", result.rows);
        res.render("index", { titre: "Liste des formations", formations: result.rows });
    } catch (err) {
        console.error("Erreur:", err);
        res.status(500).json({ error: err.message });
    }

});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});