function stringReverse(param){
    return param.split('').reverse().join('');
}

console.log(stringReverse('kalanithi'));


function stringReverse2(param){
    var a = '';
    for(var i = param.length - 1; i >= 0; i--){
        a+= param[i];
    }
    return a;
}

console.log(stringReverse2('jack'));