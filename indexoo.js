// créer un tableau de 10 val aleatoires
// Math.random() * 20 => [0,19] a virgules
// convertir un nombre a virgule en val entiere = Math.round()

class PariteNombres {

    constructor()
    {
        this.max = 20; // max 
        this.valeurs = []; // tableau
        for(let i=0; i< this.max ; i++)
        {
            let v = Math.random() * this.max;
            v = Math.ceil(v);
            this.valeurs.push(v)
        }
    }

    trier ()
    {
        // compter le nombre de val paires
        // boucle for(let i=0; i< 20; i++) ....
        this.nb = 0;
        for (let i of this.valeurs)
        {
            if (i % 2 == 0) this.nb++;
        }
    }
      
     afficher()
     {
        // afficher 
        // Total paires = 12
        console.log(this.valeurs)
        console.log("Total paires = ", this.nb)
     }
    }

    // this === o
    let o = new  PariteNombres () // constructor
    o.trier()
    o.afficher()