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
    const project_bg = document.getElementById('project-bg');

    // Delay the animation slightly
    setTimeout(() => {
        header.classList.add('visible');
        project_bg.classList.add('visible');
    }, 100);
};







document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card-body');
    
    function animateCards() {
        cards.forEach(function(card) {
            if (isElementInViewport(card) && !card.classList.contains('animate')) {
                card.classList.add('animate');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initially animate cards in view on page load
    animateCards();

    // Listen for scroll events to animate cards in view
    window.addEventListener('scroll', function() {
        animateCards();
    });

    // Listen for page refresh or load to animate cards
    window.addEventListener('load', function() {
        animateCards();
    });
});
