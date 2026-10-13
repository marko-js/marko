import vm from "node:vm";

import { register } from "./assets";
import type { Artifact } from "./builder";
import { keys } from "./bundler";
import type { MemoryKv } from "./kv";

export interface Template {
  render(input: unknown): { toString(): string };
}

interface Loaded {
  template: Template;
  artifact: Artifact;
  bytes: number;
}

/**
 * Loads artifacts into this process: evaluated in the host's realm so the
 * runtime's prototype checks hold, with `require` answering only from the
 * host's own module instances. Keeps an LRU bounded by code size; dropping
 * an entry lets it be collected, which `import()` never allows.
 */
export class JitLoader {
  loads = 0;
  evictions = 0;
  evalMs = 0;
  #lru = new Map<string, Loaded>();
  #bytes = 0;
  /** Keys KV had no artifact for, until when: spares a round trip per generic render. */
  #misses = new Map<string, number>();
  /** V8 code cache per artifact; a real host would keep it in KV beside the code. */
  #codeCache = new Map<string, Buffer>();

  constructor(
    private kv: MemoryKv,
    private hostModules: Record<string, unknown>,
    private options: {
      maxBytes: number;
      missTtlMs: number;
      artifactTtlMs: number;
    },
  ) {}

  get size() {
    return this.#lru.size;
  }

  /** The synchronous fast path. */
  peek(key: string) {
    const loaded = this.#lru.get(key);
    if (loaded) {
      this.#lru.delete(key);
      this.#lru.set(key, loaded);
    }
    return loaded?.template;
  }

  async load(key: string) {
    const hit = this.peek(key);
    if (hit) return hit;
    if ((this.#misses.get(key) ?? 0) > Date.now()) return undefined;
    const json = await this.kv.get(keys.artifact(key));
    if (!json) {
      this.#misses.set(key, Date.now() + this.options.missTtlMs);
      return undefined;
    }
    this.#misses.delete(key);
    void this.kv.touch(keys.artifact(key), this.options.artifactTtlMs);
    return this.add(JSON.parse(json)).template;
  }

  add(artifact: Artifact): Loaded {
    const loaded: Loaded = {
      template: this.evaluate(artifact),
      artifact,
      bytes: artifact.server.length,
    };
    this.#lru.set(artifact.key, loaded);
    this.#bytes += loaded.bytes;
    for (const [key, entry] of this.#lru) {
      if (this.#bytes <= this.options.maxBytes) break;
      this.#lru.delete(key);
      this.#bytes -= entry.bytes;
      this.evictions++;
    }
    return loaded;
  }

  /** Evaluates an artifact and registers its client entries, outside the LRU. */
  evaluate(artifact: Artifact): Template {
    const start = performance.now();
    const template = this.#run(artifact);
    register(artifact.assets);
    this.evalMs += performance.now() - start;
    this.loads++;
    return template;
  }

  #run({ key, server }: Artifact): Template {
    const script = new vm.Script(
      `(function (exports, require, module) {${server}\n})`,
      { filename: `jit:${key}.cjs`, cachedData: this.#codeCache.get(key) },
    );
    if (!this.#codeCache.has(key)) {
      this.#codeCache.set(key, script.createCachedData());
    }
    const module = { exports: {} as { default: Template } };
    script.runInThisContext()(
      module.exports,
      (id: string) => {
        if (!(id in this.hostModules)) {
          throw new Error(`JIT artifact ${key} requires unknown module ${id}`);
        }
        return this.hostModules[id];
      },
      module,
    );
    return module.exports.default;
  }
}
