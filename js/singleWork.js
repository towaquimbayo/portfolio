// Constant variables
const currProjSliderImg = document.querySelector('#currProjSliderImg');
const nextProjSliderImg = document.querySelector('#nextProjSliderImg');
const projSliderImgArray = ['dowco-thumb.png', 'pontus-thumb.jpg', 'mymind-thumb.jpg', 'rtohomes-thumb.jpg', 'tudorconsulting-thumb.jpg'];
var currCount = 0;

var navLinksColor;
setTimeout(() => {
    navLinksColor = document.querySelectorAll('.navLink');
}, 500);

$(document).ready(function () {
    window.onscroll = function () {
        if (window.screen.width >= 1800) {
            if (window.pageYOffset >= 100 && window.pageYOffset < 1400) {
                changeNavColor();
            } else if (window.pageYOffset >= 2000 && window.pageYOffset < 2600) {
                activateProjImg1();
            } else if (window.pageYOffset > 2900 && window.pageYOffset < 3800) {
                activateProjImg2();
            } else if (window.pageYOffset > 4000 && window.pageYOffset < 4600) {
                activateProjImg3();
            } else if (window.pageYOffset > 5200 && window.pageYOffset < 6300) {
                activateProjImg4and5();
            } else {
                deactivateAllProjImgs();
            }
        } else if (window.screen.width < 1800 && window.screen.width >= 1300) {
            if (window.pageYOffset >= 100 && window.pageYOffset < 1500) {
                changeNavColor();
            } else if (window.pageYOffset >= 2000 && window.pageYOffset < 2600) {
                activateProjImg1();
            } else if (window.pageYOffset > 2800 && window.pageYOffset < 3200) {
                activateProjImg2();
            } else if (window.pageYOffset > 3600 && window.pageYOffset < 4000) {
                activateProjImg3();
            } else if (window.pageYOffset > 4200 && window.pageYOffset < 5000) {
                activateProjImg4and5();
            } else {
                deactivateAllProjImgs();
            }
        } else if (window.screen.width < 1300 && window.screen.width >= 992) {
            if (window.pageYOffset >= 100 && window.pageYOffset < 1600) {
                changeNavColor();
            } else if (window.pageYOffset >= 2000 && window.pageYOffset < 2600) {
                activateProjImg1();
            } else if (window.pageYOffset > 2800 && window.pageYOffset < 3200) {
                activateProjImg2();
            } else if (window.pageYOffset > 3600 && window.pageYOffset < 4000) {
                activateProjImg3();
            } else if (window.pageYOffset > 4200 && window.pageYOffset < 5000) {
                activateProjImg4and5();
            } else {
                deactivateAllProjImgs();
            }
        } else if (window.screen.width < 992 && window.screen.width >= 768) {
            if (window.pageYOffset >= 2400 && window.pageYOffset < 2800) {
                activateProjImg1();
            } else if (window.pageYOffset > 3000 && window.pageYOffset < 3400) {
                activateProjImg2();
            } else if (window.pageYOffset > 3500 && window.pageYOffset < 4000) {
                activateProjImg3();
            } else if (window.pageYOffset > 4100 && window.pageYOffset < 4800) {
                activateProjImg4and5();
            } else {
                deactivateAllProjImgs();
            }
        } else if (window.screen.width < 768 && window.screen.width >= 576) {
            if (window.pageYOffset >= 2400 && window.pageYOffset < 2800) {
                activateProjImg1();
            } else if (window.pageYOffset > 2800 && window.pageYOffset < 3200) {
                activateProjImg2();
            } else if (window.pageYOffset > 3200 && window.pageYOffset < 3600) {
                activateProjImg3();
            } else if (window.pageYOffset > 3600 && window.pageYOffset < 4200) {
                activateProjImg4and5();
            } else {
                deactivateAllProjImgs();
            }
        } else if (window.screen.width < 576) {
            if (window.pageYOffset >= 2600 && window.pageYOffset < 3000) {
                activateProjImg1();
            } else if (window.pageYOffset > 3000 && window.pageYOffset < 3400) {
                activateProjImg2();
            } else if (window.pageYOffset > 3400 && window.pageYOffset < 3800) {
                activateProjImg3();
            } else if (window.pageYOffset > 3800 && window.pageYOffset < 4200) {
                activateProjImg4();
            } else if (window.pageYOffset > 4200 && window.pageYOffset < 4600) {
                activateProjImg5();
            } else {
                deactivateAllProjImgs();
            }
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

// Set active state for project 1 image section
function activateProjImg1() {
    for (var i = 0; i < navLinksColor.length; i++) {
        navLinksColor[i].classList.remove('changeBg');
    }
    document.querySelector('#projGallerySec1').classList.add('active');
    document.querySelector('#projGallerySec2').classList.remove('active');
    document.querySelector('#projGallerySec3').classList.remove('active');
    document.querySelector('#projGallerySec4').classList.remove('active');
    document.querySelector('#projGallerySec5').classList.remove('active');
}

// Set active state for project 2 image section
function activateProjImg2() {
    for (var i = 0; i < navLinksColor.length; i++) {
        navLinksColor[i].classList.remove('changeBg');
    }
    document.querySelector('#projGallerySec1').classList.remove('active');
    document.querySelector('#projGallerySec2').classList.add('active');
    document.querySelector('#projGallerySec3').classList.remove('active');
    document.querySelector('#projGallerySec4').classList.remove('active');
    document.querySelector('#projGallerySec5').classList.remove('active');
}

// Set active state for project 3 image section
function activateProjImg3() {
    for (var i = 0; i < navLinksColor.length; i++) {
        navLinksColor[i].classList.remove('changeBg');
    }
    document.querySelector('#projGallerySec1').classList.remove('active');
    document.querySelector('#projGallerySec2').classList.remove('active');
    document.querySelector('#projGallerySec3').classList.add('active');
    document.querySelector('#projGallerySec4').classList.remove('active');
    document.querySelector('#projGallerySec5').classList.remove('active');
}

// Set active state for project 4 image section
function activateProjImg4() {
    for (var i = 0; i < navLinksColor.length; i++) {
        navLinksColor[i].classList.remove('changeBg');
    }
    document.querySelector('#projGallerySec1').classList.remove('active');
    document.querySelector('#projGallerySec2').classList.remove('active');
    document.querySelector('#projGallerySec3').classList.remove('active');
    document.querySelector('#projGallerySec4').classList.add('active');
    document.querySelector('#projGallerySec5').classList.remove('active');
}

// Set active state for project 5 image section
function activateProjImg5() {
    for (var i = 0; i < navLinksColor.length; i++) {
        navLinksColor[i].classList.remove('changeBg');
    }
    document.querySelector('#projGallerySec1').classList.remove('active');
    document.querySelector('#projGallerySec2').classList.remove('active');
    document.querySelector('#projGallerySec3').classList.remove('active');
    document.querySelector('#projGallerySec4').classList.remove('active');
    document.querySelector('#projGallerySec5').classList.add('active');
}

// Set active state for project 4 and 5 image section
function activateProjImg4and5() {
    for (var i = 0; i < navLinksColor.length; i++) {
        navLinksColor[i].classList.remove('changeBg');
    }
    document.querySelector('#projGallerySec1').classList.remove('active');
    document.querySelector('#projGallerySec2').classList.remove('active');
    document.querySelector('#projGallerySec3').classList.remove('active');
    document.querySelector('#projGallerySec4').classList.add('active');
    document.querySelector('#projGallerySec5').classList.add('active');
}

// Set active state for project 5 image section
function deactivateAllProjImgs() {
    for (var i = 0; i < navLinksColor.length; i++) {
        navLinksColor[i].classList.remove('changeBg');
    }
    document.querySelector('#projGallerySec1').classList.remove('active');
    document.querySelector('#projGallerySec2').classList.remove('active');
    document.querySelector('#projGallerySec3').classList.remove('active');
    document.querySelector('#projGallerySec4').classList.remove('active');
    document.querySelector('#projGallerySec5').classList.remove('active');
}

// Deactivate all project image sections and set nav link bg color active
function changeNavColor() {
    for (var i = 0; i < navLinksColor.length; i++) {
        navLinksColor[i].classList.add('changeBg');
    }
    document.querySelector('#projGallerySec1').classList.remove('active');
    document.querySelector('#projGallerySec2').classList.remove('active');
    document.querySelector('#projGallerySec3').classList.remove('active');
    document.querySelector('#projGallerySec4').classList.remove('active');
    document.querySelector('#projGallerySec5').classList.remove('active');
}