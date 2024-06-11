import { getTemplateId } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { getSection, type Section } from "../util/sections";
import { currentProgramPath } from "./program";
const functionIdsBySection = new WeakMap<Section, Map<string, number>>();

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    registerId?: string;
  }
}

export default {
  analyze(fn: t.NodePath<t.Function>) {
    const { node } = fn;
    const extra = (node.extra ??= {});
    const {
      markoOpts,
      opts: { filename },
    } = currentProgramPath.hub.file;

    const section = getSection(fn);
    let functionNameCounts = functionIdsBySection.get(section);
    if (!functionNameCounts) {
      functionNameCounts = new Map();
      functionIdsBySection.set(section, functionNameCounts);
    }

    let name = extra.name as string | undefined;
    if (name === undefined) {
      const markoRoot = fn.parentPath;
      if (markoRoot.isMarkoAttribute()) {
        name = markoRoot.node.default
          ? t.toIdentifier(
              (markoRoot.parentPath.parentPath as t.NodePath<t.MarkoTag>).get(
                "name",
              ),
            )
          : markoRoot.node.name;
      } else {
        name = "anonymous";
      }

      extra.name = name;
    }
    const index = functionNameCounts.get(name);
    let id = "";
    if (index === undefined) {
      functionNameCounts.set(name, 0);
    } else {
      id = `_${index}`;
    }

    extra.registerId = getTemplateId(
      markoOpts,
      filename as string,
      `${section.id}/${name + id}`,
    );
  },
};
