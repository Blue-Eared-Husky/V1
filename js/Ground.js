class Ground{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    var ground_options = {
      isStatic : true
    }

    this.ground = Bodies.rectangle(x,y,w,h,ground_options);
    World.add(world,this.ground);
  }

  display(){
    var pos = this.ground.position;

    push();
    translate(pos.x,pos.y);
    fill("brown");
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }
}