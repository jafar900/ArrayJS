let rows=5;
let star=1;
let string=""

for(let i=1; i<=rows;i++){
    for(j=1;j<=star;j++){
        string=string+"*"
    }
    star++;
    string += "\n";
}
console.log(string);