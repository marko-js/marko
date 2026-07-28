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
