// Night runner 2
// Sai Prasad
// 11/28/2024

//too add list
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

//create a list of objects that push into the screen and when x position is
//less then 0 it shifts and a new item gets added to the back of the list

//setting different varibles
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

let objectList = [];

let easyMode = 0;
let normalMode = 10;
let hardMode = 20;

function preload(){
  floor = loadImage("assets/bg/01_ground.png");
  banner = loadImage("assets/bg/flag.png");
  sky = loadImage("assets/bg/background.png");

  //sky details
  skyDetail1 = loadImage("assets/bg/background 1.png");
  skyDetail2 = loadImage("assets/bg/background 2.png");
  skyDetail3 = loadImage("assets/bg/background 3.png");
  skyDetail4 = loadImage("assets/bg/background 4.png");

  //making player idle animation
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
  objectList.push(new Obstacnles(int(random(0,2)),height*2/3 - 100));
}

function draw() {
  background(220);
  ground.action();
  player.action();
  for(let i = 0; i < objectList.length; i++){
    let o = objectList[i];
    o.action();
    if(o.active === false){
      objectList.shift();
      objectList.push(new Obstacnles(int(random(0,2)),height*2/3 - 100));
    }
  }
}

class Obstacnles{
  constructor(t,y){
   this.t = t //type of obstacles
   this.y = y; //y position
   this.x = width;
   this.active = true;
  }

  display(){
    if(this.t === 0){
      square(this.x,this.y,100);
    }
    else if(this.t === 1){
      rect(this.x,this.y + 50,200,50)
    }
  }

  move(){
    this.x = this.x - 15;
    if(this.x <= 0){
      this.active = false;
    }
  }

  action(){
    this.display();
    this.move();
  }
}
