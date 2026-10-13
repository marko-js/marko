import path from "node:path";
import { Worker } from "node:worker_threads";

import { hashValue, type Shape } from "../lib/shape";
import { shapeFiles } from "../lib/variants";
import type { Artifact, BuilderOptions } from "./builder";
import type { MemoryKv } from "./kv";

export interface BundlerOptions extends BuilderOptions {
  workers: number;
  artifactTtlMs: number;
  /** How long a build may hold its key's lock before another bundler may take over. */
  lockTtlMs: number;
}

export const keys = {
  artifact: (key: string) => `artifact:${key}`,
  lock: (key: string) => `lock:${key}`,
  failed: (key: string) => `failed:${key}`,
  shape: (shapeHash: string) => `shape:${shapeHash}`,
  /** Popularity belongs to shapes, not builds, so a new build can prewarm from it. */
  hot: "hot",
  hits: (key: string) => `hits:${key}`,
};

/** A JIT key names one build of one shape. */
export const jitKey = (buildId: string, shapeHash: string) =>
  `${buildId}.${shapeHash}`;

/**
 * The bundler service: turns shapes into artifacts in KV. Requests are
 * fire-and-forget; one build per key runs at a time across every bundler,
 * held by a KV lock.
 */
export class Bundler {
  builds = 0;
  failures = 0;
  buildMs = 0;
  #inflight = new Set<string>();
  #workers: Worker[];
  #next = 0;
  #pending = new Map<
    number,
    { resolve(artifact: Artifact): void; reject(err: Error): void }
  >();
  #ids = 0;

  constructor(
    private kv: MemoryKv,
    private options: BundlerOptions,
  ) {
    this.#workers = Array.from({ length: options.workers }, () => {
      const worker = new Worker(path.join(__dirname, "bundler-worker.ts"), {
        workerData: options satisfies BuilderOptions,
      });
      worker.on("message", ({ id, artifact, error }) => {
        const pending = this.#pending.get(id)!;
        this.#pending.delete(id);
        if (error) pending.reject(new Error(error));
        else pending.resolve(artifact);
      });
      return worker;
    });
  }

  get inflight() {
    return this.#inflight.size;
  }

  async request(buildId: string, shape: Shape) {
    const shapeHash = hashValue(shape);
    const key = jitKey(buildId, shapeHash);
    if (this.#inflight.has(key)) return;
    this.#inflight.add(key);
    try {
      const { kv, options } = this;
      if (
        (await kv.get(keys.artifact(key))) ||
        (await kv.get(keys.failed(key))) ||
        !(await kv.set(keys.lock(key), "1", options.lockTtlMs, true))
      ) {
        return;
      }
      await kv.set(
        keys.shape(shapeHash),
        JSON.stringify(shape),
        options.artifactTtlMs * 10,
      );
      try {
        const artifact = await this.#build(key, shapeFiles(shape));
        this.builds++;
        this.buildMs += artifact.buildMs;
        await kv.set(
          keys.artifact(key),
          JSON.stringify(artifact),
          options.artifactTtlMs,
        );
      } catch (err) {
        this.failures++;
        console.error(`JIT build ${key} failed`, err);
        await kv.set(keys.failed(key), String(err), options.artifactTtlMs);
      } finally {
        await kv.del(keys.lock(key));
      }
    } finally {
      this.#inflight.delete(key);
    }
  }

  /** Builds the hottest shapes for a new build before it takes traffic. */
  async prewarm(buildId: string, count: number) {
    const hashes = await this.kv.ztop(keys.hot, count);
    await Promise.all(
      hashes.map(async (shapeHash) => {
        const shape = await this.kv.get(keys.shape(shapeHash));
        if (shape) await this.request(buildId, JSON.parse(shape));
      }),
    );
    return hashes.length;
  }

  /** Builds an arbitrary entry (the generic renderer) outside the shape keyspace. */
  buildFiles(key: string, files: Record<string, string>) {
    return this.#build(key, files);
  }

  close() {
    return Promise.all(this.#workers.map((worker) => worker.terminate()));
  }

  #build(key: string, files: Record<string, string>) {
    const id = this.#ids++;
    const worker = this.#workers[this.#next++ % this.#workers.length];
    return new Promise<Artifact>((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      worker.postMessage({ id, key, files });
    });
  }
}
