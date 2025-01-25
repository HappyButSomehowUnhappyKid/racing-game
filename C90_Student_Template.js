canvas = document.getElementById('MyCanvas');
/*
Corrija o nome da função e uso o context 2d
*/
ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1Image = "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2Image = "https://png.pngtree.com/png-clipart/20230913/original/pngtree-mcqueen-clipart-lightning-mcqueen-smile-wallpaper-cartoon-vector-png-image_11059552.png";
car2X = 10;
car2Y = 100;

backgroundImage = "https://media.istockphoto.com/id/1300373509/vector/vintage-background-with-color-retro-stripes-vector-illustration.jpg?s=612x612&w=0&k=20&c=H3xwfhOP42twFQJlvGWwYMULDBkJvyJsc1iPk6CTsgg=";

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, onloading essa variável
	backgroundImgTag.src = backgroundImage;   // carregue a imagem

	car1ImgTag = new Image(); //definindo uma variável com uma nova imagem
	/*
	Upload the correct car
	*/
	car1ImgTag.onload = uploadcar1; // ajustando uma função, onloading essa variável
	/*
	Assign a correct carImage variable
	*/
	car1ImgTag.src = car1Image;   // carregue a imagem

	car2ImgTag = new Image(); //definindo uma variável com uma nova imagem
	car2ImgTag.onload = uploadcar2; // ajustando uma função, onloading essa variável
	car2ImgTag.src = car2Image;   // carregue a imagem
}

function uploadBackground() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}
function uploadcar2() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("seta para cima");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("seta para baixo");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("seta para a esquerda");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("seta para a direita");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("tecla W");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("tecla S");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("tecla A");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("tecla D");
		}
}
function car1_up(){
	if(car1Y > 0 && car1Y < canvas.height){
	car1Y -= 3
	uploadbackground()
	uploadcar1()
	gamestatusmq()
	}
}
function car1_down(){
	if(car1Y > 0 && car1Y < canvas.height){
	car1Y += 3
	uploadbackground()
	uploadcar1()
	gamestatusmq()
	}
}
function car1_left(){
	if(car1X > 0 && car1X < canvas.width){
	car1X -= 3
	uploadbackground()
	uploadcar1()
	gamestatusmq()
	}
}
function car1_right(){
	if(car1X > 0 && car1X < canvas.width){
	car1X += 3
	console.log("x = ".concat(car1X))
	uploadbackground()
	uploadcar1()
	gamestatusmq()
	}
}
function gamestatusmq(){
	
}
