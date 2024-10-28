// Ex 2 Date 

function isValidDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDate();
    if (month < 10){
        month = "0"+month
    }
    if (day < 10){
        day = "0"+day
    }
    compare = year+"-"+month+"-"+day
    if (compare === dateString) {
        return true
    }
    return false
}

console.log(isValidDate("2023-02-29"))
