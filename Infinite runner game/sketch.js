// Snow Runner
// Sai Prasad
// 11/28/2024

//too add list
//seconed background to move from oppsite direction to get rid of any blind spots
//add steampunk theme
let floor;
let banner;
let sky;

let easyMode = 0;
let normalMode = 10;
let hardMode = 20;

function preload(){
  floor = loadImage("assets/bg/01_ground.png");
  banner = loadImage("assets/bg/flag.png");
  //sky = loadImage("assets/bg/11_background.png");
}

function setup() {
  createCanvas(1028, windowHeight);
  ground = new Ground(height*2/3,10);
}

function draw() {
  background(220);
  ground.action();
}

class Ground{
  constructor(yPosition, speed){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.speed = speed;
    this.bannerX = windowWidth;
    this.skyX = windowWidth;
  }

  display(){
    //sky
    //image(sky,this.skyX,0);
    //rect(this.sky,0, width*4, height);

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
    this.skyX = this.skyX - (this.speed - 2);


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
      this.skyX = width*2;
    }
  }

  action(){
    this.display();
    this.move();
  }
}
