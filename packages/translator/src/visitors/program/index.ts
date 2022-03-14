import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../../util/marko-config";
import programHTML from "./html";
import programDOM from "./dom";
import { startSection } from "../../util/sections";
import { assignFinalIds } from "../../util/reserve";

export let currentProgramPath: t.NodePath<t.Program>;
export let scopeIdentifier: t.Identifier;

export default {
  analyze: {
    enter(program: t.NodePath<t.Program>) {
      currentProgramPath = program;
      startSection(program);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    exit() {
      assignFinalIds();
    },
  },
  translate: {
    enter(program: t.NodePath<t.Program>) {
      currentProgramPath = program;
      scopeIdentifier = program.scope.generateUidIdentifier("scope");
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
