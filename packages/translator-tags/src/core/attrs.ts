import type { Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import { trackReferencesForBindings } from "../util/references";
import { getOrCreateSection } from "../util/sections";
import { initValue } from "../util/signals";
import { currentProgramPath } from "../visitors/program";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    args?: {
      bindings: Record<string, t.Identifier>;
      var: NonNullable<t.MarkoTag["var"]>;
    };
  }
}

export default {
  analyze(tag) {
    if (tag.has("var")) {
      const varPath = tag.get("var");
      const bindings = varPath.getBindingIdentifiers() as any as Record<
        string,
        t.Identifier
      >;
      trackReferencesForBindings(getOrCreateSection(tag), varPath);
      (currentProgramPath.node.extra ??= {}).args = {
        bindings,
        var: isOutputHTML() ? varPath.node! : t.arrayPattern([varPath.node!]),
        // pathsToId: getPathsToId(varPath.node)
      };
    }
  },
  translate(tag) {
    const bindings = currentProgramPath.node.extra?.args?.bindings;
    if (bindings) {
      for (const key in bindings) {
        initValue(bindings[key].extra!.reserve!);
      }
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      displayText: "attrs/{ ... }",
      description: "Use to receive the attributes passed into this template.",
      snippet: "attrs/{ $1 }$2",
    },
  ],
} as Tag;
