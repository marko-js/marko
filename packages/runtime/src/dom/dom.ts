import type { Renderer } from "./renderer";
import { onDestroy, read, write } from "./scope";
import { withQueueNext } from "./queue";

export const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11,
}

export function isDocumentFragment(node: Node): node is DocumentFragment {
  return node.nodeType === NodeType.DocumentFragment;
}

export function attr(elementIndex: number, name: string, value: unknown) {
  const normalizedValue = normalizeAttrValue(value);
  if (normalizedValue === undefined) {
    (read(elementIndex) as Element).removeAttribute(name);
  } else {
    (read(elementIndex) as Element).setAttribute(name, normalizedValue);
  }
}

export function data(textOrCommentIndex: number, value: unknown) {
  const node = read(textOrCommentIndex) as Text | Comment;
  const normalizedValue = normalizeString(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export function attrs(elementIndex: number, index: number) {
  const nextAttrs = read(index) as Record<string, unknown>;
  const prevAttrs = read(index + 1) as Record<string, unknown> | undefined;

  if (prevAttrs) {
    for (const name in prevAttrs) {
      if (!(nextAttrs && name in nextAttrs)) {
        (read(elementIndex) as Element).removeAttribute(name);
      }
    }
  }
  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextAttrs) {
    if (!(prevAttrs && nextAttrs[name] === prevAttrs[name])) {
      if (name !== "renderBody") {
        attr(elementIndex, name, nextAttrs[name]);
      }
    }
  }

  write(index + 1, nextAttrs);
}

const doc = document;
const parser = doc.createElement("template");

export function html(value: string, index: number) {
  const firstChild = read(index) as Node & ChildNode;
  const lastChild = (read(index + 1) || firstChild) as Node & ChildNode;
  const parentNode = firstChild.parentNode!;
  const afterReference = lastChild.nextSibling;

  parser.innerHTML = value || " ";
  const newContent = parser.content;
  write(index, newContent.firstChild);
  write(index + 1, newContent.lastChild);
  parentNode.insertBefore(newContent, firstChild);

  let current = firstChild;
  while (current !== afterReference) {
    const next = current.nextSibling;
    current.remove();
    current = next!;
  }
}

export function props(nodeIndex: number, index: number) {
  const nextProps = read(index) as Record<string, unknown>;
  const prevProps = read(index + 1) as Record<string, unknown> | undefined;
  const node = read(nodeIndex) as Node;

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

  write(index + 1, nextProps);
}

export function innerHTML(elementIndex: number, value: string) {
  (read(elementIndex) as Element).innerHTML = normalizeString(value);
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

type EffectFn = () => void | (() => void);
export function userEffect(index: number, fn: EffectFn) {
  const cleanup = read(index) as ReturnType<EffectFn>;
  const nextCleanup = withQueueNext(fn);
  if (cleanup) {
    withQueueNext(cleanup);
  } else {
    onDestroy(index);
  }
  write(index, nextCleanup);
}

export function lifecycle(
  index: number,
  mount?: () => void,
  update?: () => void,
  destroy?: () => void
) {
  const mounted = read(index);
  if (!mounted) {
    if (mount) withQueueNext(mount);
    onDestroy(index + 1);
  }
  if (mounted && update) update();
  write(index + 1, destroy);
}
