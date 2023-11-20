var textInput = document.getElementById('name-input');
var textOutput = document.getElementById('name-output');

textInput.addEventListener('input', function() {
      var trimmedValue = textInput.value.trim();
      var userName = trimmedValue === '' ? 'Anonymous' : trimmedValue;
      textOutput.textContent = userName;
});