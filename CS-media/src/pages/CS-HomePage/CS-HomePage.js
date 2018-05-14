/**
 * Created by novonity on 2017/11/24.
 */
$(document).ready(function () {

    $('.anchor img').hover(function () {
        $('.artists-introduce').hide();
        console.log($(this).attr('src'))
        $(this).nextAll('div').show();
    })

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

    var data = [
        [{title: '<div class="test-one-one">传世传媒</div>', time: '2017-10-10',
            content:'创世传媒（Genesis media）国际电影电视剧投资融资演艺集团，资本雄厚的优势，吸纳海内外资金，荟萃国内外优秀的影视精英，立足国内影视市场，开拓国际市场。'},
            {title: '<div class="test-one-two">全民直播时代轰然到来</div>', time: '2017-10-01',
                content:'在资本骤然转冷的2016年春天，直播平台却亢奋地生长着，让主播、粉丝和资本都为之疯狂。随着社交媒体、智能手机、4G网络的发展，网络直播正在成为新一轮互联网巨头和创业者们争夺的新战场...'},
            {title: '<div class="test-one-three">Liia-我就是爱音乐,别让我停下来</div>', time: '2017-09-09',
                content:'我就是爱音乐 别叫我停下来 我就是爱唱歌 呼吸打着节拍 我心里的热情 是我的指南针 要快乐就快乐 做什么都认真 不要在意我是谁 不要以为我很遥远 不要怀疑我的嘴 每一句都任性跳跃~'},
            {title: '<div class="test-one-four">赵翔宇:一个外表女神,内心呆萌...</div>', time: '2017-04-08',
                content:'外表清新脱俗，气质非凡，宛若九天之上的仙女。她拥有一副在人群中一眼就能注意到的美丽面孔和身材。爱唱歌，也爱跳舞。外表女神的她却是一个一秒钟出戏的呆萌美少女...'},
            {title: '<div class="test-one-five">直播平台快速崛起,未来该如何...</div>', time: '2017-03-18',
                content:'前两天，朋友老宋给我打电话过来，说是想聊直播平台的事。据说，某直播平台向他发出邀请，让他以主播的身份入驻平台，实时直播自己的旅行生活，甚至给他开出了每月4500元的工资，前提是每个月直播时长要保证在80个小时以上...'}],
        [{title: '<div class="test-one-one">遇见大主播</div>', time: '2017-10-10',
            content:'创世传媒（Genesis media）国际电影电视剧投资融资演艺集团，资本雄厚的优势，吸纳海内外资金，荟萃国内外优秀的影视精英，立足国内影视市场，开拓国际市场。'},
            {title: '<div class="test-one-two">主播的日常生活</div>', time: '2017-10-01',
                content:'在资本骤然转冷的2016年春天，直播平台却亢奋地生长着，让主播、粉丝和资本都为之疯狂。随着社交媒体、智能手机、4G网络的发展，网络直播正在成为新一轮互联网巨头和创业者们争夺的新战场...'},
            {title: '<div class="test-one-three">星光大道，我就是主播</div>', time: '2017-09-09',
                content:'我就是爱音乐 别叫我停下来 我就是爱唱歌 呼吸打着节拍 我心里的热情 是我的指南针 要快乐就快乐 做什么都认真 不要在意我是谁 不要以为我很遥远 不要怀疑我的嘴 每一句都任性跳跃~'},
            {title: '<div class="test-one-four">主播成名曲</div>', time: '2017-04-08',
                content:'外表清新脱俗，气质非凡，宛若九天之上的仙女。她拥有一副在人群中一眼就能注意到的美丽面孔和身材。爱唱歌，也爱跳舞。外表女神的她却是一个一秒钟出戏的呆萌美少女...'},
            {title: '<div class="test-one-five">感谢观众大老爷</div>', time: '2017-03-18',
                content:'前两天，朋友老宋给我打电话过来，说是想聊直播平台的事。据说，某直播平台向他发出邀请，让他以主播的身份入驻平台，实时直播自己的旅行生活，甚至给他开出了每月4500元的工资，前提是每个月直播时长要保证在80个小时以上...'}],
        [{title: '<div class="test-one-one">主播升职记</div>', time: '2017-10-10',
            content:'创世传媒（Genesis media）国际电影电视剧投资融资演艺集团，资本雄厚的优势，吸纳海内外资金，荟萃国内外优秀的影视精英，立足国内影视市场，开拓国际市场。'},
            {title: '<div class="test-one-two">全民直播时代轰然到来</div>', time: '2017-10-01',
                content:'在资本骤然转冷的2016年春天，直播平台却亢奋地生长着，让主播、粉丝和资本都为之疯狂。随着社交媒体、智能手机、4G网络的发展，网络直播正在成为新一轮互联网巨头和创业者们争夺的新战场...'},
            {title: '<div class="test-one-three">Liia-我就是爱音乐,别让我停下来</div>', time: '2017-09-09',
                content:'我就是爱音乐 别叫我停下来 我就是爱唱歌 呼吸打着节拍 我心里的热情 是我的指南针 要快乐就快乐 做什么都认真 不要在意我是谁 不要以为我很遥远 不要怀疑我的嘴 每一句都任性跳跃~'},
            {title: '<div class="test-one-four">赵翔宇:一个外表女神,内心呆萌...</div>', time: '2017-04-08',
                content:'外表清新脱俗，气质非凡，宛若九天之上的仙女。她拥有一副在人群中一眼就能注意到的美丽面孔和身材。爱唱歌，也爱跳舞。外表女神的她却是一个一秒钟出戏的呆萌美少女...'},
            {title: '<div class="test-one-five">那个爱跳舞的大主播</div>', time: '2017-03-18',
                content:'前两天，朋友老宋给我打电话过来，说是想聊直播平台的事。据说，某直播平台向他发出邀请，让他以主播的身份入驻平台，实时直播自己的旅行生活，甚至给他开出了每月4500元的工资，前提是每个月直播时长要保证在80个小时以上...'}],
        [{title: '<div class="test-one-one">直播平台的崛起，人们的趣味生活</div>', time: '2017-10-10',
            content:'创世传媒（Genesis media）国际电影电视剧投资融资演艺集团，资本雄厚的优势，吸纳海内外资金，荟萃国内外优秀的影视精英，立足国内影视市场，开拓国际市场。'},
            {title: '<div class="test-one-two">每个人都是大主播</div>', time: '2017-10-01',
                content:'在资本骤然转冷的2016年春天，直播平台却亢奋地生长着，让主播、粉丝和资本都为之疯狂。随着社交媒体、智能手机、4G网络的发展，网络直播正在成为新一轮互联网巨头和创业者们争夺的新战场...'},
            {title: '<div class="test-one-three">在直播平台唱歌</div>', time: '2017-09-09',
                content:'我就是爱音乐 别叫我停下来 我就是爱唱歌 呼吸打着节拍 我心里的热情 是我的指南针 要快乐就快乐 做什么都认真 不要在意我是谁 不要以为我很遥远 不要怀疑我的嘴 每一句都任性跳跃~'},
            {title: '<div class="test-one-four">赵翔宇:一个外表女神,内心呆萌...</div>', time: '2017-04-08',
                content:'外表清新脱俗，气质非凡，宛若九天之上的仙女。她拥有一副在人群中一眼就能注意到的美丽面孔和身材。爱唱歌，也爱跳舞。外表女神的她却是一个一秒钟出戏的呆萌美少女...'},
            {title: '<div class="test-one-five">你有时间，我有快乐。</div>', time: '2017-03-18'
                ,content:'前两天，朋友老宋给我打电话过来，说是想聊直播平台的事。据说，某直播平台向他发出邀请，让他以主播的身份入驻平台，实时直播自己的旅行生活，甚至给他开出了每月4500元的工资，前提是每个月直播时长要保证在80个小时以上...'}]
    ];
    $('#test').showCwList(data, {cwListCallback: function (data) {
        $("#test-content").empty();
        $("#test-content").append('<span style="font-weight: bold">'+data.title+'</span><br>' +
            ' <span style="font-weight: bold; line-height: 0px">'+data.time+'</span><br>' +
            ' <div style="margin-top: 20px; line-height: 28px"> <span>'+data.content+'</span> </div>');
    }});

    $("#test-content").append('<span style="font-weight: bold">'+data[0][0].title+'</span><br>' +
        ' <span style="font-weight: bold; line-height: 0px">'+data[0][0].time+'</span><br>' +
        ' <div style="margin-top: 20px; line-height: 28px"> <span>'+data[0][0].content+'</span> </div>');




    scrollShow(".mainTitle-animation", 'mainTitle-animation-style', 350);
    scrollShow(".subTitle-animation", 'subTitle-animation-style', 350);
    scrollShow(".title-more-animation", 'title-more-animation-style', 350);
    scrollShow(".direction-animation", 'direction-animation-style', 350);

    $(window).scroll(function () {
        scrollHome(".mainTitle-animation", 'mainTitle-animation-style', 450);
        scrollHome(".subTitle-animation", 'subTitle-animation-style', 450);
        scrollHome(".title-more-animation", 'title-more-animation-style', 450);
        scrollHome(".direction-animation", 'direction-animation-style', 450);
        // console.log(document.body.clientHeight)
    });

    $(window).scroll(function () {
       scrollShow("#WHO-WE-ARE .who-we-are-text", 'who-we-are-left', 350);
    });

    scrollShow("#WHO-WE-ARE .who-we-are-text", 'who-we-are-left', 350);

    $(window).scroll(function () {
        scrollShow("#WHO-WE-ARE .who-we-are-pic", 'who-we-are-right', 350)
    });

    scrollShow("#WHO-WE-ARE .who-we-are-pic", 'who-we-are-right', 350);

    $(window).scroll(function () {
       scrollShow(".what-we-do-title",'what-we-do-up', 100)
    });

    scrollShow(".what-we-do-title",'what-we-do-up', 100);

    $(window).scroll(function () {
       scrollShow(".section-left", 'about-us-left', 200)
    });

    scrollShow(".section-left", 'about-us-left', 200);

    $(window).scroll(function () {
       scrollShow(".section-right", 'about-us-right', 200)
    });

    scrollShow(".section-right", 'about-us-right', 200);

    $(window).scroll(function () {
       scrollShow(".sliderPic",'artist', 400)
    });

    scrollShow(".sliderPic",'artist', 426);

    $(window).scroll(function () {
        scrollShow(".slider-text", 'more-artist', 100)
    });

    scrollShow(".slider-text", 'more-artist', 200);

    $(window).scroll(function () {
       scrollShow(".artist-video-animation1", 'artist-video-animation-style1', 370);
    });

    scrollShow(".artist-video-animation1", 'artist-video-animation-style1', 370);

    $(window).scroll(function () {
        scrollShow(".artist-video-animation2", 'artist-video-animation-style2', 370)
    });

    scrollShow(".artist-video-animation2", 'artist-video-animation-style2', 370);

    $(window).scroll(function () {
        scrollShow(".artist-video-animation3", 'artist-video-animation-style3', 370)
    });

    scrollShow(".artist-video-animation3", 'artist-video-animation-style3', 370);

    $(window).scroll(function () {
        scrollShow(".artist-video-animation4", 'artist-video-animation-style4', 370)
    });

    scrollShow(".artist-video-animation4", 'artist-video-animation-style4', 370);

    $(window).scroll(function () {
        scrollShow(".artist-video-animation5", 'artist-video-animation-style5', 370)
    });

    scrollShow(".artist-video-animation5", 'artist-video-animation-style5', 370);

    $(window).scroll(function () {
        scrollShow(".artist-video-animation6", 'artist-video-animation-style6', 370)
    });

    scrollShow(".artist-video-animation6", 'artist-video-animation-style6', 370);

    $(window).scroll(function () {
       scrollShow(".information-title", 'information-title-style', 100)
    });

    $(window).scroll(function () {
        scrollShow(".information-pic", 'information-pic-style', 100)
    });

    $(window).scroll(function () {
        scrollShow(".information-text", 'information-text-style', 100)
    });

    setIndexScreen1Height();
    setIndexScreen2MarginTop();

});

$(window).resize(function () {
    setIndexScreen1Height();
});

function setIndexScreen1Height() {
    $('#indexScreen1').css("height", document.body.clientHeight);
}

function setIndexScreen2MarginTop() {
    $('#indexScreen2').css("margin-top", document.body.clientHeight);
}

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
        '<div style="position: absolute;right: -25px;top: -20px;" id="close"><img src="../../../public/images/close.png" style="width: 20px; opacity: 0.5;" onmousemove="this.style.opacity=0.9" onmouseout="this.style.opacity=0.5"/></div>'
}


function scrollShow(div,cssname,offset) {
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

function scrollHome(div, cssname, offset) {
    var a;
    a = $(window).scrollTop();
    console.log(a);
    if(a<500){
        $((div)).addClass((cssname));
    }
    else{ $((div)).removeClass((cssname))}
}



