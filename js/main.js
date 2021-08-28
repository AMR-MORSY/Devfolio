
var typed = new Typed('.morgan-caption', {
    strings: ["Designer", "Photographer", "FreeLancer"],
    typeSpeed: 70,
    smartBackspace: false,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    backSpeed: 70,
    shuffle: true,
    backDelay: 700,

});

$(window).scroll(function () {

    let x = $(window).scrollTop();
    let who = $("#testimonial").offset().top;
    if (x >= who - 100) {

        $(".scrollup").addClass("display-block");
    }
    else {
        $(".scrollup").removeClass("display-block");

    }

    if (x > who - 500) {

        $(".navbar").css("backgroundColor", "black");


    }
    else {

        $(".navbar").css("backgroundColor", "transparent");
    }

    let acheive = $("#services").offset().top;

    if (x >= (acheive + 300) && x <= (acheive + 400)) {

        let counters = document.querySelectorAll(".card-te");

        counters.forEach((counter) => {
            counter.innerHTML = 0;
            let count = 0;
            let target = +counter.getAttribute("data-target");
            let works = setInterval(() => {
                count++;
                if (count <= target) {

                    counter.innerHTML = `${count}`;
                }
                else {
                    clearInterval(works);

                }
            }, 1);

        })



    }



});


$(".nav-link").click(function (e) {


    let x = $(e.target).attr("href")

    let y = $(x).offset().top;

    $("body, html").animate({ scrollTop: y }, 2000);
})

$(".scrollup").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000);
})


$(".navbar-toggler").click(function () {

    $("#navbarSupportedContent").css("backgroundColor", "black");

})






