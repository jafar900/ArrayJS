let rows=5;
let spaces=rows-1;
let star=1;
let string="";


for(let i=1;i<=Math.floor((rows/2)+1);i++){
    for(let j=1;j<=spaces;j++){
        string=string+" "
    }
    for(let j=1;j<=star;j++){
        string=string+"* "
    }
    spaces=spaces-2
    star=star+2
    string=string+"\n"
}

star =rows -2 ;
spaces =2 ;
for(let i=1; i<=Math.floor(rows/2);i++){
    for(j=1;j<=spaces;j++){
        string =string +" "
    }
    for(let j=1; j<=star;j++){
        string=string+"* "
    }
    spaces=spaces+2;
    star=star-2;
    string=string+"\n"

}
console.log(string);