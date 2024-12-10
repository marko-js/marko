import { types as t } from "@marko/compiler";
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
  check: (node: t.Node) => void | boolean,
): boolean {
  if (node) {
    if (Array.isArray(node)) {
      for (const item of node) {
        if (traverseContains(item, check)) {
          return true;
        }
      }
    } else {
      for (const key of (t as any).VISITOR_KEYS[node.type] as VisitKeys<
        typeof node
      >[]) {
        if (traverseContains((node as any)[key], check)) {
          return true;
        }
      }

      return !!check(node);
    }
  }

  return false;
}
