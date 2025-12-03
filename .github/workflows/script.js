document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple client-side validation
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        errorMessage.textContent = ''; // Clear any previous error messages
        // In a real application, you would redirect or handle authentication here
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});