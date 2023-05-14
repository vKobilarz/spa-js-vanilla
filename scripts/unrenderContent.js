function unrenderContent() {
  const contentElement = getContentElement();

  if (!contentElement) {
    return;
  }

  const contentChilds = contentElement.childNodes;

  for (const contentChild of contentChilds) {
    contentChild.remove();
  }
}
