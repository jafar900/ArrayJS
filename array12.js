//let arr=[9,1,2,8,7]
let arr=[16,24,89,35]
let max=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]-arr[i]>max){
             max = arr[j]-arr[i]
        }
    }
}

console.log(max)