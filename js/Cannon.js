class Cannon{
    constructor(x,y,w,h,a){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;

        //this.cannon = Bodies.rectangle(x,y,w,h);
        //World.add(world,cannon);
    }

    display(){
        //var pos = this.cannon.position;
        fill("green");

        push();
        translate(this.x,this.y);
        rotate(this.a);
        rectMode(CENTER);
        rect(-10,-20,this.w,this.h);
        pop();

        arc(this.x-30,this.y+90,140,200,PI,TWO_PI);
        noFill();
    }
}