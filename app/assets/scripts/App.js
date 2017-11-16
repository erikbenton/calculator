
let container = document.querySelector(".container");
let squares;

function initialize(rows = 16, cols = 16)
{
	for(let i = 0; i < rows; i++)
	{
		container.innerHTML += `<div class="row">`;
		for(let j = 0; j < cols; j++)
		{
			container.innerHTML += `<div class="square">.</div>`;
		}
		container.innerHTML += `</div>`;
	}

	squares = document.querySelectorAll(".square");

	squares.forEach(function(square)
	{
		square.style.height = 960/cols + "px";
		square.style.width = 960/rows + "px";

		// square.addEventListener("mouseover", function(e)
		// {
		// 	console.log("Here");
		// 	square.classList.add("black-square");
		// });

	});

	container.addEventListener("mouseover", function(e)
	{
		let red = Math.floor(Math.random() * 255 + 1) + "";
		let green = Math.floor(Math.random() * 255 + 1) + "";
		let blue = Math.floor(Math.random() * 255 + 1) + "";
		e.target.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
		e.target.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
	});

}

initialize(50, 50);