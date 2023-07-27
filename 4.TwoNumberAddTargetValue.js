 function TwoNumberAddTargetValue (arr,target){
 
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
  
    while (leftIndex < rightIndex) {
      const sum = arr[leftIndex] + arr[rightIndex];
  
      if (sum === target) {
        return [leftIndex,rightIndex];
      } else if (sum < target) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
  
    return []; 
  

 }

 let arr = [1, 3, 6, 8, 11, 15];
 let targetValue = 9;

 let result = TwoNumberAddTargetValue(arr,targetValue)

 console.log(result);