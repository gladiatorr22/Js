// promise is an OBJECT representing eventual failure or completion of an asynchronous operation

// creating a promise
const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task completed');
        resolve() // connects the resolve in new Promise to .then in promise consume
    },1000)
})
promiseone.then(function(){ // promise consume , .then is directly connected to resolve
    console.log('promise resolved');
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function() {
    console.log('promise 2 resolved');  
})


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'likith' , mail:'likith@gmail.com'})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
}
)

// chaining - returning something from above func to below func

const promisefour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({username:'likith' , mail:'likith@gmail.com'})
        } else {
            reject('ERROR : something went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username // returns user.username to below func -> chaining of promises
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error); // catch is directly associated with reject
}).finally(()=> console.log('promise is either resolved or rejected'));




const promisefive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({username:'Javascript' , pw:'1234'})
        } else {
            reject('ERROR : Js went wrong')
        }
    },1000)
})

// async function consumepromisefive() { // async await allows us to gracefully handle errors , here only when error= false the async await works and returns resolved , but when error= true it tells us to use catch so error is handled gracefully
//     const response = await promisefive
//     console.log(response);
// }
// consumepromisefive()

async function consumepromisefive() {
    try {
        const response =  await promisefive
        console.log(response);   
    } catch (error) { // whenever reject is executed , whatevers passed inside reject in promisefive will be passed to catch block inside async func
        console.log(error)
    }
}
consumepromisefive()

