function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > 0){
        sum = sum + arr[i];
        }
    }
    return sum;
  }
  console.log(positiveSum([4,-1,4,0,-6,8]))