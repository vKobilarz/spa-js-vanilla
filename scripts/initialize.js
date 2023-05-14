function createRootElement() {
  const rootElement = document.createElement('div');

  rootElement.className = CLASSES.ROOT;

  rootElement.appendChild(getContentElement());

  return rootElement;
}

function createContentElement() {
  const contentElement = document.createElement('div');

  contentElement.className = CLASSES.CONTENT;

  return contentElement;
}

function getRootElement() {
  const rootElement = document.getElementById(CLASSES.ROOT);

  return rootElement || createRootElement();
}

function getContentElement() {
  const contentElement = document.getElementById(CLASSES.CONTENT);

  return contentElement || createContentElement();
}

function initialize() {
  const rootElement = getRootElement();

  document.body.appendChild(rootElement);
}

initialize();
