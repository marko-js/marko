const TYPE_MAP = {
  "1": "element",
  "3": "text",
  "4": "cdata",
  "8": "comment",
  "10": "doctype",
  "11": "fragment"
};

export function getNodePath(node: Node) {
  const parts: string[] = [];
  let cur: Node | null = node;
  while (cur) {
    const { parentNode } = cur;

    if (!parentNode) {
      break;
    }

    let name = getTypeName(cur);
    const index = parentNode
      ? (Array.from(parentNode.childNodes) as Node[]).indexOf(cur)
      : -1;

    if (index !== -1) {
      name += `${index}`;
    }

    parts.push(name);
    cur = parentNode;
  }

  return parts.reverse().join("/");
}

export function getTypeName(node: Node) {
  const type = TYPE_MAP[node.nodeType];

  if (type === "element") {
    return `${(node as HTMLElement).tagName.toLowerCase()}`;
  } else {
    return `#${type}`;
  }
}
