//===============================
// include
//===============================
$(function(){
    $.ajaxSetup({cache:false});
    $("header").load("/include/header.html");
    $("footer").load("/include/footer.html");
});

//===============================
// 変数
//===============================
let current = $('.menu > li');

//===============================
// 関数
//===============================
feather.replace();

//===============================
// click
//===============================
current.on('click', function () {
    $(this).toggleClass('active');
});

$(function () {
    $('.tabMenu li').click(function () {
        var num = $('.tabMenu li').index(this);
        $('.tabMenu li').removeClass('active');
        $(this).addClass('active');
        $('.tabContent').removeClass('active').eq(num).addClass('active');
    });
});
$(function () {
    $('.activity-menu li').click(function () {
        var num = $('.activity-menu li').index(this);
        $('.activity-menu li').removeClass('active');
        $(this).addClass('active');
        $('.activity-content').removeClass('active').eq(num).addClass('active');
    });
});
$(function() {
    var height = $('.main-spec').offset().top;
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > height ) {
        $(".tabMenu").addClass('menu-fixed');
      } else {
        $(".tabMenu").removeClass('menu-fixed');
      }
    });
});
$(function(){
  $("#btn-alertClose").click(function() {
    $(".alert").fadeOut();
    $('body').css('overflow-y','auto');
  });
});