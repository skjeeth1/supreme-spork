const dateCont = document.querySelector(".date");
const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec"); 
const noon = document.querySelector("#noon");

const timeCont = document.querySelector(".clock");
const day = document.querySelector("#day");
const date = document.querySelector("#date");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

days = {
    1: "MON", 
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
    0: "SUN"
}

setInterval(() => {
    let currentTime = new Date();
    // let currentTime = new Date(new Date().toLocaleString("en-US", {timeZone: "-1130"}));
    
    hrs.textContent = ((currentTime.getHours() % 12 < 10) && (currentTime.getHours() % 12 != 0) ? "0" : "") + 
        String((currentTime.getHours() % 12) === 0 ? 12 : currentTime.getHours() % 12);
    min.textContent = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.textContent = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    noon.textContent = currentTime.getHours() < 12 ? "AM" : "PM";
    
    day.textContent = days[currentTime.getDay()];
    date.textContent = currentTime.getDate();
    month.textContent = currentTime.getMonth() + 1;
    year.textContent = currentTime.getFullYear();

}, 1000);
