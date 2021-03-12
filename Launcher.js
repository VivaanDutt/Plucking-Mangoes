class Launcher {
    constructor(bodyA, pointB) {
        var options = {bodyA: bodyA, pointB: pointB, length: 5, stiffness: 5};
        this.body = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world, this.body);
    }

    display() {
        if(this.body.bodyA) {
            var posA = this.body.bodyA.position;
            var posB = this.pointB;
            strokeWeight(3);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }    
    
    fly() {
        this.body.bodyA = null;
    }

    attach(body) {
       this.body.bodyA = body;
    }
}