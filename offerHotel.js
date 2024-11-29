const jsonData = {
    "destinations": [
        {
            "place": "Switzerland",
            "hotels": {
                "luxury": { "name": "The Dolder Grand", "price": "50000" },
                "mid_range": { "name": "Hotel Glockenhof Zurich", "price": "25000" },
                "budget": { "name": "easyHotel Zurich", "price": "10000" }
            }
        },
        {
            "place": "Spain",
            "hotels": {
                "luxury": { "name": "Hotel Ritz, Madrid", "price": "45000" },
                "mid_range": { "name": "Hotel Catalonia Atocha", "price": "20000" },
                "budget": { "name": "Hostal Abel Victoriano", "price": "8000" }
            }
        },
        {
            "place": "London",
            "hotels": {
                "luxury": { "name": "The Savoy", "price": "55000" },
                "mid_range": { "name": "The Hoxton, Holborn", "price": "30000" },
                "budget": { "name": "YHA London Central", "price": "12000" }
            }
        },
        {
            "place": "Maldives",
            "hotels": {
                "luxury": { "name": "Gili Lankanfushi", "price": "60000" },
                "mid_range": { "name": "Kurumba Maldives", "price": "35000" },
                "budget": { "name": "Embudu Village", "price": "15000" }
            }
        },
        {
            "place": "Greece",
            "hotels": {
                "luxury": { "name": "Katikies Hotel, Santorini", "price": "50000" },
                "mid_range": { "name": "Atrina Canava 1894", "price": "25000" },
                "budget": { "name": "Sunrise Studios Perissa", "price": "10000" }
            }
        },
        {
            "place": "Bali",
            "hotels": {
                "luxury": { "name": "The St. Regis Bali Resort", "price": "45000" },
                "mid_range": { "name": "The Haven Bali Seminyak", "price": "20000" },
                "budget": { "name": "Amalfi Hotel Seminyak", "price": "8000" }
            }
        },
        {
            "place": "Denmark",
            "hotels": {
                "luxury": { "name": "Nimb Hotel, Copenhagen", "price": "50000" },
                "mid_range": { "name": "Hotel SP34", "price": "25000" },
                "budget": { "name": "Wakeup Copenhagen", "price": "10000" }
            }
        },
        {
            "place": "Japan",
            "hotels": {
                "luxury": { "name": "Aman Tokyo", "price": "60000" },
                "mid_range": { "name": "Hotel Gracery Shinjuku", "price": "30000" },
                "budget": { "name": "Tokyo Ueno Youth Hostel", "price": "15000" }
            }
        },
        {
            "place": "France",
            "hotels": {
                "luxury": { "name": "Shangri-La Hotel, Paris", "price": "55000" },
                "mid_range": { "name": "Le Mareuil", "price": "30000" },
                "budget": { "name": "Hotel Darcet", "price": "12000" }
            }
        },
        {
            "place": "Australia",
            "hotels": {
                "luxury": { "name": "Qualia, Hamilton Island", "price": "50000" },
                "mid_range": { "name": "The Henry Jones Art Hotel", "price": "25000" },
                "budget": { "name": "Space Hotel", "price": "10000" }
            }
        },
        {
            "place": "Turkey",
            "hotels": {
                "luxury": { "name": "Ciragan Palace Kempinski, Istanbul", "price": "45000" },
                "mid_range": { "name": "Hotel Amira Istanbul", "price": "20000" },
                "budget": { "name": "Cheers Hostel", "price": "8000" }
            }
        },
        {
            "place": "Pakistan",
            "hotels": {
                "luxury": { "name": "Serena Hotel, Islamabad", "price": "15000" },
                "mid_range": { "name": "Pearl Continental Hotel, Lahore", "price": "8000" },
                "budget": { "name": "Hotel One, Karachi", "price": "3000" }
            }
        },
        {
            "place": "India",
            "hotels": {
                "luxury": { "name": "The Oberoi Amarvilas, Agra", "price": "50000" },
                "mid_range": { "name": "Trident Hotel, Jaipur", "price": "25000" },
                "budget": { "name": "Hotel Hari Piorko, Delhi", "price": "10000" }
            }
        },
        {
            "place": "USA",
            "hotels": {
                "luxury": { "name": "The Plaza, New York", "price": "60000" },
                "mid_range": { "name": "Hilton San Francisco", "price": "30000" },
                "budget": { "name": "Best Western Hollywood", "price": "15000" }
            }
        },
        {
            "place": "Paris",
            "hotels": {
                "luxury": { "name": "Four Seasons Hotel George V", "price": "55000" },
                "mid_range": { "name": "Hotel Le Six", "price": "30000" },
                "budget": { "name": "Hotel Eiffel Turenne", "price": "12000" }
            }
        },
        {
            "place": "Iceland",
            "hotels": {
                "luxury": { "name": "Hotel Ranga", "price": "50000" },
                "mid_range": { "name": "Fosshotel Glacier Lagoon", "price": "25000" },
                "budget": { "name": "Kex Hostel", "price": "10000" }
            }
        },
        {
            "place": "Alaska",
            "hotels": {
                "luxury": { "name": "Alyeska Resort", "price": "45000" },
                "mid_range": { "name": "Hotel Captain Cook", "price": "20000" },
                "budget": { "name": "Bent Prop Inn & Hostel", "price": "8000" }
            }
        },
        {
            "place": "South Korea",
            "hotels": {
                "luxury": { "name": "Signiel Seoul", "price": "60000" },
                "mid_range": { "name": "Lotte City Hotel Myeongdong", "price": "30000" },
                "budget": { "name": "Hostel Haru", "price": "15000" }
            }
        }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');
    const hotelSelect = document.getElementById('hotel');

    jsonData.destinations.forEach(destination => {
        const option = document.createElement('option');
        option.value = destination.place;
        option.textContent = destination.place;
        countrySelect.appendChild(option);
    });

    countrySelect.addEventListener('change', function () {
        const selectedCountry = this.value;
        const destination = jsonData.destinations.find(d => d.place === selectedCountry);
        hotelSelect.innerHTML = '<option value="Choose">Choose</option>';

        if (destination) {
            for (const [key, hotel] of Object.entries(destination.hotels)) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = `${hotel.name} - ₨${hotel.price}/night`;
                option.dataset.price = hotel.price;
                hotelSelect.appendChild(option);
            }
        }
    });
});

function calculateOffer() {
    let duration = parseInt(document.getElementById('duration').value);
    let country = document.getElementById('country');
    let hotel = document.getElementById('hotel');
    let restaurant = document.getElementById('restaurant');
    let soloTrip = document.getElementById('solo-trip').value;

    let countryName = country.value;
    let hotelPrice = parseInt(hotel.options[hotel.selectedIndex].getAttribute('data-price')) * duration;
    let restaurantPrice = parseInt(restaurant.options[restaurant.selectedIndex].getAttribute('data-price')) * duration;

    let totalPrice = hotelPrice + restaurantPrice;

    let discount = soloTrip === 'yes' ? 0.85 : 0.70;
    let discountedPrice = totalPrice * discount;

    document.getElementById('total-price').innerText = `Total Price: ₨${totalPrice}`;
    document.getElementById('discounted-price').innerText = `Discounted Price: ₨${discountedPrice.toFixed(2)}`;
    // Store necessary data in local storage
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('discountedPrice', discountedPrice);
    localStorage.setItem('countryName', country.options[country.selectedIndex].text);
    localStorage.setItem('hotelName', hotel.options[hotel.selectedIndex].text);
    localStorage.setItem('restaurantName', restaurant.options[restaurant.selectedIndex].text);

    // Redirect to bookNow.html
    // window.location.href = 'bookNow.html';
}
