class Polygram{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            // set the isStatic property 
            isStatic : false
        }
        
        this.polygram = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.polygram);
      }
      display(){
        var angle = this.polygram.angle;
        var pos= this.polygram.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(rock_img,0,0,this.width, this.height);
        pop();
      }
}