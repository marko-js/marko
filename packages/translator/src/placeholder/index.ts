import { types as t, NodePath } from "@marko/babel-types";
import { isOutputHTML } from "../util/marko-config";
import translateHTML from "./html";
import translateDOM from "./dom";

export default function (placeholder: NodePath<t.MarkoPlaceholder>) {
  (isOutputHTML(placeholder) ? translateHTML : translateDOM)(placeholder);
}
