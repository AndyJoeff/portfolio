// JavaScript functionality will go here
// Selecting all hero image containers
const imageContainers = document.querySelectorAll('.hero-image-container');

// Adding hover event listeners
imageContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const infoBox = container.querySelector('.info-box');
        infoBox.style.opacity = '1';
    });

    container.addEventListener('mouseleave', () => {
        const infoBox = container.querySelector('.info-box');
        infoBox.style.opacity = '0';
    });
});
// Selecting all hero image containers
const imageContainers = document.querySelectorAll('.hero-image-container');

// Adding hover and click event listeners
imageContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const infoBox = container.querySelector('.info-box');
        infoBox.style.opacity = '1';
    });

    container.addEventListener('mouseleave', () => {
        const infoBox = container.querySelector('.info-box');
        infoBox.style.opacity = '0';
    });

    container.addEventListener('click', () => {
        container.classList.toggle('active');
    });
});
function toggleMenu() {
  var menu = document.getElementById("slide-out-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

