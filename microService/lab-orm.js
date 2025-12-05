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
    try {
        let c = await Cours.create({
            id: 124,
            libelle: 'Programmation ZZ'
        });
        await c.save();
        console.log('✓ Cours ajouté');
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            console.log('⚠ Le cours avec ID 124 existe déjà');
        } else {
            console.error('✗ Erreur lors de l\'ajout du cours:', err.message);
        }
    }
})();

// ===== TABLE PERSONNE =====

// Définir le modèle Personne
const Personne = sequelize.define('Personne', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
    }
}, {
    tableName: 'personne',
    timestamps: false
});

// Créer la table et insérer des données
(async () => {
    try {
        await sequelize.authenticate();
        console.log('\n=== Gestion de la table Personne ===');

        // Créer la table si elle n'existe pas
        await Personne.sync({ force: false }); // force: true supprime et recrée la table
        console.log('✓ Table personne créée ou déjà existante');

        // Insérer des données
        const personnes = [
            { nom: 'Dupont', prenom: 'Jean', age: 30, email: 'jean.dupont@example.com' },
            { nom: 'Martin', prenom: 'Marie', age: 25, email: 'marie.martin@example.com' },
            { nom: 'Bernard', prenom: 'Pierre', age: 35, email: 'pierre.bernard@example.com' },
            { nom: 'Dubois', prenom: 'Sophie', age: 28, email: 'sophie.dubois@example.com' },
            { nom: 'Petit', prenom: 'Luc', age: 42, email: 'luc.petit@example.com' }
        ];

        for (const p of personnes) {
            try {
                await Personne.create(p);
                console.log(`✓ Personne ajoutée: ${p.prenom} ${p.nom}`);
            } catch (err) {
                if (err.name === 'SequelizeUniqueConstraintError') {
                    console.log(`⚠ ${p.prenom} ${p.nom} existe déjà`);
                } else {
                    console.error(`✗ Erreur pour ${p.prenom} ${p.nom}:`, err.message);
                }
            }
        }

        // Lire toutes les personnes
        console.log('\n=== Liste des personnes ===');
        const toutesPersonnes = await Personne.findAll();
        toutesPersonnes.forEach(p => {
            console.log(`${p.id} - ${p.prenom} ${p.nom}, ${p.age} ans, ${p.email}`);
        });

        // Exemple de requête avec condition
        console.log('\n=== Personnes de plus de 30 ans ===');
        const personnesPlus30 = await Personne.findAll({
            where: {
                age: {
                    [Sequelize.Op.gt]: 30
                }
            }
        });
        personnesPlus30.forEach(p => {
            console.log(`${p.prenom} ${p.nom}, ${p.age} ans`);
        });

    } catch (error) {
        console.error('Erreur:', error);
    }
})();