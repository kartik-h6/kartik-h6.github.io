// Area behaviour for /knowledge/ — client-side note search.
document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('note-search');
  var notes = Array.prototype.slice.call(document.querySelectorAll('.note'));
  var empty = document.getElementById('notes-empty');
  if (!input || !notes.length) return;

  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var shown = 0;

    notes.forEach(function (note) {
      var match = !q || note.textContent.toLowerCase().indexOf(q) !== -1;
      note.hidden = !match;
      if (match) shown++;
    });

    if (empty) empty.hidden = shown !== 0;
  });
});
