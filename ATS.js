// Get the form element
const form = document.getElementById('login-signup-form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Reset all form fields
  form.reset();

  // If you want to perform some action after resetting the form, you can add it here
  console.log('Form reset successfully!');
});

// Alternatively, you can add an event listener to the login button itself
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function() {
  form.reset();
  console.log('Form reset successfully!');
});




