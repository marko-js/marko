import type { $Global, Template } from "../common/types";
import { _template, type ServerRenderer } from "./template";
import { _html, $global, getState } from "./writer";

let add: AssetRuntime["add"];
let print: AssetRuntime["print"] = () => "";

// TODO: switch to just `print`.
// TODO: call head/body slots automatically.
interface AssetRuntime {
  add(g: $Global, assets: unknown): void;
  print(
    g: $Global,
    slot: "head-prepend" | "head" | "body-prepend" | "body",
  ): string;
}

export function withAssets(
  renderer: ServerRenderer,
  runtime: AssetRuntime,
  assets: string,
): ServerRenderer {
  if (!add) {
    ({ add, print } = runtime);
  }

  return function renderWithAssets(input: unknown) {
    const g = $global();
    (getState().ensureReady ||= {})[assets] = 1;
    add(g, assets);
    _html(
      print(g, "head-prepend") + print(g, "head") + print(g, "body-prepend"),
    );
    prependTrailer(g);
    return renderer(input);
  };
}

export function withEntry(
  template: ServerRenderer & Template,
  runtime: AssetRuntime,
  assets: string,
): Template {
  const renderWithAssets = withAssets(template, runtime, assets);
  return Object.assign(renderWithEntry, template);
  function renderWithEntry(input: unknown) {
    const g = $global();
    if (g.__flush__) {
      return renderWithAssets(input);
    }

    add(g, assets);
    g.__flush__ = flushAll;
    return template(input);
  }
}

function flushAll(g: $Global, html: string) {
  prependTrailer(g);
  return (
    print(g, "head-prepend") +
    print(g, "head") +
    print(g, "body-prepend") +
    html
  );
}

function prependTrailer(g: $Global) {
  const trailer = print(g, "body");
  if (trailer) {
    const state = getState();
    state.trailerHTML = trailer + state.trailerHTML;
  }
}
