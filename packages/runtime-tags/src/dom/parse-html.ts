const fallback = /* @__PURE__ */ new Text();
const parser = /* @__PURE__ */ document.createElement("template");

export function parseHTML(html: string) {
  parser.innerHTML = html;
  return parser.content;
}

export function parseHTMLOrSingleNode(html: string) {
  const content = parseHTML(html);
  if (content.firstChild) {
    if (
      content.firstChild === content.lastChild &&
      // If the firstChild is a comment it's possible its
      // a single replaced node, in which case the walker can't replace
      // the node itself.
      content.firstChild.nodeType !== 8 /* Node.COMMENT_NODE */
    ) {
      return content.firstChild;
    }

    const fragment = new DocumentFragment();
    fragment.appendChild(content);
    return fragment;
  }

  return fallback;
}
