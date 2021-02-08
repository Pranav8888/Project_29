class TriBlock {
    constructor(x, y, sides, radius) {
        var options = {
            isStatic: false,
            restitution: 0.8,
            mass: 100,
            density: 5,
        }
        this.body = Bodies.polygon(x, y, sides, radius, options);
        this.sides = sides;
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
        var offsetX = 20;
        var offsetY = 20;

        strokeWeight(2);
        stroke('orange')
        fill("yellow");

        triangle(pos.x, pos.y, pos.x + offsetX, pos.y - offsetY, pos.x - offsetX, pos.y - offsetY);
        
    }
}