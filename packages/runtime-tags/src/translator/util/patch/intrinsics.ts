// Program-level runtime knowledge for patches: child renderers
// and `$global` reads.
import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { getParentTag } from "../get-parent-tag";
import { isControlFlowTag } from "../is-core-tag";
import { createProgramState } from "../state";

// Child renderers for the html intrinsics export; transitive global
// knowledge composes at RENDER time, never at compile.
const [getPatchChildRenderers] = createProgramState(() => ({
  names: new Set<string>(),
  opaque: false,
}));

export function addPatchChildRenderer(
  path: t.NodePath,
  expr: t.Node,
  imported?: boolean,
) {
  const state = getPatchChildRenderers();
  // The union lists module bindings (an import or a `static` declaration):
  // the export reads them at module scope, where render locals are unbound.
  if (expr.type === "Identifier" && (imported || isModuleBinding(path, expr))) {
    state.names.add(expr.name);
  } else {
    // An unaddressable renderer cannot join the union: the template goes
    // opaque so parents always render through it.
    state.opaque = true;
  }
}

export function isModuleBinding(path: t.NodePath, id: t.Identifier) {
  const binding = path.scope.getBinding(id.name);
  return (
    !!binding &&
    (binding.kind === "module" ||
      !!binding.path.findParent(
        (parent) => parent.isMarkoScriptlet() && parent.node.static,
      ))
  );
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** This template ITSELF reads `$global` (local, no roll-up): exported
     * as the html template's intrinsics for render-time composition. */
    readsGlobals?: true;
  }
}

export function getPatchIntrinsics() {
  return getPatchChildRenderers();
}

const kPassedRenderers = Symbol("passed renderers");
declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    /** Templates rendered in the call site's attribute-tag bodies. */
    [kPassedRenderers]?: t.Identifier[];
  }
}

// A renderer inside an attribute-tag body renders wherever the call site's
// child renders it, so that child's patch-skip asks the renderer too.
export function addPassedRenderer(
  tag: t.NodePath<t.MarkoTag>,
  renderer: t.Identifier,
) {
  let inAttrTag = false;
  for (let cur = getParentTag(tag); cur; cur = getParentTag(cur)) {
    if (isAttributeTag(cur)) {
      inAttrTag = true;
    } else if (!isControlFlowTag(cur)) {
      if (inAttrTag)
        ((cur.node.extra ??= {})[kPassedRenderers] ??= []).push(renderer);
      return;
    }
  }
}

// What a call site's patch-skip asks besides the child: templates its
// attribute tags render and module values it passes (possibly templates).
export function getPassedRenderers(tag: t.NodePath<t.MarkoTag>) {
  const renderers = (tag.node.extra?.[kPassedRenderers] || []).map((id) =>
    t.cloneNode(id),
  );
  for (const attr of tag.node.attributes) {
    if (
      t.isMarkoAttribute(attr) &&
      t.isIdentifier(attr.value) &&
      isModuleBinding(tag, attr.value)
    ) {
      renderers.push(t.cloneNode(attr.value));
    }
  }
  return renderers;
}
