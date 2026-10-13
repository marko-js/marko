import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

import { buildEntry } from "../lib/build";
import type { AssetEntry } from "./assets";

export interface BuilderOptions {
  /** Where generated entries go; must sit under the app so its `tags/` resolve. */
  workDir: string;
  /** Replaces `<app>` in generated sources. */
  appDir: string;
  /** The CDN origin's directory and the URL prefix it serves it under. */
  cdnDir: string;
  cdnUrl: string;
  hostDomUrl: string;
  /** Builds per compiler cache: comptime's module cache never invalidates, so the cache is rotated. */
  cacheBuilds?: number;
  /**
   * Block templates the host already loads: server code links to the host's
   * instances, and each block's client code gets a chunk of its own.
   */
  tagsDir?: string;
}

/** The specifier a JIT server module requires a host block template by. */
export const tagSpecifier = (name: string) => `cms-jit:tag/${name}`;

/** What the bundler stores per key: everything a host needs to render with it. */
export interface Artifact {
  key: string;
  /** CommonJS; requires only `@marko/runtime-tags/html` and the asset registry. */
  server: string;
  assets: Record<string, AssetEntry>;
  buildMs: number;
}

/** Compiles entries into artifacts and publishes their client files to the CDN directory. */
export function createBuilder(options: BuilderOptions) {
  let cache = new Map();
  let builds = 0;

  const tagName = (file: string, as: (name: string) => string) =>
    options.tagsDir &&
    file.endsWith(".marko") &&
    path.dirname(file) === options.tagsDir
      ? as(path.basename(file, ".marko"))
      : undefined;

  return async function build(
    key: string,
    files: Record<string, string>,
  ): Promise<Artifact> {
    if (++builds % (options.cacheBuilds ?? 200) === 0) cache = new Map();
    const dir = path.join(options.workDir, key.replace(/[^\w-]/g, "_"));
    mkdirSync(dir, { recursive: true });
    for (const [name, source] of Object.entries(files)) {
      writeFileSync(
        path.join(dir, name),
        source.replaceAll("<app>", path.relative(dir, options.appDir)),
      );
    }

    const result = await buildEntry(
      path.join(dir, "page.marko"),
      path.join(dir, "dist"),
      {
        cache,
        jit: {
          hostDomUrl: options.hostDomUrl,
          linkServer: (file) => tagName(file, tagSpecifier),
          splitClient: (file) => tagName(file, (name) => `tag-${name}`),
        },
      },
    );

    mkdirSync(options.cdnDir, { recursive: true });
    const sizes = new Map<string, number>();
    for (const [fileName, chunk] of result.chunks) {
      copyFileSync(
        path.join(dir, "dist", "dom", fileName),
        path.join(options.cdnDir, fileName),
      );
      sizes.set(fileName, zlib.brotliCompressSync(chunk.code).byteLength);
    }

    const assets: Record<string, AssetEntry> = {};
    for (const [id, fileName] of Object.entries(result.manifest)) {
      const files = new Set<string>();
      const visit = (file: string) => {
        const chunk = result.chunks.get(file);
        if (!chunk || files.has(file)) return;
        files.add(file);
        chunk.imports.forEach(visit);
      };
      visit(fileName);
      assets[id] = {
        url: options.cdnUrl + fileName,
        files: Object.fromEntries(
          [...files].map((file) => [options.cdnUrl + file, sizes.get(file)!]),
        ),
      };
    }

    return {
      key,
      server: readFileSync(result.serverFile, "utf8"),
      assets,
      buildMs: result.ms,
    };
  };
}
