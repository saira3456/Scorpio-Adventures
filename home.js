document.addEventListener("DOMContentLoaded", function() {
    var accountLink = document.getElementById("account-link");
    var accountDropdown = document.getElementById("account-dropdown");
    var logoutBtn = document.getElementById("logout-btn");
    var accountInfoBtn = document.getElementById("account-info-btn");

    accountLink.addEventListener("click", function(event) {
        var isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

        if (isLoggedIn) {
            event.preventDefault(); // Prevent default link behavior
            accountDropdown.style.display = accountDropdown.style.display === "none" ? "block" : "none";
        }
    });

    logoutBtn.addEventListener("click", function() {
        // Clear the login flag
        localStorage.removeItem("isLoggedIn");
        alert("User logged out successfully");
        accountDropdown.style.display = "none";
        window.location.href = "../html code/Home.html"; // Redirect to home page
    });

    accountInfoBtn.addEventListener("click", function() {
        window.location.href = "../html code/account.html";
    });

    // Check if user is logged in and update the link accordingly
    if (localStorage.getItem("isLoggedIn") === "true") {
        accountLink.href = "#"; // Prevent navigation to login page
    } else {
        accountDropdown.style.display = "none";
    }
});
