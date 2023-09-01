// var p = document.getElementById("para");
// function change() {
//   console.log("hello");
//   console.log(para);
// }
// var para = document.getElementsByTagName("p");
// var a = [1, 2, 3, 4, 5, 6, 7, 8];
// a[3] = 90;
// console.log(a[3]);
// console.log(para);

// console.log(para[0].innerText);
// var p = document.getElementById("para");
// function change() {
//   console.log("hello");
//   para.innerHTML = "hello";
//   console.log(para.innerHTML);
//   para.innerHTML += "hello world";
//   para.innerHTML =
//   '<p id="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, fugit.</p>';
//   console.log(para.innerHTML);
//   para.style.backgroundColor = "red";
//   para.style.Color = "silver";
//   para.style.fontWeight = "bold";
//   para.style.fontSize = "32px";
//   className = "";
// }

// setInterval(function () {
//     console.log("hello")
// }, 1000);
//==geting dom element==//
var ms = document.getElementById("ms");
var mint = document.getElementById("mins");
var sec = document.getElementById("sec");
var btn = document.getElementById("btn");

var minutes = 0;
var miliseconds = 0;
var seconds = 0;
var interval;

function startTimer() {
  interval = setInterval(startStopWatch, 10);
}

function startStopWatch() {
  btn.disabled = true;
  miliseconds++;
  ms.innerHTML = miliseconds;
  if (miliseconds === 100) {
    miliseconds = 0;
    seconds++;
    sec.innerHTML = seconds;
    //   console.log(miliseconds);
  } else if (seconds === 59) {
    seconds = 0;
    minutes++;
    mins.innerHTML = minutes;
  }
}
function stopTimer() {
  clearInterval(interval);
  btn.disabled = false;
}
function resetTimer() {
  stopTimer(interval);
  minutes = 0;
  miliseconds = 0;
  seconds = 0;
  mins.innerHTML = minutes;
  sec.innerHTML = seconds;
  ms.innerHTML = miliseconds;
}
