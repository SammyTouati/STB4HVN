const homeLink = document.getElementById('homeLink');
const tracklistLink = document.getElementById('tracklistLink');
const musicLink = document.getElementById('musicLink');

const homeSection = document.getElementById('home');
const tracklistSection = document.getElementById('tracklist');
const musicSection = document.getElementById('music');

function showSection(target) {
  [homeSection, tracklistSection, musicSection].forEach(sec => sec.classList.add('hidden'));
  target.classList.remove('hidden');
}

homeLink.addEventListener('click', () => showSection(homeSection));
tracklistLink.addEventListener('click', () => {
  showSection(tracklistSection);
  const items = ["·twø·", "·nø signal·", "·impatient·", "·dnd·", "·scene·", "·4am·"];
  const list = document.getElementById('tracklistItems');
  list.innerHTML = "";
  items.forEach((item, i) => {
    setTimeout(() => {
      const li = document.createElement('li');
      li.textContent = item;
      li.style.animation = "glitch 1s infinite";
      list.appendChild(li);
    }, i * 1000);
  });
});
musicLink.addEventListener('click', () => showSection(musicSection));
