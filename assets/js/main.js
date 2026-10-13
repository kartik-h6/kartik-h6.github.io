// Minimal page behaviour. Replace or extend as the site grows.
document.addEventListener('DOMContentLoaded', function () {
  // Mark the current area in the page title, so browser tabs are distinguishable.
  var path = window.location.pathname.replace(/^\/|\/$/g, '');
  if (path) {
    document.title = document.title + ' (' + path + ')';
  }
});
