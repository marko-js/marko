import { types as t } from "@marko/compiler";
import { importNamed } from "@marko/babel-utils";
import { getMarkoOpts } from "./marko-config";
import { Reserve, getParentSectionId } from "./sections";

export function importRuntime<T extends t.Node>(
  path: t.NodePath<T>,
  name: string
) {
  const { output } = getMarkoOpts(path);
  return importNamed(path.hub.file, getRuntimePath(path, output), name);
}

export function callRuntime<
  T extends t.Node,
  A extends Parameters<typeof t.callExpression>[1]
>(
  path: t.NodePath<T>,
  name:
    | keyof typeof import("@marko/runtime-fluurt/src/dom")
    | keyof typeof import("@marko/runtime-fluurt/src/html"),
  ...args: A
) {
  return t.callExpression(importRuntime(path, name as string), args);
}

export function getHTMLRuntime<T extends t.Node>(path: t.NodePath<T>) {
  return getRuntime(
    path,
    "html"
  ) as typeof import("@marko/runtime-fluurt/src/html");
}

export function getDOMRuntime<T extends t.Node>(path: t.NodePath<T>) {
  return getRuntime(
    path,
    "dom"
  ) as typeof import("@marko/runtime-fluurt/src/dom");
}

function getRuntime<T extends t.Node>(
  path: t.NodePath<T>,
  output: string
): unknown {
  return require(getRuntimePath(path, output));
}

function getRuntimePath<T extends t.Node>(path: t.NodePath<T>, output: string) {
  const { optimize } = getMarkoOpts(path);
  return `@marko/runtime-fluurt/${
    // eslint-disable-next-line no-constant-condition
    "MARKO_SRC" ? "src" : optimize ? "dist" : "dist/debug"
  }/${output}`;
}

export function callRead(path: t.NodePath, reference: Reserve) {
  const sectionId = path.state.sectionId;
  const diff = getScopeDepthDifference(reference, sectionId);
  switch (diff) {
    case 0:
      return callRuntime(path, "read", t.numericLiteral(reference.id));
    case 1:
      return callRuntime(path, "readInOwner", t.numericLiteral(reference.id));
    default:
      return callRuntime(
        path,
        "readInOwner",
        t.numericLiteral(reference.id),
        t.numericLiteral(diff)
      );
  }
}

export function callQueue(
  path: t.NodePath,
  fnIdentifier: t.Identifier,
  reference: Reserve,
  value: t.Expression
) {
  const sectionId = getParentSectionId(path);
  const diff = getScopeDepthDifference(reference, sectionId);
  switch (diff) {
    case 0:
      return callRuntime(
        path,
        "queue",
        fnIdentifier,
        t.numericLiteral(reference.id),
        value
      );
    case 1:
      return callRuntime(
        path,
        "queueInOwner",
        fnIdentifier,
        t.numericLiteral(reference.id),
        value
      );
    default:
      return callRuntime(
        path,
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
