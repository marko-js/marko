import { types as t, NodePath } from "@marko/babel-types";
import { isOutputHTML } from "../../util/marko-config";
import * as translateHTML from "./html";
import * as translateDOM from "./dom";

export function enter(tag: NodePath<t.MarkoTag>) {
  (isOutputHTML(tag) ? translateHTML : translateDOM).enter(tag);
}

export function exit(tag: NodePath<t.MarkoTag>) {
  (isOutputHTML(tag) ? translateHTML : translateDOM).exit(tag);
}
