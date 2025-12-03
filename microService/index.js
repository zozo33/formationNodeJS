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
//mon test
/*
app.get("/", function (req, res) {
    console.log("Bien reçu");
    //on envoie un retour simple
    res.json("Bien reçu");
    res.end();
});
*/
app.get('/:prenom', function (req, res) {
    console.log(req.params)
    console.log(req.body)
    console.log("Bonjour à toi ", req.params.prenom);
    res.statusCode = '200'
    res.json({
        message: "Bonjour à toi " + req.params.prenom
    });
    res.end()
})



app.listen(8000, function () {
    console.log("Le service ecoute sur le port 8000");
});
