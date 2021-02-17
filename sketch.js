//Project 30
//Viyath Wanninayake
//02/02/2021

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Create the ball,ground,platforms and blocks
var ball1
var ground1
var ground2
var ground3
var launcher1
var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block1s
var block2s
var block3s
var block4s
var block5s
var block6s
var block7s
var block8s
var block9s
var block10s

function preload(){
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
  //Create a new ball
    ball1 = new ball(100,0,20);
  //Create a new ground
    ground1 = new ground(0,700,2000,20);
  //Create platforms for the blocks
    ground2 = new grounds(300,500,250,20);
    ground3 = new grounds(500,200,250,20);
  //Create a constreaint
    launcher1 = new launcher(ball1.body,{x:200,y:200});
  //Create the blocks in a pyramid form
    block1 = new block(250,450,30,40);
    block2 = new block(280,450,30,40);
    block3 = new block(310,450,30,40);
    block4 = new block(340,450,30,40);
    block5 = new block(265,400,30,40);
    block6 = new block(295,400,30,40);
    block7 = new block(325,400,30,40);
    block8 = new block(280,350,30,40);
    block9 = new block(310,350,30,40);
    block10 = new block(295,300,30,40);
    block1s = new block(400,100,30,40);
    block2s = new block(430,100,30,40);
    block3s = new block(460,100,30,40);
    block4s = new block(490,100,30,40);
    block5s = new block(415,50,30,40);
    block6s = new block(445,50,30,40);
    block7s = new block(475,50,30,40);
    block8s = new block(430,0,30,40);
    block9s = new block(460,0,30,40);
    block10s = new block(445,-50,30,40);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  fill("red");
  drawSprites();
  //Display the bodies
  ball1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  launcher1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block1s.display();
  block2s.display();
  block3s.display();
  block4s.display();
  block5s.display();
  block6s.display();
  block7s.display();
  block8s.display();
  block9s.display();
  block10s.display();
}



function mouseDragged(){
  //Make the ball follow the mouser if mouse is dragged
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  //Make it fly if mouse is released
  launcher1.fly();
}

function keyPressed(){
  //If the space key is pressed
  if (keyCode===32){
    //Create a constraint between the ball and pointB again
    launcher1.attach(ball1.body);
  }
  
}


