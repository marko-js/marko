import { DEFAULT_RUNTIME_ID } from "../common/meta";
import type { $Global, Template } from "../common/types";
import { _escape_script } from "./content";
import { toObjectKey } from "./serializer";
import { _template, type ServerRenderer } from "./template";
import { _html, $global, writeScript, writeWaitReady } from "./writer";

const kAssets = Symbol();
const kBlockIndex = Symbol();
const kDeferIndex = Symbol();
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
  triggers?: Trigger[];
}

declare module "../common/types" {
  interface $Global {
    [kAssets]?: Asset[];
    [kBlockIndex]?: number;
    [kDeferIndex]?: number;
  }
}

type AssetFlush = (
  g: $Global,
  type: "block" | "defer",
  asset: string,
) => string;
// A Marko runtime bundles exactly one asset runtime, so every page sharing this
// module shares the one resolver — module scope is intentional, not a leak.
let assetFlush: AssetFlush;

export function withLoadAssets(
  renderer: ServerRenderer,
  assetId: string,
  triggers?: Trigger[],
): ServerRenderer {
  return Object.assign((input: unknown) => {
    const g = $global();
    addAsset(g, assetId, triggers);
    _html(flush(g, ""));
    return writeWaitReady(assetId, renderer, input);
  }, renderer);
}

export function withPageAssets(
  template: ServerRenderer & Template,
  runtime: AssetFlush,
  assetId: string,
  runtimeId?: string,
): Template {
  assetFlush = runtime;
  return Object.assign((input: unknown) => {
    const g = $global();
    if (runtimeId) {
      if (MARKO_DEBUG) {
        if (g.runtimeId !== DEFAULT_RUNTIME_ID && g.runtimeId !== runtimeId) {
          throw new Error(
            `$global.runtimeId ("${g.runtimeId}") conflicts with the runtimeId this entry was compiled with ("${runtimeId}").`,
          );
        }
      }

      // The compiled browser entry bakes in its runtimeId, so the compiled
      // value must win for the client and server halves to agree.
      g.runtimeId = runtimeId;
    }
    addAsset(g, assetId);
    // A page entry rendered after the first flush cleared `__flush__` takes the
    // top-level branch on purpose: co-rendered pages batch assets and flushes.
    if (g.__flush__) {
      // Not the actual page entry (nested within another page render): resume
      // data waits for this page's own entry script, as for an embedded render.
      _html(flush(g, ""));
      return writeWaitReady(assetId, template, input);
    }

    g.__flush__ = flush;
    return template(input);
  }, template);
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
    result += assetFlush(g, "block", assets[bi].id);
  }

  for (; di < length; di++) {
    const { id, triggers } = assets[di];
    const deferHTML = assetFlush(g, "defer", id);
    if (triggers) {
      if (deferHTML) writeTriggerScript(id, deferHTML, triggers);
    } else {
      result += deferHTML;
    }
  }

  g[kBlockIndex] = bi;
  g[kDeferIndex] = di;
  return result + html;
}

function addAsset(g: $Global, id: string, triggers?: Trigger[]) {
  const assets = g[kAssets];
  if (!assets) {
    g[kAssets] = [{ id, triggers }];
    g[kBlockIndex] = g[kDeferIndex] = 0;
  } else if (!assets.find((a) => a.id === id)) {
    assets.push({ id, triggers });
  } else if (MARKO_DEBUG) {
    // Invariant: an asset streams one trigger script, so it must be requested
    // with a single consistent `load` trigger; only the first one applies.
    const existing = assets.find((a) => a.id === id)!;
    if (JSON.stringify(existing.triggers) !== JSON.stringify(triggers)) {
      console.error(
        `The lazy asset "${id}" is imported with different \`load\` triggers; an asset must use one consistent trigger.`,
      );
    }
  }
}

function writeTriggerScript(id: string, html: string, triggers: Trigger[]) {
  const htmlStr = _escape_script(JSON.stringify(html));
  // A loader script that fails at the network level never evaluates, so the
  // debug build reports from the script's own error event; matches the
  // load-entry rejection arm's diagnostic.
  const insert = MARKO_DEBUG
    ? `(d=new Range().createContextualFragment(h),d.querySelectorAll("script").forEach(s=>s.onerror=()=>console.error(${_escape_script(
        JSON.stringify(
          `The lazy module for "${id}" failed to load; its server-rendered content cannot become interactive.`,
        ),
      )})),p.after(d))`
    : `p.after(new Range().createContextualFragment(d=h))`;
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
  writeScript(
    `((p,h,d,l=$=>{d||${insert}})=>${
      exprs.length > 1 ? `{${exprs.join(";")}}` : exprs[0]
    })(document.currentScript,${htmlStr})`,
  );
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
