class Tower{
  constructor(x,y,width, height){
    var tower_options = {
      isStatic : true
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/tower.png");
    
    this.tower = Bodies.rectangle(this.x,this.y,this.width,this.height,tower_options);
    World.add(world,this.tower);
  }

  display(){
    var pos = this.tower.position;
    var angle = this.tower.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);

    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}