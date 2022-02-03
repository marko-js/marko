import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../../util/marko-config";
import programHTML from "./html";
import programDOM from "./dom";
import { startSection } from "../../util/sections";
import { assignFinalIds } from "../../util/reserve";

export let currentProgramPath: t.NodePath<t.Program>;

export default {
  analyze: {
    enter(program: t.NodePath<t.Program>) {
      currentProgramPath = program;
      startSection(program);
    },

    exit(program: t.NodePath<t.Program>) {
      assignFinalIds();
    },
  },
  translate: {
    enter(program: t.NodePath<t.Program>) {
      currentProgramPath = program;
      if (isOutputHTML()) {
        programHTML.translate.enter(program);
      } else {
        programDOM.translate.enter(program);
      }
    },
    exit(program: t.NodePath<t.Program>) {
      if (isOutputHTML()) {
        programHTML.translate.exit(program);
      } else {
        programDOM.translate.exit(program);
      }
    },
  },
};
