function createContentElement() {
  const contentElement = document.createElement('div');

  contentElement.className = CLASSES.CONTENT;

  return contentElement;
}

function getContentElement() {
  const [contentElement] = document.getElementsByClassName(CLASSES.CONTENT);

  return contentElement || createContentElement();
}
