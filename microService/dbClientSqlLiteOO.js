
import sqlite3 from 'sqlite3';

class DbAccess {
    // 
    constructor() { // 
        this.db = new sqlite3.Database("formations.db")
    }

    close() { //
        this.db.close()
    }

    // interroger la base 
    lire() {
        let sql = "select * from cours";
        return new Promise((resolv, reject) => {
            let ret = null;
            this.db.all(sql, {}, (err, rows) => {
                console.log("***", err, rows)
                if (err === null) {
                    ret = rows
                }
                resolv(ret)
            })
        })
    }

    ecrire(id, libelle) {
        let sql = "insert into cours values (?, ?)";
        let ret = null;
        this.db.run(sql, [id, libelle], async (err) => {
            if (err !== null) {
                console.log("Erreur ", err)
            }
            else console.log("enregistré OK !!!!!")
        })
    }
}

export default DbAccess;