function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function deleteBoxes() {
  boxes.innerHTML = "";
}


function createBoxes(amount) {
  for (let i = 0; i < amount; i++ ) {
      var div = document.createElement('div');
      div.classList.add('div');
      div.style.width = (30+10*i) + 'px';
      div.style.height = (30+10*i) + 'px';
      div.style.backgroundColor = getRandomHexColor();
      document.getElementById('boxes').appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", function () {

  var createButton = document.querySelector('button[data-create]');
  var destroyButton = document.querySelector('button[data-destroy]');
  var boxes = document.querySelector('boxes');
  var inputElement = document.querySelector('input[type="number"]');

  createButton.addEventListener("click", function (event) {
      event.preventDefault();

      var number = inputElement.value;
      if ((number < 1) || (number > 100)) {
          // alert("Error. Number must be from 1 to 100");
          return
      }
      deleteBoxes();
      createBoxes(number);
      inputElement.value = "";
      inputElement.focus();
    });
    
    destroyButton.addEventListener("click", function (event) {
      event.preventDefault();
      deleteBoxes();
      inputElement.value = "";
      inputElement.focus();
    });
});