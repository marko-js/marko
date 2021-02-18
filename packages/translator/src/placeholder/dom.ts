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
    console.log("REPLACE");
    writeWalks(placeholder, Walks.REPLACE);
    writeTemplate(placeholder, "<!>");
  } else if (isOnlyChild(placeholder)) {
    console.log("GET");
    writeWalks(placeholder, Walks.GET);
    writeTemplate(placeholder, " ");
  } else if (!checkNextMarker(placeholder)) {
    console.log("AFTER");
    writeWalks(placeholder, Walks.AFTER);
  } else {
    console.log("BEFORE");
    writeWalks(placeholder, Walks.BEFORE);
  }

  // writeHydrate(
  //   placeholder,
  //   t.expressionStatement(callRuntime(placeholder, "walk"))
  // );
  writeHydrate(
    placeholder,
    t.expressionStatement(
      callRuntime(placeholder, "text", placeholder.get("value").node)
    )
  );
  placeholder.remove();
}
