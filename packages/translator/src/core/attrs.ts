import type { types as t } from "@marko/compiler";
import type { Tag } from "@marko/babel-utils";
import {
  getReferenceGroup,
  trackReferencesForBindings,
} from "../util/references";
import { ReserveType } from "../util/reserve";
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
      const sectionId = getOrCreateSectionId(tag);
      trackReferencesForBindings(sectionId, varPath, ReserveType.Store);
      for (const key in bindings) {
        const binding = bindings[key].extra!.reserve!;
        binding!.exportIdentifier = getReferenceGroup(
          sectionId,
          binding,
          true
        ).apply;
      }
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

/*
function getPathsToId(varNode:t.Identifier | t.ObjectPattern) {
  if (t.isIdentifier(varNode)) {
    return varNode.extra!.reserve!.fnId;
  } else {
    const paths = {};
    for (const property of varNode.properties) {
      if (t.isRestElement(property)) {

      } else {
        paths[property.key.name] = getPathsToId(property.value);
      }
    }
    return paths;
  }
}

type AttributeMeta = {
  children: Record<string, AttributeMeta>;
  rest?: AttributeMeta;
  pattern: t.ObjectPattern | t.Identifier;
  fnId?: string;
}


// <div a=x/>
// child: <attrs/{ a }/>
const _apply_x(x) {
  _applyChild_a(x);
}

// <div a=x/>
// child: <attrs/{ b, ...rest }/>
const _apply_x(x) {
  _applyChild_rest({ a: x });
}

// <div a={ b: x }/>
// child: <attrs/{ a: { b: c } }/>
const _apply_x(x) {
  _applyChild_c(x);
}
*/
