function createSuccessTitleElement() {
  const titleElement = document.createElement('h1');
  titleElement.innerHTML = 'Usuário cadastrado com sucesso!';

  return titleElement;
}

function createGoBackButtonElement() {
  const buttonElement = document.createElement('button');

  buttonElement.type = 'button';
  buttonElement.innerHTML = 'Voltar ao cadastro';
  buttonElement.onclick = handleSuccessGoBack;

  return buttonElement;
}

function createSuccessContainer() {
  const containerElement = document.createElement('div');
  containerElement.className = 'success-container';

  containerElement.appendChild(createSuccessTitleElement());
  containerElement.appendChild(createGoBackButtonElement());

  return containerElement;
}

function renderSuccessMessage() {
  const contentElement = getContentElement();

  contentElement.appendChild(createSuccessContainer());
}
