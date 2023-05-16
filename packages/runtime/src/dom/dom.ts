import { onDestroy, write } from "./scope";
import { styleValue, classValue } from "../common/helpers";
import { type Accessor, AccessorChars, type Scope } from "../common/types";

export const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11,
}

export function isDocumentFragment(node: Node): node is DocumentFragment {
  return node.nodeType === NodeType.DocumentFragment;
}

export function attr(element: Element, name: string, value: unknown) {
  const normalizedValue = normalizeAttrValue(value);
  if (normalizedValue === undefined) {
    element.removeAttribute(name);
  } else {
    element.setAttribute(name, normalizedValue);
  }
}

export function classAttr(element: Element, value: unknown) {
  attr(element, "class", classValue(value) || false);
}

export function styleAttr(element: Element, value: unknown) {
  attr(element, "style", styleValue(value) || false);
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
  nextAttrs: Record<string, unknown>
) {
  const prevAttrs = scope[
    elementAccessor + AccessorChars.PREVIOUS_ATTRIBUTES
  ] as typeof nextAttrs | undefined;
  const element = scope[elementAccessor] as Element;

  if (prevAttrs) {
    for (const name in prevAttrs) {
      if (!(nextAttrs && name in nextAttrs)) {
        element.removeAttribute(name);
      }
    }
  }
  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextAttrs) {
    if (!(prevAttrs && nextAttrs[name] === prevAttrs[name])) {
      if (name === "class") {
        classAttr(element, nextAttrs[name]);
      } else if (name === "style") {
        styleAttr(element, nextAttrs[name]);
      } else if (name !== "renderBody") {
        attr(element, name, nextAttrs[name]);
      }
    }
  }

  scope[elementAccessor + AccessorChars.PREVIOUS_ATTRIBUTES] = nextAttrs;
}

const doc = document;
const parser = /* @__PURE__ */ doc.createElement("template");

export function html(scope: Scope, value: unknown, index: Accessor) {
  const firstChild = scope[index] as Node & ChildNode;
  const lastChild = (scope[index + "-"] || firstChild) as Node & ChildNode;
  const parentNode = firstChild.parentNode!;
  const afterReference = lastChild.nextSibling;

  parser.innerHTML = value || value === 0 ? `${value}` : "<!>";
  const newContent = parser.content;
  write(scope, index, newContent.firstChild);
  write(scope, (index + "-") as any as number, newContent.lastChild);
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

type EffectFn<S extends Scope> = (scope: S) => void | (() => void);
export function userEffect<S extends Scope>(
  scope: S,
  index: number,
  fn: EffectFn<S>
) {
  const cleanup = scope[index] as ReturnType<EffectFn<S>>;
  const nextCleanup = fn(scope);
  if (cleanup) {
    cleanup();
  } else {
    onDestroy(scope, index);
  }
  scope[index] = nextCleanup;
}

export function lifecycle(
  scope: Scope,
  index: number,
  thisObj: Record<string, unknown> & {
    onMount?: (this: unknown) => void;
    onUpdate?: (this: unknown) => void;
    onDestroy?: (this: unknown) => void;
  }
) {
  let storedThis = scope[index] as typeof thisObj;
  if (!storedThis) {
    storedThis = scope[index] = thisObj;
    scope[AccessorChars.CLEANUP + index] = () =>
      storedThis.onDestroy?.call(storedThis);
    onDestroy(scope, AccessorChars.CLEANUP + index);
    storedThis.onMount?.call(storedThis);
  } else {
    Object.assign(storedThis, thisObj);
    storedThis.onUpdate?.call(storedThis);
  }
}
