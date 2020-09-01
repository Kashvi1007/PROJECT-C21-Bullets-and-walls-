var bullet, speed, wall, weight, thickness,deform;

function setup(){
  createCanvas(1600,400);


  bullet = createSprite(100,height/2,50,10);

  thickness = random(22,83);
  

  wall = createSprite(1200,200,thickness,height/2);

  speed = random(223,321);
  weight = random(30,52);

  
  

}
function draw(){
  background(0);
  
  
  bullet.velocityX = speed;
  
  bullet.shapeColor = 'white';
  


  wall.shapeColor = (80,80,80);

  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    deform = (0.5 * weight * speed * speed )/ (thickness * thickness * thickness);

    if(deform>10){

      wall.shapeColor = color(255,0,0);
      textSize(24);
      fill(color(255,0,0));
    }

    if(deform<10){

      wall.shapeColor = color(0,255,0);
      textSize(24);
      fill(color(0,255,0));
    }
  }
  
  
  drawSprites();

  


}
