function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    // Gets the value entered in the username section
    const username = document.getElementById("username").value;
    // Gets the value entered in the password section
    const password = document.getElementById("password").value;

    // Checks if user has an input in both fields
    if (username && password) {
        // Will show if user's login is successful
        alert("Login Successful!");

        // Redirect to home.html or the homepage after 1 second (1000 milliseconds)
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
    } else {
        alert("Please fill in all fields."); // If user fails to submit all details needed
    }
}