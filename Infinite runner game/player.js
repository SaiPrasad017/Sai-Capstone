// making the player

class Player{
    constructor(y){
        //setting the varibles
      this.y = y;
      this.boundry = height*2/3 - 100;
      this.canJump = false;
      this.forceY = 0.5;
      this.v = 0;
      this.animationLoop = 1;
    }
   
    display(){
        // making an idle animation 
      if(this.animationLoop === 1){
        image(idle1,width/4,this.y);
        if(frameCount > 7){
          frameCount = 0;
          this.animationLoop = this.animationLoop + 1;
        }
      }
      if(this.animationLoop === 2){
        image(idle2,width/4,this.y);
        if(frameCount > 7){
          frameCount = 0;
          this.animationLoop = this.animationLoop + 1;
        }
      }
      if(this.animationLoop === 3){
        image(idle3,width/4,this.y);
        if(frameCount > 7){
          frameCount = 0;
          this.animationLoop = this.animationLoop + 1;
        }
      }
      if(this.animationLoop === 4){
        image(idle4,width/4,this.y);
        if(frameCount > 7){
          frameCount = 0;
          this.animationLoop = this.animationLoop + 1;
        }
      }
      if(this.animationLoop === 5){
        image(idle5,width/4,this.y);
        if(frameCount > 7){
          frameCount = 0;
          this.animationLoop = this.animationLoop + 1;
        }
      }
      if(this.animationLoop === 6){
        image(idle6,width/4,this.y);
        if(frameCount > 7){
          frameCount = 0;
          this.animationLoop = 1;
        }
      }
    }
     
  
    checkingIfOnGround(){
        //checking if player is on the ground
      if(this.y >= this.boundry){
        this.canJump = true;
        this.v = 0;
      }
      else{
        this.canJump = false;
      }
    }
  
    jump(){
        //setting velcity
      if(this.canJump === true){
        this.v = 12 ;
      }
    }
  
    action(){
      if(keyIsPressed && keyCode === 32){
        this.jump();
      }
      this.y -= this.v;
      this.v -= this.forceY;
  
      this.checkingIfOnGround();
      this.display();
    }
  }