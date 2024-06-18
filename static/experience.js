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
    const exp_bg = document.getElementById('exp-bg');

    // Delay the animation slightly
    setTimeout(() => {
        header.classList.add('visible');
        exp_bg.classList.add('visible');
    }, 100);
};








document.addEventListener("DOMContentLoaded", function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var elements = document.querySelectorAll('.company-logo');
        elements.forEach(function(el) {
            if (isElementInViewport(el)) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load
});









// document.addEventListener('DOMContentLoaded', function() {
//     var cards = document.querySelectorAll('.body');
    
//     function animateCards() {
//         cards.forEach(function(card) {
//             if (isElementInViewport(card) && !card.classList.contains('animate')) {
//                 card.classList.add('animate');
//             }
//         });
//     }

//     function isElementInViewport(el) {
//         var rect = el.getBoundingClientRect();
//         var windowHeight = window.innerHeight || document.documentElement.clientHeight;
//         // Calculate when 50% of the card's height is visible
//         return (
//             rect.top <= windowHeight * 0.5 &&
//             rect.bottom >= windowHeight * 0.5
//         );
//     }

//     // Initially animate cards in view on page load
//     animateCards();

//     // Listen for scroll events to animate cards in view
//     window.addEventListener('scroll', function() {
//         animateCards();
//     });

//     // Listen for page refresh or load to animate cards
//     window.addEventListener('load', function() {
//         animateCards();
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.body');
    
    function animateCards() {
        cards.forEach(function(card) {
            if (isElementInViewport(card) && !card.classList.contains('animate')) {
                card.classList.add('animate');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Calculate when 30% of the card's height is visible
        var threshold = rect.height * 0.3;
        return (
            rect.top <= windowHeight - threshold &&
            rect.bottom >= threshold
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
