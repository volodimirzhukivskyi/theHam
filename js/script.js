
$('.tabs-title').click(function() {
   let id = $(this).attr('data-tab'),
        content = $('.tab-content[data-tab="'+ id +'"]');

    $('.tabs-title').removeClass('active');
    $(this).addClass('active');

    $('.tab-content.active').removeClass('active');
    content.addClass('active');
});

let imageArray = document.getElementsByClassName("graphic-design");
$(imageArray).show()
$(function filter(){
    $(".work-tab-item").on("click",function (){
        $(".work-tab-item").removeClass("work-tab-item-active");
        $(".block-img-item").hide();
        $(this).addClass("work-tab-item-active");
        let imageArray = document.getElementsByClassName($(this).attr("data-type"));
        for (let index = 0; index < 12; index++) {
            if($(this).addClass("work-tab-item-active")){
            $(imageArray[index]).show();
        }
            if ($(imageArray).length <= 12) {
                $("#loadMore").hide();
            } else {
                $("#loadMore").show();
            }

        }

    });
});




let clicked=0
let picturesArray=document.getElementsByClassName("block-img-item")

$ (function loadMore(){
 $('#loadMore').on("click",function (event){
     clicked++;
     $("#loader").show();
     $("#loadMore").hide();
     if(clicked===1){
         setTimeout(function () {
             for (let index=12;index<24;index++){
                 $(picturesArray[index]).fadeIn("slow");
             }
             $('#loadMore').show();
         })
     }
     if(clicked===2){
         setTimeout(function () {
             for (let index=24;index<picturesArray.length;index++){
                 $(picturesArray[index]).fadeIn("slow");
                 $(picturesArray[index]).show()
             }
             $('#loadMore').show();
         })
     }
 })
})


    $('.small-hero-item').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.review-caption[data-tab="'+ id +'"]');



    $('.review-caption.active').removeClass('active');
    content.addClass('active');
});

let hero = 0;


$(function carousel() {
    $("#sliderList li:first-child")
        .addClass("active")
        .animate({ bottom: +12 + "px" }, 300);

    function moveTo(hero) {
        $("#sliderList li")
            .removeClass("active")
            .eq(hero)
            .addClass("active");
        $("#test li")
            .removeClass("active")
            .eq(hero)
            .addClass("active")

        $("#sliderList li.active").animate({ bottom: +12 + "px" }, 300);
        $(".hero-list").animate({ left: -163 * hero + "px" }, 300);

    }

    $("#leftButton").click(function() {
        hero = $("#sliderList li.active").index();
        if (hero === 0) {
            hero = 4;
        }
        hero -= 1;

        moveTo(hero);
    });

    $("#rightButton").click(function() {
        hero = $("#sliderList li.active").index();
        if (hero === 3) {
            hero = -1;
        }
        hero += 1;


        moveTo(hero);
    });

    $("#sliderList li").click(function() {
        hero = $(this).index();
        moveTo(hero);
    });
});
