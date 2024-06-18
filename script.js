document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#navbarNav');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.product-list .card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.classList.add('shadow-lg');
        });
        card.addEventListener('mouseout', function() {
            card.classList.remove('shadow-lg');
        });
    });
});