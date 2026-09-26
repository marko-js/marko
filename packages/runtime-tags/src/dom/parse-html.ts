const parsers: Record<string, Element> = {};
// Won't fix: a namespace-less parent (DocumentFragment/ShadowRoot) parses as foreign
// content here; defaulting ns to XHTML costs bundle size — mount into an Element instead.
export function parseHTML(html: string, ns: string) {
  const parser = (parsers[ns] ||= document.createElementNS(ns, "template"));
  parser.innerHTML = html;
  return (parser as HTMLTemplateElement).content || parser;
}

// Children of HTML and MathML text integration points parse as XHTML (except MathML
// `mglyph`/`malignmark`); `annotation-xml` depends on its `encoding`, so is left out.
export function getChildNamespace(parentNode: ParentNode) {
  return /^(foreignObject|desc|title|m([inos]|text))$/.test(
    (parentNode as Element).localName,
  )
    ? "http://www.w3.org/1999/xhtml"
    : (parentNode as Element).namespaceURI!;
}
