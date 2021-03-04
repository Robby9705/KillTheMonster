class Ground{
    constructor(x,y,width,height){
        var options = {
            Static: true,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body)
    }
    display(){
        var groundPos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(groundPos.x, groundPos.y, this.width, this.height);
    }
}