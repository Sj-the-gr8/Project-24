var myEngine,myWorld,paper,block,block2,block3,ground1,a;
function setup()  {
    createCanvas(800,200);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;     
    ground1=new ground(400,190,800,20);
    block=new bin(650,140,20,80);
    block2=new bin(710,170,100,20);
    block3=new bin(770,140,20,80);
    paper=new ball(150,155,25);
}

function draw()  {
    background("black");
    Matter.Engine.update(myEngine);
    ground1.display();
    block.display();
    block2.display();
    block3.display();
    paper.display();
}

function keyPressed()   {
    if(keyCode == UP_ARROW)   {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-90});
    }
}