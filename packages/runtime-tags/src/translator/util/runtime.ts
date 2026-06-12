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
import { getMarkoOpts, isOutputDOM, isOutputHTML } from "./marko-config";
import runtimeInfo from "./runtime-info";

export type DOMRuntimeHelpers = keyof typeof import("../../dom");
export type HTMLRuntimeHelpers = keyof typeof import("../../html");

const pureDOMFunctions = new Set<string>([
  "_await_promise",
  "_await_content",
  "_child_setup",
  "_if",
  "_if_closure",
  "_try",
  "_dynamic_tag",
  "_content_closures",
  "_content",
  "_template",
  "_closure",
  "_closure_get",
  "_or",
  "_for_closure",
  "_for_in",
  "_for_of",
  "_for_to",
  "_for_until",
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
  for (let i = args.length; i--; ) {
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
