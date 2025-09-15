// const arr=['py','js','ruby','php']

// arr.forEach(function(value){
//    console.log(value)
// })

// arr.forEach( (val)=> {
//     console.log(val);  
// })

//-----------------------------------

// function printme(val){
//     console.log(val)
// }
// arr.forEach(printme)

// arr.forEach((val,key,arr)=>{
//     console.log(val,key,arr);
    
// })

//--------------------------------

const coding = [
    {
        lang:'javasript',
        ex:'js'
    } ,
    {
        lang:'java',
        ex:'java'
    },
    {
        lang:'python',
        ex:'py'
    },
]

coding.forEach((item)=>{
    console.log(item);
    
})

coding.forEach((item)=>{
    console.log(item.lang);
    
})

coding.forEach((item)=>{
    console.log(item.ex);
    
})