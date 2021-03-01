import { types as t } from "@marko/compiler";
import { writeExports } from "../util/dom-export";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function enter(program: t.NodePath<t.Program>) {
  program.state.template = "";
  program.state.walks = [];
  program.state.hydrate = [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function exit(program: t.NodePath<t.Program>) {
  writeExports(program);
}
