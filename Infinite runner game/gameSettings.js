
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
      image(title,width/4 - 150,25);
      rect(width/4 - 100,100,650,100)
      //letters
      image(n,width/4 - 100,125,50,50);
      image(i,width/4 -50,125,50,50);
      image(g,width/4,125,50,50);
      image(h,width/4 + 50,125,50,50);
      image(t,width/4 + 100,125,50,50);
      image(r,width/4 + 200,125,50,50);
      image(i,width/4 + 250,125,50,50);
      image(d,width/4 + 300,125,50,50);
      image(e,width/4 + 350,125,50,50);
      image(r,width/4 + 400,125,50,50);
      image(number2,width/4 + 500,125,50,50);     
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
      image(title,width/4 - 150,25);
      rect(width/4 - 100,100,650,100);

      image(g,width/4 - 50,125,50,50);
      image(a,width/4,125,50,50);
      image(m,width/4 + 50,125,50,50);
      image(e,width/4 + 100,125,50,50);
      
      image(o,width/4 + 200,125,50,50);
      image(v,width/4 + 250,125,50,50);
      image(e,width/4 + 300,125,50,50);
      image(r,width/4 + 350,125,50,50);
 
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