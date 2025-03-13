var textInput = document.getElementById('name-input');
var textOutput = document.getElementById('name-output');

textInput.addEventListener('input', function() {
      var userName = textInput.value === '' ? 'Anonymous' : textInput.value; // Помилка: відсутній trim()
      textOutput.textContent = userName;
});
