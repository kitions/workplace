// interface Shape{
//     name:string;
//     width:number;
//     height:number;
//     color?:string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function area(shape: Shape) {
//     var area = shape.width * shape.height;
//     return "I'm a " + shape.name + " with an area of111 " + area + " cm squared.";
// }
// document.body.innerHTML = area( {name: "rectangle", width: 30, height: 15 });
// var shape = {
//     name:'aaa',
//     popup:function(){
//         console.log('this is inside popup():' +this.name);
//     }
// }
var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = "pink";
    }
    ;
    Shape.prototype.shoutout = function () {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    };
    return Shape;
}());
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volume = length * _this.area;
        return _this;
    }
    ;
    Shape3D.prototype.shoutout = function () {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    };
    Shape3D.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
}(Shape));
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
