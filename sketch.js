const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var tower1;
var tower2;
var bridge;
var link;
var towerlink;
var stones=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground=new Base(0, height-40, width+100, 40);
  tower1=new Base(0, 80, 80, height);
  tower2=new Base(width-100, 80, 85, height);

  bridge=new Bridge(30, {x:0, y:110});

  towerlink=new Base(width-100, 130, 20, 20);

  Matter.Composite.add(bridge.body, towerlink);
  link=new Link(bridge, towerlink);

  for (let i=0; i<=18; i++) {
    var x=random(width/2+200, width/2-200);
    var y=random(0, 100);
    var stone=new Stone(x, y, 30);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  tower1.display();
  tower2.display();
  bridge.show();

  for (let i=0; i<=18; i++) {
    stones[i].display();
  }
}
