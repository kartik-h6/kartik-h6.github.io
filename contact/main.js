// Area behaviour for /contact/ — copy the email address.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('copy-email');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var email = btn.getAttribute('data-email') || '';
    var done = function () {
      var original = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = original; }, 1500);
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(done, function () {});
    } else {
      var ta = document.createElement('textarea');
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });
});
