const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'formationNode',
    username: 'formationNode',
    password: 'formationNode',
    host: 'localhost',
    port: 5432,
    showWarnings: true,
    connectTimeout: 1000,
    define: {
        timestamps: false // eviter de créer le champs createdAt
    }
});

const Cours = sequelize.define('Cours', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    libelle: DataTypes.STRING,
},
    {
        tableName: 'cours', // preciser le nom de la table 
    },
);

// Lire 
(async () => {
    await sequelize.authenticate()
    const cours = await Cours.findAll();
    //console.log(formation.sql)
    cours.forEach(c => {
        console.log(c.libelle)
    })
})();

// ajouter 
(async () => {
    //await sequelize.authenticate ()
    let c = await Cours.create({
        id: 124,
        libelle: 'Programmation ZZ'
    });
    await c.save()
})();