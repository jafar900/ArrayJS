let rows=5;
let star=1;
let spaces=rows-1;
let string=""

for(let i=1;i<=Math.floor((rows/2)+1);i++){
    for(let j=1;j<=spaces;j++){
        string=string+" "
    }
    for(let k=1;k<=star;k++){
        string=string+"* "
    }
    spaces=spaces-2;
     star=star+2;
    string=string+"\n"
    
}
star=rows-1;
spaces=2
for(let i=1;i<=Math.floor(rows/2);i++){
    for(let j=1;j<=spaces ;j++){
        string=string+" "

    }
    for(let k=1;k<=star;k++){
        string=string+'* '
    }
    spaces=spaces-2;
     star=star+2;
    string=string+"\n"
}


console.log(string);