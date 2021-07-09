class Stone {
    constructor(x, y, radius) {
        this.radius=radius;
        this.body=Bodies.circle(x, y, this.radius);
        World.add(world, this.body);
        ellipseMode(RADIUS);
    }
    display() {
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white");
        ellipse(0, 0, this.radius);
        pop();
    }
}