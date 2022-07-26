// Variables for changing bg / text color 
const techToolsText = document.querySelectorAll('.toolsGridBox h2');
const letsWorkText = document.querySelectorAll('.scrollContainer h2');
const scrollingTextContainer = document.querySelectorAll('.scrollingText');

// Set time to let content load first
var navLinksColor;
setTimeout(() => {
    navLinksColor = document.querySelectorAll('.navLink');
}, 500);

var socialIcons;
setTimeout(() => {
    socialIcons = document.querySelectorAll('.contactIcon');
}, 300);

var socialIconsColor;
setTimeout(() => {
    socialIconsColor = document.querySelectorAll('.contactIcon i');
}, 300);

var letsWorkTextCloned;
setTimeout(() => {
    letsWorkTextCloned = document.querySelectorAll('.cloned .scrollContainer h2');
}, 300);


// Variables for lets work scrolling event
const letsWork = $("#letsWork");
const scrollText = letsWork.find(".scrollingText");
const clonedList = scrollText.clone();
var listWidth = 100;
const endPos = letsWork.width() - listWidth;
const infinite = new TimelineMax({
    repeat: -1,
    paused: true
});
const time = 30;

// Tech Tools transformation on scroll
const techTools = $('#scrollTechTools')
const transform = parseInt(techTools.css('transform').split(',')[5]);

$(document).ready(function () {
    shuffleSkills();

    window.onscroll = function () {
        if (window.pageYOffset > 3700 && window.pageYOffset < 4700) {
            document.querySelector('#wrapper').classList.add('changeBg');
            document.querySelector('#scrollTechTools').classList.add('changeBg');
            for (var i = 0; i < techToolsText.length; i++) {
                techToolsText[i].classList.add('changeBg');
            }
            document.querySelector('#contactContent p').classList.add('changeBg');
            for (var i = 0; i < letsWorkText.length; i++) {
                letsWorkText[i].classList.add('changeBg');
            }
            for (var i = 0; i < scrollingTextContainer.length; i++) {
                scrollingTextContainer[i].classList.add('changeBg');
            }
            // Set time to let cloend content load first
            setTimeout(() => {
                document.querySelector('.cloned').classList.add('changeBg');
            }, 300);
            for (var i = 0; i < letsWorkTextCloned.length; i++) {
                letsWorkTextCloned[i].classList.add('changeBg');
            }
            for (var i = 0; i < navLinksColor.length; i++) {
                navLinksColor[i].classList.add('changeBg');
            }
            for (var i = 0; i < socialIcons.length; i++) {
                socialIcons[i].classList.add('changeBg');
            }
            for (var i = 0; i < socialIconsColor.length; i++) {
                socialIconsColor[i].classList.add('changeBg');
            }
        } else {
            document.querySelector('#wrapper').classList.remove('changeBg');
            document.querySelector('#scrollTechTools').classList.remove('changeBg');
            for (var i = 0; i < techToolsText.length; i++) {
                techToolsText[i].classList.remove('changeBg');
            }
            document.querySelector('#contactContent p').classList.remove('changeBg');
            for (var i = 0; i < letsWorkText.length; i++) {
                letsWorkText[i].classList.remove('changeBg');
            }
            for (var i = 0; i < scrollingTextContainer.length; i++) {
                scrollingTextContainer[i].classList.remove('changeBg');
            }
            // Set time to let cloend content load first
            setTimeout(() => {
                document.querySelector('.cloned').classList.remove('changeBg');
            }, 300);
            for (var i = 0; i < letsWorkTextCloned.length; i++) {
                letsWorkTextCloned[i].classList.remove('changeBg');
            }
            for (var i = 0; i < navLinksColor.length; i++) {
                navLinksColor[i].classList.remove('changeBg');
            }
            for (var i = 0; i < socialIcons.length; i++) {
                socialIcons[i].classList.remove('changeBg');
            }
            for (var i = 0; i < socialIconsColor.length; i++) {
                socialIconsColor[i].classList.remove('changeBg');
            }
        }

        techTools.css({
            "transform": "translateX(-" + transform + ($(window).scrollTop() - 3500) + "px)"
        });
    }
});

setInterval(shuffleSkills, 3000);

function shuffleSkills() {
    var skillList = $(".skillContainer").removeClass("active");
    $(shuffle(skillList).slice(0, 2)).addClass("active");
}

function shuffle(array) {
    var remain = array.length, x, randSkill;
    while (remain) {
        // Pick random skill that is not active
        randSkill = Math.floor(Math.random() * remain--);

        // Swap it with the current skills
        x = array[remain];
        array[remain] = array[randSkill];
        array[randSkill] = x;
    }

    return array;
}

scrollText.find("li").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
});

scrollText.add(clonedList).css({
    "width": listWidth + "px"
});

clonedList.addClass("cloned").appendTo(letsWork);

// TimelineMax for lets work scrolling event
infinite
    .fromTo(scrollText, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
    .fromTo(clonedList, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
    .set(scrollText, { force3D: true, rotation: 0.01, x: listWidth })
    .to(clonedList, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
    .to(scrollText, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
    .progress(1).progress(0)
    .play();

// Pause and Play for lets work scrolling event
letsWork.on("mouseenter", function () {
    infinite.pause();
}).on("mouseleave", function () {
    infinite.play();
});