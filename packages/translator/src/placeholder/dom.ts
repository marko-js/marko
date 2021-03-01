import { types as t, NodePath } from "@marko/babel-types";
import { callRuntime } from "../util/runtime";
import {
  needsPlaceholderMarker,
  isOnlyChild,
  Walks,
  writeHydrate,
  writeTemplate,
  writeWalks,
  checkNextMarker
} from "../util/dom-writer";

export default function (placeholder: NodePath<t.MarkoPlaceholder>) {
  if (needsPlaceholderMarker(placeholder)) {
    writeWalks(placeholder, Walks.REPLACE);
    writeTemplate(placeholder, "<!>");
    if (checkNextMarker(placeholder)) writeWalks(placeholder, Walks.NEXT);
  } else if (isOnlyChild(placeholder)) {
    writeWalks(placeholder, Walks.GET);
    writeTemplate(placeholder, " ");
  } else if (!checkNextMarker(placeholder)) {
    writeWalks(placeholder, Walks.AFTER);
  } else {
    writeWalks(placeholder, Walks.BEFORE);
  }

  writeHydrate(
    placeholder,
    t.expressionStatement(
      callRuntime(
        placeholder,
        placeholder.node.escape ? "text" : "html",
        placeholder.get("value").node
      )
    )
  );
  placeholder.remove();
}
