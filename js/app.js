// make variables
var time = document.querySelector(".time .show");
var start = document.querySelector(".buttons button:nth-child(1)");
var stop = document.querySelector(".buttons button:nth-child(2)");
var reset = document.querySelector(".buttons button:nth-child(3)");
var list = document.querySelector("ul");
var int = null;
var isShowed = false;
var timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliSeconds: 0,
};

//make click event for start button
start.addEventListener("click", function () {
  //condition for clearing interval at the first
  if (int !== null) {
    clearInterval(int);
  }
  //flag for showing list
  isShowed = true;
  //start timer
  int = setInterval(displayTimer, 10);
})
// click event for stop button
stop.addEventListener("click", function () {
  //if flag is true show the list of stopping time
  if (isShowed == true) {
    list.style.display = "block";
    list.innerHTML += `<li>${paddingStart(timer.hours)} : ${paddingStart(timer.minutes)} : ${paddingStart(timer.seconds)} :${paddingStart(timer.milliSeconds)}</li>`;
  } else {
    list.style.display = "none";
  }

})

// click event for reset button
reset.addEventListener("click", function () {
  // reset all for new timer
  isShowed = false;
  clearInterval(int);
  time.innerHTML = `00 : 00 : 00 : 00 `;
  timer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliSeconds: 0,
  };
  list.style.display = "none";
  list.innerHTML = [];
})

// function for displaying timer
function displayTimer() {
  timer.milliSeconds += 1;
  if (timer.milliSeconds == 100) {
    timer.milliSeconds = 0;
    timer.seconds++;
    if (timer.seconds == 60) {
      timer.seconds = 0;
      timer.minutes++;
      if (timer.minutes == 60) {
        timer.minutes = 0;
        timer.hours++;
      }
    }
  }
  // make each part double digit
  var second = timer.seconds;
  var milliSecond = timer.milliSeconds;
  var minute = timer.minutes;
  var hour = timer.hours;
  if (timer.seconds < 10) {
    second = '0' + second;
  }; if (timer.minutes < 10) {
    minute = "0" + minute;
  }; if (timer.hours < 10) {
    hour = '0' + hour;
  }; if (timer.milliSeconds < 10) {
    milliSecond = "0" + milliSecond;
  }
  time.innerHTML = `${hour} : ${minute} : ${second} :${milliSecond}`;
}

// function for being in double digits with 0 in the list
function paddingStart(time) {
  return String(time).padStart(2 , "0");
}