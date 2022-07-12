/**
 * Constant Variables.
 */
const mainFloatSocials = $('#floatingSocials');

$(document).ready(function () {
    loadNav();
    
    mainFloatSocials.addClass('enter');
    mainFloatSocials.click(openElement);
    mainFloatSocials.click(function () {
        $('#socialsIcon').toggleClass('bi-chat-fill');
        $('#socialsIcon').toggleClass('bi-x');
    });
});

/**
 * Load the Navbar.
 */
function loadNav() {
    $('#navTemp').load('../temp/nav.html', function () {
        $('.navLink').each(function () {
            $(this).toggleClass('active', this.getAttribute('href') === location.pathname);
        });
    });
}

/**
 * Toggle floating socials contact action button.
 */
function openElement() {
    $('.linkedinIcon').toggleClass('enter');
    setTimeout(() => {
        $('.githubIcon').toggleClass('enter');
    }, 100);
    setTimeout(() => {
        $('.mailIcon').toggleClass('enter');
    }, 200);
}