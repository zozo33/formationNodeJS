import express from "express";
import pg from "pg";
import { lire } from "./dbclientFunction.js";

const app = express();


//fusion un template + data => rendu final
app.set("view engine", "ejs");
app.use('/statics', express.static('statics'));

app.get('/', async function (req, res) {
    try {
        const rows = await lire();
        res.render('index', {
            titre: "Liste de formation actuellement",
            formations: rows != null ? rows : []
        });
    } catch (err) {
        console.error("Erreur:", err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});