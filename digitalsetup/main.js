// Area behaviour for /digitalsetup/
// The enquiry link is a plain mailto, so it works with JavaScript disabled.
// This only records which service the visitor was looking at, if tracking
// is ever added deliberately — nothing is sent anywhere today.
document.addEventListener('DOMContentLoaded', function () {
  var link = document.querySelector('.btn-primary');
  if (!link) return;

  link.addEventListener('click', function () {
    // No analytics, no beacons — kept intentionally empty.
    // This is the hook point if a deliberate, consented measurement is added later.
  });
});
