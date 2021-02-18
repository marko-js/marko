import { types as t, NodePath } from "@marko/babel-types";
import { writeExports } from "../util/dom-export";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function enter(program: NodePath<t.Program>) {
  program.state.template = "";
  program.state.walks = [];
  program.state.hydrate = [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function exit(program: NodePath<t.Program>) {
  writeExports(program);
}
