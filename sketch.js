
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var ground;
var obstacleGroup,bananaGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  

    createCanvas(500, 400);
 
  monkey=createSprite(60,325,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(250,400,1000,30);
  ground.velocityX=-3;
  
obstacleGroup=new Group();
  bananaGroup=new Group();
  
}


function draw() {
background("white");
  
  monkey.collide(ground);
  
  //obstacleGroup= new Group ();
  //bananaGroup= new Group();
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    //add gravity
   monkey.velocityY = monkey.velocityY + 0.8
  
  

    banana()
  obstacle()
  
  
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  
   if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
    }
  
  drawSprites();
  
}
function banana(){
  if(frameCount%150===0){
    var banana=createSprite(500,100,20,20);
     banana.y = Math.round(random(20,200));
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-6;
    bananaGroup.add(banana);
    
  }

}
function obstacle(){
  if(frameCount%350===0){
    var obstacle=createSprite(500,350,20,20);
    obstacle.addImage("obstacle",obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-6;
    obstacleGroup.add(obstacle);
  }
}





