// program to find the factorial of a number

// take input from the user
let number = prompt('De quel nombre veux-tu calculer la factorielle ?');

// checking if number is negative
if (number < 0) {
    console.log('Erreur! un factoriel ne peut pas etre negatif');
}

// if number is 0
else if (number === 0) {
    console.log(`le factoriel de ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`Le resultat est ${fact}.`);
}