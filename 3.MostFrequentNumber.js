function MostFrequentNumber(arr){

    let  mostFrequent = 1;
    let count =0;
    let newArr ;

    for(let i=0;i<arr.length;i++){

        for(let j =i;j<arr.length;j++){
            if(arr[i] == arr[j]){
                count++;
            }
            if(mostFrequent < count){
                mostFrequent = count;
                newArr = arr[i];
            }
        }
        count = 0;
    }

    return newArr;
}

let arr =  [3, 5, 2, 5, 3, 3, 1, 4, 5];

let result = MostFrequentNumber(arr)

console.log(result);