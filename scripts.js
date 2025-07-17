document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.getElementById("homeLink");
  const tracklistLink = document.getElementById("tracklistLink");
  const musicLink = document.getElementById("musicLink");
  const homeSection = document.getElementById("home");
  const tracklistSection = document.getElementById("tracklist");
  const musicSection = document.getElementById("music");

  function glitchTransition(sectionToShow) {
    document.body.classList.add("glitch-transition");

    setTimeout(() => {
      [homeSection, tracklistSection, musicSection].forEach((s) => s.classList.add("hidden"));
      sectionToShow.classList.remove("hidden");

      document.body.classList.remove("glitch-transition");
    }, 500);
  }

  homeLink.addEventListener("click", () => glitchTransition(homeSection));
  tracklistLink.addEventListener("click", () => glitchTransition(tracklistSection));
  musicLink.addEventListener("click", () => glitchTransition(musicSection));

  // Apply random glitch effects to text
  const glitchClasses = ["glitch-text"];
  document.querySelectorAll(".glitch-text").forEach((el) => {
    el.classList.add(glitchClasses[Math.floor(Math.random() * glitchClasses.length)]);
  });
});
