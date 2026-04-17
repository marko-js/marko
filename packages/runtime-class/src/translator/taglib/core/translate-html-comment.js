import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  importDefault,
} from "@marko/compiler/babel-utils";

import writeHTML from "../../util/html-out-write";
import writeVDOM from "../../util/vdom-out-write";
import withPreviousLocation from "../../util/with-previous-location";

export function enter(path) {
  assertNoArgs(path);
  assertNoParams(path);
  assertNoAttributes(path);

  if (path.hub.file.markoOpts.output === "html") {
    const { file } = path.hub;
    const nodes = [writeHTML`<!--`];

    for (const child of path.node.body.body) {
      if (t.isMarkoText(child)) {
        nodes.push(child);
      } else if (t.isMarkoPlaceholder(child)) {
        const escapeFnModule = child.escape
          ? "marko/src/runtime/html/helpers/escape-comment-placeholder.js"
          : "marko/src/runtime/helpers/to-string.js";
        const escapeFnAlias = child.escape
          ? "marko_escapeComment"
          : "marko_to_string";
        nodes.push(
          writeHTML`${t.callExpression(
            importDefault(file, escapeFnModule, escapeFnAlias),
            [child.value],
          )}`,
        );
      }
    }

    nodes.push(writeHTML`-->`);
    path.replaceWithMultiple(nodes.filter(Boolean));
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
