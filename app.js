const form = document.querySelector("article main form");
const inputs = document.querySelectorAll("article main form input[id]");
const input = document.getElementById('email');

// const pattern =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", function (event) {
  let isFormValid = true;

  inputs.forEach((input) => {
    let isValid = true;

    switch (input.id) {
      // case "first-name":
      // case "last-name":
      // case "password":
      //   if (!input.value) {
      //     isValid = false;
      //   }

      //   break;

      // case "email":
      //   if (!input.value.match(pattern)) {
      //     isValid = false;
      //   }

      //   break;
      case 'first-name':
      case 'last-name':
        if (input.validity.valueMissing || input.validity.tooShort || input.validity.tooLong)
        {
          isValid = false;
        }

        break;

      case 'email':
        if (input.validity.typeMismatch || input.validity.valueMissing || input.validity.tooShort || input.validity.tooLong)
        {
          isValid = false;
        }

        break;

      case 'password':
        if (input.validity.patternMismatch || input.validity.valueMissing)
        {
          isValid = false;
        }

        break;
    }

    if (!isValid) {
      // Show error
      input.parentElement.classList.add('invalid');

      for (const label of input.labels) {
        label.classList.remove('hidden');
      }

      isFormValid = false;
    } else {
      // Hide error
      input.parentElement.classList.remove('invalid');

      for (const label of input.labels) {
        label.classList.add('hidden');
      }
    }
  });

  if (!isFormValid) {
    event.preventDefault();
  }
});