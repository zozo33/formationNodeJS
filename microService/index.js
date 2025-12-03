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
/*
ludovic.potrich@macbookpro formationNodeJS % curl localhost:8000/somme/10/12
{"message":"Somme 22"}%                                                                                                                    
ludovic.potrich@macbookpro formationNodeJS % curl localhost:8000/multiplication/10/12

*/
app.get('/somme/:a/:b', function (req, res) {
    console.log(req.params.a)
    console.log(req.params.b)
    console.log("somme: ", parseInt(req.params.a) + parseInt(req.params.b));
    res.statusCode = '200'
    res.json({
        message: "Somme " + (parseInt(req.params.a) + parseInt(req.params.b))
    });
    res.end()
})

app.get('/multiplication/:a/:b', function (req, res) {
    console.log(req.params.a)
    console.log(req.params.b)
    console.log("multiplication: ", parseInt(req.params.a) * parseInt(req.params.b));
    res.statusCode = '200'
    res.json({
        message: "Multiplication " + (parseInt(req.params.a) * parseInt(req.params.b))
    });
    res.end()
})



app.listen(8000, function () {
    console.log("Le service ecoute sur le port 8000");
});
