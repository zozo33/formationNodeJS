class Personne {
    nom: string = "ludo";
    age: number = 25;
    getAll(message: string): string {
        //return message + this.nom + " " + this.age;
        return `${message} : ${this.nom} -- ${this.age} le beau gosse`

    }
}

let p = new Personne();
console.log(p.getAll("hello "))