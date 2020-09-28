var monkey, monkey_running
var banana, bananaImage, obstacle, obstacle1,obstacle2,obstacle3;
var bananaGroup, obstacleGroup
var score
var ground, groundImage, invisibleGround;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacle1 = loadImage("obstacle.png");
  obstacle2 = loadImage("obstacle.png");
  obstacle3 = loadImage("obstacle.png");

}



function setup() {

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1

  ground = createSprite(400, 350, 900, 10);
  ground.x = ground.width / 2;
  ground.velocityX = -6;

  invisibleGround = createSprite(400, 352, 900, 10);
  invisibleGround.visible = false;

  obstacleGroup = new Group();
  bananaGroup = new Group();
}


function draw() {
  background(225);

  if (ground.x < 0) {
    ground.x = 200;
  }

  if (keyDown("space") && monkey.y >= 301) {
    monkey.velocityY = -12;
  }


  monkey.velocityY = monkey.velocityY + 0.6;

  monkey.collide(invisibleGround);
  banana();
  obstacles();

  drawSprites();
}

function banana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 200;

    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

    bananaGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(300, 353, 10, 40);
    //obstacle.debug = true;
    obstacle.velocityX = -6;

    //generate random obstacles
    var rand = Math.round(random(1, 3));
    switch (rand){
    case 1: obstacle.addImage(obstacleImage);
    break;
    case 2: obstacle.addImage(obstacleImage);
    break;
    case 3: obstacle.addImage(obstacleImage);
    break;
    default: break;
    }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}