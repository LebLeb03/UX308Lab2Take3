//code calculates the Volume using diameter height and radius of a circle
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, //readline interacts with the terminal for the values 
    output: process.stdout
});

rl.question("Enter the diameter of the cylinder in meters: ", (diameterInput) => {
    rl.question("Enter the height of the cylinder in meters: ", (heightInput) => {
        const diameter = parseFloat(diameterInput);
        const height = parseFloat(heightInput);

        if (!isNaN(diameter) && !isNaN(height) && diameter > 0 && height > 0) { //messy but formula in use the best I could get
            const radius = diameter / 2;
            const volume = Math.PI * Math.pow(radius, 2) * height;
            console.log(`The volume of the cylinder is: ${volume.toFixed(2)} cubic meters`);
        } else {
            console.log("Invalid input. Please enter positive numeric values for both diameter and height.");
        }

        rl.close();
    });
});
