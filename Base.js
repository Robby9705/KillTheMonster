class Base{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var basePos = this.body.position;
        fill("brown");
        rect(basePos.x,basePos.y,this.width,this.height);
    }
}
