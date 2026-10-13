import type { CmsPage } from "../lib/pages";
import { getShape, hashValue } from "../lib/shape";
import { type AssetEntry, trackFlushes } from "./assets";
import { type Bundler, jitKey, keys } from "./bundler";
import type { MemoryKv } from "./kv";
import type { JitLoader, Template } from "./loader";

export interface AdmissionOptions {
  /** Requests a shape needs within `windowMs` before it is worth a build. */
  threshold: number;
  windowMs: number;
}

export interface Rendered {
  html: string;
  tier: "jit" | "generic";
  flushed: AssetEntry[];
}

/**
 * One app server. Every request renders immediately: with the shape's JIT
 * artifact when this process or KV has it, otherwise with the generic
 * renderer, counting the miss toward the shape's admission.
 */
export class AppInstance {
  constructor(
    private kv: MemoryKv,
    private loader: JitLoader,
    private bundler: Bundler,
    private generic: Template,
    readonly buildId: string,
    private admission: AdmissionOptions,
  ) {}

  async handle(page: CmsPage): Promise<Rendered> {
    const shape = getShape(page);
    const shapeHash = hashValue(shape);
    const key = jitKey(this.buildId, shapeHash);
    void this.kv.zincr(keys.hot, shapeHash);

    const jit = this.loader.peek(key) ?? (await this.loader.load(key));
    if (jit) return this.#render(jit, page, "jit");

    const hits = await this.kv.incr(keys.hits(key), this.admission.windowMs);
    if (hits >= this.admission.threshold) {
      void this.bundler.request(this.buildId, shape);
    }
    return this.#render(this.generic, page, "generic");
  }

  /** Loads the hottest shapes' artifacts before taking traffic. */
  async prewarm(count: number) {
    const hashes = await this.kv.ztop(keys.hot, count);
    let loaded = 0;
    for (const shapeHash of hashes) {
      if (await this.loader.load(jitKey(this.buildId, shapeHash))) loaded++;
    }
    return loaded;
  }

  #render(template: Template, page: CmsPage, tier: Rendered["tier"]) {
    const { result, flushed } = trackFlushes(() =>
      template
        .render({ title: page.title, sections: page.sections })
        .toString(),
    );
    return { html: result, tier, flushed };
  }
}
