//Dates

let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

console.log(typeof myDate);

//let mycreateddate=new Date(2023 , 0 , 23)
//let mycreateddate=new Date(2023 , 0 , 23,5,3)
// let mycreateddate=new Date("2023-01-14")
let mycreateddate=new Date("01-14-2023")
//console.log(mycreateddate.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(mycreateddate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

//`${myDate.getDay()} and the time`

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));








