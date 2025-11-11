function add(num1,num2){
    return num1+num2
}
let res = add(3,5)
console.log(res)

//----------------------------------------------------

function user(username){
    if(!username){
        console.log("enter a valid username")
        return
    }
    return `${username} just logged in`
}
console.log(user('likith'))

//-----------------------------------------------------

function cart(...num1){ // rest operator ...
    return num1
}
console.log(cart(200,300,400))

//------------------------------------------------------------

const newobj={
    name:'book',
    price:399
}

function bill(getobj){ // passing object as parameter
    return getobj
}
console.log(bill(newobj));

//-----------------------------------------------------

const arr=[200,300,400]

function newarr(getarr){
    return getarr[1]
}
console.log(newarr(arr));




