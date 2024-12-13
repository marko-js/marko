import { types as t } from "@marko/compiler";
import {
  diagnosticError,
  getMacroIdentifierForName,
} from "@marko/compiler/babel-utils";

import withPreviousLocation from "../../../util/with-previous-location";

export function exit(path) {
  const { node } = path;
  const { attributes, body } = node;
  if (attributes.length === 0) {
    diagnosticError(path, {
      label: "The 'macro' tag must have a 'name' attribute.",
    });
    path.remove();
    return;
  }

  if (attributes.length > 1) {
    diagnosticError(path, {
      label: "The 'macro' tag can only have a 'name' attribute.",
    });
    path.remove();
    return;
  }

  const [nameAttr] = attributes;
  if (!t.isStringLiteral(nameAttr.value)) {
    diagnosticError(path, {
      label: "The 'name' attribute for 'macro' tags must be a string literal.",
      loc: nameAttr.loc || node.loc || undefined,
    });
    path.remove();
    return;
  }

  path.replaceWith(
    withPreviousLocation(
      t.functionDeclaration(
        getMacroIdentifierForName(path, nameAttr.value.value),
        [t.identifier("out"), ...body.params],
        t.blockStatement(body.body),
      ),
      node,
    ),
  );
}
