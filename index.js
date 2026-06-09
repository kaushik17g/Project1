let h1 =document.querySelector("h1");
let submit = document.querySelector("input[type='button']");
let progress = document.querySelector(".progress");
let percentage =document.querySelector(".percentage");
let cancel =document.createElement("button");


submit.addEventListener("click", function(){
    submit.disabled = true;
    if(percentage.textContent !== "100%") {
        submit.value = "Downloading...";
    }
    else if(percentage.textContent == "100%") submit.value = "Downloaded";

    let count = 0;
setInterval(function(){
    if (count < 100){
        count++;
        progress.style.width = `${count}%`;
        percentage.textContent = `${count}%`;
        cancel.setAttribute("class", "cancel"); 
    }  
    else clearInterval();  
    },100)      
});



