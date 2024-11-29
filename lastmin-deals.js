document.addEventListener('DOMContentLoaded', function () {
    // Find the button with the class "see-more"
    var seeMoreButton = document.querySelector('.see-more');

    // Add a click event listener to the button
    seeMoreButton.addEventListener('click', function () {
        // Navigate to offers.html when the button is clicked
        window.location.href = 'Offers.html';
    });
});