class Rectangle {
    constructor(x, y, w, l) {
        
        this.xPos = x;
        this.yPos = y;
        this.width = w;
        this.length = l;

    }

    collides(other) {
    
        let result = (this.xPos < (other.xPos + other.length) && (this.xPos + this.length) > other.xPos
        && this.yPos < (other.yPos + other.width) && (this.yPos+ this.length) > other.yPos);
        
        return result;
    } 
}
    
let rectangle = new Rectangle(8, 4, 5, 10);
let rectangle2 = new Rectangle(10, 6, 8, 12);//true //(4, 2, 2, 5) = false
console.log(rectangle.collides(rectangle2));