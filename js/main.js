/**
 * Constant Variables.
 */
const mainFloatSocials = $('#floatingSocials');
const wrapper = document.getElementById('wrapper');
var navLinks;
setTimeout(() => {
    navLinks = document.querySelectorAll('.navLink');
}, 300);

$(document).ready(function () {
    loadNav();

    mainFloatSocials.addClass('enter');
    mainFloatSocials.click(openElement);
    mainFloatSocials.click(function () {
        $('#socialsIcon').toggleClass('bi-chat-fill');
        $('#socialsIcon').toggleClass('bi-x');
    });

    $(window).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta >= -50) {
            for (var i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.remove('hide');
            }
        }
        else {
            for (var i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.add('hide');
            }
        }
    });

    // Mobile Hamburger Menu function
    document.getElementById('mobHamburger').addEventListener('click', function () {
        wrapper.classList.toggle('active');
        if (wrapper.classList.contains('active')) {
            document.body.style.overflow = "hidden";
            wrapper.style.backgroundColor = '#0F1630';
        } else {
            document.body.style.overflow = null;
            wrapper.style.backgroundColor = null;
        }
    }, false);
    
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