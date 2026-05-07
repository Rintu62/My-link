// script.js

console.log("Website Loaded Successfully!");
// Share Button Function

function sharePage(){

  if(navigator.share){

    navigator.share({
      title: "My Website",
      text: "Check out my website!",
      url: window.location.href
    });

  }else{

    alert("Sharing not supported in this browser");

  }

}

// =========================
// TEXT CHANGER
// =========================

// const words = [
//   "Programmer",
//   "Creator",
//   "Freelancer",
//   "Web Developer",
//   "Designer"
// ];

// let index = 0;

// const changingText = document.getElementById("changing-text");

// function changeWord(){

//   changingText.textContent = words[index];

//   index++;

//   if(index >= words.length){
//     index = 0;
//   }

// }

// changeWord();

// setInterval(changeWord, 2000);



// TEXT CHANGER

const words = [
  "Programmer",
  "Creator",
  "Freelancer",
  "Web Developer"
];

let index = 0;

const changingText = document.getElementById("changing-text");

function changeWord() {

  changingText.textContent = words[index];

  index++;

  if(index >= words.length){
    index = 0;
  }

}

changeWord();

setInterval(changeWord, 2000);