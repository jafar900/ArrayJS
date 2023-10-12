
function index(arr){
    let max = arr[0]
    let index=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
            index=i
        }
          }
          return index;
}
console.log(index([1,2,7,4,9,6,5,8,3,10]))