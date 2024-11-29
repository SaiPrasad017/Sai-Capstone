// Snow Runner
// Sai Prasad
// 11/28/2024

let easyMode = 0;
// let normalMode = 1;
// let hardMode = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = new Ground(height*2/3,10);
}

function draw() {
  background(220);
  ground.action();
  fill(1,255,255);
  //rect(width/2,height*2/3 - 50,50,50); hight for the charater
}

class Ground{
  constructor(yPosition, speed){
    this.xPosition = windowWidth;
    this.yPosition = yPosition;
    this.speed = speed;
  }

  display(){
    fill(255,255,255);
    rect(this.xPosition,this.yPosition,width,500);
  }

  move(){
    // if(score < 1000){
    //   this.xPosition = this.xPosition - (this.speed + easyMode);
    // }
    // if(score <= 2000 && score >= 1000){
    //   this.xPosition = this.xPosition - (this.speed + normalMode);
    // }
    // if(score > 2000){
    //   this.xPosition = this.xPosition - (this.speed + hardMode);
    // }

    this.xPosition = this.xPosition - (this.speed + easyMode); //tempary line remove later

    if(this.xPosition < 0){
      this.xPosition = 0;
    }
    
  }

  action(){
    this.display();
    this.move();
  }
}