import { computeNode, importDefault, isNativeTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import styleToString from "marko/src/runtime/helpers/style-value";
import withPreviousLocation from "../../../util/with-previous-location";

export default {
  exit(tag, _, value) {
    const {
      hub: { file },
    } = tag;
    if (!isNativeTag(tag)) return;

    const computed = computeNode(value.node);
    if (computed) {
      const str = styleToString(computed.value);
      if (str) {
        value.replaceWith(t.stringLiteral(str));
      } else {
        value.parentPath.remove();
      }
    } else {
      value.replaceWith(
        withPreviousLocation(
          t.callExpression(
            importDefault(
              file,
              "marko/src/runtime/helpers/style-value.js",
              "marko_style_merge",
            ),
            [value.node],
          ),
          value.node,
        ),
      );
    }
  },
};
