import type { Renderer } from "./renderer";
import { Scope, ScopeOffsets } from "../common/types";
import { onDestroy, read, write } from "./scope";
import { withQueueNext } from "./queue";

export const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11
}

export type DOMMethods = {
  ___insertBefore: (
    this: Scope,
    parent: Node & ParentNode,
    nextSibling: Node | null
  ) => void;
  ___remove: (this: Scope) => void;
  ___getParentNode: (this: Scope) => Node & ParentNode;
  ___getAfterNode: (this: Scope) => Node | null;
  ___getFirstNode: (this: Scope) => Node & ChildNode;
  ___getLastNode: (this: Scope) => Node & ChildNode;
};

export const staticNodeMethods: DOMMethods = {
  ___insertBefore(parent, nextSibling) {
    parent.insertBefore(this[ScopeOffsets.START_NODE] as Node, nextSibling);
  },
  ___remove() {
    (this[ScopeOffsets.START_NODE] as ChildNode).remove();
  },
  ___getParentNode() {
    return this.___getFirstNode().parentNode!;
  },
  ___getAfterNode() {
    return this.___getLastNode().nextSibling;
  },
  ___getFirstNode() {
    return this[ScopeOffsets.START_NODE] as ChildNode;
  },
  ___getLastNode() {
    return this[ScopeOffsets.END_NODE] as ChildNode;
  }
};

// export const staticNodePropertiesDef = {
//   ___insertBefore: {
//     value(parent, nextSibling) {
//       parent.insertBefore(this[ScopeOffsets.START_NODE] as Node, nextSibling);
//     }
//   },
//   ___remove: {
//     value() {
//       (this[ScopeOffsets.START_NODE] as ChildNode).remove();
//     }
//   },
//   ___parentNode: {
//     get() {
//       return this[ScopeOffsets.START_NODE].parentNode;
//     },
//   },
//   ___afterNode: {
//     get() {
//       return this.___lastNode.nextSibling;
//     },
//   }
// };

export const fragmentMethods = {
  ...staticNodeMethods,
  ___insertBefore(parent, nextSibling) {
    let current: Node = this.___getFirstNode();
    const stop = this.___getAfterNode();
    while (current !== stop) {
      const next = current.nextSibling;
      parent.insertBefore(current, nextSibling);
      current = next!;
    }
  },
  ___remove() {
    let current = this.___getFirstNode();
    const stop = this.___getAfterNode();
    while (current !== stop) {
      const next = current.nextSibling;
      current.remove();
      current = next!;
    }
  }
} as DOMMethods;

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
  (read(textOrCommentIndex) as Text | Comment).data = normalizeString(value);
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
