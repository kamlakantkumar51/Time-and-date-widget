let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondContainer = document.querySelector(".seconds");

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateClock() {
    const today = new Date();

    // Date information
    let date = today.getDate();
    let day = weekDays[today.getDay()];
    let month = monthNames[today.getMonth()];

    // Time information
    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    // Update date container
    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;

    // Update time containers
    hoursContainer.textContent = hours;
    minutesContainer.textContent = minutes;
    secondContainer.textContent = seconds;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
