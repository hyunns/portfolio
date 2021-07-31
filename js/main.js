(function() {
    // intro 비디오 재생 위치
    $(window).scroll(function() {
        var video = $('video');
        var videoTop = video.offset().top;
        
        if($(this).scrollTop() >= videoTop) { video.get(0).play(); }
    });

    $(window).scroll(function(e) {
        e.preventDefault();

        if($(window).scrollTop() >= 50) {
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }
    });

    // 네비메뉴 페이지 이동
    $('#header .gnb .depth1>li>a').on('click', function(e) {
        e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 500);
    });

    scrollSec();

    // 스크롤시 해당 메뉴 밑줄 활성화
    function scrollSec() {
        let depth1Li= $('#header .gnb .depth1>li');
        let secOffset = [];
        let scOffset = 50;
        
        for(let i=1; i<6; i++) {
            secOffset.push($('.section0' + i).offset().top - scOffset);
        }

        $(window).scroll(function() {
            let sc = $(this).scrollTop();

            if(sc > secOffset[0]) { depth1Li.removeClass('active'); depth1Li.eq(0).addClass('active'); }
            if(sc > secOffset[1]) { depth1Li.removeClass('active'); depth1Li.eq(1).addClass('active'); }
            if(sc > secOffset[2]) { depth1Li.removeClass('active'); depth1Li.eq(2).addClass('active'); }
            if(sc > secOffset[3]) { depth1Li.removeClass('active'); depth1Li.eq(3).addClass('active'); }
            if(sc > secOffset[4]) { depth1Li.removeClass('active'); depth1Li.eq(4).addClass('active'); }
        }).trigger('scroll');
    }

    // intro 타이핑 효과
    const content = "안녕하세요.\n열정을 쏟을 준비가 된\n신입 웹 퍼블리셔 유아현입니다 :)";
    const introTxt = $('.section01 .txt_box .txt');
    let i = 0;

    function typing() {
        if (i < content.length) {
            let txt = content.charAt(i);
            introTxt[0].innerHTML += txt === '\n' ? '<br/>' : txt;
            i++;
        }
    }
    setInterval(typing, 140);

    $(window).scroll(function() {
        sc = $(window).scrollTop() + $(window).height() / 1.5;

        if(sc >= $('.section02').offset().top && sc <= $('.section03').offset().top) {
            $('.section02').addClass('on');
        } else if(sc >= $('.section03').offset().top && sc <= $('.section04').offset().top) {
            $('.section03').addClass('on');
        }

        if (sc >= $('.section04 .port01').offset().top && sc <= $('.section04 .port02').offset().top) {
            $('.section04 .port01').addClass('on');
        } else if (sc >= $('.section04 .port02').offset().top && sc <= $('.section04 .port03').offset().top) {
            $('.section04 .port02').addClass('on');
        } else if (sc >= $('.section04 .port03').offset().top && sc <= $('.section05').offset().top) {
            $('.section04 .port03').addClass('on');
        }
    }).trigger('scroll');

    // email copy
    $('.btn_copy').on('click', function() {
        var urlbox = $('#textbox_url' );
        urlbox.select();
        document.execCommand( 'Copy' );
        alert('E-mail 주소가 복사되었습니다.');
    });

    /******************* 태블릿 분기점 *********************/
    $('.m_btn_menu').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('on');
        $('.m_gnb').toggleClass('open');
    });

    // 네비메뉴 페이지 이동
    $('.m_gnb .m_depth1>li>a').on('click', function(e) {
        e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html, body').animate({scrollTop: $(this.hash).offset().top }, 500);
    });
})();