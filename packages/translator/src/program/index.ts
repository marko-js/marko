import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import * as translateHTML from "./html";
import * as translateDOM from "./dom";
import type { SectionTranslate } from "../util/writer";

export default {
  enter(program: t.NodePath<t.Program>) {
    program.node.extra.sections = program.node.extra.sections!.map(
      section => ({
        ...section,
        apply: [],
        hydrate: [],
        writes: [""],
        walks: [""],
        steps: [],
      } as SectionTranslate)
    );

    if (isOutputHTML(program)) {
      translateHTML.enter(program);
    } else {
      translateDOM.enter(program);
    }
  },
  exit(program: t.NodePath<t.Program>) {
    if (isOutputHTML(program)) {
      translateHTML.exit(program);
    } else {
      translateDOM.exit(program);
    }
  },
};
