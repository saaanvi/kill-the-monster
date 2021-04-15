class Devil {
    constructor(x, y) {
      var options = { 
          'restitution':0.5,
          'friction':0.2,
          'density':0.3
      }
      this.body = Bodies.rectangle(x, y, 100, 100,options);
      this.width = 100;
      this.height = 100;
      this.devilImg = loadImage("Monster-01.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      image(this.devilImg,0,0,100,100);
      
      pop();
    }
  };