function resultReport( marks ) {
// You have to write your code here
    if(Array.isArray(marks)) {
        for(let i = 0; i<=marks.length; i++){
            if(marks[i]<=40){
                return marks;
            }
            else {
                return marks;
            }
        }
        
        
    } else {
        return "Invalid"
    }


}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87] ))