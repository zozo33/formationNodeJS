import sqlite3 from 'sqlite3';

// interroger la base 
export function lire() {
    return new Promise((resolv, reject) => {
        const db = new sqlite3.Database("formations.db")
        let sql = "select * from cours";
        let ret = null;
        db.all(sql, {}, function (err, rows) {
            console.log("***", err, rows)
            if (err === null) {
                ret = rows
            }
            resolv(ret)
        })
        db.close();
    })

}

export function ecrire(id, libelle) {
    const db = new sqlite3.Database("formations.db")
    let sql = "insert into cours values (?, ?)";
    let ret = null;
    db.run(sql, [id, libelle], async (err) => {
        if (err !== null) {
            console.log("Erreur ", err)
        }
        else console.log("enregistré OK !!!!!")
    })
    db.close();
}

export default { lire, ecrire }