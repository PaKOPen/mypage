let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=> {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);


const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(para =>{
    if(para.innerText.includes('success')){
        para.classList.add('success')
    };
    if(para.innerText.includes('error')){
        para.classList.add('error')
    };
    console.log(para);
    
})