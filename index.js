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
document.addEventListener("DOMContentLoaded", (event) => {
  const timeLine = document.querySelector(".timeline");
  ///detects mouse in overflow areas for scroll, allowing scroll wheel to be engaged.
  timeLine.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    timeLine.scrollLeft += evt.deltaY;
  });

  // Video hover effect when mouse hovers over a certain object, video plays instead of a picture expanding
  const projectMediaElements = document.querySelectorAll(".project-item");
  projectMediaElements.forEach((element) => {
    const image = element.querySelector(".project-image");
    const video = element.querySelector(".project-video");
    element.addEventListener("mouseenter", () => {
      if (video) {
        image.style.display = "none";
        video.style.display = "block";
        video.play();
      }
    });
    element.addEventListener("mouseleave", () => {
      if (video) {
        video.style.display = "none";
        image.style.display = "block";
        video.pause();
        video.currentTime = 0;
      }
    });
  });
  // MOdal implementation when view button is clicked the image will expond
  const viewButtons = document.querySelectorAll(".view-btn");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const closeModal = document.getElementById("close");

  viewButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
      modalImg.src = this.getAttribute("data-img");
      captionText.innerHTML = this.gettAtribute("data-caption");
    });
  });
  closeModal.onclick = function () {
    modal.style.display = "none";
  };
  // Modal implementation for resume, when resume button pressed  resume will expand with a download option

  const resumeModal = document.getElementById("resumeModal");

  const resumeBtn = document.getElementById("resumeBtn");

  const resumeCloseBtn = document.getElementById("closeResumeModal");

  function showModal() {
    resumeModal.classList.add('resume-modal-show');
    document.body.classList.add('modal-open'); // Add this line
}

function hideModal() {
    resumeModal.classList.remove('resume-modal-show');
    document.body.classList.remove('modal-open'); // Add this line
}
  resumeBtn.onclick = function(){
    showModal();
  }
  resumeCloseBtn.onclick = function() {
    hideModal()
  }
  window.onclick = function(event) {
    if(event.target == resumeModal){
        hideModal();
    }
  }
});
