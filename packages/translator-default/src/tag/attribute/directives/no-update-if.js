import noUpdateTransform from "./no-update";
import { getArgOrSequence } from "@marko/babel-utils";

export default {
  enter(tag) {
    tag.node.isPreserved = true;
  },
  exit(tag, attr, value) {
    noUpdateTransform.exit(tag, attr, value, { if: getArgOrSequence(attr) });
  },
};
