// tombol berpindah
const moveButton = document.getElementById('moveButton');

moveButton.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - this.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

// tombol alert
const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function() {
    alert('Kenak ko kan');
});
