class ball   {
    constructor(x,y,r)   {
        this.body=Matter.Bodies.circle(x,y,r,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
        Matter.World.add(myWorld,this.body);
        this.radius=r;
    }
    display()   {
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}