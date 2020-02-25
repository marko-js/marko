import noUpdateTransform from "./no-update";
import { getArgOrSequence } from "@marko/babel-utils";

export default {
  exit(tag, attr, value) {
    noUpdateTransform.exit(tag, attr, value, {
      if: getArgOrSequence(attr),
      bodyOnly: true
    });
  }
};
