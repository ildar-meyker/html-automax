// simple function to use for callback in the intersection observer
const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        // get id of the intersecting section
        const id = entry.target.getAttribute("id");
        const ratio = id === "goods" ? 0.01 : 0.55;

        // verify the element is intersecting
        if (entry.isIntersecting && entry.intersectionRatio >= ratio) {
            // remove old active class
            Array.from(
                document.querySelectorAll(".js-scroll-nav .active")
            ).forEach((el) => {
                el.classList.remove("active");
            });

            // find matching link & add appropriate class
            Array.from(
                document.querySelectorAll(`.js-scroll-nav [href="#${id}"]`)
            ).forEach((el) => {
                el.classList.add("active");
            });
        }
    });
};

// init the observer
const options = {
    threshold: 0.55,
};

const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
    observer.observe(section);
});
