var bullet, wall;
var speed, weight, thickness;

function setup() {
createCanvas(1600,400);
background = ("red");

speed=random(223,321);
thickness = random(22, 83);
weight=random(30,52);

bullet=createSprite(50, 200, 30, 10);
bullet.velocityX = speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=("black");
}

function hasCollided(bullet,wall){
  
  bulletRightEdge = bullet.x +bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
    return false;
}

function draw() {
  background(255,255,255);  

if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage = 0.5 * weight * speed* speed/ thickness*thickness*thickness;

      if(damage>10){
        bullet.shapeColor=color("red"); 
      }
      
      if(damage<10){
        bullet.shapeColor=color("green");
      }
    }
  drawSprites()
}

  
  