// Ex 1 Date 

function calculateAge (birthDate) {
    const now = new Date();
    const date = new Date(birthDate);
    let diff = now.getTime() - date.getTime();
    return Math.floor(diff / (1000*60*60*24*365)) + " ans"
}

console.log(calculateAge('1996-04-07'))