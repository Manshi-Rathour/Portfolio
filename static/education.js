console.log("Hi");



window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 30) { // Change 50 to the value where you want the effect to start
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});





window.onload = function() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Get the header and outer container
    const header = document.getElementById('header');
    const project_bg = document.getElementById('edu-bg');

    // Delay the animation slightly
    setTimeout(() => {
        header.classList.add('visible');
        project_bg.classList.add('visible');
    }, 100);
};









document.addEventListener("DOMContentLoaded", function() {
    // Function to check if an element is 50% visible in the viewport
    function isHalfVisible(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top < windowHeight && rect.bottom >= windowHeight / 2;
    }

    // Function to check if the entire card area is visible in the viewport
    function isCardFullyVisible(cardContainer) {
        var rect = cardContainer.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top >= 0 && rect.bottom <= windowHeight;
    }

    // Function to handle scroll event for both elements
    function handleScroll() {
        var forImgElements = document.querySelectorAll('#amity-logo');
        forImgElements.forEach(function(forImg) {
            if (isHalfVisible(forImg)) {
                forImg.classList.add('active');
            }
        });

        var cardContainer = document.getElementById('card-container');
        if (isCardFullyVisible(cardContainer)) {
            cardContainer.classList.add('active');
        }
    }

    // Initial check on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
