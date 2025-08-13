function totalFine( fare ) {
// You have to write your code here
 if(typeof fare !== "number" || fare <=0 ){

    let alertSms = "Invalid" ;
    return alertSms ;
    
 } 
 else {
    let farePercentage = fare * (20/100) ;
    const totalFine = fare + farePercentage  + 30;
    return totalFine ;
 }
}

let fare = 0;
console.log(totalFine(fare))

// Task 02

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

const str = true   ;
console.log(onlyCharacter(str));

// problem 03

function bestTeam( player1, player2 ) {
// You have to write your code here

if(typeof player1 !== "object" && player2 !== 'object' || player1 !== "string" && player2 !== 'string'){

    let alertSms = "Invalid" ;
    return alertSms ;
    
 } 
 else {
     let player1Score = player1.foul + player1.cardY + player1.cardR ;
     let player2Score = player2.foul + player2.cardY + player2.cardR ;

     if(player1Score > player2Score){

        return player1.name ;
     }
     else if(player1Score === player2Score){
            return "Tie" ;
     }
     else {
        return player2.name ;
     }
      
 }
}

let player1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 } ;
let player2 =  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 } ;

console.log(bestTeam([10],[10]));
