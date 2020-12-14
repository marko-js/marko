import { types as t, NodePath } from "@marko/babel-types";
import { isOutputHTML } from "../util/marko-config";
import * as translateHTML from "./html";
import * as translateDOM from "./dom";

export function enter(program: NodePath<t.Program>) {
  if (isOutputHTML(program)) {
    translateHTML.enter(program);
  } else {
    translateDOM.enter(program);
  }
}

export function exit(program: NodePath<t.Program>) {
  if (isOutputHTML(program)) {
    translateHTML.exit(program);
  } else {
    translateDOM.exit(program);
  }
}
