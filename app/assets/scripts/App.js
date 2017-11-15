
let container = document.querySelector(".container");

function initialize(rows = 16, cols = 16)
{
	for(let i = 0; i < rows; i++)
	{
		for(let j = 0; j < cols; j++)
		{
			container.innerHTML += `<div class='row${i} col${j}'></div>`;
		}
	}
}

initialize();