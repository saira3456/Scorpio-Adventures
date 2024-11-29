document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true;

    // Validate first name
    const firstName = document.getElementById("firstName").value.trim();
    if (firstName.length < 3) {
        document.getElementById("firstNameError").textContent = "First name must be more than 2 letters";
        isValid = false;
    } else {
        document.getElementById("firstNameError").textContent = "";
    }

    // Validate last name
    const lastName = document.getElementById("lastName").value.trim();
    if (lastName.length < 3) {
        document.getElementById("lastNameError").textContent = "Last name must be more than 2 letters";
        isValid = false;
    } else {
        document.getElementById("lastNameError").textContent = "";
    }

    // Validate email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Email must be valid";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validate phone number
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 11 digits";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Validate message
    const message = document.getElementById("message").value.trim();
    if (message.length < 5) {
        document.getElementById("messageError").textContent = "Message must be more than 4 letters";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    if (isValid) {
        alert("Message sent successfully");
        document.getElementById("contactForm").reset();
    }
});

function showPopup(method) {
    let contactMethod = method.charAt(0).toUpperCase() + method.slice(1);
    alert(`Contacting Scorpio Adventures through ${contactMethod}`);
}

function toggleDropdown(element) {
    var content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
