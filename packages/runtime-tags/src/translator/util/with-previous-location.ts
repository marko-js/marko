import type { types as t } from "@marko/compiler";

export function withPreviousLocation<T extends t.Node>(
  newNode: T,
  originalNode: t.Node,
): T {
  newNode.start = originalNode.start;
  newNode.loc = originalNode.loc;
  newNode.end = originalNode.end;
  return newNode;
}
