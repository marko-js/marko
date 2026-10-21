import { types as t } from "@marko/compiler";

export function getMemberExpressionPropString(
  expr: t.MemberExpression | t.OptionalMemberExpression,
) {
  switch (expr.property.type) {
    case "StringLiteral":
      return expr.property.value;
    case "NumericLiteral":
      return "" + expr.property.value;
    case "Identifier":
      if (expr.computed) return;
      return expr.property.name;
  }
}

// The name an identifier or string literal (a key, an import or export name) spells.
export function getLiteralName(node: t.Identifier | t.StringLiteral): string;
export function getLiteralName(node: t.Node): string | undefined;
export function getLiteralName(node: t.Node) {
  switch (node.type) {
    case "Identifier":
      return node.name;
    case "StringLiteral":
      return node.value;
  }
}

export function isValidPropertyIdentifier(name: string) {
  return /^[a-z_$][a-z0-9_$]*$/i.test(name);
}

export function toPropertyName(name: string) {
  if (isValidPropertyIdentifier(name)) {
    return t.identifier(name);
  }

  // A key reads as a number only when the number writes back as the key.
  const index = +name;
  return Number.isSafeInteger(index) && index >= 0 && String(index) === name
    ? t.numericLiteral(index)
    : t.stringLiteral(name);
}

// A computed `__proto__` key is an own property, not the prototype.
export function toObjectProperty(name: string, value: t.Expression) {
  return name === "__proto__"
    ? t.objectProperty(t.stringLiteral(name), value, true)
    : t.objectProperty(toPropertyName(name), value);
}

export function toMemberExpression(
  object: t.Expression,
  key: string,
): t.MemberExpression;
export function toMemberExpression(
  object: t.Expression,
  key: string,
  optional: false | undefined,
): t.MemberExpression;
export function toMemberExpression(
  object: t.Expression,
  key: string,
  optional: true,
): t.OptionalMemberExpression;
export function toMemberExpression(
  object: t.Expression,
  key: string,
  optional?: boolean,
): t.MemberExpression | t.OptionalMemberExpression;
export function toMemberExpression(
  object: t.Expression,
  key: string,
  optional?: boolean,
): t.MemberExpression | t.OptionalMemberExpression {
  const prop = toPropertyName(key);
  const computed = prop.type !== "Identifier";
  return optional
    ? t.optionalMemberExpression(object, prop, computed, true)
    : t.memberExpression(object, prop, computed);
}
