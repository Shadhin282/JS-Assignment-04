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

console.log(resultReport([]))
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))
console.log(resultReport([99, 87, 67, 12, 87]))
console.log(resultReport([99]))
console.log(resultReport(100))