import { types as t } from "@marko/compiler";
import { importStar } from "@marko/compiler/babel-utils";
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
import { toMemberExpression } from "./to-property-name";

type Falsy = false | 0 | "" | null | undefined;

const pureFunctions: Array<keyof typeof import("@marko/runtime-tags/dom")> = [
  "createTemplate",
  "createRenderer",
  "createRendererWithOwner",
  "value",
  "state",
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
  return toMemberExpression(
    importStar(currentProgramPath.hub.file, getRuntimePath(output), "$"),
    name,
  );
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
