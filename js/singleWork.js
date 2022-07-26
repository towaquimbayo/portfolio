$(document).ready(function () {
    window.onscroll = function () {
        if (window.pageYOffset >= 2000 && window.pageYOffset < 2600) {
            document.querySelector('#projGallerySec1').classList.add('active');
            document.querySelector('#projGallerySec2').classList.remove('active');
            document.querySelector('#projGallerySec3').classList.remove('active');
            document.querySelector('#projGallerySec4').classList.remove('active');
            document.querySelector('#projGallerySec5').classList.remove('active');
        } else if (window.pageYOffset > 2900 && window.pageYOffset < 3800) {
            document.querySelector('#projGallerySec1').classList.remove('active');
            document.querySelector('#projGallerySec2').classList.add('active');
            document.querySelector('#projGallerySec3').classList.remove('active');
            document.querySelector('#projGallerySec4').classList.remove('active');
            document.querySelector('#projGallerySec5').classList.remove('active');
        } else if (window.pageYOffset > 4000 && window.pageYOffset < 4600) {
            document.querySelector('#projGallerySec1').classList.remove('active');
            document.querySelector('#projGallerySec2').classList.remove('active');
            document.querySelector('#projGallerySec3').classList.add('active');
            document.querySelector('#projGallerySec4').classList.remove('active');
            document.querySelector('#projGallerySec5').classList.remove('active');
        } else if (window.pageYOffset > 4800 && window.pageYOffset < 5200) {
            document.querySelector('#projGallerySec1').classList.remove('active');
            document.querySelector('#projGallerySec2').classList.remove('active');
            document.querySelector('#projGallerySec3').classList.remove('active');
            document.querySelector('#projGallerySec4').classList.add('active');
            document.querySelector('#projGallerySec5').classList.add('active');
        }
        // console.log(window.pageYOffset)
    }
});