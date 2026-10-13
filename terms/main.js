// Area behaviour for /terms/ — show the page's last-updated date.
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('last-updated');
  if (!el || !document.lastModified) return;

  var d = new Date(document.lastModified);
  if (isNaN(d.getTime())) return;

  el.textContent = d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
});
