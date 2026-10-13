// Area behaviour for /projects/ — tag filtering.
document.addEventListener('DOMContentLoaded', function () {
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  if (!chips.length || !cards.length) return;

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.getAttribute('data-filter');

      chips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });

      cards.forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split(/\s+/);
        card.hidden = !(filter === 'all' || tags.indexOf(filter) !== -1);
      });
    });
  });
});
