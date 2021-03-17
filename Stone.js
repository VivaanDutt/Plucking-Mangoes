class Stone {
    constructor(x, y, radius) {
        var options = {restitution: 0, density: 1.2, friction: 1};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}