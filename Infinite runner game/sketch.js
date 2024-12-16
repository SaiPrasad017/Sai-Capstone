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
//
let floor;
let banner;
let sky;
let skyDetail1;
let skyDetail2;
let skyDetail3;
let skyDetail4;

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
}

function setup() {
  createCanvas(1028, windowHeight);
  ground = new Ground(height*2/3,10);
  player = new Player(height*2/3);
}

function draw() {
  background(220);
  ground.action();
  player.display();
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
    this.boundry = height*2/3;
    this.canJump = false;
    this.forceY = 0;
    this.jumpHeight = 60;
  }
 
  display(){
    square(width/4,this.y,10);
  }

  checkingIfOnGround(){
    if(this.y === this.boundry){
      this.canJump = true;
      this.forceY = 0;
    }
    else{
      this.canJump = false;
    }
  }

  jump(){
    if(this.canJump === true){
      this.y = this.y - this.jumpHeight;
    }
  }

  action(){
    if(keyIsPressed && keyCode === 32){
      player.jump();
    }
  }
  
  
}