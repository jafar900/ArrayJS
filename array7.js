
let arr=[2,4,3,5,6]
let k=1
let index=0
let flag=false

arr.forEach(function(a,i){
    if(a==k){
      console.log(i+1);
      flag=true
     }
     
})
if(flag==false){
    console.log(-1);
}