function getInputValue(name) {
  const [inputElement] = document.getElementsByName(name);

  return inputElement.value;
}

function handleUserFormSubmit(e) {
  e.preventDefault();

  const form = {
    user: getInputValue('user'),
    email: getInputValue('email'),
    password: getInputValue('password'),
  };

  console.log({ form });

  navigateToSuccessMessage();
}
