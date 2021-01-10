class Bird {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':4
  }
  this.body = Bodies.rectangle(x,y,50,50);
  this.width = 50;
  this.height = 50;
  this.image = loadImage("ball.jpg");
  this.smokeImage = loadImage("smoke.png")
  World.add(world, this.body);
       
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    if(-1<counter>1&&this.body.position.x<700){
      ss2.attach(this.body);
      ss1.body = null;
    }

    
    if(1<counter&&this.body.position.x>700){
    ss1.attach(this.body);
    ss2.body =null;
    }

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
    pop ();
  
  }
}
