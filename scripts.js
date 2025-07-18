function navigateTo(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  const section = document.getElementById(sectionId);
  section.classList.add('active');
}
