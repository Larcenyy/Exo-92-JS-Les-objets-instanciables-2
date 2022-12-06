let test = document.getElementById("test")


function Personne(nom, prenom, sexe, job){
    this.nom = nom;
    this.prenom = prenom;
    this.sexe = sexe;
    this.job = job;

    this.getNomPrenom = function (){
        return this.nom + " " + this.prenom + " " + this.sexe + " " + this.job
    }
}

let marc = new Personne("marcus", "marcus", "homme", "rien")
let paul = new Personne("dxc", "paul", "homme", "rien")
let jon = new Personne("cgf", "jon", "homme", "rien")
let lili = new Personne("des", "lili", "femme", "rien")
let remy = new Personne("com", "remy", "homme", "rien")

let myArray = [marc, paul, lili, jon, remy];


for(let obj of myArray){
    let para = document.createElement('p')
    para.innerHTML = obj.getNomPrenom();

    test.appendChild(para)
}


console.log(myArray)