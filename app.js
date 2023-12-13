(function showDate(){
    var currentDateINstance = new Date();
    document.getElementById("dateContainer").innerText = currentDateINstance.toDateString()
    
})()


    
//STRUCTURE: condition ? value_if_true : value_if_false;
 /*
 value_if_false: This is the value that is assigned to
   hours if the condition is false (i.e., if hours is 10
  or greater). In this case, it is simply hours itself. If 
 the condition is false, the expression after the : 
 is evaluated and assigned to the variable hours.
 */



var interval
let startBtn = document.querySelector(".start")
startBtn.addEventListener("click" , digitalClockStart)

let endBtn = document.querySelector(".end")
endBtn.addEventListener("click" , digitalClockEnd)

function digitalClockStart(){
    function currentTime(){
        var currentDate = new Date();
        var hours = currentDate.getHours()   // 0-23
        var minutes = currentDate.getMinutes() // 0-59
        var seconds = currentDate.getSeconds()  // 0-59
        var session = "AM"
        if(hours == 12){
            hours = 12
        }
        else if(hours>12){
            session = "PM"
            hours = hours - 12
        }
    
        hours = hours < 10 ? 0 + " " + hours : hours      // Ternary Operator //STRUCTURE: condition ? value_if_true : value_if_false;
        minutes = minutes < 10 ? 0 + " " + minutes : minutes
        seconds = seconds < 10 ? 0 + " " + seconds : seconds
        
        // if (hours < 10) {
        //     hours = "0" + hours;
        // } 
        // else if (minutes < 10) {
        //     minutes = "0" + minutes;
        // } 
        // else if (seconds < 10) {
        //     seconds = "0" + seconds;
        // }
    
        var currentTime = hours + " : " + minutes + " : " + seconds + " " + session
        document.getElementById("clockContainer").innerHTML = currentTime
        startBtn.disabled = true;
        endBtn.disabled = false;
    }
    currentTime()
    interval = setInterval(currentTime , 1000)
}
function digitalClockEnd(){
    clearInterval(interval);
    startBtn.disabled = false
    endBtn.disabled = true
}