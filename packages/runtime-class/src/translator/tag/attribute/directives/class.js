import { types as t } from "@marko/compiler";
import {
  computeNode,
  importDefault,
  isNativeTag,
} from "@marko/compiler/babel-utils";
import classToString from "marko/src/runtime/helpers/class-value";

import withPreviousLocation from "../../../util/with-previous-location";

export default {
  exit(tag, _, value) {
    const {
      hub: { file },
    } = tag;
    if (!isNativeTag(tag)) return;

    const computed = computeNode(value.node);
    if (computed) {
      const str = classToString(computed.value);
      if (str) {
        value.replaceWith(t.stringLiteral(str));
      } else {
        value.parentPath.remove();
      }
    } else if (!value.isTemplateLiteral()) {
      value.replaceWith(
        withPreviousLocation(
          t.callExpression(
            importDefault(
              file,
              "marko/src/runtime/helpers/class-value.js",
              "marko_class_merge",
            ),
            [value.node],
          ),
          value.node,
        ),
      );
    }
  },
};
