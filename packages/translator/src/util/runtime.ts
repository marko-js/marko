import { types as t } from "@marko/compiler";
import { importNamed } from "@marko/babel-utils";
import { getMarkoOpts } from "./marko-config";
import { getNodeLiteral, Reserve } from "./reserve";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import {
  escapeXML,
  toString,
  attr,
  classAttr,
  styleAttr,
  escapeScript,
  escapeStyle,
} from "@marko/runtime-fluurt/src/html";
import type { Section } from "./sections";

declare const MARKO_SRC: boolean;

type Falsy = false | 0 | "" | null | undefined;

const pureFunctions: Array<
  keyof typeof import("@marko/runtime-fluurt/src/dom")
> = [
  "createRenderFn",
  "createRenderer",
  "value",
  "intersection",
  "closure",
  "dynamicClosure",
  "contextClosure",
  "loop",
  "conditional",
  "bindFunction",
  "bindRenderer",
];

export function importRuntime(
  name:
    | keyof typeof import("@marko/runtime-fluurt/src/dom")
    | keyof typeof import("@marko/runtime-fluurt/src/html")
) {
  const { output } = getMarkoOpts();
  return importNamed(currentProgramPath.hub.file, getRuntimePath(output), name);
}

export function callRuntime(
  name:
    | keyof typeof import("@marko/runtime-fluurt/src/dom")
    | keyof typeof import("@marko/runtime-fluurt/src/html"),
  ...args: Array<Parameters<typeof t.callExpression>[1][number] | Falsy>
) {
  const callExpression = t.callExpression(
    importRuntime(name),
    filterArguments(args)
  );
  if (
    pureFunctions.includes(
      name as keyof typeof import("@marko/runtime-fluurt/src/dom")
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
  return `@marko/runtime-fluurt/${
    MARKO_SRC ? "src" : optimize ? "dist" : "dist/debug"
  }/${output === "html" ? "html" : "dom"}`;
}

export function callRead(reference: Reserve, targetSection: Section) {
  return t.memberExpression(
    getScopeExpression(reference.section, targetSection),
    getNodeLiteral(reference),
    true
  );
}

export function callQueue(
  identifier: t.Identifier,
  reference: Reserve,
  value: t.Expression,
  targetSection: Section
) {
  return callRuntime(
    "queueSource",
    getScopeExpression(reference.section, targetSection),
    identifier,
    value
  );
}

export function getScopeExpression(
  referenceSection: Section,
  section: Section
) {
  let scope: t.Expression = scopeIdentifier;
  const diff = section.depth - referenceSection.depth;
  for (let i = 0; i < diff; i++) {
    scope = t.memberExpression(scope, t.identifier("_"));
  }
  if (diff < 0) {
    // TODO: handle hoisted references
    throw new Error("Unable to find scope for reference.");
  }
  return scope;
}

function filterArguments<A>(args: (A | Falsy)[]) {
  const filteredArgs = [];
  for (let i = args.length; i--; ) {
    const arg = args[i];
    if (arg || filteredArgs.length) {
      filteredArgs[i] = arg || t.nullLiteral();
    }
  }
  return filteredArgs as A[];
}
