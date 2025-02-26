const parsers: Record<string, Element> = {};
export function parseHTML(html: string, ns: string) {
  const parser = (parsers[ns] ||= document.createElementNS(ns, "template"));
  parser.innerHTML = html;
  return (parser as HTMLTemplateElement).content || parser;
}
