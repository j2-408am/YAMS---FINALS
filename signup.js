document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Gets the value entered in the email section as well as removing extra spaces
    const email = document.getElementById("email").value.trim();
    // Gets the value entered in the username section as well as removing extra spaces
    const username = document.getElementById("username").value.trim();
    // Gets the value entered in the password section as well as removing extra spaces
    const password = document.getElementById("password").value.trim();

    // Function is added so the program makes sure user filled out all the fields needed
    if (email && username && password) {
        // Shows a popup when successful
        alert("Sign Up Successful!");

        // 1000 is milliseconds, which means after 1 second, the user will be redirected to 
        // the login page to fill out the details they just input in the signup page
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    } else {
        // This popup will show if user fails to submit all details needed
        alert("Please fill in all fields."); 
    }
});