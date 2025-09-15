// const user={
//     name:'likith',
//     age:19,
//     welcomemessage: function(){
//         console.log(`${this.name},welcome to website`);
//         console.log(this);
//  }
// }
// user.welcomemessage()
// user.name="sam"
// user.welcomemessage()
// console.log(this)


/* this keyword works in object scope and not in function scope
example:
function chai(){
    let name="chai"
    console.log(this.name) // returns undefined
}
chai() */

//************************************************************ */

// const addtwo = (n1,n2) =>{
//     return n1+n2
// }

//const addtwo = (n1,n2) => n1+n2 //arrrow funcn simplified , returns automatically without return stmt
const addtwo = (n1,n2) => (n1+n2) // implicit return
console.log(addtwo(3,2))