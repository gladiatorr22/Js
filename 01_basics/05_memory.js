// stack => primitives
// heap => reference / non-primitives

// let name = "likith" //stack
// let name2 = name //stack
// name2 = "hchc" //stack
// console.log(name) //likith
// console.log(name2) 

let user = {
    name: "likith",
    age: 22
}
console.log(user) 
let user_2 = user // both user and user2 point to same object in heap
user_2.name = "raj"
console.log(user_2)
console.log(user)