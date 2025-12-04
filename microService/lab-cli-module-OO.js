import DbAccess from './dbclientSqlLiteOO.js';

let da = new DbAccess()
let formations = da.lire()
console.log(formations)
da.close()


