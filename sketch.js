
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var hammer_options = {

		"densiry":2,
		"friction": 1.0,
		"restitution":0.5 

	};

	hammer = Bodies.rectangle(200,390,50,100,hammer_options);
	World.add(world,hammer);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    Engine.update(engine);
    rect(hammer.position.x,hammer.position.y,400,20);

  drawSprites();

  hammer.y = World.mouse.Y;
  hammer.X = World.mouse.X;
}



