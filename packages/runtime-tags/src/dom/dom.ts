import { classValue, styleValue } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  NodeType,
  type Scope,
} from "../common/types";
import { getAbortSignal } from "./abort-signal";
import { on } from "./event";
import { parseHTML } from "./parse-html";

const eventHandlerReg = /^on[A-Z-]/;

export function isDocumentFragment(node: Node): node is DocumentFragment {
  return node.nodeType === NodeType.DocumentFragment;
}

export function attr(element: Element, name: string, value: unknown) {
  setAttribute(element, name, normalizeAttrValue(value));
}

function setAttribute(
  element: Element,
  name: string,
  value: string | undefined,
) {
  if (value === undefined) {
    element.removeAttribute(name);
  } else {
    element.setAttribute(name, value);
  }
}

export function classAttr(element: Element, value: unknown) {
  setAttribute(element, "class", classValue(value) || undefined);
}

export function styleAttr(element: Element, value: unknown) {
  setAttribute(element, "style", styleValue(value) || undefined);
}

export function data(node: Text | Comment, value: unknown) {
  const normalizedValue = normalizeString(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export function attrs(
  scope: Scope,
  elementAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const element = scope[elementAccessor] as Element;
  let events: undefined | Record<string, unknown>;

  for (const { name } of element.attributes) {
    if (!(nextAttrs && name in nextAttrs)) {
      element.removeAttribute(name);
    }
  }

  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextAttrs) {
    const value = nextAttrs[name];
    switch (name) {
      case "class":
        classAttr(element, value);
        break;
      case "style":
        styleAttr(element, value);
        break;
      case "renderBody":
        break;
      default:
        if (eventHandlerReg.test(name)) {
          (events ||= {})[
            name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase()
          ] = value;
        } else {
          attr(element, name, value);
        }
        break;
    }
  }

  scope[elementAccessor + AccessorChar.EventAttributes] = events;
}

export function attrsEvents(scope: Scope, elementAccessor: Accessor) {
  const element = scope[elementAccessor] as Element;
  const events = scope[elementAccessor + AccessorChar.EventAttributes];
  for (const name in events) {
    on(element, name as any, events[name] as any);
  }
}

export function html(scope: Scope, value: unknown, index: Accessor) {
  const firstChild = scope[index] as Node & ChildNode;
  const lastChild = (scope[index + "-"] || firstChild) as Node & ChildNode;
  const parentNode = firstChild.parentNode!;
  const afterReference = lastChild.nextSibling;
  const newContent = parseHTML(value || value === 0 ? value + "" : "<!>");

  scope[index] = newContent.firstChild;
  scope[index + AccessorChar.DynamicPlaceholderLastChild] =
    newContent.lastChild;
  parentNode.insertBefore(newContent, firstChild);

  let current = firstChild;
  while (current !== afterReference) {
    const next = current.nextSibling;
    current.remove();
    current = next!;
  }
}

export function props(scope: Scope, nodeIndex: number, index: number) {
  const nextProps = scope[index] as Record<string, unknown>;
  const prevProps = scope[index + "-"] as Record<string, unknown> | undefined;
  const node = scope[nodeIndex] as Node;

  if (prevProps) {
    for (const name in prevProps) {
      if (!(name in nextProps)) {
        (node as any)[name] = undefined;
      }
    }
  }
  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextProps) {
    (node as any)[name] = nextProps[name];
  }

  scope[index + "-"] = nextProps;
}

function normalizeAttrValue(value: unknown) {
  if (value || value === 0) {
    return value === true ? "" : value + "";
  }
}

function normalizeString(value: unknown) {
  return value || value === 0 ? value + "" : "\u200d";
}
export function lifecycle(
  scope: Scope,
  index: string | number,
  thisObj: Record<string, unknown> & {
    onMount?: (this: unknown) => void;
    onUpdate?: (this: unknown) => void;
    onDestroy?: (this: unknown) => void;
  },
) {
  const instance = scope[index] as typeof thisObj;
  if (instance) {
    Object.assign(instance, thisObj);
    instance.onUpdate?.();
  } else {
    scope[index] = thisObj;
    thisObj.onMount?.();
    getAbortSignal(
      scope,
      AccessorChar.LifecycleAbortController + index,
    ).onabort = () => thisObj.onDestroy?.();
  }
}
