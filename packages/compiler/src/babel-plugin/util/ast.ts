import { types as t } from "@marko/compiler/internal/babel";

// Each helper passes its caller's context through as `cb`'s extra arguments, so that
// a module-level or static callback stands in for a closure and nothing allocates.

/** Calls `cb(id, a, b)` with each identifier a binding pattern binds. */
export function forEachBindingId(
  node: t.Node | null | undefined,
  cb: (id: t.Identifier) => void,
): void;
export function forEachBindingId<A>(
  node: t.Node | null | undefined,
  cb: (id: t.Identifier, a: A) => void,
  a: A,
): void;
export function forEachBindingId<A, B>(
  node: t.Node | null | undefined,
  cb: (id: t.Identifier, a: A, b: B) => void,
  a: A,
  b: B,
): void;
export function forEachBindingId<A, B>(
  node: t.Node | null | undefined,
  cb: (id: t.Identifier, a: A | undefined, b: B | undefined) => void,
  a?: A,
  b?: B,
): void {
  if (!node) return;
  switch (node.type) {
    case "Identifier":
      cb(node, a, b);
      break;
    case "ObjectPattern": {
      const { properties } = node;
      for (let i = 0; i < properties.length; i++) {
        const prop = properties[i];
        forEachBindingId(
          prop.type === "RestElement" ? prop : (prop.value as t.Node),
          cb,
          a,
          b,
        );
      }
      break;
    }
    case "ArrayPattern": {
      const { elements } = node;
      for (let i = 0; i < elements.length; i++) {
        forEachBindingId(elements[i], cb, a, b);
      }
      break;
    }
    case "AssignmentPattern":
      forEachBindingId(node.left, cb, a, b);
      break;
    case "RestElement":
      forEachBindingId(node.argument, cb, a, b);
      break;
  }
}

/** Calls `cb(id, a, b)` with each identifier a variable, function or class declaration declares. */
export function forEachDeclaredId(
  node: t.Node,
  cb: (id: t.Identifier) => void,
): void;
export function forEachDeclaredId<A>(
  node: t.Node,
  cb: (id: t.Identifier, a: A) => void,
  a: A,
): void;
export function forEachDeclaredId<A, B>(
  node: t.Node,
  cb: (id: t.Identifier, a: A, b: B) => void,
  a: A,
  b: B,
): void;
export function forEachDeclaredId<A, B>(
  node: t.Node,
  cb: (id: t.Identifier, a: A | undefined, b: B | undefined) => void,
  a?: A,
  b?: B,
): void {
  if (node.type === "VariableDeclaration") {
    const { declarations } = node;
    for (let i = 0; i < declarations.length; i++) {
      forEachBindingId(declarations[i].id, cb, a, b);
    }
  } else if (
    (node.type === "FunctionDeclaration" || node.type === "ClassDeclaration") &&
    node.id
  ) {
    cb(node.id, a, b);
  }
}

/**
 * `object.name`, or `object["name"]` when `name` isn't an identifier, as `isName` says if given.
 * Built as Babel's builders build it but unchecked, as it's valid by construction and the checks
 * cost more than the node.
 */
export function member(
  object: t.Expression,
  name: string,
  isName = t.isValidIdentifier(name, false),
): t.MemberExpression {
  return {
    type: "MemberExpression",
    object,
    property: isName
      ? { type: "Identifier", name }
      : { type: "StringLiteral", value: name },
    computed: !isName,
    optional: null,
  };
}
