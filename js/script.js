
let container = document.getElementById("container")
// console.log(container)
fetch("https://isro.vercel.app/api/centres")
.then((response)=>response.json())
.then((data)=>{ 
  // data.map( (event) => {
    for(let i=0; i<data.centres.length; i++){

 let box = document.createElement("div")
 box.setAttribute("class", "box")
  box.innerHTML += 
  
    ` <div class="inbox">
     <div><span></span>${data.centres[i].id}</div> 
    <div><span>Name :</span> ${data.centres[i].name}</div>
    <div><span>Location :</span> ${data.centres[i].Place}</div>
    <div><span>State :</span>${data.centres[i].State}</div>
      </div>
    `
        container.append(box);
    }
  })
  