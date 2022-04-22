import { types as t } from "@marko/compiler";
import { importNamed } from "@marko/babel-utils";
import { getMarkoOpts } from "./marko-config";
import type { Reserve } from "./reserve";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import type { ReferenceGroup } from "./references";

declare const MARKO_SRC: boolean;

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
  return t.callExpression(importRuntime(name as string), args.filter(Boolean));
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
  { apply, index }: ReferenceGroup,
  reference: Reserve,
  value: t.Expression,
  targetSectionId: number
) {
  return callRuntime(
    "queue",
    getScopeExpression(reference, targetSectionId),
    apply,
    t.numericLiteral(index - 1),
    value
  );
}

function getScopeExpression(reference: Reserve, sectionId: number) {
  const diff = reference.sectionId !== sectionId ? 1 : 0;
  let scope: t.Expression = scopeIdentifier;
  for (let i = 0; i < diff; i++) {
    scope = t.memberExpression(scope, t.identifier("_"));
  }
  return scope;
}
