class Man extends BaseClass{
    constructor(x,y,width,height){
        var optaions = {
        isStatic:true
        }
    super(x,y,width,height);
    this.image1 = loadImage("trex1.png");
    this.image2 = loadImage ("ti.png");
    }
    display(){
     push ();
     super.display();
     imageMode (CENTER);
     if(this.body.position.x <700){
     image(this.image1,this.body.position.x,this.body.position.y,this.width,this.height);
     }
     else{
     image(this.image2,this.body.position.x,this.body.position.y,this.width,this.height);
     }
     pop ();
    }
}