// Snow Runner
// Sai Prasad
// 11/28/2024

//too add list
//seconed background to move from oppsite direction to get rid of any blind spots

let floor;

let easyMode = 0;
let normalMode = 10;
let hardMode = 20;

function preload(){
  floor = loadImage("assets/bg/01_ground.png");
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
    this.floorX = windowWidth;
    this.sky = windowWidth;
    this.sky2 = 0;
  }

  display(){
    //sky
    fill(0,100,255);
    rect(this.sky,0, width*4, height);

    //ground
    image(floor,this.xPosition,this.yPosition);
    

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

    //floor move
    this.xPosition = this.xPosition - (this.speed + easyMode); //tempary line remove later

    //floor design move
    this.floorX = this.floorX - (this.speed + easyMode);


    //BACKGROUND MOVING
    this.sky = this.sky - (this.speed - 2);


    //floor moving const
    if(this.xPosition < -2048){
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
    if(this.sky < -width*2){
      this.sky = width*2;
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