



// Selecting DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

// Retrieving data from local storage
const users = JSON.parse(localStorage.getItem("users"));

// Event listener for login button
loginButton.addEventListener("click", function () {
  // Retrieving user input
  const email = emailInput.value;
  const password = passwordInput.value;

  // Checking if user exists in local storage
  const user = users.find((user) => user.email === email);
  

  if (!user) {
    alert("User not found. Please register first.");
    return;
  }

  // Checking if password is correct
  if (user.password !== password) {
    alert("Incorrect password. Please try again.");
    return;
  }

  // Storing user info in session storage
  localStorage.setItem("user", JSON.stringify(user));

  // Redirecting to home page
  window.location.href = "login.html";
});