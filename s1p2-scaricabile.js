/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
console.log("--------------------------------------------------------");
console.log("Esercizio 1:\n--------------------\n");
console.log("I principali datatype di javascript sono: \n\n 1: Number: un dato che contiene dei numeri al suo interno \n 2: String: un dato che contiene parole o frasi al suo interno \n 3: Boolean: un dato che può essere vero o falso \n 4: Undefined: un dato che non esiste perchè non è stato dichiarato \n 5: null: un dato senza valore ovvero vuoto");
console.log("\n");

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
let alessio = {
    nome: "Alessio",
    anni: 19,
    Sposato: false,
}

console.log("Esercizio 2:\n--------------------\n");
console.log("Un oggetto in javascript è un insieme di coppie di dati composte da nome e valore sotto un unica variabile o costante dichiarata\n");
console.log("Esempio di oggetto:\n", alessio);
console.log("\n");

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12
let b = 20
let c = a + b

console.log("Esercizio 3:\n--------------------\n");
console.log("A:", a, "B:", b, "\nC (a + b):", c);
console.log("\n");

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log("Esercizio 4:\n--------------------\n");
console.log("X uguale: ", x);
console.log("\n");

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Alessio"
console.log("Esercizio 5:\n--------------------\n");
console.log("name: ", name);
console.log("\n");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x -= 4
console.log("Esercizio 6:\n--------------------\n");
console.log("Valore x: ", x);
console.log("\n");


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
const verifica = name1 == name2
const lowercase = (name2 == name1) && (name1 == name2)

console.log("Esercizio 7:\n--------------------\n");
console.log("name1 = ", name1);
console.log("name2 = ", name2);
console.log("\nI due nomi sono uguali = ", verifica);
console.log("I nomi sono entrambi minuscoli = ", lowercase);

console.log("--------------------------------------------------------");
