import { types as t } from "@marko/compiler";
import {
  diagnosticDeprecate,
  diagnosticError,
  parseExpression,
} from "@marko/compiler/babel-utils";

import getComponentFiles from "../../util/get-component-files";

export default function (path) {
  const {
    node,
    hub: { file },
  } = path;
  const {
    rawValue: code,
    name: { start },
    end,
  } = node;
  const meta = file.metadata.marko;

  if (meta.hasComponent) {
    diagnosticError(path.get("name"), {
      label: "A Marko component can only have one top level class.",
    });
    path.remove();
    return;
  }

  meta.hasComponent = true;

  if (getComponentFiles(path).componentFile) {
    diagnosticError(path.get("name"), {
      label:
        'A Marko file can either have an inline class, or an external "component.js", but not both.',
    });

    path.remove();
    return;
  }

  const parsed = parseExpression(file, code.replace(/;\s*$/, ""), start, end);
  if (parsed.type === "MarkoParseError") {
    const replacement = t.markoClass(t.classBody([]));
    replacement.body.body.push(parsed);
    path.replaceWith(replacement);
    return;
  }

  if (parsed.superClass) {
    diagnosticError(path, {
      label: "Component class cannot have a super class.",
      loc: parsed.superClass.loc,
    });
  }

  const constructorPropIndex = parsed.body.body.findIndex(
    (prop) => t.isClassMethod(prop) && prop.kind === "constructor",
  );
  if (constructorPropIndex !== -1) {
    const constructorProp = parsed.body.body[constructorPropIndex];
    diagnosticError(path, {
      label:
        "The constructor method should not be used for a component, use onCreate instead.",
      loc: constructorProp.key.loc,
    });

    parsed.body.body.splice(constructorProp, 1);
  }

  if (parsed.id) {
    diagnosticDeprecate(path, {
      label: "Component class should not have a name.",
      loc: parsed.id.loc,
      fix() {
        parsed.id = null;
      },
    });
  }

  path.replaceWith(t.markoClass(parsed.body));
}
