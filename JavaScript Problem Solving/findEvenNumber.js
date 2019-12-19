function findEvennumber(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2 === 0){
            console.log(arr[i], ' is a even Number');
        }
    }
}

var array = [3,5,6,4,8,7,0,1,2]
findEvennumber(array);