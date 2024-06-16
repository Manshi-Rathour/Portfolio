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
    const outerContainer = document.getElementById('outerContainer');

    // Delay the animation slightly
    setTimeout(() => {
        header.classList.add('visible');
        outerContainer.classList.add('visible');
    }, 100);
};








// Intersection Observer for #heading
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('heading');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add('visible');
            }
        });
    });

    observer.observe(heading);
});






document.addEventListener("DOMContentLoaded", function() {
    // Function to check if an element is 50% visible in the viewport
    function isHalfVisible(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top < windowHeight && rect.bottom >= windowHeight / 2;
    }

    // Function to handle scroll event
    function handleScroll() {
        var forImgElements = document.querySelectorAll('.forImg');
        forImgElements.forEach(function(forImg) {
            if (isHalfVisible(forImg)) {
                forImg.classList.add('active');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
















document.addEventListener('DOMContentLoaded', function() {
    var detailsContainers = document.querySelectorAll('.details');

    // Function to check if at least 50% of an element is visible in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var threshold = window.innerHeight || document.documentElement.clientHeight;
        var midpoint = rect.top + (rect.height / 2); // Calculate midpoint of the element

        return midpoint >= 0 && midpoint <= threshold;
    }

    // Function to animate elements when in viewport
    function animateIfVisible() {
        detailsContainers.forEach(function(container) {
            if (isInViewport(container) && !container.classList.contains('animate')) {
                container.classList.add('animate');
                animateHeading(container); // Trigger animation for heading
                animateIcons(container); // Trigger animation for icons
                animateParagraphs(container); // Trigger animation for paragraphs
            }
        });
    }

    // Function to animate heading
    function animateHeading(container) {
        var heading = container.querySelector('.heading-sm');
        setTimeout(function() {
            heading.style.opacity = 1;
            heading.style.transform = 'translateX(0)';
        }, 200); // Adjust delay as needed
    }

    // Function to animate icons
    function animateIcons(container) {
        var icons = container.querySelectorAll('.icons-container img');
        icons.forEach(function(icon, index) {
            setTimeout(function() {
                icon.style.opacity = 1;
                icon.style.transform = 'translateX(0)';
            }, (index + 1) * 100); // Staggered delay for each icon
        });
    }

    // Function to animate paragraphs
    function animateParagraphs(container) {
        var paragraphs = container.querySelectorAll('.project-summary p');
        paragraphs.forEach(function(paragraph, index) {
            setTimeout(function() {
                paragraph.style.opacity = 1;
                paragraph.style.transform = 'translateX(0)';
            }, (index + 1) * 300); // Staggered delay for each paragraph
        });
    }

    // Function to handle scroll event
    function scrollHandler() {
        animateIfVisible();
    }

    // Initial check on page load
    animateIfVisible();

    // Add scroll event listener
    window.addEventListener('scroll', scrollHandler);
});

