import express from "express";
import cors from "cors";

const app = express();

// configurer sérialisation
app.use(express.json())

// securisé cors
app.use(cors());

// reponse à get + url
// mapping entre url et code 
// curl -X GET http://localhost:8000/
app.get('/somme/:a/:b', function (req, res) {
    res.statusCode = '200'
    res.json({
        resultat: "somme = " + (parseInt(req.params.a) + parseInt(req.params.b))
    });
    res.end()
})
app.get('/multiplication/:a/:b', function (req, res) {
    res.statusCode = '200'
    res.json({
        resultat: "produit = " + (req.params.a * req.params.b)
    });
    res.end()
})

app.listen('8000', function () {
    console.log("Le services ecoute")
})