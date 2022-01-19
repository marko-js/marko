import type { types as t } from "@marko/compiler";
import { startSection, assignFinalIds } from "./util/sections";

export default {
  enter(program: t.NodePath<t.Program>) {
    startSection(program);
  },

  exit(program: t.NodePath<t.Program>) {
    assignFinalIds(program);
  },
};
