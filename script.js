const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// To det current date
const today = new Date();

const weekDays = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const allMonths = ['January','February','March','April','May','June','July','August','September','Octomber','November','December'];

// Used when date is less than 10
date.innerHTML = (today.getDate() < 10 ? '0':'') + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
