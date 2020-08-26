
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1;
var rect2;
var rect3;
var ground;
var pap,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	rect1 = createSprite(850,330,20,100);
	rect2 = createSprite(1000,330,20,100);
	rect3 = createSprite(920,380,150,20);
	
	ground = new Ground(600,height,1200,20);
	
	pap=createSprite(50,380,35,50);
	pap.shapeColor=color(255,20,147)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keypressed();
  drawSprites();
 ground.display();

 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		pap.velocityY = -12 ;
		
	}
	 pap.velocityY = pap.velocityY + 0.8;

	 if(keyCode === LEFT_ARROW){
		pap.velocityX = 12 ;
		
	}
}



