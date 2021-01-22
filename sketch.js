
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1, bobObject1, roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject= new Roof(100,120,30,300);
	
	rope1= new Rope(bobObject1.Body,roofObject.Body,-bobDiameter*2,0);
	rope2= new Rope(bobObject2.Body,roofObject.Body,-bobDiameter*2,0);
	rope3= new Rope(bobObject3.Body,roofObject.Body,-bobDiameter*2,0);
	rope4= new Rope(bobObject4.Body,roofObject.Body,-bobDiameter*2,0);

	bobObject1= new Bob(200,320,50,50);
	bobObject2= new Bob(250,320,50,50);
	bobObject3= new Bob(300,320,50,50);
	bobObject4= new Bob(350,320,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();

  drawSprites();
 
}



