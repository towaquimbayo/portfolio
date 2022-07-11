$(document).ready(function () {
    var mainFloatSocials = $('#floatingSocials');
    mainFloatSocials.addClass('enter');
    mainFloatSocials.click(openElement);

    function openElement() {
        $('.linkedinIcon').toggleClass('enter');
        setTimeout(() => {
            $('.githubIcon').toggleClass('enter');
        }, 100);
        setTimeout(() => {
            $('.mailIcon').toggleClass('enter');
        }, 200);
    }

    mainFloatSocials.click(function () {
        $('#socialsIcon').toggleClass('bi-chat-fill');
        $('#socialsIcon').toggleClass('bi-x');
    });
});