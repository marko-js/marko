import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
} from "@marko/compiler/babel-utils";

import writeHTML from "../../util/html-out-write";
import writeVDOM from "../../util/vdom-out-write";
import withPreviousLocation from "../../util/with-previous-location";

export function enter(path) {
  assertNoArgs(path);
  assertNoParams(path);
  assertNoAttributes(path);

  if (path.hub.file.markoOpts.output === "html") {
    path.replaceWithMultiple([
      writeHTML`<!--`,
      ...path.node.body.body,
      writeHTML`-->`,
    ]);
  } else {
    const templateQuasis = [];
    const templateExpressions = [];
    let currentQuasi = "";
    for (const child of path.node.body.body) {
      if (t.isMarkoText(child)) {
        currentQuasi += child.value;
      } else if (t.isMarkoPlaceholder(child)) {
        templateQuasis.push(t.templateElement({ raw: currentQuasi }));
        templateExpressions.push(child.value);
        currentQuasi = "";
      }
    }

    let value;
    if (templateExpressions.length === 0) {
      value = t.stringLiteral(currentQuasi);
    } else {
      templateQuasis.push(t.templateElement({ raw: currentQuasi }));
      value = t.templateLiteral(templateQuasis, templateExpressions);
    }

    path.replaceWith(
      withPreviousLocation(
        writeVDOM("comment", value, path.hub.file._componentInstanceIdentifier),
        path.node,
      ),
    );
  }
}
