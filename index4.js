const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateRectangleArea(length, width) {
    return length * width;
}

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function main() {
    rl.question("Choose a shape (rectangle/circle): ", (shape) => {
        if (shape.toLowerCase() === "rectangle") {
            rl.question("Enter the length of the rectangle: ", (length) => {
                rl.question("Enter the width of the rectangle: ", (width) => {
                    const area = calculateRectangleArea(Number(length), Number(width));
                    console.log(`Area of the rectangle: ${area}`);
                    rl.close();
                });
            });
        } else if (shape.toLowerCase() === "circle") {
            rl.question("Enter the radius of the circle: ", (radius) => {
                const area = calculateCircleArea(Number(radius));
                console.log(`Area of the circle: ${area}`);
                rl.close();
            });
        } else {
            console.log("Invalid shape. Please enter 'rectangle' or 'circle'.");
            rl.close();
        }
    });
}

main();