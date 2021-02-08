const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var poly, sling;
var platform1, platform2;
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9, block10;
var triBlock;
var ground;



var gameState = 'start';

function preload() {

}

function setup() {
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    var startX = 200;
    var startY = 500;

    poly = new Polygon(startX, startY);
    sling = new Sling(poly.body, {x: startX, y: startY});

    var xAlign1 = 600;
    var yAlign1 = 500;
    
    var xAlign2 = 1000;
    var yAlign2 = 200;

    var yOffset = 50;
    

    platform1 = new Platform(xAlign2, yAlign2, 250, 20);
    platform2 = new Platform(xAlign1, yAlign1, 250, 20);

    block1 = new Block(xAlign1-90, yAlign1 - yOffset, 50, 50);
    block2 = new Block(xAlign1-30, yAlign1 - yOffset, 50, 50);
    block3 = new Block(xAlign1+30, yAlign1 - yOffset, 50, 50);
    block4 = new Block(xAlign1+90, yAlign1 - yOffset, 50, 50);
    block5 = new Block(xAlign1, yAlign1 - 2*(yOffset), 60, 60);

    block6 = new Block(xAlign2-90, yAlign2 - yOffset, 50, 50);
    block7 = new Block(xAlign2-30, yAlign2 - yOffset, 50, 50);
    block8 = new Block(xAlign2+30, yAlign2 - yOffset, 50, 50);
    block9 = new Block(xAlign2+90, yAlign2 - yOffset, 50, 50);
    block10 = new Block(xAlign2, yAlign2 - 2*(yOffset), 60, 60);

    ground = new Ground(width/2, height - height/20, width, 80);

    triBlock = new TriBlock(xAlign1, yAlign1 - yOffset, 3, 10);

}
function keyPressed() {
    switch(keyCode) {
        case 32:
            gameState = 'readyPos'
                break;
        case 73:
            gameState = 'info';
                break;
        case 82:
            gameState = 'riddle';
                break;
        case 65:
            gameState = 'answer';
                break;
        
        default: break;
    }
}


function draw() {
    background(51);
    Engine.update(engine);
    if(gameState === 'start') {
        fill('red');
        textSize(64);
        text('Press SPACE to begin!!', 250, 400);
        fill('white');
        textSize(21);
        text('Press "i" to view some information!', 400, 500);
    }

    if(gameState === 'info') {
        textSize(18);
        fill('white');
        text('This is Project 29. Creator: Pranavanath Balamurali', 100, 100);
        text('Press "R" for a riddle!', 100, 150);
    }

    if(gameState === 'riddle') {
        textSize(18);
        fill('white');
        text('What is seen in the middle of March and April, but can\'t be seen at the beginning and end of either month?', 100, 100);
        text('Press "A" to reveal the answer!', 100, 150);
    }
    if(gameState === 'answer') {
        textSize(24);
        fill('white');
        text('The letter "R".', 100, 100);
        text('You may now start or continue playing by pressing the SPACE key.', 100, 150);
    }

    if(gameState === 'readyPos' || gameState === 'launched') {

        poly.display();
        sling.display();
        
        platform1.display();
        platform2.display();

        block1.display(); 
        block2.display(); 
        block3.display(); 
        block4.display();
        block5.display();

        block6.display(); 
        block7.display(); 
        block8.display(); 
        block9.display();
        block10.display();
        
        triBlock.display();

        ground.display();
        
    }
    
    if(gameState === 'readyPos') {
        textSize(21);
        fill('white');
        text('Drag the Polygon to fire!', 100, 100);
    }

}

function mouseDragged(){
    if (gameState !== 'launched') {
        Matter.Body.setPosition(poly.body, {x:mouseX,y:mouseY});
    } 
}

function mouseReleased(){
    sling.fly();
    gameState = 'launched';
}



