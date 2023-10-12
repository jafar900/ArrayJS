
let count=0
function largest(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]>35){
          count++
        }
    }
    return count
}
console.log(largest([22,39,45,72]));