import { types as t } from "@marko/compiler";
type VisitValue = null | void | t.Node | t.Node[];
type VisitKeys<T> = (string | number) &
  (T extends T
    ? {
        [K in keyof T]: T[K] extends VisitValue ? K : never;
      }[keyof T]
    : never);

export function traverseFast<T, K extends VisitKeys<T>>(
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
        traverseFast(node, i, enter);
      }
    } else {
      const keys = (t as any).VISITOR_KEYS[node.type] as VisitKeys<
        typeof node
      >[];
      for (let i = keys.length; i--; ) {
        traverseFast(node, keys[i], enter);
      }

      const replacement = enter(node, container as t.Node | t.Node[], key);
      if (replacement) container[key] = replacement as any;
    }
  }
}
