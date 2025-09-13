// const mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleString())

let mydate =  new Date(2025,8,13)
// console.log(mydate.toDateString());

let mytimestamp =  Date.now()
// console.log(mytimestamp);
// console.log(mydate.getTime());

// console.log(Math.floor(mytimestamp/1000));
// mydate2= new Date()
// console.log(mydate2.getDay())

let day=mydate.toLocaleString('default',{weekday:"long"})
console.log(day)