let rows=3;
let star=1;
let spaces=rows-1;
let string="";

for(let i=1; i<=rows;i++){
    for(let j=0;j<=spaces;j++){
        string=string+" "
    }
    for(let k=1;k<=star;k++){
        string =string+"* "
    }

    star++
    spaces--
    string= string+"\n"
}
console.log(string)