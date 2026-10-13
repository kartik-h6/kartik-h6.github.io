// Area behaviour for /cgpacalculator/ — computes SGPA and CGPA in the browser.
// Rows are built with createElement and values read from input properties, so
// no user-entered text is ever inserted as markup.
//
// Note on the column indices passed to weightedAverage():
//   SGPA rows have three inputs — subject, credits, grade point  -> (1, 2)
//   CGPA rows have two inputs  — credits, SGPA                   -> (0, 1)
// These differ because the CGPA table's first cell is a text label, not an input.
document.addEventListener('DOMContentLoaded', function () {
  var sgpaBody = document.getElementById('sgpa-rows');
  var cgpaBody = document.getElementById('cgpa-rows');
  if (!sgpaBody || !cgpaBody) return;

  function numberField(value) {
    var input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.step = '0.01';
    input.inputMode = 'decimal';
    if (value !== undefined) input.value = value;
    return input;
  }

  function addSubjectRow(name, credits, grade) {
    var tr = document.createElement('tr');

    var tdName = document.createElement('td');
    var inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.value = name || '';
    inputName.placeholder = 'Subject';
    tdName.appendChild(inputName);

    var tdCredits = document.createElement('td');
    tdCredits.appendChild(numberField(credits));

    var tdGrade = document.createElement('td');
    tdGrade.appendChild(numberField(grade));

    tr.appendChild(tdName);
    tr.appendChild(tdCredits);
    tr.appendChild(tdGrade);
    sgpaBody.appendChild(tr);
  }

  function addSemRow(credits, sgpa) {
    var tr = document.createElement('tr');

    var tdLabel = document.createElement('td');
    tdLabel.textContent = 'Semester ' + (cgpaBody.children.length + 1);

    var tdCredits = document.createElement('td');
    tdCredits.appendChild(numberField(credits));

    var tdSgpa = document.createElement('td');
    tdSgpa.appendChild(numberField(sgpa));

    tr.appendChild(tdLabel);
    tr.appendChild(tdCredits);
    tr.appendChild(tdSgpa);
    cgpaBody.appendChild(tr);
  }

  function weightedAverage(body, creditsIndex, valueIndex) {
    var totalCredits = 0;
    var weighted = 0;

    Array.prototype.forEach.call(body.children, function (row) {
      var inputs = row.querySelectorAll('input');
      var creditsInput = inputs[creditsIndex];
      var valueInput = inputs[valueIndex];
      if (!creditsInput || !valueInput) return;

      var credits = parseFloat(creditsInput.value);
      var value = parseFloat(valueInput.value);

      if (!isNaN(credits) && !isNaN(value) && credits > 0) {
        totalCredits += credits;
        weighted += credits * value;
      }
    });

    if (totalCredits === 0) return null;
    return weighted / totalCredits;
  }

  // Seed a few blank rows so the page is usable immediately.
  addSubjectRow('', 4, '');
  addSubjectRow('', 4, '');
  addSubjectRow('', 3, '');
  addSemRow('', '');

  document.getElementById('add-row').addEventListener('click', function () {
    addSubjectRow('', '', '');
  });

  document.getElementById('add-sem').addEventListener('click', function () {
    addSemRow('', '');
  });

  document.getElementById('calc-sgpa').addEventListener('click', function () {
    var out = document.getElementById('sgpa-result');
    var sgpa = weightedAverage(sgpaBody, 1, 2);
    out.textContent = sgpa === null ? 'Enter credits and grade points first.' : 'SGPA: ' + sgpa.toFixed(2);
  });

  document.getElementById('calc-cgpa').addEventListener('click', function () {
    var out = document.getElementById('cgpa-result');
    var cgpa = weightedAverage(cgpaBody, 0, 1);
    out.textContent = cgpa === null ? 'Enter semester credits and SGPAs first.' : 'CGPA: ' + cgpa.toFixed(2);
  });
});
