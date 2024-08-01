// scripts.js

// Smooth scrolling for internal links
document.querySelectorAll('a.js-scroll-trigger').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show "back to top" button when scrolling down
window.addEventListener('scroll', function () {
    const scrollButton = document.getElementById('voltar-ao-topo');
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Scroll to top when "back to top" button is clicked
document.getElementById('voltar-ao-topo').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Carousel functionality
var carousel = document.querySelector('#carouselExampleCaptions');
var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 2000,
    wrap: true
});