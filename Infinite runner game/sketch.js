// Night runner 2
// Sai Prasad
// 11/28/2024

//setting different varibles

//score
let newScore = 0;
let highScore = 0;

//letters
let g;
let d;
let e;
let a;
let h;
let i;
let n;
let o;
let r;
let t;
let v;
let m;
let number2;

// for the ground
let floor;
let banner;
let sky;
let skyDetail1;
let skyDetail2;
let skyDetail3;
let skyDetail4;
let box;
let bench;

//for the player
let idle1;
let idle2;
let idle3;
let idle4;
let idle5;
let idle6;

// for the end and start screen
let title;
let menuBackground;
let startButt;
let startButt1;
let endGround;

// other
let startTime;
let gameState = 0;

let objectList = [];

function preload(){
  floor = loadImage("assets/bg/01_ground.png");
  banner = loadImage("assets/bg/flag.png");
  sky = loadImage("assets/bg/background.png");
  box = loadImage("assets/bg/Box1.png")
  bench = loadImage("assets/bg/bench.png")

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

  //letters
 g = loadImage("assets/bg/G.png");
 d = loadImage("assets/bg/D.png");
 e = loadImage("assets/bg/E.png");
 a = loadImage("assets/bg/A.png");
 h = loadImage("assets/bg/H.png");
 i = loadImage("assets/bg/I.png");
 n = loadImage("assets/bg/N.png");
 o = loadImage("assets/bg/O.png");
 r = loadImage("assets/bg/R.png");
 t = loadImage("assets/bg/T.png");
 v = loadImage("assets/bg/V.png");
 m = loadImage("assets/bg/M.png");
 number2 = loadImage("assets/bg/2.png");
}

function setup() {
  createCanvas(1028, windowHeight*0.95);
  //resetting varibles
  newScore = 0;
  gameState = 0;

  //creating game objects
  ground = new Ground(height*2/3,10);
  player = new Player(height*2/3 - 100);
  objectList.push(new Obstacnles(int(random(0,2)),height*2/3 - 100));
  mainMenu = new GameStart;
  endScreen = new GameEnd;
}

function draw() {
  //title screen
  if(gameState === 0){
    mainMenu.action();
  }
  //5 seconed count down
  else if(gameState === 1){
    ground.action();
    player.y = height*2/3 - 100;
    player.display();
    textSize(100);
    if(millis() - startTime > 5000){
      text("1",width/2,height/2);
      gameState = 2;
    }
    else if(millis() - startTime > 4000){
      text("2",width/2,height/2);
    }
    else if(millis() - startTime > 3000){
      text("3",width/2,height/2);
    }
    else if(millis() - startTime > 2000){
      text("4",width/2,height/2);
    }
    else if(millis() - startTime > 1000){
      text("5",width/2,height/2);
    }
  }
  // game is running
  else if(gameState === 2){
    ground.action();
    player.action();
    score();
    for(let i = 0; i < objectList.length; i++){
      let o = objectList[i];
      o.action();
      if(o.active === false){
        objectList.shift();
        objectList.push(new Obstacnles(int(random(0,2)),height*2/3 - 100));
      }
    }
  }
  //end screen
  else if(gameState === 3){
    //high score?
    endScreen.action();
    newScore = 0;
    textSize(100);
    text("high score " + highScore,50, height/2 + 200);
  }
}

function mousePressed(){
  if(gameState === 0){
    if(mouseX >= width/2 && mouseX <= width/2 + 100 && mouseY >= height/2 - 50 && mouseY <= height/2 + 150){
      objectList = [];
      objectList.push(new Obstacnles(int(random(0,2)),height*2/3 - 100));
      startTime = millis();
      gameState = 1;
    }
  }
  if(gameState === 3){
    if(mouseX >= width/2 && mouseX <= width/2 + 100 && mouseY >= height/2 - 50 && mouseY <= height/2 + 150){
      startTime = millis();
      gameState = 0;
    }
  }
}

function score(){
  textSize(35);
  if(frameCount % 2 === 1 ){
    if(frameCount % 3 === 2){
      newScore++;
    }
  }
  highScore = localStorage.getItem("high score:")
  int(highScore);
  if(newScore > highScore){
    highScore = newScore;
  }

  localStorage.setItem('high score:', highScore);
  text("high score " + highScore, 50, 50)
  text("score: " + newScore,600,50);
}