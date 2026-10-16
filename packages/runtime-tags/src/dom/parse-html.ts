const parsers: Record<string, Element> = {};
// Won't fix: a namespace-less parent (DocumentFragment/ShadowRoot) parses as foreign
// content here; defaulting ns to XHTML costs bundle size — mount into an Element instead.
export function parseHTML(html: string, ns: string) {
  const parser = (parsers[ns] ||= document.createElementNS(ns, "template"));
  parser.innerHTML = html;
  return (parser as HTMLTemplateElement).content || parser;
}

// Parsed so its scripts run once a clone connects (`innerHTML` marks them
// started), in an inert document, so the parse upgrades no custom element.
export function parseContextualHTML(html: string, ns: string) {
  const range = new Range();
  range.selectNodeContents(
    document
      .createElement("template")
      .content.ownerDocument.createElementNS(ns, "template"),
  );
  return range.createContextualFragment(html);
}
