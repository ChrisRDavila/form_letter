window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const firstNameInput = document.getElementById("fNameInput").value;
    const lastNameInput = document.getElementById("lNameInput").value;
    document.querySelector("#fNameOutput").innerText = firstNameInput;
    document.querySelector("#lNameOutput").innerText = lastNameInput;
    document.querySelector("#fNameOutput2").innerText = firstNameInput;
    document.querySelector("#lNameOutput2").innerText = lastNameInput;
    document.querySelector("div#letter").removeAttribute("class");
    };
  };
