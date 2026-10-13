// Area behaviour for /privacy/ — show the page's last-updated date.
// Taken from the file's own modification time, so it stays honest without
// anyone remembering to edit a date string.
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('last-updated');
  if (!el || !document.lastModified) return;

  var d = new Date(document.lastModified);
  if (isNaN(d.getTime())) return;

  el.textContent = d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
});
