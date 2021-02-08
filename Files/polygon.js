class Polygon extends BaseClass {
    constructor(x, y, width, height){
      var polygonSize = 60;

      super(x,y, polygonSize, polygonSize);
      this.image = loadImage("images/polygon.png");
      Matter.Body.setDensity(0.001, this.body);
    }

    display() {
      super.display();
      
    }
  
  };