import { types as t } from "@marko/compiler";

export default function (path) {
  const {
    hub: { file },
    node: {
      body: { body },
    },
  } = path;

  const classProperties = [];
  let onCreateMethod = body.find(
    (prop) =>
      prop.computed === false &&
      t.isIdentifier(prop.key) &&
      prop.key.name === "onCreate",
  );

  const objectProperties = body
    .map((prop) => {
      if (t.isClassMethod(prop)) {
        prop.type = "ObjectMethod";
        delete prop.start;
        delete prop.end;
        delete prop.loc;
        return prop;
      } else if (t.isClassProperty(prop) && !prop.static) {
        if (!prop.declare) {
          classProperties.push(
            t.assignmentExpression(
              "=",
              t.memberExpression(t.thisExpression(), prop.key, prop.computed),
              prop.value || t.unaryExpression("void", t.numericLiteral(0)),
            ),
          );
        }

        return undefined;
      }

      throw file.buildCodeFrameError(
        prop,
        "Unsupported class property on component.",
      );
    })
    .filter(Boolean);

  if (classProperties.length) {
    if (!onCreateMethod) {
      objectProperties.push(
        (onCreateMethod = t.objectMethod(
          "method",
          t.identifier("onCreate"),
          [],
          t.blockStatement([]),
        )),
      );
    }

    onCreateMethod.body.body.unshift(...classProperties);
  }

  file._inlineComponentClass = t.objectExpression(objectProperties);
  path.remove();
}
