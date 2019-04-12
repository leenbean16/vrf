$(".navbar-toggle").click(function() {
    $(".navbar-header").toggleClass("white");
    $(".navbar").toggleClass("white");
    console.log("changing bg");
})


$(".dropdown-button").click(function() {
    $(".dropdown").toggleClass("is-active");
    console.log("block");
})