class Slingshot {
    constructor(body1, point) {
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.04,
            length: 15
        }

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    } 

    display() {

        if(this.sling.bodyA) {
            strokeWeight(4);
            var startPoint = this.sling.bodyA.position;
            var endPoint = this.sling.pointB
            stroke(48, 22, 8);

            if(startPoint.x < 220) {

                strokeWeight(7);
                line(startPoint.x - 20, startPoint.y, endPoint.x - 10, endPoint.y);
                line(startPoint.x - 20, startPoint.y, endPoint.x + 30, endPoint.y - 4);
                image(this.sling3, startPoint.x - 28, startPoint.y - 8, 12, 25)

            } else {
                strokeWeight(3);
                line(startPoint.x + 25, startPoint.y, endPoint.x - 10, endPoint.y)
                line(startPoint.x + 25, startPoint.y, endPoint.x + 30, endPoint.y - 4);
                image(this.sling3, startPoint.x + 25, startPoint.y - 8, 12, 25)

            }
        }

        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);

    }

    fly() {
        this.sling.bodyA = null
    }
}