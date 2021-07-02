const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon, towerImg, backgroundGif;

function preload() {
  towerImg = loadImage("./assets/tower.png");
  backgroundGif = loadImage("./assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
 
  tower = new Tower(100,350,160,310);
  ground = new Ground(600,575,1200,50);
  cannon = new Cannon(130,110,50,70,angle);
}

function draw() {
  background(backgroundGif);
 
  tower.display();
  ground.display();
  cannon.display();

  Engine.update(engine);
}