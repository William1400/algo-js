class Circle {
    
    constructor(x, y, r) {
        
        this.xPos = x;
        this.yPos = y;
        this.radius = r;
    }
    
    move(xOffset, yOffset) {
       
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset;   
    }
    
    surface() {
        
        let s = this.radius * this.radius * Math.PI;
        return s;
    }
}

let circle = new Circle(1, 1, 2);

circle.move(3, 4);
console.log(circle.xPos);
console.log(circle.yPos);
console.log(circle.surface());