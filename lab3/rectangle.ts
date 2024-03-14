export class Point {
    x:number;
    y:number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    move(x:number,y:number){
        this.x+=x;
        this.y+=y;
    }
}

export class Rectangle{
    points: Array<Point>;

    constructor(...points: Array<Point>) {
        this.points=new Array<Point>()
        points.map((p)=> {this.points.push(p)} )
    }

    move(x:number,y:number){
        this.points.map((p)=>{p.move(x,y)})
    }

    getArea(): number {
        // Find the minimum and maximum x and y coordinates
        const minX = Math.min(this.points[0].x,this.points[1].x, this.points[2].x, this.points[3].x);
        const minY = Math.min(this.points[0].y,this.points[1].y, this.points[2].y, this.points[3].y);
        const maxX = Math.max(this.points[0].x, this.points[1].x, this.points[2].x,this.points[3].x);
        const maxY = Math.max(this.points[0].y, this.points[1].y, this.points[2].y, this.points[3].y);

        // Calculate width and height based on the difference between maximum and minimum coordinates
        const width = maxX - minX;
        const height = maxY - minY;

        // Calculate and return the area
        return width * height;
    }
}

let p1: Point=new Point(0,0);
let p2: Point=new Point(0,2);
let p3: Point=new Point(2,0);
let p4: Point=new Point(2,2);

let rec: Rectangle=new Rectangle(p2,p3,p1,p4);

console.log(rec.points)
console.log(rec.getArea())

rec.move(1,1)

console.log(rec.points)
console.log(rec.getArea())