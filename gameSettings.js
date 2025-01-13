
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