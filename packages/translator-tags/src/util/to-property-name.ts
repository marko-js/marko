import { types as t } from "@marko/compiler";

export function toPropertyName(name: string) {
  if (/^[a-z_$][a-z0-9_$]*$/i.test(name)) {
    return t.identifier(name);
  } else if (/^(?:0|[1-9][0-9]*)$/.test(name)) {
    return t.numericLiteral(parseInt(name, 10));
  }

  return t.stringLiteral(name);
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
