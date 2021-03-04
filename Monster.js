class Monster{
    constructor(x,y,r){
        var options = {
            density: 5, 
      frictionAir: 0
        }
        this.r = r;
        this.x=x;
		this.y=y;
        this.image=loadImage("Monster-01.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
    }
    display(){
        var monsterPos = this.body.position;
        push();
        translate(monsterPos.x,monsterPos.y-100);
        rectMode(CENTER);
        fill(255,0,0);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r);
        pop();
    }
}