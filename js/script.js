var numSquares = 6;

var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares	= document.querySelectorAll(".container li");

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var header = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("active");
	hardBtn.classList.remove("active");
	//generate the colors
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick the new color from the array
		pickedColor = pickColor();
	//change the displayColor
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = " ";
	//change all the square
		for(var i = 0; i< squares.length; i++){
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			}
			else{
				squares[i].style.display = "none";
			}
		
	}
});


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("active");
	easyBtn.classList.remove("active");
	
	// generate all gthe colors
		numSquares = 6;
		colors = generateRandomColors(numSquares);
	//pick the new color from the array
		pickedColor = pickColor();
	//change the displayColor
		colorDisplay.textContent = pickedColor;

		messageDisplay.textContent = " ";
	//change all the square
		for(var i = 0; i< squares.length; i++){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
			//squares[i].style.display = "block";
	}

});



resetButton.addEventListener("click", function(){
	
	// generate all gthe colors
		colors = generateRandomColors(numSquares);
	//pick the new color from the array
		pickedColor = pickColor();
	//change the displayColor
		colorDisplay.textContent = pickedColor;
		this.textContent = "New Colours"
	//change all the square
		for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//rest the text content
	messageDisplay.textContent = " ";
	//reset the above background
	header.style.backgroundColor = "steelblue"; 
});

colorDisplay.textContent = pickedColor;

//console.log(squares);
	//Add initial Colors to the squares
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	
	//Add thr click Listener to Square
		squares[i].addEventListener("click", function(){
			//grab the color of the clicked
			var clickedColor = this.style.backgroundColor;
			//Comate the colour
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct" ;
				changeColor(clickedColor);
				header.style.backgroundColor = pickedColor;
				resetButton.textContent = ("Play Again");
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again" ;
			}


		});
}


// Change colors

function changeColor(color){
	for(var i = 0; i<colors.length; i++){
		//Change each colour to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var len = colors.length;
	var random = Math.floor(Math.random() * len);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get a random color and push into the arr
		arr.push(randomColor());
	}
	//return the arr
	return arr;

}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//rgb form
	return "rgb("+ r +", "+ g +", "+ b +")";
}