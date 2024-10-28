// Ex 3 Date 

function addOneWeek (date) {

    var result = new Date(date);
    result.setDate(result.getDate() + 7);
    return result;
}

console.log(addOneWeek(new Date()))