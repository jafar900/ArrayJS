let arr=[1,3,5,6]
let k=2

let correctindex=0
for(let i=0;i<arr.length;i++){
    
    if(arr[i]>=k){
        correctindex =i;
        break;
    }
}
console.log(correctindex);