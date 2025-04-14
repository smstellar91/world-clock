function updateTime() {

let londonElement = document.querySelector("#london");
let londonDateElement= londonElement.querySelector(".date");
let londoTimeElement= londonElement.querySelector(".time");
let londonTime=moment().tz("Europe/London");

londonDateElement.innerHTML=londonTime.format("MMMM Do YYYY");
londoTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");


let parisElement = document.querySelector("#paris");
let parisDateElement= parisElement.querySelector(".date");
let parisTimeElement= parisElement.querySelector(".time");
let parisTime=moment().tz("Europe/Parris");

parisDateElement.innerHTML=parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML=parisTime.format("h:mm:ss [<small>]A[</small>]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement= tokyoElement.querySelector(".date");
let tokyoTimeElement= tokyoElement.querySelector(".time");
let tokyoTime=moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML=tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML=tokyoTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);