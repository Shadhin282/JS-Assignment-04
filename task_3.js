// Problem 03


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



