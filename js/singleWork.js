// Constant variables
const currProjSliderImg = document.querySelector('#currProjSliderImg');
const nextProjSliderImg = document.querySelector('#nextProjSliderImg');
const projSliderImgArray = ['dowco-thumb.png', 'pontus-thumb.jpg', 'mymind-thumb.jpg', 'rtohomes-thumb.jpg'];
var currCount = 0;

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
    }

    // Project Slider Controls
    $('#projPrevNav').click(function () {
        if (currCount <= 0) {
            currCount = projSliderImgArray.length;
        } 
        currCount--;
        currProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[currCount]);
        nextProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[currCount + 1]);
        if (currCount == projSliderImgArray.length - 1) {
            nextProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[0]);
        }
    });

    $('#projNextNav').click(function () {
        if (currCount >= projSliderImgArray.length - 1) {
            currCount = -1;
        }
        currCount++;
        currProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[currCount]);
        nextProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[currCount + 1]);
        if (currCount == projSliderImgArray.length - 1) {
            nextProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[0]);
        }
    });
});