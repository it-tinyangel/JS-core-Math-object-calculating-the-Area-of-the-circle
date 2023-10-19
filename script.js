// Function to calculate the area of a circle and output the result.
function getArea() {
	const radiusInput = prompt('Enter the radius of the circle:');

	if (radiusInput === null || radiusInput.trim() === '') {
		console.log('Please, enter a radius of the circle.');
		return;
	}

	const radius = parseFloat(radiusInput);

	if (isNaN(radius)) {
		console.log('Error: Please, enter a correct radius value of the circle.');
	} else {
		const area = calculateArea(radius);
		console.log(`The area of the circle is ${area.toFixed(2)} square units.`);
	}
}

// The function of calculating the area of a circle according to the formula.
function calculateArea(radius) {
	return Math.PI * Math.pow(radius, 2);
}

// Call the function to calculate the area of the circle.
getArea();