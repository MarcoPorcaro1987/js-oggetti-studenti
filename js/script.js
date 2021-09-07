// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    "nome" : "Marco",
    "cognome" : "Porcaro",
    "eta" : 34
};
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in studente){
    console.log(studente[key]);
}
// Creare un array di oggetti di studenti.
var studenti = [
    {
        "nome" : "Marco",
        "cognome" : "Porcaro",
        "eta" : 34
    },
    {
        "nome" : "Geralt",
        "cognome" : "Di Rivia",
        "eta" : 40
    },
    {
        "nome" : "Roland",
        "cognome" : "Di Gilead",
        "eta" : 30
    }
]
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for(i=0; i < studenti.length; i++){
    console.log(`Nome: ${studenti[i]["nome"]}`);
    console.log(`Cognome: ${studenti[i]["cognome"]}`);
}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

for(i=0; i < 3; i++){
    var nuovoStudente = {
        "nome" : prompt("Inserisci il nome del nuovo studente"),
        "cognome" : prompt("Inserisci il cognome del nuovo studente"),
        "eta" : parseInt(prompt("Inserisci l'età del nuovo studente"))
    };
    studenti.push(nuovoStudente);
}

console.log(studenti);