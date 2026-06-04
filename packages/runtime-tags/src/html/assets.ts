import type { $Global, Template } from "../common/types";
import { _escape_script } from "./content";
import { toObjectKey } from "./serializer";
import { _template, type ServerRenderer } from "./template";
import { _html, $global, writeScript, writeWaitReady } from "./writer";

const kAssets = Symbol();
const kBlockIndex = Symbol();
const kDeferIndex = Symbol();
const { hasOwnProperty } = {};
enum TriggerType {
  Visible = "visible",
  Idle = "idle",
}
interface VisibleTrigger {
  type: TriggerType.Visible;
  selector: string;
  options?: IntersectionObserverInit;
}
interface IdleTrigger {
  type: TriggerType.Idle;
  options?: { timeout?: number };
}
interface EventTrigger {
  type: `on-${string}`;
  selector: string;
  options?: never;
}
type Trigger = VisibleTrigger | IdleTrigger | EventTrigger;
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
let assetFlush: AssetFlush;

export function withAssets(
  renderer: ServerRenderer,
  assetId: string,
  triggers?: Trigger[],
): ServerRenderer {
  return Object.assign(function renderWithAssets(input: unknown) {
    const g = $global();
    addAsset(g, assetId, triggers);
    _html(flush(g, ""));
    return writeWaitReady(assetId, renderer, input);
  }, renderer);
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
    result += assetFlush(g, "block", assets[bi].id);
  }

  for (; di < length; di++) {
    const { id, triggers } = assets[di];
    const deferHTML = assetFlush(g, "defer", id);
    if (triggers) {
      loadAsset(deferHTML, triggers);
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
  }
}

function loadAsset(html: string, triggers: Trigger[]) {
  const htmlStr = _escape_script(JSON.stringify(html));
  const exprs = triggers.map((trigger) => {
    const options = trigger.options && toObjectExpression(trigger.options);
    switch (trigger.type) {
      case TriggerType.Visible:
        return `(e=>e&&new IntersectionObserver(($,i)=>i.disconnect()+l()${
          options ? `,${options}` : ""
        }).observe(e))(document.querySelector(${JSON.stringify(trigger.selector)})||l())`;
      case TriggerType.Idle:
        return `(self.requestIdleCallback||l)(l${options ? `,${options}` : ""})`;
      default:
        return `(e=>e?.addEventListener("${trigger.type.slice("on-".length)}",l,{once:1}))(document.querySelector(${JSON.stringify(trigger.selector)})||l())`;
    }
  });
  writeScript(
    `((p,h,d,l=$=>d||p.insertAdjacentHTML("afterend",d=h))=>${
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
