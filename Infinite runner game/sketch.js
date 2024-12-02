// Snow Runner
// Sai Prasad
// 11/28/2024

//too add list
//seconed background to move from oppsite direction to get rid of any blind spots

let easyMode = 0;
let normalMode = 10;
let hardMode = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = new Ground(height*2/3,10);
}

function draw() {
  background(220);
  ground.action();
}

class Ground{
  constructor(yPosition, speed){
    this.xPosition = windowWidth;
    this.yPosition = yPosition;
    this.speed = speed;
    this.floorX = windowWidth;
    this.sky = windowWidth;
  }

  display(){
    //sky
    fill(0,100,255);
    square(this.sky,this.yPosition/3, windowHeight* windowWidth);

    fill(255,255,255);
    rect(this.xPosition,this.yPosition,width,500);

    //banner
    fill(255,0,0);
    square(this.floorX,this.yPosition + 25, 25, 25);

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

    //floor design move
    this.floorX = this.floorX - (this.speed + easyMode);

    //BACKGROUND MOVING
    this.sky = this.sky - (this.speed - 2);

    //floor moving
    if(this.xPosition < 0){
      this.xPosition = 0;
    }

    //making the floor design loop
    if(this.floorX < 0){
      this.floorX += width;
    }
    if(this.floorX > width){
      this.floorX -= width;
    }

    //making sky move
    if(this.sky < 0){
      this.sky += width;
    }
    if(this.sky > width){
      this.sky -= width;
    }
  }

  action(){
    this.display();
    this.move();
  }
}



// class charater{
//   constructor(){
//   }

//   display(){
//     fill(1,255,255);
//     rect(width/2,height*2/3 - 50,50,50);//place holder
//   }

// }