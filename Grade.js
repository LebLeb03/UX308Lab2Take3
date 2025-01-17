
// Code Asks for a Grade input then outputs grade level achieved.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the numeric grade (0-100): ", (input) => {
    const numericGrade = parseFloat(input);
    let letterGrade;

    if (!isNaN(numericGrade) && numericGrade >= 0 && numericGrade <= 100) {
        if (numericGrade >= 90) {
            letterGrade = 'A+';
        } else if (numericGrade >= 85) {
            letterGrade = 'A';
        } else if (numericGrade >= 80) {
            letterGrade = 'B';
        } else if (numericGrade >= 70) {
            letterGrade = 'C';
        } else if (numericGrade >= 60) {
            letterGrade = 'D';
        } else {
            letterGrade = 'F';
        }
        console.log(`The letter grade is: ${letterGrade}`);
    } else {
        console.log("Invalid input. Please enter a number between 0 and 100.");
    }

    rl.close();
});