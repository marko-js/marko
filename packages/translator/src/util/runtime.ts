import { types as t } from "@marko/compiler";
import { importNamed } from "@marko/babel-utils";
import { getMarkoOpts } from "./marko-config";

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
    "MARKO_SRC" ? "src" : optimize ? "dist" : "dist/debug"
  }/${output}`;
}
