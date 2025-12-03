import e from 'express';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database("formations.db")

// créer une table 
let sql = "create table if not exists cours (id int primary key, libelle string)"
db.exec(sql, function (err) {
    if (err) {
        console.log("Erreur ", err)
    } else {
        console.log("Table cours créée")
    }
})

sql = "insert into cours (id, libelle) values (2, 'Yoga')"
db.run(sql, function (err) {
    if (err) {
        console.log("Erreur ", err)
    } else {
        console.log("Insertion effectuée")
    }
})

sql = "select * from cours"
db.all(sql, function (err, rows) {
    if (err) {
        console.log("Erreur ", err)
    } else {
        console.log("Rows ", rows)
    }
})

db.close();