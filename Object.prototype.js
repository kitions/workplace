
// function getDataType(data){  
//     var getType=Object.prototype.toString;  
//     var myType=getType.call(data);//调用call方法判断类型，结果返回形如[object Function]  
//     var typeName=myType.slice(8,-1);//[object Function],即取除了“[object ”的字符串。  
//     var copyData='';//复制后的数据  
//     console.log(data+" is "+typeName);  
//     return copyData;  
// }   
// getDataType(123);  
// getDataType("123");  
// getDataType(null);  
// getDataType(undefined);  
// getDataType(false);  
// getDataType([1,2,4]);  
// getDataType({"name":"wc"});  
// getDataType(function(){alert(23);});  

// 123 is Number
// 123 is String
// null is Null
// undefined is Undefined
// false is Boolean
// 1,2,4 is Array
// [object Object] is Object
// function (){alert(23);} is Function

// console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
var reg = /[hbc]at/gi;
;//”[object Array]”
console.log(Object.prototype.toString.call(reg))
