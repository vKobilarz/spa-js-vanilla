function createRootElement() {
  const rootElement = document.createElement('div');

  rootElement.className = CLASSES.ROOT;

  rootElement.appendChild(getContentElement());

  return rootElement;
}

function getRootElement() {
  const rootElement = document.getElementById(CLASSES.ROOT);

  return rootElement || createRootElement();
}

function initialize() {
  const rootElement = getRootElement();

  document.body.appendChild(rootElement);

  renderUserForm();
}

initialize();
