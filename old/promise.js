// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });

// promise.then(function() {
//   console.log('resolved.');
// });

// console.log('Hi!');

// let promise2 = new Promise(function (resolve,reject){
//     console.log('aaa')
// })


// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(new Error('failed')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// var x;



const someAsynsThing = function (){
  return new Promise (function(resolve,reject){
    resolve(x+2);
  })
}

someAsynsThing().then(function(){
  console.log("everything is great")


})

setTimeout(() =>{console.log(123)},2000)

//上面代码中，someAsyncThing函数产生的 Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示ReferenceError: x is not defined，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。