// making the background move

class Ground{
    constructor(yPosition, speed){
        // setting the varibles
      this.xPosition = 0;
      this.yPosition = yPosition;
      this.speed = speed;
      this.bannerX = windowWidth;
      this.skyX = 0;
    }
  
    display(){
      //sky
      image(sky,this.skyX,0);

      //different sky layers
      image(skyDetail1,this.skyX,0);
      image(skyDetail2,this.skyX - 200,0);
      image(skyDetail3,this.skyX - 500,0);
      image(skyDetail4,this.skyX + 150,0);
  
      //ground and banner
      image(floor,this.xPosition,this.yPosition);
      image(banner,this.bannerX,this.yPosition - 5);
    }
  
    move(){
      //floor movement
      this.xPosition = this.xPosition - (this.speed*2 + easyMode);
  
      //banner movement
      this.bannerX = this.bannerX - ((this.speed - 5) + easyMode);
  
  
      //BACKGROUND MOVING
      this.skyX = this.skyX - (this.speed - 4);
  
  
      //floor moving consistently
      if(this.xPosition < -2048){
        this.xPosition = 0;
      }
  
      //making the floor design loop
      if(this.bannerX < 0){
        this.bannerX += width;
      }
      if(this.bannerX > width){
        this.bannerX -= width;
      }
  
      //making sky loop
      if(this.skyX < -width*2){
        this.skyX = 0;
      }
    }
  
    action(){
      this.display();
      this.move();
    }
  }