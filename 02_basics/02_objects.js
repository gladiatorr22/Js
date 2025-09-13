// //object literals
// const mysym=Symbol("key1")
// const jsuser ={
//     name:"likith",
//     [mysym] : "key1",
//     age:22,
//     loc:"blr",
//     isloggedin:false

// }

// // console.log(jsuser["age"])
// // console.log(jsuser[mysym])
// // console.log(typeof(mysym))

// jsuser.greeting =  function() {
//     console.log(`hello user ${this.name}`);  
// }

// console.log(jsuser.greeting())


// ***********************************************************************************************88

// singleton => const tinder = new Object()
// non-singleton => const tinder ={}

// const tinderuser={}
// tinderuser.name = "likith"
// tinderuser.age=22
// tinderuser.isactive=true
// console.log(Object.values(tinderuser))
// console.log(Object.keys(tinderuser))
// console.log(tinderuser)

// const regularuser={
//     email:"some@gmail.com",
//     userfullname:{
//         fullname:{
//             firstname:'likith',
//             lastname:'raj'
//         }
//     }
// }
// console.log(regularuser.userfullname.fullname.lastname)

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'a',4:'b'}

//const obj3={obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}

console.log(obj4)


