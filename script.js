// Gets the booking form from the HTML so JavaScript can control what happens when it is submitted
const bookingForm = document.getElementById("bookingForm");

// Gets the message area used to show success or error feedback to the user
const formMessage = document.getElementById("formMessage");

// Gets all input fields from the booking form
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const game = document.getElementById("game");
const time = document.getElementById("time");
const players = document.getElementById("players");
const age = document.getElementById("age");

// Gets all error message elements used to display validation feedback
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const gameError = document.getElementById("gameError");
const timeError = document.getElementById("timeError");
const playersError = document.getElementById("playersError");
const ageError = document.getElementById("ageError");

// Clears all previous error messages before validating the form again
function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  gameError.textContent = "";
  timeError.textContent = "";
  playersError.textContent = "";
  ageError.textContent = "";

  // Resets the main form message
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

// Checks whether the email entered by the user matches a valid email format
function isValidEmail(emailValue) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailValue);
}

// Displays an error message inside the chosen error element
function setError(element, message) {
  element.textContent = message;
}

// Runs when the booking form is submitted
bookingForm.addEventListener("submit", function (event) {
  // Stops the page from refreshing when the form is submitted
  event.preventDefault();

  // Clears old validation messages before checking the form again
  clearErrors();

  // Tracks whether the form is valid or not
  let isValid = true;

  // Checks that the full name field is not empty and has at least 2 characters
  if (fullName.value.trim() === "") {
    setError(nameError, "Please enter your full name.");
    isValid = false;
  } else if (fullName.value.trim().length < 2) {
    setError(nameError, "Full name must be at least 2 characters long.");
    isValid = false;
  }

  // Checks that the email field is not empty and follows a valid email format
  if (email.value.trim() === "") {
    setError(emailError, "Please enter your email address.");
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    setError(emailError, "Please enter a valid email address.");
    isValid = false;
  }

  // Checks that the user has selected a game
  if (game.value === "") {
    setError(gameError, "Please select a game.");
    isValid = false;
  }

  // Checks that the user has selected a time slot
  if (time.value === "") {
    setError(timeError, "Please select a time slot.");
    isValid = false;
  }

  // Checks that the number of players is a whole number between 1 and 8
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

  // Checks that the age entered is a whole number between 8 and 120
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

  // If all validation checks pass, show success message and reset the form
  if (isValid) {
    formMessage.textContent = "Booking submitted successfully!";
    formMessage.className = "form-message success";
    bookingForm.reset();

  // If validation fails, shows a general error message
  } else {
    formMessage.textContent = "Please correct the highlighted errors and try again.";
    formMessage.className = "form-message error";
  }
});
