import pg from "pg";

const db = new pg.Client({
    host: "localhost",
    port: 5432,
    user: "formationNode",
    password: "formationNode",
    database: "formationNode"
})

console.log("Connexion établie");

// créer une table 
let sql = "create table if not exists cours (id int primary key, libelle string)"
db.query(sql, function (err) {
    if (err) {
        console.log("Erreur ", err)
    } else {
        console.log("Table cours créée")
    }
})

sql = "insert into cours (id, libelle) values (2, 'Yoga')"
db.query(sql, function (err) {
    if (err) {
        console.log("Erreur ", err)
    } else {
        console.log("Insertion effectuée")
    }
})

sql = "select * from cours"
db.query(sql, function (err, rows) {
    if (err) {
        console.log("Erreur ", err)
    } else {
        console.log("Rows ", rows)
    }
})

db.end();
