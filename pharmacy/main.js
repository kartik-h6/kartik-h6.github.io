// Area behaviour for /pharmacy/ — filter semesters by year.
document.addEventListener('DOMContentLoaded', function () {
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  if (!chips.length || !cards.length) return;

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });
      cards.forEach(function (card) {
        card.hidden = !(filter === 'all' || card.getAttribute('data-year') === filter);
      });
    });
  });
});
