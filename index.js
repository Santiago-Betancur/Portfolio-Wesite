window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Add the initial-position class to article elements
    const articleElements = document.querySelectorAll(".initial-position");
    articleElements.forEach((element) => {
        element.classList.add("initial-position");
    });

    setTimeout(() => {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);

            // Remove the initial-position class to trigger the transition
            articleElements.forEach((element) => {
                element.classList.remove("initial-position");
            });
        });
    }, 1000);
});

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', (event) => {
    const timeLine = document.querySelector('.timeline');
    ///detects mouse in overflow areas for scroll, allowing scroll wheel to be engaged.
    timeLine.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        timeLine.scrollLeft += evt.deltaY;
    });

    // Video hover effect when mouse hovers over a certain object, video plays instead of a picture expanding
    const projectMediaElements = document.querySelectorAll(".project-item");
    projectMediaElements.forEach(element => {
        const image = element.querySelector('.project-image');
        const video = element.querySelector(".project-video");
        element.addEventListener('mouseenter', () => {
            if (video) {
                image.style.display = 'none';
                video.style.display = 'block';
                video.play();
            }
        });
        element.addEventListener('mouseleave', () => {
            if (video) {
                video.style.display = 'none';
                image.style.display = 'block';
                video.pause();
                video.currentTime = 0;
            }
        });
    });
})

