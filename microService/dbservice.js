import express from "express";
import cors from "cors";
import sqlite3 from 'sqlite3';


const app = express();

// configurer sérialisation
app.use(express.json())

// securisé cors
app.use(cors());

// reponse à get + url
// mapping entre url et code 
// curl -X GET http://localhost:8000/
app.get('/', function (req, res) {
    // Contacter la base de données et retourner les rows/json
    const db = new sqlite3.Database("formations.db")

    let query = "select * from cours"
    db.all(query, function (err, rows) {
        console.log(rows);
        res.json(rows);
    })

    db.close();
})

app.get('/:id', function (req, res) {
    // Contacter la base de données et retourner les rows/json
    const db = new sqlite3.Database("formations.db")

    let query = "select * from cours where id = " + req.params.id
    db.get(query, function (err, row) {
        console.log(row);
        res.json(row);
    })

    db.close();
})

app.listen('8000', function () {
    console.log("Le services ecoute")
})