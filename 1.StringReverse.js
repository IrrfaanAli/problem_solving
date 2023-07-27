function StringReverse(str){
let len = str.length;
let answer = "";

for(let i=len-1 ;i >= 0;i--){
   answer+=str[i];  
}
 return answer;
}

let solved = StringReverse("hello world")

console.log(solved);