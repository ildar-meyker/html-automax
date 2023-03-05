const scrollbarWidth = require("scrollbarwidth");

function open() {
    $("#nav-mobile, .js-nav-mobile-open").addClass("active");
    $("body").addClass("page__locked").css({
        "margin-right": scrollbarWidth(),
    });
}

function toggle() {
    const isActive = $("#nav-mobile").hasClass("active");
    isActive ? close() : open();
}

function close() {
    $("#nav-mobile, .js-nav-mobile-open").removeClass("active");
    $("body").removeClass("page__locked").css({
        "margin-right": 0,
    });
}

$(function () {
    $(document).on("click", ".js-nav-mobile-open", (e) => {
        e.preventDefault();
        toggle();
    });

    $(document).on("click", ".js-nav-mobile-close", (e) => {
        e.preventDefault();
        close();
    });

    $(document).on("click", "#nav-mobile a", (e) => {
        close();
    });
});

export default {
    open,
    toggle,
    close,
};
