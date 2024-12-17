// Snow Runner
// Sai Prasad
// 11/28/2024

//too add list
//graivty
//jumping
//sprite
//diffrent pages to neat up code
//add obstacnles
//add sprites
//add hit detection
//add death
// add score
//add high score
// keep high score through diffrent games
//make it harder as it went on
//add music
//add title screen
//add game over screen

let floor;
let banner;
let sky;
let skyDetail1;
let skyDetail2;
let skyDetail3;
let skyDetail4;
let idle1;
let idle2;
let idle3;
let idle4;
let idle5;
let idle6;

let easyMode = 0;
let normalMode = 10;
let hardMode = 20;

function preload(){
  floor = loadImage("assets/bg/01_ground.png");
  banner = loadImage("assets/bg/flag.png");
  sky = loadImage("assets/bg/background.png");
  skyDetail1 = loadImage("assets/bg/background 1.png");
  skyDetail2 = loadImage("assets/bg/background 2.png");
  skyDetail3 = loadImage("assets/bg/background 3.png");
  skyDetail4 = loadImage("assets/bg/background 4.png");
  idle1 = loadImage("assets/bg/idle 1.png");
  idle2 = loadImage("assets/bg/idle 2.png");
  idle3 = loadImage("assets/bg/idle 3.png");
  idle4 = loadImage("assets/bg/idle 4.png");
  idle5 = loadImage("assets/bg/idle 5.png");
  idle6 = loadImage("assets/bg/idle 6.png");
}

function setup() {
  createCanvas(1028, windowHeight*0.95);
  ground = new Ground(height*2/3,10);
  player = new Player(height*2/3 - 100);
}

function draw() {
  background(220);
  ground.action();
  player.action();
}

class Ground{
  constructor(yPosition, speed){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.speed = speed;
    this.bannerX = windowWidth;
    this.skyX = 0;
  }

  display(){
    //sky
    image(sky,this.skyX - 2,0);
    image(skyDetail1,this.skyX,0);
    image(skyDetail2,this.skyX + 2,0);
    image(skyDetail3,this.skyX + 4,0);
    image(skyDetail4,this.skyX + 6,0);

    //ground
    image(floor,this.xPosition,this.yPosition);
    

    //banner
    image(banner,this.bannerX,this.yPosition - 5);
  }

  move(){
    //floor move
    this.xPosition = this.xPosition - (this.speed*2 + easyMode);

    //floor design move
    this.bannerX = this.bannerX - (this.speed + easyMode);


    //BACKGROUND MOVING
    this.skyX = this.skyX - (this.speed - 4);


    //floor moving const
    if(this.xPosition < -2048){
      this.xPosition = 0;
    }

    //making the floor design loop
    if(this.bannerX < 0){
      this.bannerX += width;
    }
    if(this.bannerX > width){
      this.bannerX -= width;
    }

    //making sky move
    if(this.skyX < -width*2){
      this.skyX = 0;
    }
  }

  action(){
    this.display();
    this.move();
  }
}

class Player{
  constructor(y){
    this.y = y;
    this.boundry = height*2/3 - 100;
    this.canJump = false;
    this.forceY = 0.5;
    this.v = 0;
    this.animationLoop = 1;
  }
 
  display(){
    if(this.animationLoop === 1){
      image(idle1,width/4,this.y);
      if(frameCount > 60){
        frameCount = 0;
        this.animationLoop = this.animationLoop + 1;
      }
    }
    if(this.animationLoop === 2){
      image(idle2,width/4,this.y);
      if(frameCount > 60){
        frameCount = 0;
        this.animationLoop = this.animationLoop + 1;
      }
    }
    if(this.animationLoop === 3){
      image(idle3,width/4,this.y);
      if(frameCount > 60){
        frameCount = 0;
        this.animationLoop = this.animationLoop + 1;
      }
    }
    if(this.animationLoop === 4){
      image(idle4,width/4,this.y);
      if(frameCount > 60){
        frameCount = 0;
        this.animationLoop = this.animationLoop + 1;
      }
    }
    if(this.animationLoop === 5){
      image(idle5,width/4,this.y);
      if(frameCount > 60){
        frameCount = 0;
        this.animationLoop = this.animationLoop + 1;
      }
    }
    if(this.animationLoop === 6){
      image(idle6,width/4,this.y);
      if(frameCount > 60){
        frameCount = 0;
        this.animationLoop = 1;
      }
    }
  }
   

  checkingIfOnGround(){
    if(this.y >= this.boundry){
      this.canJump = true;
      this.v = 0;
    }
    else{
      this.canJump = false;
    }
  }

  jump(){
    if(this.canJump === true){
      this.v = 18;
    }
  }

  action(){
    if(keyIsPressed && keyCode === 32){
      this.jump();
    }
    this.y -= this.v;
    this.v -= this.forceY;

    this.checkingIfOnGround();
    this.display();
  }
  
  
}