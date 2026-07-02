import { DEFAULT_RUNTIME_ID } from "../common/meta";
import type { $Global, Template } from "../common/types";
import { _escape_script } from "./content";
import { toObjectKey } from "./serializer";
import { _template, type ServerRenderer } from "./template";
import { _html, $global, writeScript, writeWaitReady } from "./writer";

const kAssets = Symbol();
const kBlockIndex = Symbol();
const kDeferIndex = Symbol();
const { hasOwnProperty } = {};
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
export interface HasTrigger {
  type: "has";
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
  | HasTrigger
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

// Returns the HTML for an asset's tags. Implementations writing script,
// style, or stylesheet link tags should include `g.cspNonce` (when set) since
// their HTML is written straight into the page; tags for triggered assets are
// the exception -- the trigger script stamps its own nonce on them when it
// inserts them.
type AssetFlush = (
  g: $Global,
  type: "block" | "defer",
  asset: string,
) => string;
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

      // The client half of the runtimeId contract is baked into the
      // compiled browser entry, so the compiled value must win for the
      // halves to agree.
      g.runtimeId = runtimeId;
    }
    addAsset(g, assetId);
    if (g.__flush__) {
      // Not the actual page entry (nested within another page render):
      // hydration waits for this page's own entry script, like an
      // embedded render.
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
      if (deferHTML) writeTriggerScript(g, deferHTML, triggers);
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
    // TODO: error if multiple triggers for same asset.
    assets.push({ id, triggers });
  }
}

function writeTriggerScript(g: $Global, html: string, triggers: Trigger[]) {
  // When the page has a CSP nonce the trigger script must carry it onto
  // everything it creates: the asset tags inserted on load and the `has`
  // watcher's `<style>` would otherwise be blocked (and the load silently
  // dropped) under a policy without `unsafe-inline`. Without a nonce these
  // extra bytes are skipped entirely.
  const nonce = g.cspNonce;
  const htmlStr = _escape_script(JSON.stringify(html));
  const exprs = triggers.map((trigger) => {
    const options = trigger.options && toObjectExpression(trigger.options);
    switch (trigger.type) {
      case "visible":
        return `(e=>e&&new IntersectionObserver((e,i)=>e.some(e=>e.isIntersecting)&&i.disconnect()+l()${
          options ? `,${options}` : ""
        }).observe(e))(document.querySelector(${JSON.stringify(trigger.selector)})||l())`;
      case "idle":
        return `(self.requestIdleCallback||l)(l${options ? `,${options}` : ""})`;
      case "media":
        return `(m=>m.matches?l():m.addEventListener("change",l,{once:1}))(matchMedia(${JSON.stringify(trigger.selector)}))`;
      case "has":
        // Installs (once, via `||=`) a watcher that fires the first time
        // `:has(selector)` matches anywhere in the document: a no-op CSS
        // animation on a sentinel element triggers `animationstart`. It's the
        // same `self.$h` watcher the DOM runtime shares (`_load_has_trigger`),
        // so its matched selectors and `<style>` persist across SSR and CSR.
        // The factory string is identical across triggers, so it compresses
        // away on the wire. `o` is the matched-selector set, `s` the shared
        // `<style>`, `i` the sentinel counter; `k` is the selector and `c`
        // the load callback.
        // Sentinels are `<t m=mN>` elements (the tag the reorder runtime
        // already claims) kept invisible and out of flow by an inline style.
        // They can't simply be `display:none` -- animations never run on
        // undisplayed elements, and the reorder runtime writes a global
        // `t{display:none}` rule, hence the explicit `display:block`. The
        // inline style is written via CSSOM so `style-src` doesn't apply.
        // They're inserted before `<body>` (never appended last): the resume
        // runtime sweeps a live TreeWalker after each streamed chunk and
        // parks on the last node it accepted. A sentinel appended after
        // `<body>` would be that last node, leaving everything streamed into
        // `<body>` afterwards behind the parked position (and removing a
        // parked-on sentinel detaches the walker entirely).
        return `(self.$h||=((o={},s,i=0,D=document)=>(k,c,t,e)=>o[k]===1?c():((e=D.documentElement.insertBefore(D.createElement("t"),D.body)).setAttribute("m",t="m"+(i+=1)),e.style.cssText="display:block;position:fixed;visibility:hidden",e.onanimationstart=()=>(o[k]=1,e.remove(),c()),(${
          nonce
            ? `(s||=D.head.appendChild(D.createElement("style"))).nonce=${JSON.stringify(nonce)},s`
            : `s||=D.head.appendChild(D.createElement("style"))`
        }).append(":has("+k+")>t[m="+t+"]{animation:1ms m-h}@keyframes m-h{}")))())(${JSON.stringify(
          trigger.selector,
        )},l)`;
      default:
        return `(e=>e?.addEventListener("${trigger.type.slice("on-".length)}",l,{once:1}))(document.querySelector(${JSON.stringify(trigger.selector)})||l())`;
    }
  });
  writeScript(
    `((p,h,d,l=${
      nonce
        ? `($,f)=>d||(f=new Range().createContextualFragment(d=h),f.querySelectorAll("script,style,link").forEach(e=>e.nonce=p.nonce),p.after(f))`
        : `$=>d||p.after(new Range().createContextualFragment(d=h))`
    })=>${
      exprs.length > 1 ? `{${exprs.join(";")}}` : exprs[0]
    })(document.currentScript,${htmlStr})`,
  );
}

function toObjectExpression(options: object) {
  let result = "{";
  let sep = "";
  for (const key in options) {
    if (hasOwnProperty.call(options, key)) {
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
