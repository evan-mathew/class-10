var sea, seaImg
var ship, shipAni

function preload(){
seaImg = loadImage("sea.png")
shipAni = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200)
  sea.addImage(seaImg);

  ship = createSprite(200,300)
  ship.addAnimation(shipAni);
}


function draw() {
  background("blue");

if(sea.x < 0){
 sea.x = sea.width/2
}
sea.velocityX = -2

  drawSprites();
}