import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../../util/marko-config";
import programHTML from "./html";
import programDOM from "./dom";
import type { SectionTranslate } from "../../util/writer";
import { startSection, assignFinalIds } from "../../util/sections";

export let currentProgramPath: t.NodePath<t.Program>;

export default {
  analyze: {
    enter(program: t.NodePath<t.Program>) {
      currentProgramPath = program;
      startSection(program);
    },

    exit(program: t.NodePath<t.Program>) {
      assignFinalIds(program);
    },
  },
  translate: {
    enter(program: t.NodePath<t.Program>) {
      currentProgramPath = program;
      program.node.extra.sections = program.node.extra.sections!.map(
        (section) =>
          ({
            ...section,
            apply: [],
            hydrate: [],
            writes: [""],
          } as SectionTranslate)
      );

      if (isOutputHTML(program)) {
        programHTML.translate.enter(program);
      } else {
        programDOM.translate.enter(program);
      }
    },
    exit(program: t.NodePath<t.Program>) {
      if (isOutputHTML(program)) {
        programHTML.translate.exit(program);
      } else {
        programDOM.translate.exit(program);
      }
    },
  },
};
