function stringReverse(param){
    return param.split('').reverse().join('');
}

console.log(stringReverse('kalanithi'));


function stringReverse2(param){
    var a = param.split('');
    for(var i=0;i<a.length;i++){
        var b = a[i];
        a[i].splice(0,1);
        a[a.length+1].push(b);
    }
    return a.join('');
}

console.log(stringReverse2('tenet'));