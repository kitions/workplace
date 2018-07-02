// var arrString = 'abcdaabc';
// console.log(arrString.split(''))
// arrString.split('').reduce(function(res, cur) {
//     console.log(res)
//     console.log(cur)
//     res[cur] ? res[cur] ++ : res[cur] = 1
//     // console.log(res)
//     return res;
// }, {})

[1, 2].reduce(function(res, cur) { 
    console.log(res)
    console.log(cur)
    res[cur]=cur
    // res.push(cur + 1); 
    console.log(res)
    return res; 
}, {})