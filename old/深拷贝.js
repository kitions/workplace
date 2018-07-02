function cloneDeep(obj){
    if(typeof obj !=='object' || Object.keys(obj).length===0){
        return obj;
    }
    let res = {}
    for(key in obj){
        if(typeof obj[key] == 'object' && Object.keys(obj[key].length >0)){
            res[key] = cloneDeep(obj[key])
        }else{
            res[key] = obj[key]
        }
    }
    return res
}
// function cloneDeep(obj){

//     if(typeof obj !== 'object' || Object.keys(obj).length === 0 ){
//         return obj;
//     }
//     let resultData = {};
//     return recurison(obj, resultData);
// }

// function recurison(obj, data = {}){
//     console.log(obj)
//     console.log(1)
//     for(key in obj){
//         if(typeof obj[key] == 'object' && Object.keys(obj[key].length > 0 )){
//             data[key] = recurison(obj[key]);
//         }else{
//             data[key] = obj[key];
//         }
//     }
//     return data;
// }

var o1 = {
    arr: [1, 2, 3],
    obj: {
        key: 'value'
    },
    func: function(){
        return 1;
    }
};

var o3 = cloneDeep(o1);
// console.log(o3===o1) 
// console.log(o3) 
// console.log(o1) 
