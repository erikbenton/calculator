
let container = document.querySelector(".container");
let clearButton = document.querySelector(".clear-btn");
let squares;
let rows;

function initialize(numberOfRows = 16, numberOfCols = 16)
{
	setupGrid(numberOfRows, numberOfCols);
	squaresEvents();
	clearButtonEvent();
}

function clearButtonEvent()
{
	clearButton.addEventListener("click", function(e)
	{
		
		let size = getGridSize();
		
		setupGrid(size, size);
	});
}

function getGridSize()
{
	let size;

		do
		{
			size = parseInt(prompt("What size do you want the new grid to be?", 16));
			
			if(size > 100)
			{
				alert("Please enter a smaller integer (<100)...")
			}
			if(size < 1)
			{
				alert("Please enter a positive integer...")
			}

		} while (size > 100 || size < 1);

		return size;
}

function squaresEvents()
{
	container.addEventListener("mouseover", function(e)
	{

		if(!e.target.classList.contains("square")) return;
		
		let squareOpacity = Number.parseFloat(e.target.style.opacity);

		if(e.target.classList.contains("marked")) return;

		e.target.style.opacity = (squareOpacity + 0.1) + "";

		if(squareOpacity >= 0.9)
		{
			e.target.classList.add("marked");
		}
		
	});
}

function setupGridHTML(numberOfRows, numberOfCols)
{
	container.innerHTML = "";

	let htmlForDivs = "";

	for(let i = 0; i < numberOfRows; i++)
	{
		htmlForDivs += `<div class="row">`;
		for(let j = 0; j < numberOfCols; j++)
		{
			htmlForDivs += `<div class="square"></div>`;
		}
		htmlForDivs += `</div>`;
	}

	container.innerHTML = htmlForDivs;
}

function setupGrid(numberOfRows, numberOfCols)
{
	setupGridHTML(numberOfRows, numberOfCols);
	setupSquares(numberOfRows, numberOfCols);
	setupRows(numberOfRows, numberOfCols);
}

function setupSquares(numberOfRows, numberOfCols)
{
	squares = document.querySelectorAll(".square");
	
	squares.forEach(function(square)
	{
		square.style.height = 960/numberOfCols + "px";
		square.style.width = 960/numberOfRows + "px";
		square.style.opacity = "0";
		square.style.backgroundColor = "rgb(0,0,0)";

	});
}

function setupRows(numberOfRows, numberOfCols)
{
	rows = document.querySelectorAll(".row");
	rows.forEach(function(row)
	{
		row.style.height = 960/numberOfRows + "px";
	});
}

initialize();