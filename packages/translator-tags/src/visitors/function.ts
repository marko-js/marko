import { getTemplateId } from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";
import { getSection, type Section } from "../util/sections";
import { currentProgramPath } from "./program";
const functionIdsBySection = new WeakMap<Section, Map<string, number>>();

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    registerId?: string;
  }
}

export default {
  analyze: {
    exit(fn: t.NodePath<t.Function>) {
      const { node } = fn;
      const extra = (node.extra ??= {});
      const {
        markoOpts: { optimize },
        opts: { filename },
      } = currentProgramPath.hub.file;

      const section = getSection(fn);
      let functionNameCounts = functionIdsBySection.get(section);
      if (!functionNameCounts) {
        functionNameCounts = new Map();
        functionIdsBySection.set(section, functionNameCounts);
      }

      const name = (extra.name as string | undefined) || "anonymous";
      const index = functionNameCounts.get(name);
      let id = "";
      if (index === undefined) {
        functionNameCounts.set(name, 0);
      } else {
        id = `_${index}`;
      }

      extra.registerId = getTemplateId(
        optimize,
        `${filename}_${section.id}/${name + id}`,
      );
    },
  },
};
