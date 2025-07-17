document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  function showSection(id) {
    sections.forEach(section => {
      section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href").substring(1);
      showSection(target);
    });
  });

  // Delay tracklist reveals
  document.querySelectorAll(".tracklist").forEach((list) => {
    const items = list.querySelectorAll("a");
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.5}s`;
    });
  });

  // Default section
  showSection("home");
});
