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

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[today.getDay()];
  weekday.innerHTML = "Todays is:" + dayOfWeek;

  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");
  const formattedTime = `${hour}:${minutes}:${seconds}`;
  currentTime.innerHTML = "Current time: " + formattedTime;

  const newYearDate = new Date(today.getFullYear() + 1, 0, 1);
  const timeRemaining = newYearDate - today;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesRemaining = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  const formattedCountdown = `${days}d ${hours}h ${minutesRemaining}m ${secondsRemaining}s`;
  newYear.innerHTML =
    "Time remaining until New Year's Eve: " + formattedCountdown;
};

setInterval(timer, 1000);
