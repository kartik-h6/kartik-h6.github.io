// Area behaviour for /journey/ — renders the timeline from data.
// Add or edit entries here; the markup stays untouched.
document.addEventListener('DOMContentLoaded', function () {
  var list = document.getElementById('timeline');
  if (!list) return;

  var entries = [
    { when: '2021 – 2025', what: 'B.Pharm — RGUHS', where: 'Priyadarshini College of Pharmacy' },
    { when: 'Jan – Feb 2026', what: 'Hospital Pharmacy Intern — KS Hospital', where: 'Hospital pharmacy · clinical data management' },
    { when: '2026 – 2028', what: 'M.Pharm — Pharmacy Practice, RIPER', where: 'Raghavendra Institute of Pharmaceutical Education and Research, Anantapur' }
  ];

  entries.forEach(function (entry) {
    var li = document.createElement('li');

    var when = document.createElement('span');
    when.className = 'when';
    when.textContent = entry.when;

    var what = document.createElement('p');
    what.className = 'what';
    what.textContent = entry.what;

    var where = document.createElement('p');
    where.className = 'where';
    where.textContent = entry.where;

    li.appendChild(when);
    li.appendChild(what);
    li.appendChild(where);
    list.appendChild(li);
  });
});
