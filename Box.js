class Box{
    constructor(x,y,width,height){
        var options = {
            restituion: 0.8,
            friction: 1.0,
            density: 20,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }
    display(){
        var BoxPos = this.body.position;
        var BoxAngle = this.body.angle;
        push();
        translate(BoxPos.x, BoxPos.y);
        rotate(BoxAngle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}