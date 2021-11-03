export function getNodePath(node: Node) {
  const parts: string[] = [];
  let cur: Node | null = node;
  while (cur) {
    const { parentNode } = cur;

    let name = getTypeName(cur);
    const index = parentNode
      ? (Array.from(parentNode.childNodes) as Node[]).indexOf(cur)
      : -1;

    if (index !== -1) {
      name += `${index}`;
    }

    // if ((cur as any).data) {
    //   name += `(${(cur as any).data})`;
    // }

    parts.unshift(name);

    if (!parentNode || (parentNode as any).TEST_ROOT) {
      break;
    }

    cur = parentNode as Node;
  }

  return parts.join("/");
}

export function getTypeName(node: Node) {
  return node.nodeName.toLowerCase();
}
