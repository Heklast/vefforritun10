var square = document.getElementById("drawPlace");
var paper = square.getContext("2d");
var pressedMouse = false; 
var x;
var y;
var colorLine ="pink";
var key = {Spacebar: 32};

document.addEventListener("mousedown", startDrawing);
document.addEventListener("mousemove", drawLine);
document.addEventListener("mouseup", stopDrawing);
document.addEventListener("keydown", clearCanvas);
document.addEventListener("dblclick", changeColor);

function startDrawing(eventvs01){
	pressedMouse = true;
	x = eventvs01.offsetX;
	y = eventvs01.offsetY;
}

function drawLine(eventvs02) {
	if (pressedMouse) {
		document.getElementById("drawPlace").style.cursor = "crosshair";
		var xM = eventvs02.offsetX;
		var yM = eventvs02.offsetY;
		drawing_line(colorLine, x, y, xM, yM, paper);
		x = xM;
		y = yM;
	}
}

function stopDrawing() {
	pressedMouse = false;
	document.getElementById("drawPlace").style.cursor = "default";
}

function clearCanvas(whenPressKey) {
	if (whenPressKey.keyCode == key.Spacebar ) {
		paper.clearRect(0, 0, square.width, square.height);
	}
}

function changeColor(event){
    if(event.type === "dblclick"){
        colorLine="blue";
    }
}

drawing_line("#FF6347", x-1, y, x, y, paper);

function drawing_line(color, x_start, y_start, x_end, y_end, board){
	board.beginPath();
	board.strokeStyle = color;
	board.lineWidth = 5;
	board.moveTo(x_start,y_start);
	board.lineTo(x_end,y_end);
	board.stroke(); 
	board.closePath();
}