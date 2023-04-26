import type { types as t } from "@marko/compiler";
import type { Tag } from "@marko/babel-utils";
import { trackReferencesForBindings } from "../util/references";
import { getOrCreateSectionId } from "../util/sections";
import { currentProgramPath } from "../visitors/program";
import { initValue } from "../util/signals";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    attrs?: {
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
      trackReferencesForBindings(getOrCreateSectionId(tag), varPath);
      (currentProgramPath.node.extra ??= {}).attrs = {
        bindings,
        var: varPath.node!,
        // pathsToId: getPathsToId(varPath.node)
      };
    }
  },
  translate(tag) {
    const bindings = currentProgramPath.node.extra?.attrs?.bindings;
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
