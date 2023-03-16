"use strict";

const greetings = document.getElementById("greetings");
const weekday = document.getElementById("weekday");
const currentTime = document.getElementById("current_time");
const newYear = document.getElementById("new_year");

const timer = () => {
  const today = new Date();
  const hour = today.getHours();

  if (hour >= 6 && hour < 12) {
    greetings.innerHTML = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    greetings.innerHTML = "Good afternoon!";
  } else {
    greetings.innerHTML = "Good evening!";
  }

  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });
  weekday.innerHTML = "Todays is:" + dayOfWeek;

  const formattedTime = today.toLocaleTimeString("en-US");
  currentTime.innerHTML = "Current time: " + formattedTime;

  const newYearDate = new Date(today.getFullYear() + 1, 0, 1);
  const timeRemaining = newYearDate - today;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  const formattedCountdown = `${days}d`;
  newYear.innerHTML =
    "Time remaining until New Year's Eve: " + formattedCountdown;
};

timer();

setInterval(timer, 1000);
