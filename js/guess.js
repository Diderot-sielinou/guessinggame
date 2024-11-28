let display = document.querySelector("#display")
let btn = document.querySelector("#btn")

quessMumber = Math.floor(Math.random()* 100)
console.log(quessMumber)

btn.addEventListener("click",()=>{
  if(display.value !== ""){
    let number = parseInt(display.value);
    console.log(typeof number)
    if(number>quessMumber){
      alert("too high")
      display.value=""
    }else if(number<quessMumber){
      alert("to small")
      display.value=""
    }else{

      alert("good the guessing number is :" + quessMumber)
      display.value=""

    }
      
  }else{
    alert("enter a number plase")
  }
})