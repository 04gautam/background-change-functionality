const dark = document.querySelectorAll(".button")
const light = document.getElementById("light")
const mybody = document.getElementById("body")


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