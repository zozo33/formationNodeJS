import express from "express";

const app = express();

//fusion un template + data => rendu final
app.set("view engine", "ejs");
app.use('/statics', express.static('statics'));

//data à afficher
let Formations = [
    { id: 1, libelle: "NodeJS" },
    { id: 2, libelle: "React" },
    { id: 3, libelle: "Angular" },
    { id: 4, libelle: "Vue" },
    { id: 5, libelle: "Python" },
    { id: 6, libelle: "Java" },
    { id: 7, libelle: "C#" },
    { id: 8, libelle: "C++" },
    { id: 9, libelle: "C" }
]
app.get("/", (req, res) => {
    res.render("index", { titre: "Liste des formations", formations: Formations });
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});