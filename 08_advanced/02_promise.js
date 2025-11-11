async function getallusers(){
    try {
        const response =  await fetch("https://api.github.com/users/hiteshchoudhary")
        const data = await response.json() // converting response to json takes time so we use an await here
        console.log(data);
    } catch (error) {
        console.log('E:',error);
    }
}
getallusers()

// doing the same using chaining


fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch(()=>console.log('error occured')
)