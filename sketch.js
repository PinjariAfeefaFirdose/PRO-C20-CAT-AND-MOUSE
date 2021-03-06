var canvas,bg;
var mouse,mouse1,mouse2,mouse3,mouse4;
var cat,cat1,cat2,cat3,cat4;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catsleeping",cat1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mousestanding",mouse1);
    mouse.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catlastimage",cat3);
        cat.x = 300;
        cat.scale = 0.2
        cat.changeAnimation("catlastimage");
        mouse.addAnimation("mouselastimage",mouse3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouselastimage")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5
      cat.addAnimation("catrunning",cat2);
      cat.changeAnimation("catrunning");
      mouse.addAnimation("mouseteasing",mouse2);
      mouse.frameDelay = 25;
      mouse.changeAnimation("mouseteasing");
  }

}
