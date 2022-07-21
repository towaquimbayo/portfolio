$(document).ready(function () {
    shuffleSkills();
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


const letsWork = $("#letsWork");
const scrollText = letsWork.find("#scrollingText");
const clonedList = scrollText.clone();
var listWidth = 100;

scrollText.find("li").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
});

var endPos = letsWork.width() - listWidth;

console.log(listWidth)

scrollText.add(clonedList).css({
    "width": listWidth + "px"
});

clonedList.addClass("cloned").appendTo(letsWork);

//TimelineMax
var infinite = new TimelineMax({ repeat: -1, paused: true });
var time = 15;

infinite
    .fromTo(scrollText, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
    .fromTo(clonedList, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
    .set(scrollText, { force3D: true, rotation: 0.01, x: listWidth })
    .to(clonedList, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
    .to(scrollText, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
    .progress(1).progress(0)
    .play();

//Pause/Play		
letsWork.on("mouseenter", function () {
    infinite.pause();
}).on("mouseleave", function () {
    infinite.play();
});






// $(window).scroll(function () {
//     const windowScroll = $(window).scrollTop();
//     console.log(windowScroll / 100 + "vw")
//     const techToolSec = "translateX(" + windowScroll / 60 + "vw)";

//     $('#scrollTechTools').css({
//         transform: techToolSec
//     });
// });