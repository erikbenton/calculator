let body 				= document.querySelector("body");
let screen 			= document.querySelector(".screen");
let numbers 		= document.querySelectorAll(".number");
let operators 	= document.querySelectorAll(".operator");
let adder 			= document.querySelector(".operator__add");
let subtracter	= document.querySelector(".operator__subtract");
let divider			= document.querySelector(".operator__divide");
let multiplier	= document.querySelector(".operator__multiply");
let equals			= document.querySelector(".operator_equals");

let firstNumber = "";
let numberArray = [];
let operatorArray = [];
let result 			= "";

function initialize()
{
	// Add numbers event listeners
	numberEvents();

	// add operators event listeners
	operatorEvents();

	displayNumber(0);
}

function numberEvents()
{
	numbers.forEach(function(number) {
		number.addEventListener("click", (e) => {
			firstNumber += e.target.innerText;
			screen.innerText = firstNumber;
		});
	});
}

function operatorEvents()
{
	operators.forEach(function(operator)
	{
			operator.addEventListener("click", (e) => {
		
		if(e.target.innerText === "=") return;

		numberArray.push(firstNumber);
		operatorArray.push(e.target.innerText);
		console.log(numberArray, operatorArray);
		firstNumber = "";
		screen.innerText = "0";

		});
	});

	equals.addEventListener("click", (e) => {
		numberArray.push(firstNumber);
		firstNumber = "";
		console.log(numberArray, operatorArray);
		displayNumber(calcAnswer(numberArray, operatorArray));
	});
}

function add(num1, num2)
{
	if(num2 === undefined) num2 = 0;
	return +num1 + +num2;
}

function subtract(num1, num2)
{
	if(num2 === undefined) num2 = 0;
	return +num2 - +num1;
}

function divide(num1, num2)
{
	if(num2 === undefined) num2 = 1;
	return +num1 / +num2;
}

function multiply(num1, num2)
{
	if(num2 === undefined) num2 = 1;
	return parseFloat(num1) * parseFloat(num2);
}

function determineOperation(operator)
{
	switch(operator)
	{
		case '+':
			return add;
			break;
		case '-':
			return subtract;
			break;
		case '/':
			return divide;
			break;
		case "X":
			return multiply;
			break;
	}
}

function calcAnswer(numbersArray, operationsArray)
{
	if(numbersArray.length === 0 || operationsArray.length === 0)
	{
		numberArray = [];
		operatorArray = [];
		return "0";
	}

	if(numbersArray.length - operationsArray.length !== 1) return;

	let num1 = numbersArray.pop();
	let operator;
	let operation;

	while(numbersArray.length > 0)
	{
		operator = operationsArray.pop();
 		operation = determineOperation(operator);
 		num1 = operation(num1,numbersArray.pop());
	}
	return num1.toFixed(4);
}

function displayNumber(numberToDisplay)
{
	
	let displayedNumber = "" + numberToDisplay;

	if(numberToDisplay.length > 6)
	{
		displayedNumber = numberToDisplay.substring(0, 6);
	}

	screen.innerText = displayedNumber;
}

initialize();