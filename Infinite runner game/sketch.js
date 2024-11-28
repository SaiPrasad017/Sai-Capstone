// Snow Runner
// Sai Prasad
// 11/28/2024

let easyMode = 0;
// let normalMode = 1;
// let hardMode = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

class Ground{
  constructor(yPosition, speed){
    this.xPosition = windowWidth;
    this.yPosition = yPosition;
    this.speed = speed;
  }

  display(){

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
      this.xPosition += width;
    }
    if(this.xPosition > width){
      this.xPosition -= width;
    }
  }
}