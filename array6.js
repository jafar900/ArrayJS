
let arr=[4,6,4]
let k=10
let count=0
for(let i=1 ; i<arr.length;i++){
     if(arr[i]+arr[i-1] == k){
        count++
     }
}
console.log(count);