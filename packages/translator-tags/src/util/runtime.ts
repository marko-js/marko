import { importNamed } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import {
  attr,
  classAttr,
  escapeScript,
  escapeStyle,
  escapeXML,
  styleAttr,
  toString,
} from "@marko/runtime-tags/html";

import { currentProgramPath } from "../visitors/program";
import { getMarkoOpts } from "./marko-config";
import type { Binding } from "./references";
import { getScopeExpression } from "./scope-read";
import type { Section } from "./sections";

type Falsy = false | 0 | "" | null | undefined;

const pureFunctions: Array<keyof typeof import("@marko/runtime-tags/dom")> = [
  "createTemplate",
  "createRenderer",
  "createRendererWithOwner",
  "value",
  "intersection",
  "closure",
  "dynamicClosure",
  "loopOf",
  "loopIn",
  "loopTo",
  "conditional",
];

export function importRuntime(
  name:
    | keyof typeof import("@marko/runtime-tags/dom")
    | keyof typeof import("@marko/runtime-tags/html"),
) {
  const { output } = getMarkoOpts();
  return importNamed(currentProgramPath.hub.file, getRuntimePath(output), name);
}

export function callRuntime(
  name:
    | keyof typeof import("@marko/runtime-tags/dom")
    | keyof typeof import("@marko/runtime-tags/html"),
  ...args: Array<Parameters<typeof t.callExpression>[1][number] | Falsy>
) {
  const callExpression = t.callExpression(
    importRuntime(name),
    filterArguments(args),
  );
  if (
    pureFunctions.includes(
      name as keyof typeof import("@marko/runtime-tags/dom"),
    )
  ) {
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
    escapeXML,
    toString,
    attr,
    classAttr,
    styleAttr,
    escapeScript,
    escapeStyle,
  };
}

function getRuntimePath(output: string) {
  const { optimize } = getMarkoOpts();
  return `@marko/runtime-tags/${
    optimize ? "" : "debug/"
  }${output === "html" ? "html" : "dom"}`;
}

export function callQueue(
  identifier: t.Identifier,
  binding: Binding,
  value: t.Expression,
  section: Section,
) {
  return callRuntime(
    "queueSource",
    getScopeExpression(section, binding.section),
    identifier,
    value,
  );
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
