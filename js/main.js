/**
 * Constant Variables.
 */
const mainFloatSocials = $('#floatingSocials');
const wrapper = document.getElementById('wrapper');
var navLinks = document.querySelectorAll('.navLink');

$(document).ready(function () {
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

/**
 * Custom mouse cursor movement.
 */
const cursorContainer = document.querySelector('#cursors');
const cursorPointers = document.querySelectorAll('#cursors div');
const cursorText = cursorContainer.querySelector('div span');
const hoverTag = document.querySelectorAll('[data-hover]');
let aimX = 0;
let aimY = 0;

cursorPointers.forEach((cursorPointer, i) => {
    let currX = 0;
    let currY = 0;
    let speed = 0.2 - i * 0.01;

    const animate = function() {
        currX += (aimX - currX) * speed;
        currY += (aimY - currY) * speed;
    
        cursorPointer.style.left = currX + 'px';
        cursorPointer.style.top = currY + 'px';
    
        requestAnimationFrame(animate);
    }
    animate();
})

document.addEventListener('mousemove', function(e) {
    aimX = e.pageX;
    aimY = e.pageY;
});

// Add Text on hover for cursor
hoverTag.forEach(img => {
    img.addEventListener('mouseover', function() {
        cursorPointers.forEach(cursor => {
            cursor.classList.add('hover');
        });
        cursorPointers[cursorPointers.length- 1].setAttribute('data-hover', img.getAttribute('data-hover'));
    })
    
    img.addEventListener('mouseout', function() {
        cursorPointers.forEach(cursor => {
            cursor.classList.remove('hover');
        });
        cursorPointers[cursorPointers.length- 1].setAttribute('data-hover', '');
    })
})