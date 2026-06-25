const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const game = document.getElementById("game");
const time = document.getElementById("time");
const players = document.getElementById("players");
const age = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const gameError = document.getElementById("gameError");
const timeError = document.getElementById("timeError");
const playersError = document.getElementById("playersError");
const ageError = document.getElementById("ageError");

function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  gameError.textContent = "";
  timeError.textContent = "";
  playersError.textContent = "";
  ageError.textContent = "";

  formMessage.textContent = "";
  formMessage.className = "form-message";
}

function isValidEmail(emailValue) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailValue);
}

function setError(element, message) {
  element.textContent = message;
}

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  let isValid = true;

  if (fullName.value.trim() === "") {
    setError(nameError, "Please enter your full name.");
    isValid = false;
  } else if (fullName.value.trim().length < 2) {
    setError(nameError, "Full name must be at least 2 characters long.");
    isValid = false;
  }

  if (email.value.trim() === "") {
    setError(emailError, "Please enter your email address.");
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    setError(emailError, "Please enter a valid email address.");
    isValid = false;
  }

  if (game.value === "") {
    setError(gameError, "Please select a game.");
    isValid = false;
  }

  if (time.value === "") {
    setError(timeError, "Please select a time slot.");
    isValid = false;
  }

  if (players.value.trim() === "") {
    setError(playersError, "Please enter the number of players.");
    isValid = false;
  } else if (isNaN(players.value) || !Number.isInteger(Number(players.value))) {
    setError(playersError, "Number of players must be a whole number.");
    isValid = false;
  } else if (Number(players.value) < 1 || Number(players.value) > 8) {
    setError(playersError, "Number of players must be between 1 and 8.");
    isValid = false;
  }

  if (age.value.trim() === "") {
    setError(ageError, "Please enter your age.");
    isValid = false;
  } else if (isNaN(age.value) || !Number.isInteger(Number(age.value))) {
    setError(ageError, "Age must be a whole number.");
    isValid = false;
  } else if (Number(age.value) < 8 || Number(age.value) > 120) {
    setError(ageError, "Please enter a valid age between 8 and 120.");
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = "Booking submitted successfully!";
    formMessage.className = "form-message success";

    bookingForm.reset();
  } else {
    formMessage.textContent = "Please correct the highlighted errors and try again.";
    formMessage.className = "form-message error";
  }
});