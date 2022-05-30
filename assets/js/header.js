//===============================
// 変数
//===============================
let ham = $('#js-hamburger');
let nav = $('#js-nav');

//===============================
// click
//===============================
ham.on('click', function () {
    ham.toggleClass('active')
    nav.toggleClass('active');
});
$('.header-overlay').on('click', function () {
    $('.header-overlay-sub').toggleClass('active')
});
$('.header-avatar').on('click', function () {
    $('.header-avatar-sub').toggleClass('active')
});
//===============================
// hover
//===============================
$('.header-notice').hover(
    function() {
        $('.header-notice-says').css('display', 'block');
    },
    function() {
        $('.header-notice-says').css('display', 'none');
    }
);

//===============================
// 関数
//===============================
feather.replace();