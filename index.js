const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form fields
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create fullName
  const fullName = (firstName + ' ' + lastName).trim();

  // Store user data
  // const user = { fullName, email, password };

   const user = [firstName,lastName,fullName,email,password ];
  localStorage.setItem(email, JSON.stringify(user));
  // localStorage.setItem(password) ,JSON.parse(user);

  

  

  // Redirect to login page
  window.location.href = 'login.html';
});