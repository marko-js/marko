import { getArgOrSequence } from "@marko/compiler/babel-utils";

import noUpdateTransform from "./no-update";

export default {
  enter(tag) {
    tag.node.isPreserved = true;
  },
  exit(tag, attr, value) {
    noUpdateTransform.exit(tag, attr, value, { if: getArgOrSequence(attr) });
  },
};
