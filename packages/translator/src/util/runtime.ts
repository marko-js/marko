import { types as t } from "@marko/compiler";
import { importNamed } from "@marko/babel-utils";
import { getMarkoOpts } from "./marko-config";
import type { Reserve } from "./reserve";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import type { ReferenceGroup } from "./apply-hydrate";

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
    // eslint-disable-next-line no-constant-condition
    "MARKO_SRC" ? "src" : optimize ? "dist" : "dist/debug"
  }/${output}`;
}

export function callRead(reference: Reserve, targetSectionId: number) {
  return t.memberExpression(
    getScopeExpression(reference, targetSectionId),
    t.numericLiteral(reference.id),
    true
  );
}

export function callQueue(
  { identifier, queuePriority }: ReferenceGroup,
  reference: Reserve,
  value: t.Expression,
  targetSectionId: number
) {
  return callRuntime(
    "queue",
    getScopeExpression(reference, targetSectionId),
    identifier,
    queuePriority,
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
