
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

	tree = new Tree(930, 300, 525, 600);

	stone = new Stone(250, 480, 70);

	launcher = new Launcher(stone.body, {x: 250, y: 480});
	
	mango1 = new Mango(800, 225, 75);
	mango2 = new Mango(930, 150, 60);
	mango3 = new Mango(1000, 200, 55);
	mango4 = new Mango(850, 100, 60);
	mango5 = new Mango(1120, 200, 57);

	Engine.run(engine);
}


function draw() {
  background("grey");
  Engine.update(engine);
  imageMode(CENTER);
  image(boyImage, 300, 500, 200, 250);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();
  stone.display();
}



