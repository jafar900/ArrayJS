
let arr=[10,1,5,9,8,3,10]
let k=10;

for(let i=arr.length-1;i>0;i--){
    if(arr[i]==k){
        console.log(i);
        break;
    }
}