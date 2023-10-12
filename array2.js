
let arr=[1,2];
let shortDistance=Number.MAX_VALUE
let flag=false;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        
        if(arr[i]%2==0 && arr[j]%2==0 && arr[i]>0 && arr[j]>0){
           flag=true
           let distance = Math.abs(i-j)
           if(distance<shortDistance){
                shortDistance=distance
           }

        }
    }
}

if(flag==false){
    console.log("-1");
}else{
    console.log(shortDistance);
}
