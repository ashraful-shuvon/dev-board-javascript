const date = new Date();

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weekday = weekdays[date.getDay()];
const month = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();

const dateText = `${month} ${day} ${year}`;

const currentDateDiv = document.getElementById("currentDate");

const textDiv = document.createElement("div");

const p = document.createElement("p");
p.textContent = `${weekday} ,`;

const h1 = document.createElement("h1");
h1.innerHTML = `${dateText}`;

// Tailwind classes
p.className = "text-lg";
h1.className = "text-lg font-bold";

textDiv.append(p, h1);
currentDateDiv.appendChild(textDiv);
