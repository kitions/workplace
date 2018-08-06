// function greeter(person:string){
//     return "Hello," + person;
// }

// let user = '1';
// document.body.innerHTML = greeter(user)

// interface Person{
//     firstName:string;
//     lastName:string;
// }

// function greeter(person:Person){
//     return "Hello ," + person.firstName+'' +person.lastName;
// }
// let user = {firstName:"aaa",lastName:'bbb'}

// console.log(greeter(user))


// class Student {
//     fullName:string;
//     constructor(public firstName,public middleInitial,public lastName){
//         this.fullName = firstName +' '+middleInitial +' ' +lastName;
//     }∑
// }

// interface Person{
//     firstName:string;
//     lastName :string;
// }

// function greeter(person:Person){
//     return "hello " +person.firstName +' ' +person.lastName;
// }

// let user  = new Student('aaa','bbb','cccc');

// console.log(greeter(user))


function area(shape: string, width: number, height: number) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
 
document.body.innerHTML = area("rectangle", 30, 15);