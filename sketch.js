
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var maing,wall1,wall2

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	maing = new Ground(width/2,670,width,20)
	wall1 = new Ground(1100,600,20,120)
    wall2 = new Ground(1500,500,20,120)

	ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);


	Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  background(0);
  maing.display()
  wall1.display()
  wall2.display()
  ellipse(ball.position.x,ball.position.y,20)


  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}
