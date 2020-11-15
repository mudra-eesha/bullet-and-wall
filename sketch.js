var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight=random(400,1500)

  thickness=random(22,83)

  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  wall=createSprite(550,200,thickness,150);

 // wall.shapeColor=color(230,230,230)
}

function draw() {
  background(0); 

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    

    if(damage>10)
      {
       // wall.shapeColor=color(255,0,0);
        wall.shapeColor="green"
      }

      if(damage<10){
        //wall.shapeColor=color(0,255,0);
        wall.shapeColor="red"
      }
    }
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
