var Personne = /** @class */ (function () {
    function Personne() {
        this.nom = "ludo";
        this.age = 25;
    }
    Personne.prototype.getAll = function (message) {
        //return message + this.nom + " " + this.age;
        return "".concat(message, " : ").concat(this.nom, " -- ").concat(this.age, " le beau gosse");
    };
    return Personne;
}());
var p = new Personne();
console.log(p.getAll("hello "));
