var fixedRect,movingRect;



function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=5;
  
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.velocityY=-5;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  bounceOff(fixedRect,movingRect);
 
  drawSprites();
}






