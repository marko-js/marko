import { types as t } from "@marko/compiler";
import { getFile, importNamed } from "@marko/compiler/babel-utils";

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
import { isTranslate } from "./get-compile-stage";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
  isPersistedEntryBuild,
} from "./marko-config";
import runtimeInfo from "./runtime-info";
import { recordPlanImport } from "./update-plan-records";

export type DOMRuntimeHelpers =
  | keyof typeof import("../../dom")
  | keyof typeof import("../../dom-persisted");
export type HTMLRuntimeHelpers = keyof typeof import("../../html");

// Marked `@__PURE__` (see callRuntime) so a bundler may drop a call whose
// result is unused, despite call-time side effects: `_resume` registration
// (`_template`, `_dynamic_tag`). This is sound because registration only
// matters when the value is referenced by a serialized register id, which
// keeps it in the module graph.
//
// A latch belongs here only if a surviving runtime construct re-triggers it.
// `_enable_catch` does not qualify: `_try` never calls it, so a `<try>` with
// no `<await>` or lazy child has the program-scope call as its only trigger
// and dropping it leaves the boundary unable to catch.
const pureDOMFunctions = new Set<string>([
  "_await_promise",
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
  "_let_change_persisted",
  "_let_persisted",
  "_const",
  "_const_persisted",
  "_load_signal",
  "_load_setup",
  "_load_template",
  "_load_visible_trigger",
  "_load_event_trigger",
  "_load_idle_trigger",
  "_load_media_trigger",
  "_load_race_trigger",
  "_update_attr",
  "_update_construct",
  "_update_controllable",
  "_update_html",
  "_update_named_attr",
  "_update_scopes",
  "_update_text",
] satisfies DOMRuntimeHelpers[]);

const updateDOMFunctions = new Set<string>([
  "patch",
  "_construct",
  "_construct_attr_content",
  "_construct_child",
  "_construct_closure",
  "_echo_snapshot",
  "_load_ready",
  "_static_shells",
  "_update_branch",
  "_update_content",
  "_update_details_or_dialog_open",
  "_update_dynamic",
  "_update_for",
  "_update_for_keyed",
  "_update_if",
  "_update_if_state",
  "_update_input_checked",
  "_update_input_checkedValue",
  "_update_input_value",
  "_update_input_value_dynamic",
  "_update_load",
  "_update_loader",
  "_update_attr",
  "_update_child",
  "_update_construct",
  "_update_controllable",
  "_update_html",
  "_update_named_attr",
  "_update_pair",
  "_update_region",
  "_update_scopes",
  "_update_seed",
  "_update_select_value",
  "_update_signal",
  "_update_style_item",
  "_update_text",
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
  const request =
    output === "dom" && updateDOMFunctions.has(name)
      ? getPersistedRuntimePath()
      : getRuntimePath(output);
  if (isPersistedEntryBuild()) {
    // The plan records the ACTUAL emitted raw specifier (debug vs optimize
    // spell the runtime paths differently) — census site 31.
    recordPlanImport(getFile(), request, "external");
  }
  return importNamed(getFile(), request, name);
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

export function getPersistedRuntimePath() {
  const { optimize } = getMarkoOpts();
  return `${runtimeInfo.name}/${optimize ? "" : "debug/"}dom-persisted`;
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
