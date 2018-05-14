/**
 * Created by novonity on 2017/11/24.
 */
$(document).ready(function () {
    console.log($(window).height());
    console.log(document.body.clientHeight);
    $("#main-image").touchSlider({
        btn_prev: $("#btn_prev"),
        btn_next: $("#btn_next")
    });

    $("#creation-artist-video-one").click(function () {
        showVideo();
        $("#video-url").attr("src", "https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=f0565m10cvg&auto=0");
    });

    $("#creation-artist-video-two").click(function () {
        showVideo();
        $("#video-url").attr("src", "https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=f0565m10cvg&auto=0");
    });

    $("#creation-artist-video-three").click(function () {
        showVideo();
        $("#video-url").attr("src", "https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=f0565m10cvg&auto=0");
    });
    $("#creation-artist-video-four").click(function () {
        showVideo();
        $("#video-url").attr("src", "https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=f0565m10cvg&auto=0");
    });

    $("#creation-artist-video-five").click(function () {
        showVideo();
        $("#video-url").attr("src", "https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=f0565m10cvg&auto=0");
    });

    $("#creation-artist-video-six").click(function () {
        showVideo();
        $("#video-url").attr("src", "https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=f0565m10cvg&auto=0");
    });

    $(window).scroll(function () {
        scrollAction(".section-one-hidden","creation-artist-hidden",300);
    });
    $(window).scroll(function () {
        scrollAction(".creation-artist-slider-intro","creation-artist-from-right",300);
    });

    $(window).scroll(function () {
        scrollAction(".section-image-one","animation-image-one",400);
        scrollAction(".section-image-two","animation-image-two",400);
        scrollAction(".section-image-three","animation-image-three",400);
        scrollAction(".section-image-four","animation-image-four",400);
    });
    $(window).scroll(function () {
        scrollAction(".section-video-one-one","animation-image-one",400);
        scrollAction(".section-video-one-two","animation-image-two",400);
        scrollAction(".section-video-one-three","animation-image-three",400);
    });
    $(window).scroll(function () {
        scrollAction(".section-video-two-one","animation-image-one",400);
        scrollAction(".section-video-two-two","animation-image-two",400);
        scrollAction(".section-video-two-three","animation-image-three",400);
    });
    scrollAction(".section-one-hidden","creation-artist-hidden",300);
    scrollAction(".creation-artist-slider-intro","creation-artist-from-right",300);
    scrollAction(".section-image-one","animation-image-one",200);
    scrollAction(".section-image-two","animation-image-two",200);
    scrollAction(".section-image-three","animation-image-three",200);
    scrollAction(".section-image-four","animation-image-four",200);
    scrollAction(".section-video-one-one","animation-image-one",400);
    scrollAction(".section-video-one-two","animation-image-two",400);
    scrollAction(".section-video-one-three","animation-image-three",400);
    scrollAction(".section-video-two-one","animation-image-one",400);
    scrollAction(".section-video-two-two","animation-image-two",400);
    scrollAction(".section-video-two-three","animation-image-three",400);
});


function showVideo() {
    layer.open({
        maxmin: true,
        content: getContent()
    });
    $("#close").click(function () {
        layer.closeAll();
    })
}

function getContent() {
    return '<embed src="" allowFullScreen="true" quality="high" width="600" height="480" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" id="video-url"></embed>' +
        '<div style="position: absolute;right: -25px;top: -20px;" id="close"><img src="../../../public/images/close.png" style="width: 20px;opacity: 0.5;" onmousemove="this.style.opacity=0.9" onmouseout="this.style.opacity=0.5"/></div>'
}


function scrollAction(div,cssname,offset) {
    var a,b,c,d;
    d=$(div).offset().top;
    a=eval(d+offset);
    b=$(window).scrollTop();
    // c=$(window).height();
    c=window.screen.availHeight;
    if(b+c>d&&a>b){
        $((div)).addClass((cssname));
    }
    else{ $((div)).removeClass((cssname))}
}
