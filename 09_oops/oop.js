// object literals
// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         //console.log(this);

//     }
//}
// console.log(user.username)
// console.log(user.getUserDetails());


// constructor function
function user(username,logincount,isloggedin){
    this.username=username
    this.logincount=logincount
    this.isloggedin=true
    this.greetings = () => {
        console.log(`welcome ${this.username}`);
    }

    return this //-> it implicitly returns , explicit return not necessary
}
// const userone = user('likith',12,true)
// const usertwo = user('hitesh',8,false) // ovverwrites userone , therfore we use new keyword
const userone = new user('likith',12,true)
const usertwo = new user('hitesh',8,false)
console.log(userone);
console.log(usertwo);

// 1. whenevr we use new keyword , an empty objeect gets created , which we refer to as instance
// 2. a constructor func is called becuasse of new keyword 
// 3. this keyword injects all the arguments of constructor func
// 4. these arguments can now be accessed inside func


