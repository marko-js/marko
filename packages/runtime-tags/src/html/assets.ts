import type { $Global, Template } from "../common/types";
import { _template, type ServerRenderer } from "./template";
import { _html, $global, getState } from "./writer";

const kAssets = Symbol();
const kBlockIndex = Symbol();
const kDeferIndex = Symbol();

declare module "../common/types" {
  interface $Global {
    [kAssets]?: string[];
    [kBlockIndex]?: number;
    [kDeferIndex]?: number;
  }
}

type AssetFlush = (
  g: $Global,
  type: "block" | "defer",
  asset: string,
) => string;
let assetFlush: AssetFlush;

export function withAssets(
  renderer: ServerRenderer,
  assetId: string,
): ServerRenderer {
  return function renderWithAssets(input: unknown) {
    const g = $global();
    (getState().ensureReady ||= {})[assetId] = 1;
    addAsset(g, assetId);
    _html(flush(g, ""));
    return renderer(input);
  };
}

export function withEntry(
  template: ServerRenderer & Template,
  runtime: AssetFlush,
  assetId: string,
): Template {
  assetFlush = runtime;
  return Object.assign(renderWithEntry, template);
  function renderWithEntry(input: unknown) {
    const g = $global();
    addAsset(g, assetId);
    if (g.__flush__) {
      _html(flush(g, ""));
    } else {
      g.__flush__ = flush;
    }

    return template(input);
  }
}

export function _flush_head(): string {
  const g = $global();
  return g[kAssets] ? flush(g, "") : "";
}

function flush(g: $Global, html: string) {
  let result = "";
  const assets = g[kAssets]!;
  const { length } = assets;
  let bi = g[kBlockIndex]!;
  let di = g[kDeferIndex]!;

  for (; bi < length; bi++) {
    result += assetFlush(g, "block", assets[bi]);
  }

  for (; di < length; di++) {
    result += assetFlush(g, "defer", assets[di]);
  }

  g[kBlockIndex] = bi;
  g[kDeferIndex] = di;
  return result + html;
}

function addAsset(g: $Global, assetId: string) {
  const assets = g[kAssets];
  if (!assets) {
    g[kAssets] = [assetId];
    g[kBlockIndex] = g[kDeferIndex] = 0;
  } else if (!assets.includes(assetId)) {
    assets.push(assetId);
  }
}
