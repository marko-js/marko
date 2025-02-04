const parsers: Record<string, Element> = {};
export function parseHTML(html: string, ns: string) {
  const parser = (parsers[ns] ||= document.createElementNS(ns, "template"));
  const content =
    ((parser.innerHTML = html),
    (parser as HTMLTemplateElement).content || parser);
  if (!content.firstChild) content.appendChild(new Text());
  return content as (DocumentFragment | Element) & {
    firstChild: ChildNode;
    lastChild: ChildNode;
  };
}
