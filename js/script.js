// Highlights the matching nav link as each section scrolls into view.
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('nav.links a');

  if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) {
    return;
  }

  var linkById = {};
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').replace('#', '');
    linkById[id] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = linkById[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.style.color = ''; });
          link.style.color = 'var(--accent)';
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
});
