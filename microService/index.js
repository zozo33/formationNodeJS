//importer express
const express = require("express");
const cors = require("cors");


//initier une application express
const app = express();
//configurer serialization
app.use(express.json());
//sécuriser cors
app.use(cors());

//installer un service get
//maping entre url et code
app.get("/", function (req, res) {
    console.log("Bien reçu");
    res.send("Bien reçu");
});


app.listen(8000, function () {
    console.log("Le service ecoute sur le port 8000");
});
