import { DEFAULT_RUNTIME_ID } from "../common/meta";
import { type $Global, RendererProp, type Template } from "../common/types";
import { quoteScriptTemplateLiteral } from "./content";
import { register, toObjectKey } from "./serializer";
import { _template, type ServerRenderer } from "./template";
import {
  _html,
  $global,
  type Boundary,
  catchableBoundary,
  getState,
  isInResumedBranch,
  mayDrop,
  withPatchReadyId,
  writeScript,
  writeWaitReady,
} from "./writer";

const kAssets = Symbol();
const kHead = Symbol();
export interface VisibleTrigger {
  type: "visible";
  selector: string;
  options?: { rootMargin?: string };
}
export interface IdleTrigger {
  type: "idle";
  selector?: never;
  options?: { timeout?: number };
}
export interface MediaTrigger {
  type: "media";
  selector: string;
  options?: never;
}
export interface EventTrigger {
  type: `on-${string}`;
  selector: string;
  options?: never;
}
export type LoadTrigger =
  | VisibleTrigger
  | IdleTrigger
  | MediaTrigger
  | EventTrigger;
type Trigger = LoadTrigger;
interface Asset {
  id: string;
  flush: AssetFlush;
  triggers: Trigger[] | undefined;
  // Kept to write again: a resolver may write each url only once per render.
  block: string | undefined;
  defer: string | undefined;
  script: string | undefined;
  // Where its html and its trigger script were written: unset until then, null
  // where nothing drops them, else the boundary whose `@catch` may.
  htmlAt: Boundary | null | undefined;
  scriptAt: Boundary | null | undefined;
}

declare module "../common/types" {
  interface $Global {
    [kAssets]?: Asset[];
    [kHead]?: true;
  }
}

type AssetFlush = (
  g: $Global,
  type: "block" | "defer",
  asset: string,
) => string;

// Its importer passes the bundler's resolver, so it resolves on a page of either
// API, whichever page entry rendered. It serializes as the template it loads.
export function withLoadAssets(
  renderer: ServerRenderer,
  flush: AssetFlush,
  assetId: string,
  triggers?: Trigger[],
): ServerRenderer {
  return register(
    renderer[RendererProp.Id]!,
    Object.assign(
      (input: unknown) => {
        // A flush waits for a lazy module only once it writes into the tag,
        // then applies whole: the child composes into its shell like a plain one.
        if (getState().writesPatches) {
          return withPatchReadyId(assetId, renderer, input);
        }
        writeLoadAsset(assetId, flush, triggers);
        return writeWaitReady(assetId, renderer, input);
      },
      MARKO_DEBUG ? { ...renderer, [RendererProp.Lazy]: 1 as const } : renderer,
      { [RendererProp.ReadyId]: assetId },
    ),
  );
}

// Also writes a Class API lazy tag's asset rendering within Tags content.
export function writeLoadAsset(
  assetId: string,
  flush: AssetFlush,
  triggers?: Trigger[],
) {
  const g = $global();
  writeAsset(g, addAsset(g, assetId, flush, triggers));
}

export function withPageAssets(
  template: ServerRenderer & Template,
  runtime: AssetFlush,
  assetId: string,
  runtimeId?: string,
): Template {
  return Object.assign((input: unknown) => {
    const g = $global();
    if (runtimeId) {
      // The compiled browser entry bakes in its runtimeId, so the render's first
      // page entry applies it before any resume comment is written.
      if (!g[kAssets]) {
        if (MARKO_DEBUG) {
          if (g.runtimeId !== DEFAULT_RUNTIME_ID && g.runtimeId !== runtimeId) {
            throw new Error(
              `$global.runtimeId ("${g.runtimeId}") conflicts with the runtimeId this entry was compiled with ("${runtimeId}").`,
            );
          }
        }

        g.runtimeId = runtimeId;
      } else if (MARKO_DEBUG && g.runtimeId !== runtimeId) {
        console.error(
          `A page entry compiled with runtimeId "${runtimeId}" is nested in a render using runtimeId "${g.runtimeId}", so its content cannot resume.`,
        );
      }
    }
    const asset = addAsset(g, assetId, runtime);
    // A page entry rendered after the first flush cleared `__flush__` takes the
    // top-level branch on purpose: co-rendered pages batch assets and flushes.
    if (g.__flush__) {
      // Not the actual page entry (nested within another page render): resume
      // data waits for this page's own entry script, as for an embedded render.
      writeAsset(g, asset);
      return writeWaitReady(assetId, template, input);
    }

    g.__flush__ = flushPage;
    return template(input);
  }, template);
}

// The head takes the assets found until it renders.
export function _flush_head(): string {
  const g = $global();
  if (!g[kAssets]) return "";
  g[kHead] = true;
  return takeAssets(g, catchableBoundary());
}

// The first flush writes the assets no head took ahead of its html.
function flushPage(g: $Global, html: string) {
  return takeAssets(g, null) + html;
}

// The html of the assets not yet written: stylesheets, then scripts.
function takeAssets(g: $Global, at: Boundary | null) {
  let block = "";
  let defer = "";
  for (const asset of g[kAssets]!) {
    if (asset.htmlAt === undefined) {
      asset.htmlAt = at;
      block += blockHTML(g, asset);
      if (!asset.triggers) defer += deferHTML(g, asset);
    }
  }
  return block + defer;
}

// Its asset waits for the head or the page's first flush, else goes where the tag
// renders with its trigger script; each again wherever a `@catch` may have dropped it.
function writeAsset(g: $Global, asset: Asset) {
  if (needsWrite(asset.htmlAt)) {
    asset.htmlAt = undefined;
    if (g[kHead] || g.__flush__ !== flushPage) {
      const block = blockHTML(g, asset);
      _html(block + (asset.triggers ? "" : deferHTML(g, asset)));
      if (block && isInResumedBranch()) {
        // Its stylesheets also go in the head, which outlives the branch.
        writeScript(
          `document.head.insertAdjacentHTML("beforeend",${quoteScriptTemplateLiteral(block)})`,
        );
      }
      asset.htmlAt = catchableBoundary();
    }
  }
  if (asset.triggers && needsWrite(asset.scriptAt)) {
    const defer = deferHTML(g, asset);
    if (defer) {
      writeScript(
        (asset.script ||= triggerScript(asset.id, defer, asset.triggers)),
      );
    }
    asset.scriptAt = catchableBoundary();
  }
}

function needsWrite(at: Boundary | null | undefined) {
  return at === undefined || (at !== null && mayDrop(at));
}

function blockHTML(g: $Global, asset: Asset) {
  return (asset.block ??= asset.flush(g, "block", asset.id));
}

function deferHTML(g: $Global, asset: Asset) {
  return (asset.defer ??= asset.flush(g, "defer", asset.id));
}

function addAsset(
  g: $Global,
  id: string,
  flush: AssetFlush,
  triggers?: Trigger[],
) {
  const assets = (g[kAssets] ||= []);
  let asset = assets.find((a) => a.id === id);
  if (!asset) {
    assets.push(
      (asset = {
        id,
        flush,
        triggers,
        block: undefined,
        defer: undefined,
        script: undefined,
        htmlAt: undefined,
        scriptAt: undefined,
      }),
    );
  } else if (MARKO_DEBUG) {
    // Invariant: an asset has one trigger script, written wherever it is
    // needed, so it must be requested with a single consistent `load` trigger.
    if (JSON.stringify(asset.triggers) !== JSON.stringify(triggers)) {
      console.error(
        `The lazy asset "${id}" is imported with different \`load\` triggers; an asset must use one consistent trigger.`,
      );
    }
  }
  return asset;
}

function triggerScript(id: string, html: string, triggers: Trigger[]) {
  const htmlStr = quoteScriptTemplateLiteral(html);
  // A loader script that fails at the network level never evaluates, so the
  // debug build reports from the script's own error event; matches the
  // load-entry rejection arm's diagnostic.
  const insert = MARKO_DEBUG
    ? `(d=new Range().createContextualFragment(h),d.querySelectorAll("script").forEach(s=>s.onerror=()=>console.error(${quoteScriptTemplateLiteral(
        `The lazy module for "${id}" failed to load; its server-rendered content cannot become interactive.`,
      )})),document.head.append(d))`
    : `document.head.append(new Range().createContextualFragment(d=h))`;
  const exprs = triggers.map((trigger) => {
    const options = trigger.options && toObjectExpression(trigger.options);
    switch (trigger.type) {
      case "visible":
        return `(e=>e&&new IntersectionObserver((e,i)=>e.some(e=>e.isIntersecting)&&i.disconnect()+l()${
          options ? `,${options}` : ""
        }).observe(e))(${querySelectorOrLoad(trigger.selector!)})`;
      case "idle":
        return `(self.requestIdleCallback||l)(l${options ? `,${options}` : ""})`;
      case "media":
        return `(m=>m.matches?l():m.addEventListener("change",l,{once:1}))(matchMedia(${JSON.stringify(trigger.selector)}))`;
      default:
        return `(e=>e?.addEventListener("${trigger.type.slice("on-".length)}",l,{once:1}))(${querySelectorOrLoad(trigger.selector!)})`;
    }
  });
  // The head takes the module: a `@catch` may remove the range around this script.
  return `((h,d,l=$=>{d||${insert}})=>${
    exprs.length > 1 ? `{${exprs.join(";")}}` : exprs[0]
  })(${htmlStr})`;
}

// A trigger script flushes with the chunk that requested the asset, so a target
// written after a later flush boundary is not in the document yet and the module
// loads eagerly. `dom/load.ts` warns on the same miss; match it here.
function querySelectorOrLoad(selector: string) {
  return `document.querySelector(${JSON.stringify(selector)})||${
    MARKO_DEBUG
      ? `(console.warn(${JSON.stringify(
          `A lazy load trigger could not find an element matching "${selector}". The module was loaded immediately.`,
        )}),l())`
      : "l()"
  }`;
}

function toObjectExpression(options: object) {
  let result = "{";
  let sep = "";
  for (const key in options) {
    if (Object.hasOwn(options, key)) {
      result +=
        sep +
        toObjectKey(key) +
        ":" +
        JSON.stringify((options as Record<string, unknown>)[key]);
      sep = ",";
    }
  }
  return result + "}";
}
