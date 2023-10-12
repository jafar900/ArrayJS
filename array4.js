
let arr=[1,0,-1]
let n=arr.length
let pc=0
let nc=0
let z=0
for(let i=0;i<arr.length;i++){

   if(arr[i]>0){
    pc++
   }
   else if(arr[i]<0){
    nc++
   }
   else if(arr[i]==0){
    z++
   }
}

let pR=pc/n;
let pC=pc/n;
let pz=pc/n;

console.log(pR.toFixed(6),pC.toFixed(6),pz.toFixed(6));