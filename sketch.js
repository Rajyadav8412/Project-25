
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var dustbin1,dustbin2,dustbin3;
var ground;
var binImg,dustbin;

function preload()
{
  binImg=loadImage("dustbin.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     
	

    dustbin=createSprite(550,500,30,30);
	dustbin.addImage(binImg);
	dustbin.scale=1.1;

	//Create the Bodies Here.
    
	
	
	
	dustbin1 = new bin(400,510,15,320);
	dustbin2 = new bin(550,670,320,15);
	dustbin3 = new bin(700,510,15,320);
	ground = new Ground(400,680,800,20);

	ball = new paper(100,500,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  dustbin.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
  ground.display();
  
  ball.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-900})
	}
}

