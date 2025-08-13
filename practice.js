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