// Insertion modes that drop an unknown element but keep processing its
// children, so any wrapper injected around content inside one of these is
// discarded and the content it was meant to contain ends up in the document.
const discardsUnknownChildren = new Set([
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "colgroup",
  "select",
  "optgroup",
]);

export function discardsWrapperChildren(tagName: string) {
  return discardsUnknownChildren.has(tagName);
}

// The document's own elements: the parser implies and moves nodes into them,
// and the page writes assets and resume scripts into them.
const pageElements = new Set(["html", "head", "body"]);

export function isPageElement(tagName: string) {
  return pageElements.has(tagName);
}
