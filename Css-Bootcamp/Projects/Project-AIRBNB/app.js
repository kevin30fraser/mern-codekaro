

let rooms = document.querySelectorAll('.feed');

rooms.forEach((room) => {
    room.addEventListener('mouseover', () => {
        console.log('Room Is been Booked');
    })
})