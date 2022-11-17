//let word="Bonjour, monde";
//console.log(word);
//let hello = "Hello world"
//console.log(hello);
//answer = prompt("Tu te nomme comment ?");
//console.log("hello" + " " + answer);

let word = "";
let letter;

while (true) {
    letter = prompt('écris ton prénom:');

    if (letter) {
        word = letter; 
    }
    
    else { 
        break; 
    }
}
console.log(`Bonjour ${word} !`);
