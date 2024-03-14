"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        var points = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            points[_i] = arguments[_i];
        }
        var _this = this;
        this.points = new Array();
        points.map(function (p) { _this.points.push(p); });
    }
    Rectangle.prototype.move = function (x, y) {
        this.points.map(function (p) { p.move(x, y); });
    };
    Rectangle.prototype.getArea = function () {
        // Find the minimum and maximum x and y coordinates
        var minX = Math.min(this.points[0].x, this.points[1].x, this.points[2].x, this.points[3].x);
        var minY = Math.min(this.points[0].y, this.points[1].y, this.points[2].y, this.points[3].y);
        var maxX = Math.max(this.points[0].x, this.points[1].x, this.points[2].x, this.points[3].x);
        var maxY = Math.max(this.points[0].y, this.points[1].y, this.points[2].y, this.points[3].y);
        // Calculate width and height based on the difference between maximum and minimum coordinates
        var width = maxX - minX;
        var height = maxY - minY;
        // Calculate and return the area
        return width * height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var p1 = new Point(0, 0);
var p2 = new Point(0, 2);
var p3 = new Point(2, 0);
var p4 = new Point(2, 2);
var rec = new Rectangle(p2, p3, p1, p4);
console.log(rec.points);
console.log(rec.getArea());
rec.move(1, 1);
console.log(rec.points);
console.log(rec.getArea());
