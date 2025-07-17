document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.getElementById("homeLink");
  const tracklistLink = document.getElementById("tracklistLink");
  const musicLink = document.getElementById("musicLink");

  const homeSection = document.getElementById("home");
  const tracklistSection = document.getElementById("tracklist");
  const musicSection = document.getElementById("music");

  const sections = [homeSection, tracklistSection, musicSection];

  function showSection(target) {
    sections.forEach((sec) => sec.classList.remove("active"));
    target.classList.add("active");
  }

  homeLink.addEventListener("click", () => showSection(homeSection));
  tracklistLink.addEventListener("click", () => showSection(tracklistSection));
  musicLink.addEventListener("click", () => showSection(musicSection));
});

