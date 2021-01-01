
var monkey , monkey_running

var banana ,bananaImage, obstacles, obstacleImage
var bananaGroup, obstacleGroup

var score,Survival_Time
var   Survival_time=0;
var lol;
var ground,invisibleg;
var GameState=1;
var Play=1;
var End=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,300);
 
  //creating monkey sprite
  monkey=createSprite(50,150,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.12;
  monkey.debug=true;
  
  //background sprite
  ground=createSprite(300,290,1200,20);
  ground.velocityX=-3 
  ground.x=(ground.width/2);
  
  //invisible ground
  invisibleg=createSprite(300,290,600,20)
  invisibleg.visible=false;
  
//closing bracket for setup
}


function draw() {
background("black");
  
if (GameState==Play){
  //resetting ground
 if(ground.x<0){
  ground.x=(ground.width/2);
}
 
//gravity code
monkey.velocityY = monkey.velocityY + 1.1
monkey.collide(invisibleg);

//monkey jumping
 if(keyDown("space") && monkey.y>=240){
   monkey.velocityY=-17;
 }

//SPAWNING BANANAS
 if(frameCount%80==0){
   bananagang();
   obstaclesgang();
 }  
 
//SURVIVAL TIME 
 Survival_time= Survival_time+Math.round((getFrameRate()/60));
 lol=Math.round(Survival_time/10)
 //Pritning survival time 
 fill("white");
 stroke("black");
 textSize(20);
 text("SURVUVAL TIME:  "+ lol,200,150);
}

monkey.debud=true;


//comsole log  and draw sprites
 drawSprites();

}

//banana properties
function bananagang(){
  banana=createSprite(600,120,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-7-(lol/10);
  banana.lifetime=200;
}

//obstacles properties
function obstaclesgang(){
obstacles=createSprite(600,255,10,10);
obstacles.addImage(obstaceImage)
obstacles.scale=0.15;
obstacles.velocityX=-7-(lol/10);
obstacles.lifetime=200;
obstacles.debug=true;
}





