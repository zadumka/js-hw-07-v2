function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".change-color");
  var span = document.querySelector(".color");

  form.addEventListener("click", function (event) {
      event.preventDefault();

      var body = document.body;
      let randomColor;
      randomColor = getRandomHexColor();
      body.style.backgroundColor = randomColor;

      span.textContent = randomColor;    
  });
});