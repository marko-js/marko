import { types as t } from "@marko/compiler";

import { isOutputDOM } from "../util/marko-config";
import { getSection } from "../util/sections";
import { currentProgramPath } from "./program";

export default {
  translate: {
    exit(assignment: t.NodePath<t.UpdateExpression>) {
      if (isOutputDOM()) {
        const source = assignment.node.argument.extra?.source;
        if (source) {
          const section = getSection(assignment);
          (currentProgramPath.node.extra.assignments ??= []).push([
            section,
            assignment,
          ]);
        }
      }
    },
  },
};
