// Area behaviour for /about/
// Everything specific to this page lives here, so the folder stays self-contained.
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('years-in');
  if (!el) return;

  // Derived, not typed: keeps the sentence true as time passes.
  var START_YEAR = 2021; // B.Pharm start
  el.textContent = (new Date().getFullYear() - START_YEAR) + '+';
});
