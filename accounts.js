document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');

    const validations = {
        firstName: /^[A-Za-z]{4,}$/,
        lastName: /^[A-Za-z]{4,}$/,
        city: /^[A-Za-z]{4,}$/,
        state: /^[A-Za-z]{4,}$/,
        address: /^[A-Za-z0-9\s-]{4,}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^[A-Za-z\d@$!%*#?&]{8,}$/,
        phone: /^\d{4}-\d{7}$/,
        creditCard: /^\d{4} \d{4} \d{4} \d{4}$/
    };

    function validateInput(input, regex) {
        return regex.test(input.value.trim());
    }

    function showError(input, message) {
        const errorElement = document.getElementById(`${input.id}Error`);
        errorElement.textContent = message;
        input.classList.add('error');
    }

    function clearError(input) {
        const errorElement = document.getElementById(`${input.id}Error`);
        errorElement.textContent = '';
        input.classList.remove('error');
    }

    function formatPhoneNumber(input) {
        let value = input.value.replace(/\D/g, '');
        if (value.length > 4) {
            value = `${value.slice(0, 4)}-${value.slice(4)}`;
        }
        input.value = value;
    }

    function formatCreditCard(input) {
        let value = input.value.replace(/\D/g, '');
        value = value.match(/.{1,4}/g).join(' ').slice(0, 19); // Limit to 19 characters (16 digits + 3 spaces)
        input.value = value;
    }

    function validateForm() {
        let isValid = true;

        Object.keys(validations).forEach(key => {
            const input = document.getElementById(key);
            if (!validateInput(input, validations[key])) {
                showError(input, `Invalid ${key}`);
                isValid = false;
            } else {
                clearError(input);
            }
        });

        return isValid;
    }

    function displayImage() {
        const fileInput = document.getElementById('image');
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const profileImage = document.getElementById('profile-image');

            // Update profile image
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }

    function saveProfile() {
        const profileImageSrc = document.getElementById('profile-image').src;

        // Save profile data to local storage
        localStorage.setItem('profileImageSrc', profileImageSrc);
    }

    saveButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateForm()) {
            saveProfile(); // Call saveProfile function
            alert('User profile is updated'); // Display alert with the message
            saveFormData();

            form.submit();

        }
    });

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        form.reset();
        document.querySelectorAll('.error').forEach(errorElement => {
            errorElement.textContent = '';
        });
        document.querySelectorAll('.input-group input').forEach(input => {
            input.classList.remove('error');
        });
    });

    document.getElementById('phone').addEventListener('input', (e) => {
        formatPhoneNumber(e.target);
    });

    document.getElementById('creditCard').addEventListener('input', (e) => {
        formatCreditCard(e.target);
    });

    // Event listener for image input change
    document.getElementById('image').addEventListener('change', displayImage);

});
