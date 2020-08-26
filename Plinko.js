class Plinko {
  constructor(x, y, r) {
    var options = {
        'isStatic':true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,this.r, options);
    this.r = 10;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("purple");
    fill("purple");
    ellipse(0,0, this.r);
    pop();
  }
};
// this.color=color(random(0,255),random(0,255),random(0,255));