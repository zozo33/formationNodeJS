import sqlite3 from 'sqlite3';

class DbAccess {
    // 
    constructor(database) { // 
        try {
            this.db = new sqlite3.Database(database)
        }
        catch (err) {
            this.db = null;
            console.log(`Pb avec la base ${database} :`, err)
        }
    }

    close() { //
        if (this.db != null) this.db.close()
        this.db = null;
    }

    // interroger la base 
    lire() {

        if (this.db == null) throw Exception("Base de données fermée")

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