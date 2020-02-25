import { types as t } from "@marko/babel-types";
import { isNativeTag } from "@marko/babel-utils";
import styleToString from "marko/src/runtime/helpers/style-value";

export default {
  exit(tag, _, value) {
    const { hub } = tag;
    if (value.isStringLiteral()) return;
    if (!isNativeTag(tag)) return;

    const { confident, value: computed } = value.evaluate();
    value.replaceWith(
      confident
        ? t.stringLiteral(styleToString(computed) || "")
        : t.callExpression(
            hub.importDefault(
              tag,
              "marko/src/runtime/helpers/style-value",
              "marko_style_merge"
            ),
            [value.node]
          )
    );
  }
};
