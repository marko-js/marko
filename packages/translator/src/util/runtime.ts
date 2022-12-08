import { types as t } from "@marko/compiler";
import { importNamed } from "@marko/babel-utils";
import { getMarkoOpts } from "./marko-config";
import type { Reserve } from "./reserve";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";

declare const MARKO_SRC: boolean;

type Falsy = false | 0 | "" | null | undefined;

const pureFunctions: Array<
  keyof typeof import("@marko/runtime-fluurt/src/dom")
> = [
  "createRenderFn",
  "createRenderer",
  "source",
  "derivation",
  "subscriber",
  "closure",
  "loop",
  "conditional",
  "destructureSources",
  "bind",
  "bindRenderer",
  "inLoopScope",
  "inConditionalScope",
];

export function importRuntime(name: string) {
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
    importRuntime(name as string),
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
  return getRuntime("html") as typeof import("@marko/runtime-fluurt/src/html");
}

export function getDOMRuntime() {
  return getRuntime("dom") as typeof import("@marko/runtime-fluurt/src/dom");
}

function getRuntime(output: string): unknown {
  return require(getRuntimePath(output));
}

function getRuntimePath(output: string) {
  const { optimize } = getMarkoOpts();
  return `@marko/runtime-fluurt/${
    MARKO_SRC ? "src" : optimize ? "dist" : "dist/debug"
  }/${output === "html" ? "html" : "dom"}`;
}

export function callRead(reference: Reserve, targetSectionId: number) {
  return t.memberExpression(
    getScopeExpression(reference, targetSectionId),
    t.numericLiteral(reference.id),
    true
  );
}

export function callQueue(
  identifier: t.Identifier,
  reference: Reserve,
  value: t.Expression,
  targetSectionId: number
) {
  return callRuntime(
    "queueSource",
    getScopeExpression(reference, targetSectionId),
    identifier,
    value
  );
}

export function getScopeExpression(reference: Reserve, sectionId: number) {
  const diff = reference.sectionId !== sectionId ? 1 : 0;
  let scope: t.Expression = scopeIdentifier;
  for (let i = 0; i < diff; i++) {
    scope = t.memberExpression(scope, t.identifier("_"));
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
