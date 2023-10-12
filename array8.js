let arr=[1,2,3,4,5,6]
let sum=0
let max=arr[0]
arr.forEach(function(a,i){
    sum+=a
    if(a>max){
       max=a
    }
})
    console.log(sum);
let avg = sum/arr.length
console.log(avg);
console.log(max);
