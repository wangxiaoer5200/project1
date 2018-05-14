/**
 * Created by novonity on 2017/12/6.
 */


$(document).ready(function () {
    $(window).scroll(function () {
        scrollAction(".section-left","recruitment-left",100);
        scrollAction(".section-right","recruitment-right",100);
        scrollAction(".arrow-animation", "arrow-animation-style",100);
    });
    scrollAction(".section-left","recruitment-left",0);
    scrollAction(".section-right","recruitment-right",0);
    scrollAction(".arrow-animation", "arrow-animation-style",0);
});

function scrollAction(div,cssname,offset) {
    var a,b,c,d;
    d=$(div).offset().top;
    a=eval(d+offset);
    b=$(window).scrollTop();
    c=window.screen.availHeight;
    if(b+c>d&&a>b){
        $((div)).addClass((cssname));
    }
    else{ $((div)).removeClass((cssname))}
}