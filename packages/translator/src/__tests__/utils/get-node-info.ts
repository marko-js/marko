export function getNodePath(node: Node) {
  const parts: string[] = [];
  let cur: Node | null = node;

  while (cur) {
    const { parentNode } = cur;

    if (!parentNode || (cur as any).TEST_ROOT) {
      break;
    }

    let name = getTypeName(cur);
    const index = parentNode
      ? (Array.from(parentNode.childNodes) as Node[]).indexOf(cur)
      : -1;

    if (index !== -1) {
      name += `${index}`;
    }

    parts.unshift(name);
    cur = parentNode as Node;
  }

  return parts.join("/");
}

export function getTypeName(node: Node) {
  return node.nodeName.toLowerCase();
}
