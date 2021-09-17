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

function randomNumber() {
    
    let r = 1 + Math.floor(Math.random() * 100);
    return r;
} 

let n = 1000;

let rectangles = [];
for (let i = 0; i < n; i++) {
    
    let rectangle = new Rectangle(randomNumber(), randomNumber(), randomNumber(), randomNumber());
    rectangles.push(rectangle);

}

for (let i = 0; i < (n - 1); i++) {
    
    for (let j = i + 1; j < n; j++) {
        
        let rectangle1 = rectangles[i];
        let rectangle2 = rectangles[j];
        
        if (rectangle1.collides(rectangle2)){
            console.log(i, rectangle1, j, rectangle2);
        }
    }

}


