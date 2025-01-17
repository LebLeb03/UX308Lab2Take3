//// Code Asks for a Kilometers input then outputs Miles conversion.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the distance in kilometers: ", (kilometersInput) => {
    const kilometers = parseFloat(kilometersInput);

    if (!isNaN(kilometers) && kilometers >= 0) {
        const miles = kilometers * 0.621371; // Conversion factor: 1 km = 0.621371 miles
        console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
    } else {
        console.log("Invalid input. Please enter a non-negative numeric value.");
    }

    rl.close();
});
