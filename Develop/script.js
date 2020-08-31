//Implementing moment.js
let time = moment().format("MMMM Do YYYY, h:mm:ss a");
let timeContainer = document.getElementById("currentDay");
let currentTime = moment().format("HH");

setInterval(() => {
    let now = moment();
    let formatTime = now.format("MMMM Do YYYY, h:mm:ss a");

    timeContainer.textContent = formatTime
}, 1000);

//Save input to localstorage
let saveBtn = document.querySelectorAll("button");
let inputText = document.getElementsByClassName("input");


//Retrieve notes from all times
 document.getElementById("9").textContent = JSON.parse(localStorage.getItem(["\"9\""]));
 document.getElementById("10").textContent = JSON.parse(localStorage.getItem(["\"10\""]));
 document.getElementById("11").textContent = JSON.parse(localStorage.getItem(["\"11\""]));
 document.getElementById("12").textContent = JSON.parse(localStorage.getItem(["\"12\""]));
 document.getElementById("13").textContent = JSON.parse(localStorage.getItem(["\"13\""]));
 document.getElementById("14").textContent = JSON.parse(localStorage.getItem(["\"14\""]));
 document.getElementById("15").textContent = JSON.parse(localStorage.getItem(["\"15\""]));
 document.getElementById("16").textContent = JSON.parse(localStorage.getItem(["\"16\""]));
 document.getElementById("17").textContent = JSON.parse(localStorage.getItem(["\"17\""]));


//Save notes to local Storage
for(let i = 0; i < saveBtn.length; i++) {

    saveBtn[i].addEventListener("click", () => {

    localStorage.setItem( JSON.stringify(inputText[i].id), JSON.stringify(inputText[i].value));

    console.log("note Saved");

    });
}


//functions for time block coloring
for(let t = 0; t < inputText.length; t++) {
    
    let timeHour = inputText[t].id;

    if (timeHour === currentTime) {

        inputText[t].classList.add("present");

    } else if (timeHour <= currentTime) {

        inputText[t].classList.add("past");
        
    } else if (timeHour >= currentTime) {

        inputText[t].classList.add("future");
        
    }
    


}
