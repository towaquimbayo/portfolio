// Constant variables
const currProjSliderImg = document.querySelector('#currProjSliderImg');
const nextProjSliderImg = document.querySelector('#nextProjSliderImg');
const projSliderImgArray = ['dowco-thumb.png', 'pontus-thumb.jpg', 'mymind-thumb.jpg', 'rtohomes-thumb.jpg', 'tudorconsulting-thumb.jpg'];
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
    $('#projPrevNav').off();
    $('#projPrevNav').click(function () {
        clearInterval(projSliderInterval);
        currProjSliderImg.className = 'fadeTransition';
        nextProjSliderImg.className = 'fadeTransition';
        setTimeout(() => {
            currProjSliderImg.className = null;
            nextProjSliderImg.className = null;
            if (currCount <= 0) {
                currCount = projSliderImgArray.length;
            }
            currCount--;
            setProjSliderImg();
        }, 500);
        projSliderInterval = setInterval(() => {
            if (currCount >= projSliderImgArray.length - 1) {
                currCount = -1;
            }
            currCount++;
            setProjSliderImg();
        }, 7000);
    });

    $('#projNextNav').off();
    $('#projNextNav').click(function () {
        clearInterval(projSliderInterval);
        currProjSliderImg.className = 'fadeTransition';
        nextProjSliderImg.className = 'fadeTransition';
        setTimeout(() => {
            currProjSliderImg.className = null;
            nextProjSliderImg.className = null;
            if (currCount >= projSliderImgArray.length - 1) {
                currCount = -1;
            }
            currCount++;
            setProjSliderImg();
        }, 500);
        projSliderInterval = setInterval(() => {
            if (currCount >= projSliderImgArray.length - 1) {
                currCount = -1;
            }
            currCount++;
            setProjSliderImg();
        }, 7000);
    });
});

// Every 7s it changes project gallery
var projSliderInterval = setInterval(() => {
    if (currCount >= projSliderImgArray.length - 1) {
        currCount = -1;
    }
    currCount++;
    setProjSliderImg();
}, 7000);

function setProjSliderImg() {
    currProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[currCount]);
    nextProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[currCount + 1]);
    if (currCount == projSliderImgArray.length - 1) {
        nextProjSliderImg.setAttribute('src', '../img/' + projSliderImgArray[0]);
    }

    // Change Project Title and link
    if (currProjSliderImg.getAttribute('src') == '../img/' + projSliderImgArray[0]) {
        document.getElementById('projSliderTitle').innerHTML = 'Dowco';
        document.getElementById('projSliderLink').setAttribute('href', '/dowco/');
    } else if (currProjSliderImg.getAttribute('src') == '../img/' + projSliderImgArray[1]) {
        document.getElementById('projSliderTitle').innerHTML = 'Pontus';
        document.getElementById('projSliderLink').setAttribute('href', '/pontus/');
    } else if (currProjSliderImg.getAttribute('src') == '../img/' + projSliderImgArray[2]) {
        document.getElementById('projSliderTitle').innerHTML = 'MyMind';
        document.getElementById('projSliderLink').setAttribute('href', '/mymind/');
    } else if (currProjSliderImg.getAttribute('src') == '../img/' + projSliderImgArray[3]) {
        document.getElementById('projSliderTitle').innerHTML = 'RTO Homes';
        document.getElementById('projSliderLink').setAttribute('href', '/rtohomes/');
    } else if (currProjSliderImg.getAttribute('src') == '../img/' + projSliderImgArray[4]) {
        document.getElementById('projSliderTitle').innerHTML = 'Tudor Consulting';
        document.getElementById('projSliderLink').setAttribute('href', '/tudorconsulting/');
    }
}