const hamburgerButton = document.querySelectorAll(".menu");
const navigationList = document.querySelectorAll(".animate__animated");

hamburgerButton.addEventListener('click', () => {
    navigationList.classList.toggle('animate__fadeInLeft');
});