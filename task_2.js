// Problem 02

function onlyCharacter( str ) {
// You have to write your code here
if(typeof str !== "string" || str === Boolean ){

    let alertSms = "Invalid" ;
    return alertSms ;
    
 } 
 else {
    let strSplit = str.split(' ');
    let strJoin = strSplit.join('')
    let upperLetter = strJoin.toUpperCase() ;
    return upperLetter ;
 }
} 

console.log(onlyCharacter("  h e llo wor   ld" ))
console.log(onlyCharacter("Cy   bar- At  tac k  " ))
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "))
console.log(onlyCharacter("Serv er : : Do wn" ))
console.log(onlyCharacter(["hack", "me"]))
console.log(onlyCharacter(true ))
console.log(onlyCharacter('10' ))