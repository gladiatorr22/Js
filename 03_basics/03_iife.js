// immidiately invoked function expression (iife)

// we use iife to avoid global scope pollution

//syntax : (funcn defn)(execution);

(function chai(){
    // named iife
    console.log('chai')
}) ();

(()=>{
    //unnamed iife
    console.log('db connected')
}) ();

((name)=>{
    console.log(`db connected ${name}`)
}) ("likith");
