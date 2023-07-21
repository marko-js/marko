import { types as t } from "@marko/compiler";
import { isNativeTag, importDefault } from "@marko/babel-utils";
import classToString from "marko/src/runtime/helpers/class-value";
import withPreviousLocation from "../../../util/with-previous-location";

export default {
  exit(tag, _, value) {
    const {
      hub: { file },
    } = tag;
    if (!isNativeTag(tag)) return;
    if (value.isStringLiteral()) return;

    const { confident, value: computed } = value.evaluate();

    const s = classToString(computed);
    value.replaceWith(
      confident
        ? s
          ? t.stringLiteral(s)
          : t.nullLiteral()
        : withPreviousLocation(
            t.callExpression(
              importDefault(
                file,
                "marko/src/runtime/helpers/class-value.js",
                "marko_class_merge"
              ),
              [value.node]
            ),
            value.node
          )
    );
  },
};
