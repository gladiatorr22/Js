const accountId = 144553
let accountemail = "likith@gmail.com"
var accountpassword = "12345"
accountcity = "bangalore"

//accountId = 2 // we cannot change the value of const variable

accountemail = "hchc@gmail.com"
accountpassword = "67890"
accountcity = "mumbai"

/*
preferred not ot use var
because of issue in its block and function scope
*/

console.log(accountId)

console.table([accountemail, accountpassword, accountcity])