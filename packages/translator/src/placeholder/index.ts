import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import translateHTML from "./html";
import translateDOM from "./dom";

export default function (placeholder: t.NodePath<t.MarkoPlaceholder>) {
  (isOutputHTML(placeholder) ? translateHTML : translateDOM)(placeholder);
}
