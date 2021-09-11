/*スリックスライダーのコード*/ 

$('.slider').slick({
    slidesToShow: 3,
    slideToScroll:3,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 768,  //ここでレスポンシブに対応
             settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
        }
   },{
        breakpoint: 480,
             settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
             }
        }
   ]

   
});