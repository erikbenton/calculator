let body 				= document.querySelector("body");
let screen 			= document.querySelector(".screen");
let numbers 		= document.querySelectorAll(".number");
let operators 	= document.querySelectorAll(".operator");
let adder 			= document.querySelector(".operator__add");
let subtracter	= document.querySelector(".operator__subtract");
let divider			= document.querySelector(".operator__divide");
let multiplier	= document.querySelector(".operator__multiply");
let equals			= document.querySelector(".operator__equals");

let firstNumber = [];
let result 			= [];

function initialize()
{
	// Add numbers event listeners
	numberEvents();

	// add operators event listeners
	operatorEvents();

	screen.innerText = "0";
}

function numberEvents()
{
	numbers.forEach(function(number) {
		number.addEventListener("click", (e) => {
			firstNumber.push(e.target.textContent);
			screen.innerText = firstNumber.join("");
		});
	});
}

function operatorEvents()
{
	adder.addEventListener("click", (e) => {
		let num1 = firstNumber.join("");
		screen.innerText = num1;
		firstNumber = [];

		if(result.length === 0)
		{
			result = num1;
		}
		else
		{
			result = add(num1, result);
		}

		screen.innerText = "0";

	});

	subtracter.addEventListener("click", (e) => {
		let num1 = firstNumber.join("");
		screen.innerText = num1;
		firstNumber = [];

		if(result.length === 0)
		{
			result = num1;
		}
		else
		{
			result = subtract(num1, result);
		}

		screen.innerText = "0";

	});

	divider.addEventListener("click", (e) => {
		let num1 = firstNumber.join("");
		screen.innerText = num1;
		firstNumber = [];

		if(result.length === 0)
		{
			result = num1;
		}
		else
		{
			result = divide(num1, result);
		}

		screen.innerText = "0";
	});

	multiplier.addEventListener("click", (e) => {
		let num1 = firstNumber.join("");
		screen.innerText = num1;
		firstNumber = [];

		if(result.length === 0)
		{
			result = num1;
		}
		else
		{
			result = multiply(num1, result);
		}

		screen.innerText = "0";
	});

	equals.addEventListener
}

function add(num1, num2)
{
	return +num1 + +num2;
}

function subtract(num1, num2)
{
	return +num1 - +num2;
}

function divide(num1, num2)
{
	return +num1 / +num2;
}

function multiply(num1, num2)
{
	return +num1 * +num2;
}

initialize();