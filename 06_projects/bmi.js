const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const height =  parseInt(document.querySelector('#height').value)
  const weight =  parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height == " " || isNaN(height) || height<0){
    results.innerHTML="enter a valid height in cm"
  }
  else if(height == " " || isNaN(height) || height<0){
    results.innerHTML="enter a valid height in cm"
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    if(bmi<18.6){
      results.innerHTML=`${bmi},under weight`
    }
    else if(bmi>=18.6 && bmi<=24.9){
      results.innerHTML=`${bmi},normal weight`
    }
    else{
      results.innerHTML=`${bmi},over weight`
    }
  }
})