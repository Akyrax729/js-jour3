// Ex 2 Date 

function isValidDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const day = date.getDate();
    if (month < 10){
        "0"+month
    }
    if (day < 10){
        "0"+day
    }
    compare = year+"-"+month+"-"+day
    return compare
    if (compare === dateString) {
        return true
    }
    return false
}

console.log(isValidDate("2023-02-03"))
