class Tree {
    constructor(x, y) {
        var options = {isStatic: true};
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 10;
        this.height = 10;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 525, 600);
        pop();
    }
}