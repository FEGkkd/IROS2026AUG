const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = () => {
  const offset = window.innerHeight * 0.32;
  let activeId = null;

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) {
      activeId = section.id;
    }
  }

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', activeId !== null && link.getAttribute('href') === `#${activeId}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('resize', setActiveLink);
setActiveLink();

const handleVideoError = (video) => {
  video.insertAdjacentHTML(
    'afterend',
    '<p class="caption">Video preview could not be loaded. Open the MP4 resource link above.</p>'
  );
};

document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('error', () => handleVideoError(video), { once: true });
});
