const dark = document.querySelectorAll(".button") // we use querySelectorAll to select all the buttons on html
const light = document.getElementById("light")
const mybody = document.getElementById("body")

// inside dark variable there are a node list of all buttons whose class name is button
// then we are useing foreach loop to get the access of every clicked button 
dark.forEach((ele)=>{
  ele.addEventListener("click", ()=>{
   const bodyColor = ele.id
  mybody.style.backgroundColor = bodyColor;

  if(mybody.style.backgroundColor === "white"){

    mybody.style.color = 'black';
  }else{
    
    mybody.style.color = 'white';
  }
  
  })
})

// dark.addEventListener("click", (e)=>{
//   const buttonColor = e.target.innerText;
// console.log(buttonColor)
//   // body.style.backgroundColor = buttonColor;

// })

// light.addEventListener("click", ()=>{
//   body.style.backgroundColor = "white"
//    body.style.color = "black"
// })
