import { assertValidAttrValue, assertValidTextValue } from "../common/errors";
import {
  escapeStyleValue,
  isNotVoid,
  stringifyClassObject,
  stringifyStyleObject,
  toDelimitedString,
} from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type Scope,
} from "../common/types";
import { $signal } from "./abort-signal";
import { parseHTML } from "./parse-html";
import { _id } from "./signals";

export function _to_text(value: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(value);
  }
  return value || value === 0 ? value + "" : "";
}

export function _attr(element: Element, name: string, value: unknown) {
  if (MARKO_DEBUG) {
    assertValidAttrValue(name, value);
  }
  setAttribute(element, name, normalizeAttrValue(value));
}

function setAttribute(
  element: Element,
  name: string,
  value: string | undefined,
) {
  // TODO: benchmark if it is actually faster to check first
  if (element.getAttribute(name) != value) {
    if (value === undefined) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, value);
    }
  }
}

export function _attr_class(element: Element, value: unknown) {
  setAttribute(
    element,
    "class",
    toDelimitedString(value, " ", stringifyClassObject) || undefined,
  );
}

export function _attr_class_items(
  element: Element,
  items: Record<string, unknown>,
) {
  for (const key in items) {
    _attr_class_item(element, key, items[key]);
  }
}

export function _attr_class_item(
  element: Element,
  name: string,
  value: unknown,
) {
  element.classList.toggle(name, !!value);
}

export function _attr_style(element: Element, value: unknown) {
  setAttribute(
    element,
    "style",
    toDelimitedString(value, ";", stringifyStyleObject) || undefined,
  );
}

export function _attr_style_items(
  element: HTMLElement,
  items: Record<string, unknown>,
) {
  for (const key in items) {
    _attr_style_item(element, key, items[key]);
  }
}

export function _attr_style_item(
  element: HTMLElement,
  name: string,
  value: unknown,
) {
  element.style.setProperty(name, _to_text(value));
}

export function _style_shell(scope: Scope, nodeAccessor: Accessor) {
  const element = scope[nodeAccessor] as HTMLStyleElement;
  const id = _id(scope);
  _attr_nonce(scope, nodeAccessor);
  element.className = id;
  _text_content(element, "." + id + "~*{}");
}

export function _style_rule_item(
  element: HTMLStyleElement,
  name: string,
  value: unknown,
) {
  const text = element.textContent!;
  const decl = name + ":" + escapeStyleValue(_to_text(value)) + ";";
  let start = text.indexOf("{" + name + ":");
  if (!~start) start = text.indexOf(";" + name + ":");
  _text_content(
    element,
    ~start
      ? // `escapeStyleValue` never emits a raw `;`, so the next one ends the declaration.
        text.slice(0, ++start) + decl + text.slice(text.indexOf(";", start) + 1)
      : text.slice(0, -1) + decl + "}",
  );
}

export function _attr_nonce(scope: Scope, nodeAccessor: Accessor) {
  _attr(scope[nodeAccessor], "nonce", scope[AccessorProp.Global].cspNonce);
}

export function _text(node: Text | Comment, value: unknown) {
  const normalizedValue = _to_text(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export function _text_content(node: ParentNode, value: unknown) {
  const normalizedValue = _to_text(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.textContent !== normalizedValue) {
    node.textContent = normalizedValue;
  }
}

export function _html(scope: Scope, value: unknown, accessor: Accessor) {
  const firstChild = scope[accessor] as ChildNode;
  const parentNode = firstChild.parentNode!;
  const lastChild = (scope[AccessorPrefix.DynamicHTMLLastChild + accessor] ||
    firstChild) as ChildNode;
  const newContent = parseHTML(
    _to_text(value),
    (parentNode as Element).namespaceURI!,
  );

  insertChildNodes(
    parentNode,
    firstChild,
    (scope[accessor] =
      newContent.firstChild || newContent.appendChild(new Text())),
    (scope[AccessorPrefix.DynamicHTMLLastChild + accessor] =
      newContent.lastChild!),
  );
  removeChildNodes(firstChild, lastChild);
}

export function normalizeAttrValue(value: unknown) {
  if (isNotVoid(value)) {
    return value === true ? "" : value + "";
  }
}

export function _lifecycle(
  scope: Scope,
  thisObj: Record<string, unknown> & {
    onMount?: (this: unknown) => void;
    onUpdate?: (this: unknown) => void;
    onDestroy?: (this: unknown) => void;
  },
  index: number = 0,
) {
  const accessor = AccessorPrefix.Lifecycle + index;
  const instance = scope[accessor] as typeof thisObj;
  if (instance) {
    Object.assign(instance, thisObj);
    instance.onUpdate?.();
  } else {
    scope[accessor] = thisObj;
    thisObj.onMount?.();
    $signal(scope, accessor).onabort = () => thisObj.onDestroy?.();
  }
}

export function removeChildNodes(startNode: ChildNode, endNode: ChildNode) {
  const stop = endNode.nextSibling;
  while (startNode !== stop) {
    const next = startNode.nextSibling;
    startNode.remove();
    startNode = next!;
  }
}

export function insertChildNodes(
  parentNode: ParentNode,
  referenceNode: Node | null,
  startNode: Node,
  endNode: Node,
) {
  parentNode.insertBefore(toInsertNode(startNode, endNode), referenceNode);
}

export function toInsertNode(startNode: Node, endNode: Node) {
  if (startNode === endNode) return startNode;
  const parent = new DocumentFragment();
  const stop = endNode.nextSibling;
  while (startNode !== stop) {
    const next = startNode.nextSibling;
    parent.appendChild(startNode);
    startNode = next!;
  }

  return parent;
}
