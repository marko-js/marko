import { Conditional, Loop } from "./control-flow";
import { Renderer } from "./renderer";
import { onDestroy, Scope } from "./scope";

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

export const staticNodeMethods = {
  ___insertBefore(parent, nextSibling) {
    parent.insertBefore(this.___startNode as Node, nextSibling);
  },
  ___remove() {
    (this.___startNode as ChildNode).remove();
  },
  ___getParentNode() {
    return this.___getFirstNode().parentNode;
  },
  ___getAfterNode() {
    return this.___getLastNode().nextSibling;
  },
  ___getFirstNode() {
    return this.___startNode;
  },
  ___getLastNode() {
    return this.___endNode;
  }
} as DOMMethods;

// export const staticNodePropertiesDef = {
//   ___insertBefore: {
//     value(parent, nextSibling) {
//       parent.insertBefore(this.___startNode as Node, nextSibling);
//     }
//   },
//   ___remove: {
//     value() {
//       (this.___startNode as ChildNode).remove();
//     }
//   },
//   ___parentNode: {
//     get() {
//       return this.___startNode.parentNode;
//     },
//   },
//   ___afterNode: {
//     get() {
//       return this.___lastNode.nextSibling;
//     },
//   }
// };

export const staticFragmentMethods = {
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

export const dynamicStartFragmentMethods = {
  ...staticFragmentMethods,
  ___getFirstNode() {
    return (this.___startNode as Conditional | Loop).___getFirstNode();
  }
} as DOMMethods;

export const dynamicEndFragmentMethods = {
  ...staticFragmentMethods,
  ___getLastNode() {
    return (this.___endNode as Conditional | Loop).___getLastNode();
  }
} as DOMMethods;

export const dynamicFragmentMethods = {
  ...staticFragmentMethods,
  ___getFirstNode() {
    return (this.___startNode as Conditional | Loop).___getFirstNode();
  },
  ___getLastNode() {
    return (this.___endNode as Conditional | Loop).___getLastNode();
  }
} as DOMMethods;

export function isDocumentFragment(node: Node): node is DocumentFragment {
  return node.nodeType === NodeType.DocumentFragment;
}

export function attr(el: Element, name: string, value: unknown) {
  const normalizedValue = normalizeAttrValue(value);
  if (normalizedValue === undefined) {
    el.removeAttribute(name);
  } else {
    el.setAttribute(name, normalizedValue);
  }
}

export function data(node: Text | Comment, value: unknown) {
  node.data = normalizeString(value);
}

export function attrs(el: Element, scope: Scope, index: number) {
  const nextAttrs = scope[index] as Record<string, unknown>;
  const prevAttrs = scope[index + 1] as Record<string, unknown> | undefined;

  if (prevAttrs) {
    for (const name in prevAttrs) {
      if (!(nextAttrs && name in nextAttrs)) {
        el.removeAttribute(name);
      }
    }
  }
  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextAttrs) {
    if (!(prevAttrs && nextAttrs[name] === prevAttrs[name])) {
      if (name !== "renderBody") {
        attr(el, name, nextAttrs[name]);
      }
    }
  }

  scope[index + 1] = nextAttrs;
}

const doc = document;
const parser = doc.createElement("template");

export function html(value: string, scope: Scope, index: number) {
  const firstChild = scope[index] as Node & ChildNode;
  const lastChild = scope[index + 1] as Node & ChildNode;
  const parentNode = firstChild.parentNode!;
  const afterReference = lastChild.nextSibling;

  parser.innerHTML = value || " ";
  const newContent = parser.content;
  scope[index] = newContent.firstChild;
  scope[index + 1] = newContent.lastChild;
  parentNode.insertBefore(newContent, firstChild);

  let current = firstChild;
  while (current !== afterReference) {
    const next = current.nextSibling;
    current.remove();
    current = next!;
  }
}

export function props(node: Node, scope: Scope, index: number) {
  const nextProps = scope[index] as Record<string, unknown>;
  const prevProps = scope[index + 1] as Record<string, unknown> | undefined;

  if (prevProps) {
    for (const name in prevProps) {
      if (!(name in nextProps)) {
        node[name] = undefined;
      }
    }
  }
  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextProps) {
    node[name] = nextProps[name];
  }

  scope[index + 1] = nextProps;
}

export function innerHTML(el: Element, value: string) {
  el.innerHTML = normalizeString(value);
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
export function userEffect(scope: Scope, index: number, fn: EffectFn) {
  const cleanup = scope[index] as ReturnType<EffectFn>;
  if (cleanup) {
    cleanup();
  } else {
    onDestroy(scope, index);
  }
  scope[index] = fn();
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
