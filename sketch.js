var garden,rabbit;
var gardenImg,rabbitImg;
var Apple, leaf, Appleimg, leafimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  Appleimg = loadImage("apple.png");
  leafimg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var numbers = Math.round(random(1,2))
  if(numbers === 1) {
    createApples();
  }
  else {
    createleafs();
  }
  drawSprites();
}

function createApples() {
  if(frameCount%80 === 0) {
    Apple = createSprite(random(50,350),40,10,10);
    Apple.addImage(Appleimg);
    Apple.velocityY = 3;
    Apple.lifetime = 150;
    Apple.scale = 0.07
  }
}
function createleafs() {
  if(frameCount%80 === 0) {
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafimg);
    leaf.velocityY = 3;
    leaf.lifetime = 150;
    leaf.scale = 0.07;
}
}