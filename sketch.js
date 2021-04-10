
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var boyImage, boy;
var stone;
var ground;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6;
var launcher;

function preload() {
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	tree = new Tree(930, 300);

	stone = new Stone(250, 480, 70);
	
	mango1 = new Mango(800, 225, 75);
	mango2 = new Mango(930, 150, 60);
	mango3 = new Mango(1000, 200, 55);
	mango4 = new Mango(850, 100, 60);
	mango5 = new Mango(1120, 200, 57);

	ground = new Ground(600, 590, 1200, 40);

	launcher = new Launcher(stone.body, {x: 250, y: 480});

	Engine.run(engine);
}


function draw() {
  background("grey");
  rectMode(CENTER);
  Engine.update(engine);
  imageMode(CENTER);
  image(boyImage, 300, 500, 200, 250);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();
  stone.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
	launcher.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		launcher.attach(stone.body);
	}
}

function detectCollision(stoneObj, mangoObj) {
	mangoBodyPosition = mangoObj.body.position;
	stoneBodyPosition = stoneObj.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance <= mangoObj.radius + stoneObj.radius) {
			console.log(distance);
			console.log(mangoObj.radius + stoneObj.radius);
			Matter.Body.setStatic(mangoObj.body, false);
		}	
}