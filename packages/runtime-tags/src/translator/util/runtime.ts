import { types as t } from "@marko/compiler";
import { getFile, getProgram, importNamed } from "@marko/compiler/babel-utils";

import type { Falsy } from "../../common/types";
import {
  _attr,
  _attr_class,
  _attr_style,
  _escape,
  _escape_comment,
  _escape_script,
  _escape_style,
  _unescaped,
} from "../../html";
import { addAssetImport } from "./asset-imports";
import { isTranslate } from "./get-compile-stage";
import { getMarkoOpts, isOutputDOM, isOutputHTML } from "./marko-config";
import runtimeInfo from "./runtime-info";

export type DOMRuntimeHelpers = keyof typeof import("../../dom");
export type HTMLRuntimeHelpers = keyof typeof import("../../html");

// Marked `@__PURE__` (see callRuntime) so a bundler may drop a call whose
// result is unused, despite call-time side effects: `_resume` registration
// (`_template`, `_dynamic_tag`). This is sound because registration only
// matters when the value is referenced by a serialized register id, which
// keeps it in the module graph.
//
const pureDOMFunctions = new Set<string>([
  "_await_promise",
  "_fillable",
  "_await_content",
  "_child_setup",
  "_if",
  "_if_closure",
  "_show",
  "_try",
  "_dynamic_tag",
  "_dynamic_tag_content",
  "_content_closures",
  "_content",
  "_template",
  "_closure",
  "_closure_get",
  "_or",
  "_for_closure",
  "_for_selector",
  "_for_in",
  "_for_of",
  "_for_to",
  "_for_until",
  "_hoist",
  "_let",
  "_let_change",
  "_const",
  "_load_signal",
  "_load_setup",
  "_load_template",
  "_load_visible_trigger",
  "_load_event_trigger",
  "_load_idle_trigger",
  "_load_media_trigger",
  "_load_race_trigger",
] satisfies DOMRuntimeHelpers[]);

export function importRuntime(name: DOMRuntimeHelpers | HTMLRuntimeHelpers) {
  // The `dom`/`html` import path is only known at translate; emitting it into
  // the cached, output-shared earlier AST leaks one runtime into the other.
  if (!isTranslate()) {
    throw new Error(
      `\`importRuntime(${JSON.stringify(name)})\` may only be called during the translate stage.`,
    );
  }
  const { output } = getMarkoOpts();
  return importNamed(getFile(), getRuntimePath(output), name);
}

export function callRuntime(
  name: DOMRuntimeHelpers | HTMLRuntimeHelpers,
  ...args: Array<Parameters<typeof t.callExpression>[1][number] | Falsy>
) {
  const callExpression = t.callExpression(
    importRuntime(name),
    filterArguments(args),
  );
  if (isOutputDOM() && pureDOMFunctions.has(name)) {
    return t.addComment(callExpression, "leading", "@__PURE__");
  }
  return callExpression;
}

// A `src/{dom,html}/*.feat.ts` module is a compiler-injected side-effect
// import: it enables optional runtime behavior that referenced imports alone
// cannot keep alive under tree shaking (eg catch enablement).
export type DOMRuntimeFeature =
  | "catch"
  | "controllable"
  | "controllable-input"
  | "controllable-open"
  | "controllable-select"
  | "controllable-textarea"
  | "patch-attr"
  | "patch-branch"
  | "patch-child"
  | "patch-loop"
  | "patch-text"
  | "patch-value";
// The analyze-phase half of `importRuntimeFeature`: the page entry links
// client assets from analyze metadata.
export function addRuntimeFeatureAsset(
  file: t.BabelFile,
  feature: DOMRuntimeFeature,
) {
  addAssetImport(file, `${getRuntimePath("dom")}/${feature}.feat`);
}

const importedFeatures = new WeakMap<t.Program, Set<string>>();
export function importRuntimeFeature(feature: DOMRuntimeFeature) {
  if (!isTranslate()) {
    throw new Error(
      `\`importRuntimeFeature(${JSON.stringify(feature)})\` may only be called during the translate stage.`,
    );
  }
  const program = getProgram().node;
  let features = importedFeatures.get(program);
  if (!features) importedFeatures.set(program, (features = new Set()));
  if (!features.has(feature)) {
    features.add(feature);
    program.body.push(
      t.importDeclaration(
        [],
        t.stringLiteral(`${getRuntimePath("dom")}/${feature}.feat`),
      ),
    );
  }
}

export function getHTMLRuntime() {
  return {
    _escape,
    _escape_comment,
    _unescaped,
    _attr,
    _attr_class,
    _attr_style,
    _escape_script,
    _escape_style,
  };
}

export function getRuntimePath(output: string) {
  const { optimize } = getMarkoOpts();
  return `${runtimeInfo.name}/${
    optimize ? "" : "debug/"
  }${output === "html" ? "html" : "dom"}`;
}

function filterArguments<A>(args: (A | Falsy)[]) {
  const filteredArgs = [];
  for (let i = args.length; i--;) {
    const arg = args[i];
    if (arg || filteredArgs.length) {
      filteredArgs[i] = arg || t.unaryExpression("void", t.numericLiteral(0));
    }
  }
  return filteredArgs as A[];
}

export function getCompatRuntimeFile() {
  const markoOpts = getMarkoOpts();
  return `marko/${markoOpts.optimize ? "dist" : "src"}/runtime/helpers/tags-compat/${
    isOutputHTML() ? "html" : "dom"
  }${markoOpts.optimize ? "" : "-debug"}.${markoOpts.modules === "esm" ? "mjs" : "js"}`;
}
