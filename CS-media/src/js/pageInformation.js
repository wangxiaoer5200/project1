(function ($) {

    var defaultColor = "black";
    var selectColor = "red";
    var defaultPagingNumber = 0;
    var cwListCallback;

    var datas;

    $.fn.showCwList = function (data, options) {
        $(this).append("<ul class='cs-list'></ul><div class='cw-list-pull-right'></div>");
        datas = data;
        if (options) {
            if (options.defaultColor) {
                defaultColor = options.defaultColor;
            }

            if (options.selectColor) {
                selectColor = options.selectColor;
            }

            if (options.defaultPagingNumber) {
                defaultPagingNumber = options.defaultPagingNumber;
            }
            cwListCallback = options.cwListCallback;
        }

        changeCwContent(defaultPagingNumber);
    };

    function changeCwContent(pagingNumber) {
        addList(datas, pagingNumber);
        addPagingContent(pagingNumber, datas.length);
    }

    function addList(datas, pagingNumber) {
        clearList();
        $('.cs-list').html(getCwListDomHtml(datas[pagingNumber]));
        setFirstLiDefaultSelect();
        addClickEvent();
    }

    function addPagingContent(pagingNumber, totalPagingNumber) {
        clearPagingContent();
        $('.cw-list-pull-right').html(getCwPagingDomHtml(pagingNumber, totalPagingNumber));
        addPagingSpanClickEvent();
    }

    function addPagingSpanClickEvent() {
        $('.cw-list-paging-pre-span').click(function () {
            var currentPageNumber = getCurrentPageNumber();
            if (currentPageNumber < 2) {
                return;
            }
            changeCwContent(getCurrentPageNumber() - 2);
        });

        $('.cw-list-paging-next-span').click(function () {
            var currentPageNumber = getCurrentPageNumber();
            if (currentPageNumber == datas.length) {
                return;
            }
                changeCwContent(getCurrentPageNumber());
        })
    }

    function setFirstLiDefaultSelect() {
        $('.cs-list li').first().css("color", selectColor);
    }

    function addClickEvent() {
        $('.cs-list li').click(function () {
            cwListCallback && cwListCallback(datas[getCurrentPageNumber() - 1][$(this).index()]);
            $('.cs-list li').css("color", defaultColor);
            $(this).css("color", selectColor);
        });
    }

    function getCwListDomHtml(datas) {
        var html = "";
        for (var i = 0; i <= datas.length - 1; i++) {
            html += "<li>"
                + "<h4>" + datas[i].title + "</h4>"
                + "<span>" + datas[i].time + "</span>"
                + "</li>"
        }
        return html;
    }

    function getCwPagingDomHtml(pagingNumber, totalNumber) {
        return "<span class='cw-list-paging-number'>"
            + "<span class='cw-list-paging-current-number'>" + (parseInt(pagingNumber) + 1) + "</span>/" + totalNumber + "页</span>"
            + whetherShowPreSpan(pagingNumber)
            + whetherShowNextSpan(pagingNumber, totalNumber);
    }

    function whetherShowPreSpan(pagingNumber) {
        return ("<span class='cw-list-paging-oper-span cw-list-paging-pre-span'>" + "< 上一页" + "</span>");
    }

    function whetherShowNextSpan(pagingNumber, totalNumber) {
        return "<span class='cw-list-paging-oper-span cw-list-paging-next-span " + whetherShowNextSpanLeftBorder(pagingNumber) + "'>" + "下一页 >" + "</span>";
    }

    function whetherShowNextSpanLeftBorder(pagingNumber) {
        return pagingNumber ? "" : "cw-list-left-border-span";
    }

    function getCurrentPageNumber() {
        return parseInt($('.cw-list-paging-current-number').html());
    }

    function clearList() {
        $('.cs-list').empty();
    }

    function clearPagingContent() {
        $('.cw-list-pull-right').empty();
    }

})(jQuery);

