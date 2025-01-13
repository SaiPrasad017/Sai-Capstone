// Night runner 2
// Sai Prasad
// 11/28/2024

//too add list
//diffrent pages to neat up code
//add sprites
//add death
// add score
//add high score
// keep high score through diffrent games
//make it harder as it went on
//add music
//add title screen
//add game over screen

//add if statment to to draw loop called game states

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
let title;
let menuBackground;
let startButt;
let startButt1;
let endGround;

let startTime;

let gameState = 0;

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

  //title screen
  title = loadImage("assets/bg/Logo1.png");
  menuBackground = loadImage("assets/bg/menu background.png");
  startButt = loadImage("assets/bg/start.png");
  startButt1 = loadImage("assets/bg/start (1).png");

  //end screen
  endGround = loadImage("assets/bg/end background.png");

}

function setup() {
  createCanvas(1028, windowHeight*0.95);
  gameState = 0;
  ground = new Ground(height*2/3,10);
  player = new Player(height*2/3 - 100);
  objectList.push(new Obstacnles(int(random(0,2)),height*2/3 - 100));
  mainMenu = new GameStart;
  endScreen = new GameEnd;
}

function draw() {
  if(gameState === 0){
    mainMenu.action();
  }
  else if(gameState === 1){
    ground.action();
    player.display();
    if(millis() - startTime > 5000){
      gameState = 2;
    }
  }
  else if(gameState === 2){
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
  else if(gameState === 3){
    endScreen.action();
  }
}

function mousePressed(){
  if(mouseX >= width/2 && mouseX <= width/2 + 100 && mouseY >= height/2 - 50 && mouseY <= height/2 + 150){
    startTime = millis();
    gameState = 1;
    
  }
}

class Obstacnles{
  constructor(t,y){
   this.t = t //type of obstacles
   this.y = y; //y position
   this.x = width;
   this.active = true;
   this.isHit = false;
   this.top;
   this.left;
   this.right;
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

    // update malt if change sprite
    this.top = this.y + this.t * 50;
    this.left = this.x
    this.right = this.x + 100 + 100 * this.t

    //print(player.right,player.left,player.bottom,this.right,this.left, this.top);
    if(player.right > this.left && player.left < this.right && player.bottom > this.top){
      print("over");
      gameState = 3;
    }

  }

  action(){
    this.move();
    this.display();
  }
}

class GameStart{
  constructor(){
    this.xPosition = 0;
  }

  display(){
    image(menuBackground,this.xPosition,0);
    print('a');
    if(mouseX >= width/2 && mouseX <= width/2 + 100 && mouseY >= height/2 - 50 && mouseY <= height/2 + 150){
      image(startButt1,width/2, height/2 - 50);
      print("b")
    }
    else{
      image(startButt,width/2, height/2 - 50);
    }

    //square(width/2, height/2 - 50,100);
    image(title,width/4 - 70,25);
  }

  move(){
    this.xPosition = this.xPosition - 1;
    if(this.xPosition < -2048){
      this.xPosition = 0;
    }
  }

  action(){
    mainMenu.display();
    mainMenu.move();
  }
}

class GameEnd{
  constructor(){
    this.xPosition = 0;
  }

  display(){
    image(endGround,this.xPosition,0);
    print('a');
    if(mouseX >= width/2 && mouseX <= width/2 + 100 && mouseY >= height/2 - 50 && mouseY <= height/2 + 150){
      image(startButt1,width/2, height/2 - 50);
      print("b")
    }
    else{
      image(startButt,width/2, height/2 - 50);
    }

    //square(width/2, height/2 - 50,100);
    image(title,width/4 - 70,25);
  }

  move(){
    this.xPosition = this.xPosition - 1;
    if(this.xPosition < -2048){
      this.xPosition = 0;
    }
  }

  action(){
    endScreen.display();
    endScreen.move();
  }
}