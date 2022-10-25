let countDownBox = document.querySelector("#countDown")
let welcomeBox = document.querySelector("#welcome")
let daysBox = document.querySelector(".days > h2")
let hoursBox = document.querySelector(".hours > h2")
let minutesBox = document.querySelector(".minutes > h2")
let secondsBox = document.querySelector(".seconds > h2")

const TARGET = new Date("May 27, 2022 10:29:30 ")
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

// let now = new Date ()
// console.log(now)
// console.log(MINUTE,HOUR,DAY)

function countDown(){
    let now = new Date ()
    let difference = TARGET - now
    // console.log(difference)

    let days = Math.floor (difference/ DAY)
    // console.log(12 % 5)
    
     let hours = Math.floor (difference % DAY / HOUR)
    //  console.log( hours )

    let minutes = Math.floor(difference % HOUR / MINUTE )
    // console.log(minutes)

    let seconds = Math.floor (difference % MINUTE / SECOND)
    // console.log(seconds)

    
    if(difference > 0){
        handleTimer (days,hours,minutes,seconds)
    }else{
        clearInterval(handleCounter)
        countDownBox.remove()
        welcomeBox.classList.add("fadeInUp")
    }


}

function handleTimer(days,hours,minutes,seconds){
    daysBox.innerHTML =  String(days).padStart(3,0)
    hoursBox.innerHTML = String(hours).padStart(2,0)
    minutesBox.innerHTML = String(minutes).padStart(2,0)
    secondsBox.innerHTML = String(seconds).padStart(2,0)

}

let handleCounter = setInterval (countDown,1000)

/*let date = new Date("December 25 , 2022")
console.log(date.getMonth())*/