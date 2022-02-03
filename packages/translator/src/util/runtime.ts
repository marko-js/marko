import { types as t } from "@marko/compiler";
import { importNamed } from "@marko/babel-utils";
import { getMarkoOpts } from "./marko-config";
import type { Reserve } from "./sections";
import { currentProgramPath } from "../visitors/program";

export function importRuntime(name: string) {
  const { output } = getMarkoOpts();
  return importNamed(currentProgramPath.hub.file, getRuntimePath(output), name);
}

export function callRuntime<A extends Parameters<typeof t.callExpression>[1]>(
  name:
    | keyof typeof import("@marko/runtime-fluurt/src/dom")
    | keyof typeof import("@marko/runtime-fluurt/src/html"),
  ...args: A
) {
  return t.callExpression(importRuntime(name as string), args);
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
    // eslint-disable-next-line no-constant-condition
    "MARKO_SRC" ? "src" : optimize ? "dist" : "dist/debug"
  }/${output}`;
}

export function callRead(reference: Reserve, targetSectionId: number) {
  const diff = getScopeDepthDifference(reference, targetSectionId);
  switch (diff) {
    case 0:
      return callRuntime("read", t.numericLiteral(reference.id));
    case 1:
      return callRuntime("readInOwner", t.numericLiteral(reference.id));
    default:
      return callRuntime(
        "readInOwner",
        t.numericLiteral(reference.id),
        t.numericLiteral(diff)
      );
  }
}

export function callQueue(
  fnIdentifier: t.Identifier,
  reference: Reserve,
  value: t.Expression,
  targetSectionId: number
) {
  const diff = getScopeDepthDifference(reference, targetSectionId);
  switch (diff) {
    case 0:
      return callRuntime(
        "queue",
        fnIdentifier,
        t.numericLiteral(reference.id),
        value
      );
    case 1:
      return callRuntime(
        "queueInOwner",
        fnIdentifier,
        t.numericLiteral(reference.id),
        value
      );
    default:
      return callRuntime(
        "queueInOwner",
        fnIdentifier,
        t.numericLiteral(reference.id),
        value,
        t.numericLiteral(diff)
      );
  }
}

function getScopeDepthDifference(reference: Reserve, sectionId: number) {
  if (reference.sectionId !== sectionId) {
    return 1;
  }
  return 0;
}
