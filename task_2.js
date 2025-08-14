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