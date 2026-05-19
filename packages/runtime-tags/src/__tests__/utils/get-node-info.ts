export function getNodePath(node: Node) {
  const body = node.ownerDocument?.body;
  if (node === body) return node.nodeName.toLowerCase();

  let suffix = "";
  let cur: Node | null = node;

  if (isText(cur)) {
    const { parentNode } = cur;
    if (parentNode) {
      let offset = 0;
      let hasOtherText = false;
      let found = false;
      for (
        let child = parentNode.firstChild;
        child;
        child = child.nextSibling
      ) {
        if (!isIgnoredNode(child)) {
          if (child === cur) {
            found = true;
          } else if (isText(child)) {
            hasOtherText = true;
            if (!found) offset += child.length;
          }
        }
      }
      suffix = found && hasOtherText ? `::text@${offset}` : "::text";
    }
    cur = parentNode as Node | null;
    if (!cur || cur === body) return suffix;
  }

  let path = "";
  while (cur) {
    if (isElement(cur)) {
      const uniqueName = getUniqueName(cur);
      if (uniqueName) {
        path = path ? `${uniqueName} > ${path}` : uniqueName;
        break;
      }
    }

    const { parentNode } = cur;
    const { nodeName } = cur;
    let name = nodeName.toLowerCase();

    if (parentNode) {
      let i = 0;
      let hasLater = false;
      let found = false;
      let child = parentNode.firstChild;
      while (child) {
        if (!isIgnoredNode(child)) {
          if (child === cur) {
            found = true;
          } else if (child.nodeName === nodeName) {
            if (found) {
              hasLater = true;
              break;
            } else {
              i++;
            }
          }
        }
        child = child.nextSibling;
      }
      if (i > 0 || hasLater) name += `:nth-of-type(${i + 1})`;
    }

    path = path ? `${name} > ${path}` : name;

    if (!parentNode || parentNode === body) break;
    cur = parentNode as Node;
  }

  return path + suffix;
}

export function getNodeName(node: Node): string {
  if (isText(node)) {
    const { nodeValue } = node;
    return nodeValue ? `::text(${JSON.stringify(nodeValue)})` : "::text";
  }
  return (
    (isElement(node) && getUniqueName(node)) || node.nodeName.toLowerCase()
  );
}

function getUniqueName(el: HTMLElement) {
  if (el.id) {
    return `#${el.id}`;
  }

  if (el.classList.length && el.ownerDocument) {
    const selector = `.${[...el.classList].join(".")}`;
    if (el.ownerDocument.querySelectorAll(selector).length === 1) {
      return selector;
    }
  }
}

export function getNodeSelector(
  nodes: Node[],
  prev: Node | null,
  parent: Node,
): string {
  let after: Node | null = prev;
  while (after && isIgnoredNode(after)) after = after.previousSibling;
  const names = nodes.map(getNodeName);
  const body = parent.ownerDocument?.body;
  if (!after && parent === body) return names.join(", ");
  const rhs = names.length === 1 ? names[0] : `:is(${names.join(", ")})`;
  if (after) return `${getNodePath(after)} + ${rhs}`;
  const parentPath = getNodePath(parent);
  return nodes.length === 1 && isText(nodes[0])
    ? parentPath + rhs
    : `${parentPath} > ${rhs}`;
}

export function getSanitizedNodes(nodeList: NodeList): Node[] {
  const result: Node[] = [];
  for (const node of nodeList) {
    if (!isIgnoredNode(node)) result.push(node);
  }
  return result;
}

export function isIgnoredNode(node: Node) {
  return isMarkoComment(node) || isIgnoredTag(node) || isEmptyTextNode(node);
}

export function isDocument(node: Node): node is Document {
  return node.nodeType === 9;
}

export function isElement(node: Node): node is HTMLElement {
  return node.nodeType === 1;
}

export function isInputElement(node: Element): node is HTMLInputElement {
  return node.tagName === "INPUT";
}

export function isOptionElement(node: Element): node is HTMLOptionElement {
  return node.tagName === "OPTION";
}

export function isTextAreaElement(node: Element): node is HTMLTextAreaElement {
  return node.tagName === "TEXTAREA";
}

function isMarkoComment(node: Node): node is Comment {
  if (!isComment(node)) return false;
  const { data } = node;
  return !data || /^[a-zA-Z$_]\w*[^\w\s]/.test(data);
}

function isIgnoredTag(
  node: Node,
): node is
  | HTMLLinkElement
  | HTMLTitleElement
  | HTMLStyleElement
  | HTMLScriptElement {
  if (!isElement(node)) return false;
  switch (node.tagName) {
    case "T":
    case "LINK":
    case "TITLE":
    case "STYLE":
    case "SCRIPT":
      return true;
    default:
      return false;
  }
}

function isText(node: Node): node is Text {
  return node.nodeType === 3;
}

function isComment(node: Node): node is Comment {
  return node.nodeType === 8;
}

function isEmptyTextNode(node: Node): node is Text {
  return isText(node) && !node.nodeValue;
}
