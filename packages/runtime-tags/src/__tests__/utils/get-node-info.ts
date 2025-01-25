export function getNodePath(
  node: Node,
  container: Node | null = node.ownerDocument,
) {
  const parts: string[] = [];
  let cur: Node | null = node;
  while (cur) {
    const { parentNode } = cur;
    const index = indexByTypeInParent(cur);
    let name = cur.nodeName.toLowerCase();

    if (index !== -1) {
      name += `${index}`;
    }

    parts.unshift(name);

    if (!parentNode || parentNode === container) {
      break;
    }

    cur = parentNode as Node;
  }

  return parts.join("/");
}

function indexByTypeInParent(node: Node) {
  const { nodeName, parentNode } = node;
  if (!parentNode) return -1;

  let i = 0;
  let child = parentNode.firstChild;
  while (child) {
    if (child === node) {
      if (i !== 0) return i;
      while ((child = child.nextSibling)) {
        if (nodeName === child.nodeName) {
          return 0;
        }
      }

      return -1;
    } else if (nodeName === child.nodeName) {
      i++;
    }

    child = child.nextSibling;
  }

  return -1;
}
