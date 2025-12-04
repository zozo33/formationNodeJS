import express from "express";
import { lire } from "./dbClientSqlLite.js";

const app = express();

// fusion un template + data => rendu final
app.set('view engine', 'ejs')
app.use('/statics', express.static("statics"))

app.get('/', function (req, res) {
    lire().then(rows => {
        res.render('index', {
            titre: "Liste de formation actuellement",
            formations: rows != null ? rows : []
        })
    })
});

app.listen('8000', function () {
    console.log("Le services ecoute")
})