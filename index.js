// console.log('alarm');
// const alarmSubmit=document.getElementById('alarmSubmit');
// alarmSubmit.addEventListener('click',setAlarm);
// var audio=new Audio('Morning Alarm.mp3');
// function ringBell(){
// audio.play();
// }
// function setAlarm(e){
//     e.preventDefault();
//     let alarmValue=document.getElementById('alarm');
//     let newDate=new Date(alarmValue);
//     console.log('running');
//     let now=new Date();
//     let alarmTime=newDate-now;
//     if(alarmTime>0){
//         setTimeout(() => {
//             console.log('settimeout running');
//             ringBell();
//         }, alarmTime);
//     }
// }

console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('tone.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}
