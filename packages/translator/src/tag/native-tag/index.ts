import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../../util/marko-config";
import * as translateHTML from "./html";
import * as translateDOM from "./dom";
import { assertNoParams } from "@marko/babel-utils";

export function enter(tag: t.NodePath<t.MarkoTag>) {
  (isOutputHTML(tag) ? translateHTML : translateDOM).enter(tag);
}

export function exit(tag: t.NodePath<t.MarkoTag>) {
  assertNoParams(tag);
  (isOutputHTML(tag) ? translateHTML : translateDOM).exit(tag);
}
