$(()=>{
//Hamburger menu 1st level
$("nav .hamburger-menu").on("click", event => $(event.target).next("ul").toggle());
$("nav .hamburger-menu ul li").on({
    "mouseenter": event => $(event.target).toggleClass("active"),
    "mouseleave": event => $(event.target).toggleClass("active"),
    "click": event=> {
        $(event.target).find(".submenu").toggle("active");
        $(event.target).siblings().find(".submenu").hide("active");

}
})






})