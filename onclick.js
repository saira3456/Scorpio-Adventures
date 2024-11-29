function checkLogin() {
    // Check if "isLoggedIn" flag is set to "true" in localStorage
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (isLoggedIn === "true") {
        // User is logged in, open the next page
        window.location.href = 'Offers.html';
    } else {
        // User is not logged in, display a popup informing the user to log in first
        alert("Please log in first.");
        // Optionally, you can redirect the user to the login page here
        // window.location.href = 'login.html';
    }
}
