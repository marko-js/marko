import { types as t } from "@marko/compiler";
import { importDefault, isNativeTag } from "@marko/babel-utils";
import styleToString from "marko/src/runtime/helpers/style-value";
import withPreviousLocation from "../../../util/with-previous-location";

export default {
  exit(tag, _, value) {
    const {
      hub: { file },
    } = tag;
    if (value.isStringLiteral()) return;
    if (!isNativeTag(tag)) return;

    const { confident, value: computed } = value.evaluate();
    value.replaceWith(
      withPreviousLocation(
        confident
          ? t.stringLiteral(styleToString(computed) || "")
          : t.callExpression(
              importDefault(
                file,
                "marko/src/runtime/helpers/style-value.js",
                "marko_style_merge"
              ),
              [value.node]
            ),
        value.node
      )
    );
  },
};
