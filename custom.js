document.addEventListener("DOMContentLoaded", function() {

 /* const links = document.querySelectorAll(".nav_bar a");

  links.forEach(function(link) {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const href = this.getAttribute("href");
          document.querySelector(".main_container_to").classList.add("fade-out");
          setTimeout(function() {
              window.location.href = href;
          }, 500); // Adjust the duration of the fade-out effect as needed
      });
  });*/

  var video = document.getElementById("myVideo");

    // Play the video forward
    video.play();

    // When the video ends, play it in reverse
    video.addEventListener("ended", function() {
        if (video.playbackRate > 0) {
            video.playbackRate = -1; // Reverse playback
        } else {
            video.playbackRate = 1; // Forward playback
        }
        video.play();
    });
});