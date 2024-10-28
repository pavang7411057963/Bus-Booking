function selectSeat(seat) {
    if (seat.classList.contains('booked')) {
        alert("This seat is already booked.");
    } else {
        seat.classList.toggle('selected');
    }
}

function bookSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length === 0) {
        document.getElementById('message').innerText = "Please select at least one seat.";
        return;
    }

    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('booked');
    });

    document.getElementById('message').innerText = selectedSeats.length + " seat(s) booked successfully!";
}