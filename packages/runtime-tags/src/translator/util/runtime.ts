import { types as t } from "@marko/compiler";
import { getFile, getProgram, importNamed } from "@marko/compiler/babel-utils";

import type { Falsy } from "../../common/types";
import { isTranslate } from "./get-compile-stage";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
  isPatch,
} from "./marko-config";
import runtimeInfo from "./runtime-info";
import { createOutputState } from "./state";
import { toMemberExpression } from "./to-property-name";

export type DOMRuntimeHelpers = keyof typeof import("../../dom");
export type HTMLRuntimeHelpers = keyof typeof import("../../html/patch");

// Pure despite registering into `_resumed` (`_template`, `_closure_get`): that
// matters only for a value a serialized register id keeps in the module graph.
const pureDOMFunctions = new Set<string>([
  "_await_promise",
  "_fill_join",
  "_fill_global_join",
  "_fill_global_path_join",
  "_fill_join_closure",
  "_fill_join_for",
  "_fill_join_if",
  "_fill_join_subscribers",
  "_closure_index",
  "_shell_init",
  "_shell_or",
  "_fill_const",
  "_fill_let",
  "_fill_let_change",
  "_await_content",
  "_if",
  "_if_closure",
  "_show",
  "_try",
  "_dynamic_tag",
  "_dynamic_tag_content",
  "_content_closures",
  "_template",
  "_return_setup",
  "_closure",
  "_closure_get",
  "_or",
  "_for_closure",
  "_for_selector",
  "_for_in",
  "_for_of",
  "_for_of_unkeyed",
  "_for_to",
  "_for_to_unkeyed",
  "_for_until",
  "_for_until_unkeyed",
  "_hoist",
  "_let",
  "_let_change",
  "_const",
  "_load_signal",
  "_load_signal_patch",
  "_load_setup",
  "_load_template",
  "_load_visible_trigger",
  "_load_event_trigger",
  "_load_idle_trigger",
  "_load_media_trigger",
  "_load_race_trigger",
] satisfies DOMRuntimeHelpers[]);

const [getRuntimeImports] = createOutputState(
  () => new Map<DOMRuntimeHelpers | HTMLRuntimeHelpers, string>(),
);

export function importRuntime(name: DOMRuntimeHelpers | HTMLRuntimeHelpers) {
  // The `dom`/`html` import path is only known at translate; emitting it into
  // the cached, output-shared earlier AST leaks one runtime into the other.
  assertTranslate("importRuntime", name);
  const { output } = getMarkoOpts();
  const imports = getRuntimeImports();
  let localName = imports.get(name);
  if (!localName) {
    localName = importNamed(getFile(), getRuntimePath(output), name).name;
    imports.set(name, localName);
  }
  return t.identifier(localName);
}

// A bare registration is an assignment into the registry: no call.
export function registerRuntimeValue(id: string, value: t.Expression) {
  return t.assignmentExpression(
    "=",
    toMemberExpression(importRuntime("_resumed"), id),
    value,
  );
}

export function callRuntime(
  name: DOMRuntimeHelpers | HTMLRuntimeHelpers,
  ...args: Array<Parameters<typeof t.callExpression>[1][number] | Falsy>
) {
  if (isOutputDOM() && isPatch() && scopeBoundRegistrations.has(name)) {
    importRuntimeFeature("patches/bind");
  }
  const callExpression = t.callExpression(
    importRuntime(name),
    trimFalsyArgs(args),
  );
  return isOutputDOM() && pureDOMFunctions.has(name)
    ? t.addComment(callExpression, "leading", "@__PURE__")
    : callExpression;
}

export function dynamicImport(
  request: string,
  ...handlers: Array<t.Expression | Falsy>
) {
  const load = t.callExpression(t.import(), [t.stringLiteral(request)]);
  const args = trimFalsyArgs(handlers);
  return args.length
    ? t.callExpression(t.memberExpression(load, t.identifier("then")), args)
    : load;
}

// Client registrations of values the server can bind to a scope. A patch may
// carry one (as an entry or in data), so registering one links its resolution.
const scopeBoundRegistrations = new Set<string>([
  "_el",
  "_hoist_resume",
  "_var_resume",
  "_fill_var_resume",
]);

// A `src/{dom,html}/*.feat.ts` module is a compiler-injected side-effect
// import: it enables optional runtime behavior that referenced imports alone
// cannot keep alive under tree shaking (eg catch enablement).
// Every dom feature module, listed as a runtime entry so a dev optimizer
// sees each `.feat` chunk up front instead of discovering it from a template.
export const domRuntimeFeatures = [
  "catch",
  "controllable",
  "controllable-input",
  "controllable-open",
  "controllable-select",
  "controllable-textarea",
  "dynamic-tag-script",
  "dynamic-tag-var",
  "lazy",
  "placeholder",
] as const;
// Listed only for an app compiled with `patches`.
export const domPatchRuntimeFeatures = [
  "patches/attr",
  "patches/attrs",
  "patches/boundary",
  "patches/branch",
  "patches/catch",
  "patches/catch-created",
  "patches/child",
  "patches/child-owner",
  "patches/control",
  "patches/control-checked-value",
  "patches/control-input",
  "patches/control-open",
  "patches/control-select",
  "patches/dynamic-tag",
  "patches/effect",
  "patches/effect-signal",
  "patches/html",
  "patches/init",
  "patches/loop",
  "patches/loop-item",
  "patches/loop-keyed",
  "patches/ready",
  "patches/registered-content",
  "patches/show",
  "patches/style",
  "patches/text",
  "patches/text-content",
  "patches/try",
  "patches/value",
  "patches/write",
  "patches/bind",
  "patches/var",
] as const;
export type DOMRuntimeFeature =
  | (typeof domRuntimeFeatures)[number]
  | (typeof domPatchRuntimeFeatures)[number];

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** Client runtime features the template links from analyze. */
    runtimeFeatures?: Set<DOMRuntimeFeature>;
  }
}

// Links a client runtime feature from analyze: the page entry imports it
// when the template's module never loads, and that module imports it too.
export function linkRuntimeFeature(feature: DOMRuntimeFeature) {
  (getProgram().node.extra.runtimeFeatures ??= new Set()).add(feature);
}

const [getImportedFeatures] = createOutputState(
  () => new Set<DOMRuntimeFeature>(),
);
export function importRuntimeFeature(feature: DOMRuntimeFeature) {
  assertTranslate("importRuntimeFeature", feature);
  const features = getImportedFeatures();
  if (!features.has(feature)) {
    features.add(feature);
    const program = getProgram();
    const decl = getRuntimeFeatureImport(feature);
    // Kept with the imports, since one among statements splits the bundler's
    // view of the body; a path insert keeps queued sibling keys in sync.
    const lastImport = program
      .get("body")
      .findLast((stmt) => stmt.isImportDeclaration());
    if (lastImport) lastImport.insertAfter(decl);
    else program.unshiftContainer("body", decl);
  }
}

export function getRuntimeFeatureImport(feature: DOMRuntimeFeature) {
  return t.importDeclaration(
    [],
    t.stringLiteral(`${getRuntimePath("dom")}/${feature}.feat`),
  );
}

// A patch build's templates take the patch entry's html helpers.
export function getRuntimePath(output: string) {
  const { optimize } = getMarkoOpts();
  return `${runtimeInfo.name}/${optimize ? "" : "debug/"}${
    output === "html" ? (isPatch() ? "html/patch" : "html") : "dom"
  }`;
}

function assertTranslate(helper: string, name: string) {
  if (!isTranslate()) {
    throw new Error(
      `\`${helper}(${JSON.stringify(name)})\` may only be called during the translate stage.`,
    );
  }
}

function trimFalsyArgs<A>(args: (A | Falsy)[]) {
  const filteredArgs = [];
  for (let i = args.length; i--;) {
    const arg = args[i];
    if (arg || filteredArgs.length) {
      filteredArgs[i] = arg || t.buildUndefinedNode();
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
