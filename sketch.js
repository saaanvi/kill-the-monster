const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var square1,square2,square3,square4,square5,square6,square7;
var superman;
var devil
var backgroundImg;


function preload(){
    backgroundImg = loadImage("GamingBackground.png");
}







function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    


    ground = new Ground(700,height,11500,20);
   
   square1 = new Square(680,320,70,70);
    square2 = new Square(680,320,70,70);
    
    square3 = new Square(680,240,70,70);
    square4 = new Square(680,240,70,70);
    
    square5 = new Square(800,160,70,70);
    square6 = new Square(800,160,70,70);
   square7 = new Square(800,160,70,70);
    square8 = new Square(800,160,70,70);

    devil = new Devil(972,128);
    

    

   superman = new Superman(320,200,45);
    

    thread = new Thread(superman.body,{x:489, y:70});
    
}

function draw(){

    background(backgroundImg);
    
    
   
Engine.update(engine);
    
    square1.display();
    square2.display();
    square3.display();
    square4.display();
    square5.display();
    square6.display();
    square7.display();
    square8.display();
    ground.display();

    superman.display();

    devil.display();
   
    thread.display();    
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(superman.body, superman.body.position,{x:300, y: -120})
    }
}


