function long(arr){
    let lengtth = arr[0].length ;
    for (let i = 0; i <arr.length; i++){
        if(arr[i].length > lengtth){
            lengtth = arr[i]
        }
    }
    return lengtth;
}
console.log(long(["alo" , "banana" , "kiwi" , "doraa"]))