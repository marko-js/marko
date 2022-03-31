import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../../util/marko-config";
import programHTML from "./html";
import programDOM from "./dom";
import { startSection } from "../../util/sections";
import { assignFinalIds } from "../../util/reserve";

export let currentProgramPath: t.NodePath<t.Program>;
export let scopeIdentifier: t.Identifier;

const previousProgramPath: WeakMap<
  t.NodePath<t.Program>,
  t.NodePath<t.Program> | undefined
> = new WeakMap();

export default {
  analyze: {
    enter(program: t.NodePath<t.Program>) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
      startSection(program);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    exit() {
      assignFinalIds();
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
  translate: {
    enter(program: t.NodePath<t.Program>) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
      scopeIdentifier = program.scope.generateUidIdentifier("scope");
    },
    exit(program: t.NodePath<t.Program>) {
      if (isOutputHTML()) {
        programHTML.translate.exit(program);
      } else {
        programDOM.translate.exit(program);
      }
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
};
