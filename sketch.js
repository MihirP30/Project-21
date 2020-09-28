var bullet, wall;
var speed, weight, thickness;
var damage1, damage2, damage3;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor = color(255,255,255);
  wall = createSprite(1500, 200, thickness, 400/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);

  bullet.velocityX = speed;

  if(isTouching(bullet,wall)) {
    bullet.x = 1500 - wall.width/2;
    damage1 = 0.5*weight*speed*speed;
    damage2 = thickness*thickness*thickness;
    damage3 = damage1/damage2;
    changeColor();
  }

  drawSprites();
}

function isTouching(target1, target2) {
  if (target1.x - target2.x < target2.width/2 + target1.width/2
      && target2.x - target1.x < target2.width/2 + target1.width/2
      && target1.y - target2.y < target2.height/2 + target1.height/2
      && target2.y - target1.y < target2.height/2 + target1.height/2) {
    return true;
  }
  else {
    return false;
  }
}

function changeColor() {
  if(damage3 < 10) {
    wall.shapeColor = "Green"
    wall.velocityX = 0;
  }
  else if(damage3 = 10) {
    wall.shapeColor = "Yellow"
    wall.velocityX = 0;
  }
  else {
    wall.shapeColor = "Red"
    wall.velocityX = 0;
  }
}