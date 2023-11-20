document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".login-form");
  
    form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        let inputElements = form.querySelectorAll("input");
        let inputElementsNames = [];
        let inputElementsValue = [];
        let inputObject = {};

        for (let i = 0; i < inputElements.length; i++) {
            inputElementsNames[i] = inputElements[i].getAttribute("name");
            inputElementsValue[i] = form.elements[inputElementsNames[i]].value.trim();

            if (inputElementsValue[i] === "") {
                alert("All form fields must be filled in");
                return;
            }
            
            inputObject[inputElementsNames[i]] = inputElementsValue[i];
        }
        form.reset();
        console.log(inputObject);
    });
});