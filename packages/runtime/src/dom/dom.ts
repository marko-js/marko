import type { Renderer } from "./renderer";
import { onDestroy, write } from "./scope";
import { styleValue, classValue } from "../common/helpers";
import type { Scope } from "../common/types";

export const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11,
}

export function isDocumentFragment(node: Node): node is DocumentFragment {
  return node.nodeType === NodeType.DocumentFragment;
}

export function attr(
  scope: Scope,
  elementIndex: number,
  name: string,
  value: unknown
) {
  const normalizedValue = normalizeAttrValue(value);
  const element = scope[elementIndex] as Element;
  if (normalizedValue === undefined) {
    element.removeAttribute(name);
  } else {
    element.setAttribute(name, normalizedValue);
  }
}

export function classAttr(scope: Scope, elementIndex: number, value: unknown) {
  attr(scope, elementIndex, "class", classValue(value) || false);
}

export function styleAttr(scope: Scope, elementIndex: number, value: unknown) {
  attr(scope, elementIndex, "style", styleValue(value) || false);
}

export function data(scope: Scope, textOrCommentIndex: number, value: unknown) {
  const node = scope[textOrCommentIndex] as Text | Comment;
  const normalizedValue = normalizeString(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export function attrs(scope: Scope, elementIndex: number, index: number) {
  const nextAttrs = scope[index] as Record<string, unknown>;
  const prevAttrs = scope[index + 1] as Record<string, unknown> | undefined;

  if (prevAttrs) {
    for (const name in prevAttrs) {
      if (!(nextAttrs && name in nextAttrs)) {
        (scope[elementIndex] as Element).removeAttribute(name);
      }
    }
  }
  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextAttrs) {
    if (!(prevAttrs && nextAttrs[name] === prevAttrs[name])) {
      if (name === "class") {
        classAttr(scope, elementIndex, nextAttrs[name]);
      } else if (name === "style") {
        styleAttr(scope, elementIndex, nextAttrs[name]);
      } else if (name !== "renderBody") {
        attr(scope, elementIndex, name, nextAttrs[name]);
      }
    }
  }

  scope[index + 1] = nextAttrs;
}

const doc = document;
const parser = doc.createElement("template");

export function html(scope: Scope, value: string, index: number) {
  const firstChild = scope[index] as Node & ChildNode;
  const lastChild = (scope[index + 1] || firstChild) as Node & ChildNode;
  const parentNode = firstChild.parentNode!;
  const afterReference = lastChild.nextSibling;

  parser.innerHTML = value || " ";
  const newContent = parser.content;
  write(scope, index, newContent.firstChild);
  write(scope, index + 1, newContent.lastChild);
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
  const prevProps = scope[index + 1] as Record<string, unknown> | undefined;
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

  scope[index + 1] = nextProps;
}

export function innerHTML(scope: Scope, elementIndex: number, value: string) {
  (scope[elementIndex] as Element).innerHTML = normalizeString(value);
}

export function dynamicTagString(tag: string, input: Record<string, unknown>) {
  // TODO
  return [tag, input];
}

export function dynamicTagRenderer(
  tag: Renderer,
  input: Record<string, unknown>
) {
  // TODO
  return [tag, input];
}

export function dynamicTag(
  tag: string | Renderer,
  input: Record<string, unknown>
) {
  // TODO
  return [tag, input];
}

function normalizeAttrValue(value: unknown) {
  return value == null || value === false ? undefined : value + "";
}

function normalizeString(value: unknown) {
  return value == null ? "" : value + "";
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
  mount?: () => void,
  update?: () => void,
  destroy?: () => void
) {
  const mounted = scope[index];
  if (!mounted) {
    if (mount) mount();
    onDestroy(scope, index + 1);
  }
  if (mounted && update) update();
  scope[index + 1] = destroy;
}
