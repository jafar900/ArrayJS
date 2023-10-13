let rows=5;
let star=1;
let string=""
for(let i=1 ; i<=rows; i++){
     let sValue =65+(i-1)
     let char = String.fromCharCode(sValue)
     for(let i=1; i<=star;i++){
        string =string + char;
     }
     star++
     string=string+"\n"
}
console.log(string)