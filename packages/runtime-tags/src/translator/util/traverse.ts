import { types as t } from "@marko/compiler";
export const skip = Symbol("skip");

type VisitValue = null | void | t.Node | t.Node[];
type VisitKeys<T> = (string | number) &
  (T extends T
    ? {
        [K in keyof T]: T[K] extends VisitValue ? K : never;
      }[keyof T]
    : never);

export function traverseReplace<T, K extends VisitKeys<T>>(
  container: T,
  key: K,
  enter: (
    node: t.Node,
    container: t.Node | t.Node[],
    key: string | number,
  ) => t.Node | void,
): void {
  const node = container[key] as VisitValue;
  if (node) {
    if (Array.isArray(node)) {
      for (let i = node.length; i--; ) {
        traverseReplace(node, i, enter);
      }
    } else {
      const keys = (t as any).VISITOR_KEYS[node.type] as VisitKeys<
        typeof node
      >[];
      for (let i = keys.length; i--; ) {
        traverseReplace(node, keys[i], enter);
      }

      const replacement = enter(node, container as t.Node | t.Node[], key);
      if (replacement) container[key] = replacement as any;
    }
  }
}

export function traverseContains(
  node: undefined | null | t.Node | t.Node[],
  check: (node: t.Node) => void | boolean | typeof skip,
): boolean {
  if (node) {
    if (Array.isArray(node)) {
      for (const item of node) {
        if (traverseContains(item, check)) {
          return true;
        }
      }
    } else {
      switch (check(node)) {
        case true:
          return true;
        case skip:
          return false;
      }

      for (const key of (t as any).VISITOR_KEYS[node.type] as VisitKeys<
        typeof node
      >[]) {
        if (traverseContains((node as any)[key], check)) {
          return true;
        }
      }
    }
  }

  return false;
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
