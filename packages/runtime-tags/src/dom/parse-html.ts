const fallback = /* @__PURE__ */ document.createTextNode("");
const parser = /* @__PURE__ */ new Range();

export function parseHTML(html: string) {
  return parser.createContextualFragment(html);
}

export function parseHTMLOrSingleNode(html: string) {
  const content = parseHTML(html);
  if (!content.firstChild) return fallback;
  return (
    content.firstChild === content.lastChild &&
    // If the firstChild is a comment it's possible its
    // a single replaced node, in which case the walker can't replace
    // the node itself.
    content.firstChild.nodeType !== 8 /* Node.COMMENT_NODE */
      ? content.firstChild
      : content
  ) as Node & { firstChild?: ChildNode; lastChild?: ChildNode };
}
