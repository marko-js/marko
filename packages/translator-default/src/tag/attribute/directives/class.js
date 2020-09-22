import { types as t } from "@marko/babel-types";
import { isNativeTag, importDefault } from "@marko/babel-utils";
import classToString from "marko/src/runtime/helpers/class-value";
import withPreviousLocation from "../../../util/with-previous-location";

export default {
  exit(tag, _, value) {
    const {
      hub: { file }
    } = tag;
    if (!isNativeTag(tag)) return;
    if (value.isStringLiteral()) return;

    const { confident, value: computed } = value.evaluate();

    value.replaceWith(
      confident
        ? t.stringLiteral(classToString(computed) || "")
        : withPreviousLocation(
            t.callExpression(
              importDefault(
                file,
                "marko/src/runtime/helpers/class-value",
                "marko_class_merge"
              ),
              [value.node]
            ),
            value.node
          )
    );
  }
};
