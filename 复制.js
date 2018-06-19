function a(source){
    if(!source || typeof source!= "object"){
        throw new Error('error');
    }
    var targetObj = source.constructor ==='Array' ? [] : {};
    for(var keys in source){
        if(source.hasOwnPropety(keys)){
            targetObj[keys] = source[keys]
        }
    }
    return targetObj
}