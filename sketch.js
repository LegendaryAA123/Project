var bullet, wall, thickness
var speed, weight 




function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 100, 50) 
  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22, 83)
  wall = createSprite(1000, 200, thickness, 100)
  wall.shapeColor = "black"
}

function draw() {
  background(255,255,255); 
  
  bullet.velocityX = speed
  if ((0.5*weight*speed*speed)/(thickness*thickness*thickness)<10){
      bullet.shapeColor = "green"
  
    }
    if ((0.5*weight*speed*speed)/(thickness*thickness*thickness)>10){
        bullet.shapeColor = "red"
    }
  if (bullet.isTouching(wall)){
    bullet.velocityX = 0
  }
  drawSprites();
}