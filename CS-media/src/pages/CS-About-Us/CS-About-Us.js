/**
 * Created by novonity on 2017/11/24.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        scrollAction(".section-up","about-us-up",100);
    });
    $(window).scroll(function () {
        scrollAction(".section-left","about-us-left",100);
    });
    $(window).scroll(function () {
        scrollAction(".section-right","about-us-right",100);
    });
    scrollAction(".section-up","about-us-up",300);
    scrollAction(".section-left","about-us-left",300);
    scrollAction(".section-right","about-us-right",300);
});

function scrollAction(div,cssname,offset) {
    var a,b,c,d;
    d=$(div).offset().top;
    a=eval(d+offset);
    b=$(window).scrollTop();
    c=$(window).height();
    if(b+c>a){
        $((div)).addClass((cssname));
    }
}