function createUserTitleElement() {
  const titleElement = document.createElement('h1');
  titleElement.className = 'user-form-title';
  titleElement.innerHTML = 'Cadastro de Usuário';

  return titleElement;
}

function createInputElement({ name, label, type }) {
  const labelElement = document.createElement('label');

  const inputElement = document.createElement('input');
  inputElement.name = name;
  inputElement.type = type;

  const labelTextElement = document.createElement('span');
  labelTextElement.innerHTML = label;

  labelElement.appendChild(labelTextElement);
  labelElement.appendChild(inputElement);

  return labelElement;
}

function createUserInputElement() {
  return createInputElement({ name: 'user', label: 'Usuário:' });
}

function createEmailInputElement() {
  return createInputElement({ name: 'email', label: 'Email:', type: 'email' });
}

function createPasswordInputElement() {
  return createInputElement({
    label: 'Senha:',
    name: 'password',
    type: 'password',
  });
}

function createUserSubmitButtonElement() {
  const buttonElement = document.createElement('button');

  buttonElement.innerHTML = 'Cadastrar';

  return buttonElement;
}

function createUserFormFieldsElement() {
  const formElement = document.createElement('div');

  formElement.appendChild(createUserInputElement());
  formElement.appendChild(createEmailInputElement());
  formElement.appendChild(createPasswordInputElement());

  return formElement;
}

function createUserFormElement() {
  const formElement = document.createElement('form');
  formElement.className = CLASSES.USER_FORM;

  formElement.appendChild(createUserFormFieldsElement());
  formElement.appendChild(createUserSubmitButtonElement());

  formElement.onsubmit = handleUserFormSubmit;

  return formElement;
}

function createUserFormContainer() {
  const containerElement = document.createElement('div');
  containerElement.className = 'user-form-container';

  containerElement.appendChild(createUserTitleElement());
  containerElement.appendChild(createUserFormElement());

  return containerElement;
}

function renderUserForm() {
  const contentElement = getContentElement();

  contentElement.appendChild(createUserFormContainer());
}
