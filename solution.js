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


function bestTeam(player1, player2) {
   // You have to write your code here
   if (typeof player1 === 'object' && typeof player2 === 'object') {
      let player1Score = player1.foul + player1.cardY + player1.cardR;
      let player2Score = player2.foul + player2.cardY + player2.cardR;

      if (player1Score > player2Score) {

         return player2.name;
      }
      else if (player1Score === player2Score) {
         return "Tie";
      }
      else {
         return player1.name;
      }
   } else {
      return "Invalid";
   }

}


function isSame(arr1, arr2) {
    // You have to write your code here
    let match = 0;

    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if (arr1.length === arr2.length) {
            for (let i = 0; i < arr1.length; i++) {

                if (arr1[i] === arr2[i]) {
                    match = true;

                }
                else {
                    match = false;
                    break;
                }

            }

            return match;


        } else {
            return false

        }

    } else {
        return "Invalid";
    }
}



function resultReport(marks) {
    // You have to write your code here
    if (Array.isArray(marks)) {
        let passCount = 0;
        let failCount = 0;
        let sum = 0;

        for (let i = 0; i < marks.length; i++) {

            if (marks[i] >= 40) {
                passCount = passCount + 1;

            } else {
                failCount = failCount + 1;
            }
            sum = sum + marks[i];

        }
        let totalScore = Math.round(sum / marks.length)

        return ({
            finalScore: isNaN(totalScore) ? 0 : totalScore,
            pass: passCount,
            fail: failCount
        });


    } else {
        return "Invalid"
    }


}






// verify

console.log(totalFine(200))
console.log(totalFine(0))
console.log(totalFine(50))
console.log(totalFine(552))
console.log(totalFine(-35))
console.log(totalFine("65"))
console.log(totalFine("Gorib tai ticket katinai"))

console.log(onlyCharacter("  h e llo wor   ld" ))
console.log(onlyCharacter("Cy   bar- At  tac k  " ))
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "))
console.log(onlyCharacter("Serv er : : Do wn" ))
console.log(onlyCharacter(["hack", "me"]))
console.log(onlyCharacter(true ))
console.log(onlyCharacter('10' ))


console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
   { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));
console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
   { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
   { name: "France", foul: 10, cardY: 2, cardR: 1 }));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France"));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, true));

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, []));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },));



console.log(isSame([1, 2, 3], [1, 2, 3]))
console.log(isSame([34, 5, 7, 9], [34, 5, 7]))
console.log(isSame([1, undefined, 3], [1, null, 3]))
console.log(isSame([1, 4, 5], [1, 4, 5]))
console.log(isSame([1, "4", 4], [1, 4, 4]))
console.log(isSame([2, 5, 6], 256))
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]))


console.log(resultReport([]))
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))
console.log(resultReport([99, 87, 67, 12, 87]))
console.log(resultReport([99]))
console.log(resultReport(100))