// interface Shape{
//     name:string;
//     width:number;
//     height:number;
//     color?:string;
// }


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

class Shape {
 
    area: number;
    color: string;


    constructor (public  name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };
 
    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}
 

class Shape3D extends Shape {
 
    volume: number;
 
    constructor ( public name: string, width: number, height: number, length: number ) {
        super( name, width, height );
        this.volume = length * this.area;
    };
 
    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }
 
    superShout() {
        return super.shoutout();
    }
}
 
var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );