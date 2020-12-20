
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var  ground, ball;
function preload()
{	
}
function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	ball = new Ball(100, 300, 40);
	trash1 = new Trash(900, 300, 20, 120);
	trash2 = new Trash(1100, 300, 20, 120);
	trash3 = new Trash(1000, 360, 230, 20)
	keyPressed();
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  ball.display();
  trash1.display();
  trash2.display();
  trash3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x:380, y:-300})

	}


}



