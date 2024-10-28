// Date 

const now = new Date()
const date = new Date("1996, 04, 07 11:50:32")
const year = date.getFullYear() ;
const month = date.getMonth() ;
const day = date.getDate() ;
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const time = date.getTime();

const formatdate = date.toLocaleDateString('fr-FR', {year :"numeric", month :"long", weekday: "long", day :"numeric"});
const formattime = date.toLocaleTimeString();
const formatdatetime = date.toLocaleString();

// console.log(now)
// console.log(date)
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hour)
// console.log(min)
// console.log(sec)
// console.log(time)

console.log(formatdate)
console.log(formattime)
console.log(formatdatetime)