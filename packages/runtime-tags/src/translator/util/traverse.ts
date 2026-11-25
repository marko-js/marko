import { types as t } from "@marko/compiler";
export const skip = Symbol("skip");

type VisitValue = null | void | t.Node | t.Node[];
type VisitKeys<T> = (string | number) &
  (T extends T
    ? {
        [K in keyof T]: T[K] extends VisitValue ? K : never;
      }[keyof T]
    : never);

export function traverseReplace<T, K extends VisitKeys<T>, S>(
  container: T,
  key: K,
  exit: (node: t.Node, state?: S) => t.Node | void,
  state?: S,
): void {
  const node = container[key] as VisitValue;
  if (node) {
    if (Array.isArray(node)) {
      for (let i = node.length; i--;) {
        traverseReplace(node, i, exit, state);
      }
    } else {
      const keys = t.VISITOR_KEYS[node.type] as VisitKeys<typeof node>[];
      for (let i = keys.length; i--;) {
        traverseReplace(node, keys[i], exit, state);
      }

      const replacement = exit(node, state);
      if (replacement) container[key] = replacement as any;
    }
  }
}

// Whether `check` holds for one of `node`'s direct children.
export function someChild<T extends t.Node>(
  node: T,
  check: (child: t.Node) => boolean,
): boolean {
  const keys = t.VISITOR_KEYS[node.type] as VisitKeys<T>[];
  for (let i = 0; i < keys.length; i++) {
    const child = node[keys[i]] as VisitValue;
    if (Array.isArray(child)) {
      for (let j = 0; j < child.length; j++) {
        if (child[j] && check(child[j])) return true;
      }
    } else if (child && check(child)) {
      return true;
    }
  }
  return false;
}

export function traverseContains(
  node: undefined | null | t.Node | t.Node[],
  check: (node: t.Node) => void | boolean | typeof skip,
): boolean {
  return !!traverseFind(node, check);
}

function traverseFind(
  node: undefined | null | t.Node | t.Node[],
  check: (node: t.Node) => void | boolean | typeof skip,
): t.Node | undefined {
  if (node) {
    if (Array.isArray(node)) {
      for (const item of node) {
        const found = traverseFind(item, check);
        if (found) return found;
      }
    } else {
      switch (check(node)) {
        case true:
          return node;
        case skip:
          return;
      }

      for (const key of t.VISITOR_KEYS[node.type] as VisitKeys<typeof node>[]) {
        const found = traverseFind((node as any)[key], check);
        if (found) return found;
      }
    }
  }
}

export function traverseFindAwait(node: undefined | null | t.Node | t.Node[]) {
  return traverseFind(node, isAwait);
}

function isAwait(child: t.Node) {
  switch (child.type) {
    case "ForOfStatement":
      return child.await;
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ClassMethod":
    case "ObjectMethod":
    case "ClassPrivateMethod":
      return skip;
    case "AwaitExpression":
      return true;
  }
}
