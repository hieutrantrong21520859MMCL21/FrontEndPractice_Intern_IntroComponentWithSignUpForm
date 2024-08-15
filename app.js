const form = document.querySelector("article main form");
const inputs = document.querySelectorAll("article main form input[id]");
const input = document.getElementById('email');

form.addEventListener("submit", function (event) {
  let isFormValid = true;

  inputs.forEach((input) => {
    let isValid = true;

    switch (input.id) {
      case 'first-name':
        if (input.validity.valueMissing)
        {
          isValid = false;
          input.nextElementSibling.textContent = 'First Name cannot be empty';
        }

        else if (input.validity.tooShort)
        {
          isValid = false;
          input.nextElementSibling.textContent = "First Name's length must be at least 3 characters";
        }

        else if (input.validity.tooLong)
        {
          input.nextElementSibling.textContent = "First Name's length must be at most 30 characters";
        }

        break;
      
      case 'last-name':
        if (input.validity.valueMissing)
        {
          isValid = false;
          input.nextElementSibling.textContent = 'Last Name cannot be empty';
        }
  
        else if (input.validity.tooShort)
        {
          isValid = false;
          input.nextElementSibling.textContent = "Last Name's length must be at least 3 characters";
        }
  
        else if (input.validity.tooLong)
        {
          isValid = false;
          input.nextElementSibling.textContent = "Last Name's length must be at most 30 characters";
        }

        break;

      case 'email':
        if (input.validity.valueMissing)
        {
          isValid = false;
          input.nextElementSibling.textContent = 'Email cannot be empty';
        }

        else if (input.validity.typeMismatch)
        {
          isValid = false;
          input.nextElementSibling.textContent = 'Looks like this is not an email';
        }

        else if (input.validity.tooShort)
        {
          isValid = false;
          input.nextElementSibling.textContent = "Email's length must be at least 3 characters";
        }

        else if (input.validity.tooLong)
        {
          isValid = false;
          input.nextElementSibling.textContent = "Email's length must be at most 200 characters";
        }

        break;

      case 'password':
        if (input.validity.valueMissing)
        {
          isValid = false;
          input.nextElementSibling.textContent = 'Password cannot be empty';
        }

        else if (input.validity.patternMismatch)
        {
          isValid = false;
          input.nextElementSibling.textContent = 'Password does not match the format';
        }

        break;
    }

    if (!isValid) {
      // Show error
      input.parentElement.classList.add('invalid');

      input.nextElementSibling.classList.remove('hidden');

      isFormValid = false;
    } else {
      // Hide error
      input.parentElement.classList.remove('invalid');

      input.nextElementSibling.classList.add('hidden');
    }
  });

  if (!isFormValid) {
    event.preventDefault();
  }
});