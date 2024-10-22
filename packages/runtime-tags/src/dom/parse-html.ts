const fallback = document.createTextNode("");
const parser = /* @__PURE__ */ new Range();

export function parseHTML(html: string) {
  return parser.createContextualFragment(html);
}

export function parseHTMLOrSingleNode(html: string) {
  const content = parseHTML(html);
  return (
    content.firstChild === content.lastChild
      ? content.firstChild || fallback
      : content
  ) as Node & { firstChild?: ChildNode; lastChild?: ChildNode };
}
