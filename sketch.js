const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var wall1;
var wall2;
var ball ;
var btn1,btn2;


function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
 
  
  ground =new Ground(800,670,1600,20);
  wall1 = new Ground(1100,600,20,120);
  wall2 = new Ground(1350,600,20,120);
  
  
  var ballOptions={
    restitution:0.3,
    friction:0,
    density:1.2
    }
 ball=Bodies.circle(260,100,20,ballOptions)
 World.add(world,ball)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  wall1.show();
  wall2.show();

  ellipse(ball.position.x,ball.position.y,20,20)

  Engine.update(engine);
}

function keyPressed(){

  if(keyCode===UP_ARROW) {
     Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})  
  }

}