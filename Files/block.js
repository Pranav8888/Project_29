class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("Images/block.png");
    }
    display() {
      super.display();
    }
  
  };