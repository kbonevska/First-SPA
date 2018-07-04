$(document).ready(function () {
    // setBindings();
    initialLoad()
    scrollSpyAnimation();
    setActiveNavigation();
    addStickyNav();
    switchNav();
});



function setBindings() {
    $('nav li a').click(function (e) {
        e.preventDefault
        var sectionID = e.currentTarget.id;
        // alert(sectionID);
        $('html, body').animate({
            scrollTop: $('#' + sectionID).offset().top
        }, 1000)
    })
}

function setActiveNavigation() {
    $('nav li a').click(function () {
        //some spaghetti
        $(this).parent('li').siblings('li').children('a').removeClass('active');
        $(this).addClass('active');
        // var page = $(this).attr('href').substr(1)+'.html';

        // $('#content').load('page');
    });
}

function addStickyNav() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    });
}

function scrollSpyAnimation() {
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    // $("#myNavbar a").on('click', function (event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();

    //         var hash = this.hash;


    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 800, function () {

    //             window.location.hash = hash;
    //         });
    //     }
    // });

}

function initialLoad() {
    $('#loadNav').load('content/homePageNav.html')
    $('#loadMain').load('content/homePageMain.html')

}

function switchNav() {
    $(window).on('hashchange', function () {
        // $('#loadNav').detach();
        var href = location.hash.slice(1);

        $('#loadNav').load('content/'+href + 'PageNav.html');
        $('#loadMain').load('content/'+href + 'PageMain.html');
       
    });
}

