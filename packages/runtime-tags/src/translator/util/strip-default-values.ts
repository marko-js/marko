import { types as t } from "@marko/compiler";

/**
 * In HTML output a defaulted binding (`b = x` in tag params or a destructured
 * tag variable) keeps its pre default value in a separate variable so it can
 * be serialized for resume; the visible binding is then derived from it with
 * a const statement, mirroring the derivation the DOM output builds from the
 * same bindings (see the `AssignmentPattern` case in `references.ts`).
 */
export function stripDefaultValues(
  lVal: t.LVal,
  statements: t.Statement[],
): t.LVal {
  switch (lVal.type) {
    case "AssignmentPattern": {
      const source = lVal.extra?.binding?.defaultSource;
      if (!source) break;
      const nestedStatements: t.Statement[] = [];
      const left = stripDefaultValues(lVal.left, nestedStatements);
      const sourceId = t.identifier(source.name);
      statements.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            left as t.VariableDeclarator["id"],
            t.conditionalExpression(
              t.binaryExpression(
                "!==",
                t.unaryExpression("void", t.numericLiteral(0)),
                t.cloneNode(sourceId),
              ),
              t.cloneNode(sourceId),
              lVal.right,
            ),
          ),
        ]),
        ...nestedStatements,
      );
      return sourceId;
    }
    case "ObjectPattern":
      for (const prop of lVal.properties) {
        if (prop.type === "ObjectProperty") {
          if (t.isLVal(prop.value)) {
            const value = stripDefaultValues(prop.value, statements);
            if (value !== prop.value) {
              prop.shorthand = false;
              prop.value = value as t.ObjectProperty["value"];
            }
          }
        } else {
          stripDefaultValues(prop.argument, statements);
        }
      }
      break;
    case "ArrayPattern":
      for (let i = 0; i < lVal.elements.length; i++) {
        const element = lVal.elements[i];
        if (element) {
          if (element.type === "RestElement") {
            stripDefaultValues(element.argument, statements);
          } else if (t.isLVal(element)) {
            const replacement = stripDefaultValues(element, statements);
            if (replacement !== element) {
              lVal.elements[i] = replacement as t.PatternLike;
            }
          }
        }
      }
      break;
  }

  return lVal;
}

export function stripDefaultValuesFromParams(
  params: t.MarkoTagBody["params"],
  statements: t.Statement[],
) {
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    if (t.isLVal(param)) {
      const replacement = stripDefaultValues(param, statements);
      if (replacement !== param) {
        // A replaced param is always the source identifier.
        params[i] = replacement as t.Identifier;
      }
    }
  }
}
