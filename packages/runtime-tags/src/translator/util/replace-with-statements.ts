import { types as t } from "@marko/compiler";

// What takes a translated node's place, null when nothing does; its body writes
// them once its own translation ends, so a body is spliced once, not per child.
const replacements = new WeakMap<t.Node, t.Statement[] | null>();

// Like a removed node, a replaced one is not visited further.
export function replaceWithStatements(
  path: t.NodePath,
  statements?: t.Statement[],
) {
  path.skip();
  const inserted = replacements.get(path.node);
  if (inserted) {
    if (statements) {
      for (const statement of statements) inserted.push(statement);
    }
  } else {
    replacements.set(path.node, statements || null);
  }
}

// Every insert lands before its node's own replacement, as the node is still
// untranslated: a later sibling or an enclosing tag.
export function insertStatementBefore(
  path: t.NodePath,
  statement: t.Statement,
) {
  const inserted = replacements.get(path.node);
  if (inserted) {
    inserted.push(statement);
  } else {
    replacements.set(path.node, [statement]);
  }
}

// A node nothing replaced stays for a tag to read: an attribute tag, or the
// text of a text-only body.
export function writeBodyStatements(body: t.Program | t.MarkoTagBody) {
  const statements: t.Statement[] = [];
  for (const child of body.body) {
    const replacement = replacements.get(child);
    if (replacement === undefined) {
      statements.push(child as t.Statement);
    } else if (replacement) {
      for (const statement of replacement) statements.push(statement);
    }
  }
  (body as t.Program).body = statements;
}
