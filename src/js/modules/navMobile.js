function open() {
    $("#nav-mobile, .js-nav-mobile-open").addClass("active");
}

function toggle() {
    $("#nav-mobile, .js-nav-mobile-open").toggleClass("active");
}

function close() {
    $("#nav-mobile, .js-nav-mobile-open").removeClass("active");
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
});

export default {
    open,
    toggle,
    close,
};
