function MaxTwo(arr) {
    if(arr == null || arr.length <= 1){
        return 0;
    }
    var maxone = 0;
    var maxtwo = 0;
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > maxone) {
        maxone = arr[i];
      }
    }
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > maxtwo && arr[i] < maxone) {
        maxtwo = arr[i];
      }
    }
    return [maxone , maxtwo];
  }
  
  console.log(MaxTwo([1,56,6,89]));
  