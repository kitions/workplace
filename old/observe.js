var data = {name: 'kindeng'};
observe(data);
data.name = 'dmqssss'; // 哈哈哈，监听到值变化了 kindeng --> dmq

function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    // 取出所有属性遍历
    Object.keys(data).forEach(function(key) {
        console.log(data)
        console.log(key)
        console.log(data[key])
        defineReactive(data, key, data[key]);
    });
};
// function defineReactive(data, key, val) {
//     observe(val); // 监听子属性
//     Object.defineProperty(data, key, {
//         enumerable: true, // 可枚举
//         configurable: false, // 不能再define
//         get: function() {
//             return val;
//         },
//         set: function(newVal) {
//             console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
//             val = newVal;
//         }
//     });
// }

function defineReactive(data,key,val){
    var dep = new Dep();
    observe(val);
    Object.defineProperty(data,key,{
        set:function(newVal){
            if(val === newVal){
                return;
            }
            console.log('监听到值的变化',val ,"---->",newVal)
            val = newVal;
            dep.notify();
        }
    });
}

function Dep(){
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub){
        this.subs.push(sub);
    },
    notify: function(){
        this.subs.forEach(function(sub){
            sub.update()
        })
    }
}