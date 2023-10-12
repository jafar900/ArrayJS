
let arr1=[1,2,10]
let arr2=[3,4,1]
let sum=0
arr1.forEach(function(a){
sum+=a
})
let sum1=0
arr2.forEach(function(a){
    sum1+=a
    })

    if(sum1>sum){
        console.log("sum1 is largest")
    }else{
        console.log("sum is largest")
    }