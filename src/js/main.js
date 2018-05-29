$(document).ready(function () {
    // Init Bootstrap Components
    $('.dropdown-toggle').dropdown();
    // popover
    $('[data-toggle="popover"]').popover();
    $(".nav-item").popover('disable');
    
    // toggle sidebar to icon sidebar on hamburger menu
    $("#hamburger-menu").click(function () {
        // toggle icon sidebar
        $(".side-and-main").toggleClass("icon-main-sidebar");
        // toggle main content width
        $(".main-content").toggleClass("col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3")
        // toggle popover
        $(".nav-item").popover('toggleEnabled');
    });
});