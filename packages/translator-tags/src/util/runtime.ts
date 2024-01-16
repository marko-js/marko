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
} from "@marko/runtime-tags/src/html";
import { currentProgramPath } from "../visitors/program";
import { getMarkoOpts } from "./marko-config";
import type { Reserve } from "./reserve";
import { getScopeExpression } from "./scope-read";
import type { Section } from "./sections";

declare const MARKO_SRC: boolean;

type Falsy = false | 0 | "" | null | undefined;

const pureFunctions: Array<keyof typeof import("@marko/runtime-tags/src/dom")> =
  [
    "createTemplate",
    "createRenderer",
    "value",
    "intersection",
    "closure",
    "dynamicClosure",
    "contextClosure",
    "loopOf",
    "loopIn",
    "loopTo",
    "conditional",
    "bindFunction",
    "bindRenderer",
  ];

export function importRuntime(
  name:
    | keyof typeof import("@marko/runtime-tags/src/dom")
    | keyof typeof import("@marko/runtime-tags/src/html"),
) {
  const { output } = getMarkoOpts();
  return importNamed(currentProgramPath.hub.file, getRuntimePath(output), name);
}

export function callRuntime(
  name:
    | keyof typeof import("@marko/runtime-tags/src/dom")
    | keyof typeof import("@marko/runtime-tags/src/html"),
  ...args: Array<Parameters<typeof t.callExpression>[1][number] | Falsy>
) {
  const callExpression = t.callExpression(
    importRuntime(name),
    filterArguments(args),
  );
  if (
    pureFunctions.includes(
      name as keyof typeof import("@marko/runtime-tags/src/dom"),
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
    MARKO_SRC ? "src" : optimize ? "dist" : "dist/debug"
  }/${output === "html" ? "html" : "dom"}`;
}

export function callQueue(
  identifier: t.Identifier,
  reference: Reserve,
  value: t.Expression,
  section: Section,
) {
  return callRuntime(
    "queueSource",
    getScopeExpression(section, reference.section),
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
