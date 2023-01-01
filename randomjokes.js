let body=document.getElementById('body');
let h1=document.createElement('h3');
h1.innerText="Chuck Norris Random - Jokes";
h1.style.backgroundColor="skyblue";
h1.style.padding='4px'
let div=document.createElement('div')
div.setAttribute('class','outer')

let div2=document.createElement('div')
div2.setAttribute('class','inner')

let p1=document.createElement('p')
let nxtBtn=document.createElement('button')
nxtBtn.innerText="JOKES"

div.appendChild(div2)
div2.appendChild(p1)
div2.appendChild(nxtBtn)
body.append(h1,div)


nxtBtn.addEventListener("click",async ()=>{
  try {
    const resp=await fetch(`https://api.chucknorris.io/jokes/random`)
    const data=await resp.json()
    p1.innerText=`${data.value}`
  } catch (error) {
    console.log(error);
  }

})

