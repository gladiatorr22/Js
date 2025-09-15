const numbers= [1,2,3,4,5,6,7,8,9]

// let newnum=numbers.map((num)=>num+10)
// console.log(newnum);

let newnum = numbers.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newnum);


const mynum=[1,2,3]
let total = mynum.reduce((acc,currval) => acc+currval , 0)
console.log(total);

// acc=accumalator , initial value is set to 0 

total = mynum.reduce ((acc,currval)=>{
    console.log(`acc:${acc} & currval:${currval}`);
    return acc+currval //explicit return
 },0 /*set accumalator value*/)
 console.log(total);


 const shoppingcart =[
    {
        name:'js-course',
        price:999
    },
     {
        name:'java-course',
        price:1999
    },
     {
        name:'.net-course',
        price:2999
    },
     {
        name:'react-course',
        price:1999
    },
 ]

 // let cart_total=shoppingcart.reduce((acc,currval)=>currval.price+acc,0) 
 let cart_total=shoppingcart.reduce((acc,currval)=>{
    return currval.price+acc
 },0)
 console.log(cart_total);
 


 