function likes (names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {name} like this12312',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    console.log(templates[3])
    return templates[idx].replace(/{name}|{n}/g, function (val) {
        // console.log(val === '{name}' ? names.shift() : names.length)
        return val === '{name}' ? names.shift() : names.length;
    });
}

var s = likes (['sss','ddd','dddff','f'])
// console.log(s)