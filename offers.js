document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.see-more').addEventListener('click', function () {
        window.location.href = 'offers.html';
    });
});

function calculateOffer() {
    let duration = parseInt(document.getElementById('duration').value);
    let country = document.getElementById('country');
    let hotel = document.getElementById('hotel');
    let restaurant = document.getElementById('restaurant');
    let soloTrip = document.getElementById('solo-trip').value;

    let countryPrice = parseInt(country.options[country.selectedIndex].getAttribute('data-price'));
    let hotelPrice = parseInt(hotel.options[hotel.selectedIndex].getAttribute('data-price')) * duration;
    let restaurantPrice = parseInt(restaurant.options[restaurant.selectedIndex].getAttribute('data-price')) * duration;

    let totalPrice = countryPrice + hotelPrice + restaurantPrice;

    let discount = soloTrip === 'yes' ? 0.85 : 0.70;
    let discountedPrice = totalPrice * discount;

    document.getElementById('total-price').innerText = `Total Price: ₨${totalPrice}`;
    document.getElementById('discounted-price').innerText = `Discounted Price: ₨${discountedPrice.toFixed(2)}`;
}
