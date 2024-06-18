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
    const project_bg = document.getElementById('contact-bg');

    // Delay the animation slightly
    setTimeout(() => {
        header.classList.add('visible');
        project_bg.classList.add('visible');
    }, 100);
};

