// Area behaviour for /research/
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.btn-copy');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var text = btn.getAttribute('data-cite') || '';
    var done = function () {
      var original = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = original; }, 1500);
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done, function () {});
    } else {
      // Fallback for older browsers and non-secure contexts.
      var ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });
});
