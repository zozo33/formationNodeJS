import DbAccess from './dbClientSqlLiteOO.js'

let da = new DbAccess()
let formations = da.lire()
console.log(formations)
da.close()


