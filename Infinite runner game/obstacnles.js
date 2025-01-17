
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
        image(box,this.x,this.y,100,100);
        //square(this.x,this.y,100);
      }
      else if(this.t === 1){
        image(bench,this.x,this.y + 50,200,50);
        //rect(this.x,this.y + 50,200,50)
      }
    }
  
    move(){
        if(newScore > 200){
          this.x = this.x - 20;
        }
        else{
          this.x = this.x - 15;
        }

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