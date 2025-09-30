import { types as t } from "@marko/compiler";
import { getFile, importStar } from "@marko/compiler/babel-utils";

import type { Falsy } from "../../common/types";
import {
  _attr,
  _attr_class,
  _attr_style,
  _escape,
  _escape_script,
  _escape_style,
  _unescaped,
} from "../../html";
import { getMarkoOpts, isOutputDOM, isOutputHTML } from "./marko-config";
import runtimeInfo from "./runtime-info";
import { toMemberExpression } from "./to-property-name";

const pureDOMFunctions = new Set<string>([
  "_await",
  "_child_setup",
  "_if",
  "_if_closure",
  "_try",
  "_dynamic_tag",
  "_content_branch",
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
  "_const",
] satisfies (keyof typeof import("../../dom"))[]);

export function importRuntime(
  name: keyof typeof import("../../dom") | keyof typeof import("../../html"),
) {
  const { output } = getMarkoOpts();
  return toMemberExpression(
    importStar(getFile(), getRuntimePath(output), "_"),
    name,
  );
}

export function callRuntime(
  name: keyof typeof import("../../dom") | keyof typeof import("../../html"),
  ...args: Array<Parameters<typeof t.callExpression>[1][number] | Falsy>
) {
  const callExpression = t.callExpression(
    importRuntime(name),
    filterArguments(args),
  );
  if (isOutputDOM() && pureDOMFunctions.has(name)) {
    callExpression.leadingComments = [
      {
        type: "CommentBlock",
        value: ` @__PURE__ `,
      } as t.CommentBlock,
    ];
  }
  return callExpression;
}

export function getHTMLRuntime() {
  return {
    _escape,
    _unescaped,
    _attr,
    _attr_class,
    _attr_style,
    _escape_script,
    _escape_style,
  };
}

function getRuntimePath(output: string) {
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
