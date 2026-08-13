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
  enter: (node: t.Node, state?: S) => t.Node | void,
  state?: S,
): void {
  const node = container[key] as VisitValue;
  if (node) {
    if (Array.isArray(node)) {
      for (let i = node.length; i--;) {
        traverseReplace(node, i, enter, state);
      }
    } else {
      const keys = (t as any).VISITOR_KEYS[node.type] as VisitKeys<
        typeof node
      >[];
      for (let i = keys.length; i--;) {
        traverseReplace(node, keys[i], enter, state);
      }

      const replacement = enter(node, state);
      if (replacement) container[key] = replacement as any;
    }
  }
}

export function traverseContains(
  node: undefined | null | t.Node | t.Node[],
  check: (node: t.Node) => void | boolean | typeof skip,
): boolean {
  return !!traverseFind(node, check);
}

export function traverseFind(
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

      for (const key of (t as any).VISITOR_KEYS[node.type] as VisitKeys<
        typeof node
      >[]) {
        const found = traverseFind((node as any)[key], check);
        if (found) return found;
      }
    }
  }
}

export function traverseFindAwait(node: undefined | null | t.Node | t.Node[]) {
  return traverseFind(node, (child) => {
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
  });
}

export function traverse(
  visit: (
    node: t.Node,
    parent?: t.Node,
    grandParent?: t.Node,
  ) => void | typeof skip,
  node: undefined | t.Node | t.Node[],
  parent?: t.Node,
  grandParent?: t.Node,
) {
  if (node) {
    if (Array.isArray(node)) {
      for (const item of node) {
        traverse(visit, item, parent, grandParent);
      }
    } else if (visit(node, parent, grandParent) !== skip) {
      for (const key of (t as any).VISITOR_KEYS[node.type] as VisitKeys<
        typeof node
      >[]) {
        traverse(visit, (node as any)[key], node, parent);
      }
    }
  }
}
