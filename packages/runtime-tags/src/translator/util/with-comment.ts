import type { types as t } from "@marko/compiler";
export function withLeadingComment<T extends t.Node>(
  node: T,
  value: string,
): T {
  if (value) {
    const comment = {
      type: "CommentBlock",
      value: ` ${value} `,
    } as t.CommentBlock;
    node.leadingComments = node.leadingComments
      ? [...node.leadingComments, comment]
      : [comment];
  }

  return node;
}
