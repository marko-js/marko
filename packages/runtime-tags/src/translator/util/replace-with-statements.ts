import { types as t } from "@marko/compiler";

// Swapping in the first statement keeps sibling keys; only the rest shift them.
export function replaceWithStatements(
  path: t.NodePath<t.MarkoTag>,
  statements: t.Statement[],
) {
  if (!statements.length) {
    path.remove();
    return;
  }

  // Open tag comments are not output.
  t.removeComments(path.node);
  const [replacement] = path.replaceWith(statements[0]);
  replacement.skip();
  if (statements.length > 1) {
    for (const inserted of replacement.insertAfter(statements.slice(1))) {
      inserted.skip();
    }
  }
}
