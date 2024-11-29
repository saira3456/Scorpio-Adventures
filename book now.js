document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Validate first name
    const firstName = document.getElementById('firstName').value;
    if (firstName.length < 3) {
        document.getElementById('firstNameError').textContent = 'First name must be more than 3 characters';
        document.getElementById('firstNameError').style.display = 'block';
        valid = false;
    }

    // Validate last name
    const lastName = document.getElementById('lastName').value;
    if (lastName.length < 3) {
        document.getElementById('lastNameError').textContent = 'Last name must be more than 3 characters';
        document.getElementById('lastNameError').style.display = 'block';
        valid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone').value;
    if (!/^\d{11}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 11 digits';
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    }

    // Validate passport ID
    const passportId = document.getElementById('passportId').value;
    if (!/^[A-Za-z]{2}\d{7}$/.test(passportId)) {
        document.getElementById('passportIdError').textContent = 'Passport ID must be 9 characters with first 2 letters';
        document.getElementById('passportIdError').style.display = 'block';
        valid = false;
    }

    // Validate CNIC
    const cnic = document.getElementById('cnic').value;
    if (!/^\d{5}-\d{7}-\d$/.test(cnic)) {
        document.getElementById('cnicError').textContent = 'CNIC must be in the format: 12345-1234567-5';
        document.getElementById('cnicError').style.display = 'block';
        valid = false;
    }

    // Validate destination
    const departure = document.getElementById('departure').value;
    if (departure === 'Choose') {
        document.getElementById('departureError').textContent = 'Please select a departure';
        document.getElementById('departureError').style.display = 'block';
        valid = false;
    }

    // If the form is valid, proceed to show a confirmation popup
    if (valid) {
        if (confirm("Your inputs are valid.You can download your ticket Now.")) {
            saveFormData();
            downloadTicket();
        }
    }
});

function generateTicketId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let ticketId = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        ticketId += characters[randomIndex];
    }
    return ticketId;
}

function saveFormData() {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        departure: document.getElementById('departure').value,
        passportId: document.getElementById('passportId').value,
        cnic: document.getElementById('cnic').value,
        phone: document.getElementById('phone').value,
        ticketId: generateTicketId()
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

function printTicket() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    // Create a new page
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
        <head>
            <title>Ticket</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <style>
            @media print {
                body * {
                    visibility: hidden;
                }
                .printable, .printable * {
                    visibility: visible;
                }
                .printable {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }
            body {
                margin: 0;
                padding: 0;
                background-color: midnightblue;
                color: #FFD700;
            }
            
            .headder {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: rgba(66, 94, 111, 0.64);
                color: #FFD700;
                height: 50px;
                padding: 10px;
                border-radius: 20px;
                margin-bottom: 30px;
            }
            
            .footer {
                background-color: rgba(66, 94, 111, 0.64);
                color: #FFD700;
                text-align: center;
                font-style: italic;
                position: relative;
                padding-top: 5px;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 80px;
            }
            .fa-facebook {
                background: #3B5998; /* Facebook blue */
                color: white;
            }
            
            .fa-twitter {
                background: #55ACEE; /* Twitter blue */
                color: white;
            }
            
            .fa-instagram {
                background: #E4405F; /* Instagram pink */
                color: white;
            }
            
            ul {
                color: #FFD700;
                text-decoration: none;
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            
            a {
                color: #FFD700; /* set color of links to yellow */
                text-decoration: none; /* remove underlining */
            }
            
            .headder .navbar li a {
                color: #FFD700; /* set color of account button to yellow */
            }
            
            .headder ul {
                display: flex;
                flex-direction: row; /* Display list items in a column */
                align-items: flex-end; /* Align items to the end of the column */
            }
            
            .headder li {
                margin-right: 15px;
                margin-bottom: 10px; /* Add space between list items */
            }
            
            .headder li a {
                color: #FFD700; /* Set color of text to golden */
            }
            
            .headder li i {
                color: white; /* Set color of icons to white */
            }
            .bgimage img {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit:fill; /* Ensure the image covers the entire container */
                z-index: -1;
            }
            .bookings {
                background-color: white;
                width: 92%;
                margin: 30px;
                margin-bottom: 30px;
                margin-right: 30px;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                border-radius: 20px;
            }
                .mid {
                    padding: 10px;
                    margin: 30px;
                    align-items: end;
                    position: relative;
                }
                .download {
                    background-color: #ffffff;
                    color: #425E6F;
                    border-radius: 30px;
                    font-weight: bold;
                    padding: 10px;
                    margin: 30px;
                    margin-left: 85%;
                    transition: color 0.3s, transform 0.3s;
                }
                .download:hover {
                    color: #364754;
                    transform: scale(1.1);
                }
                .form-group {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .form-group label {
                    display: block;
                    font-weight: bold;
                }
                .form-group label {
                    font-weight: bold;
                    margin-right: 10px; /* Adds some space between the label and the paragraph */
                    min-width: 150px; /* Adjust based on your layout needs */
                }
                .form-group p {
                    margin: 0;
                }
                .bookings{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .booking {
                    display: flex;
                    color:#425E6F;
                    flex-direction: column;
                    gap: 10px;
                }
                .booking h2{
                    color:black;
                    margin-right: 10px;
                    margin-bottum: 20px;
                }
                .print, .goback {
                    padding: 10px;
                    background-color: white;
                    color: #425E6F;
                    border: none;
                    border-radius: 20px;
                    margin-top: 20px;
                    margin-right: 10px;
                    cursor: pointer;
                    width: 110px;
                    transition: color 0.3s, transform 0.3s;
                }
                .mid button: hover {
                    color: #364754;
                    transform: scale(1.1);
                }
            </style>
        </head>
        <body>
            <div class="headder">
                <div class="logo">
                    <img src="../asserts/Green and Blue Playful Illustrated World Travel Logo.png" alt="logo" width="70px">
                </div>
                <h1>Scorpio Adventures</h1>
                <ul>
                    <li><a href="../html code/Home.html">Home <i class="fas fa-home"></i></a></li>
                    <li><a href="../html code/account.html">Accounts <i class="fas fa-user"></i></a></li>
                </ul>
            </div>
            <div class="main">
                <div class="bgimage">
                    <img src="../asserts/Large picture of starry sky with constellation, night sky as texture or background.jpg" alt="background pic">
                </div>
            </div>
            <div class="bookings printable">
                <!-- Booking form with filled data from saved data -->
                <div class="booking">
                    <h2>Scorpio Adventures Ticket</h2>
                    <!-- Insert filled inputs here -->
                    <div class="form-group">
                        <label for="firstName">First Name:</label>
                        <p>${formData.firstName}</p>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name:</label>
                        <p>${formData.lastName}</p>
                    </div>
                    <div class="form-group">
                        <label for="date">Date:</label>
                        <p>${formData.date}</p>
                    </div>
                    <div class="form-group">
                        <label for="time">Time:</label>
                        <p>${formData.time}</p>
                    </div>
                    <div class="form-group">
                        <label for="departure">Departure:</label>
                        <p>${formData.departure}</p>
                    </div>
                    <div class="form-group">
                        <label for="passportId">Passport ID:</label>
                        <p>${formData.passportId}</p>
                    </div>
                    <div class="form-group">
                        <label for="cnic">CNIC:</label>
                        <p>${formData.cnic}</p>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <p>${formData.phone}</p>
                    </div>
                    <div class="form-group">
                        <label for="ticketId">Ticket ID:</label>
                        <p>${formData.ticketId}</p>
                    </div>
                </div>
                <img src="../asserts/Green and Blue Playful Illustrated World Travel Logo 22.png" alt="logo 1">
            </div>
            <div class="mid">
                <button class="print" onclick="window.print()">Print Ticket</button>
                <button class="goback" onclick="window.close()">Go Back</button>
            </div>
            <div class="footer">
                © [2024] Scorpio Adventures<br>
                All rights reserved<br>
                <span class="icons">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </span>
            </div>
        </body>
        </html>
    `);
}
