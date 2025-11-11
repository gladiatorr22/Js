const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if (e.target.id==='grey'){ 
      body.style.backgroundColor = e.target.id 
    }
    if (e.target.id==='white'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id==='blue'){
      body.style.backgroundColor = e.target.id 
    }
    if (e.target.id==='yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})

/* The e in the addEventListener function represents the event object, 
which contains information about the event that occurred. 
The target property of this event object points to the element on which the event was dispatched*/