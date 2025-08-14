// Problem 01

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

console.log(totalFine(200))
console.log(totalFine(0))
console.log(totalFine(50))
console.log(totalFine(552))
console.log(totalFine(-35))
console.log(totalFine("65"))
console.log(totalFine("Gorib tai ticket katinai"))