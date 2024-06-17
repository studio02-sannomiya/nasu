// // 会社沿革の横スライド
// const swiper = new Swiper('.swiper', {
//     loop: true,
//     autoplay: {
//         reverseDirection: true,
//     },
//     speed: 70000,
//     pauseOnMouseEnter: true,

// });


(function () {
    let speed = 70000;
    const reverseValue = true; // 逆方向の設定を追加

    const mySwiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 'auto',
        speed: speed,
        // spaceBetween: 10,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: reverseValue, // 逆方向の設定を追加
        },
        reverseDirection: reverseValue, // 逆方向の設定を追加
    });

    let getTranslate;

    document.querySelectorAll('.swiper').forEach(function (e) {
        e.addEventListener('mouseover', function () {
            getTranslate = mySwiper.getTranslate();
            mySwiper.setTranslate(getTranslate);
            mySwiper.setTransition(0);
        });

        e.addEventListener('mouseout', function () {
            getTranslate = mySwiper.getTranslate();

            let getSlideWidthMgLeft = document.querySelector('.swiper-slide-active').style.marginLeft;
            if (getSlideWidthMgLeft) {
                getSlideWidthMgLeft = parseFloat(getSlideWidthMgLeft);
            } else {
                getSlideWidthMgLeft = 0;
            }

            let getSlideWidthMgRight = document.querySelector('.swiper-slide-active').style.marginRight;
            if (getSlideWidthMgRight) {
                getSlideWidthMgRight = parseFloat(getSlideWidthMgRight);
            } else {
                getSlideWidthMgRight = 0;
            }

            let getSlideWidth = document.querySelector('.swiper-slide-active').offsetWidth;

            let getTotalSlideWidth = getSlideWidthMgLeft + getSlideWidthMgRight + getSlideWidth;
            let diff = reverseValue ? getTotalSlideWidth - (getTranslate % getTotalSlideWidth) : -getTotalSlideWidth - (getTranslate % getTotalSlideWidth);
            let diffTime = Math.abs(diff) / getSlideWidth;
            mySwiper.setTranslate(getTranslate + diff);
            mySwiper.setTransition(speed * diffTime);
        });
    });
})();