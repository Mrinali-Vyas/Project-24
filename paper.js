class paper{
    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body.x=50;
       this.body.y=380;
       this.body.r=5;
       this.body = Bodies.circle(x, y,r, options,2);
       World.add(world,this.body);
    }
    display(){
       
       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(angle);
       pop();
       
    }
    
}