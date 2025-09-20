const randomcolor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i=0 ; i<6 ; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

let stop
const startchangingcolor = function(){
  if (!stop){
    stop = setInterval(changebodycolor,1000)
  }
  function changebodycolor(){ 
  document.querySelector('body').style.backgroundColor = randomcolor()}
}

const stopchaningcolor = function(){
  clearInterval(stop)
  stop=null
}

document.querySelector('#stop').addEventListener('click',stopchaningcolor)
document.querySelector('#start').addEventListener('click',startchangingcolor)

