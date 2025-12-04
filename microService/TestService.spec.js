import DbAccess from './dbClientSqlLiteOOForTest.js';
import { assert, expect, should } from 'chai';

describe('connexion/deconnexion', async () => {
    let da = new DbAccess("formations.db")
    it('verification de la connexion', async () => {
        expect(da.db).not.equal(null);
    })
    it('verification de la deconnexion', async () => {
        da.close()
        expect(da.db).equal(null);
    })
    it('verification de la deconnexion x 2', async () => {
        da.close()
        expect(da.db).equal(null);
    })
})