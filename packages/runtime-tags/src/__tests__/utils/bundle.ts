import * as compiler from "@marko/compiler";
import type { Template } from "@marko/runtime-tags/common/types";
import { readFileSync } from "fs";
import path from "path";
import { build, type Plugin, type RolldownOutput } from "rolldown";
import { minifySync } from "rolldown/utils";
import zlib from "zlib";

import { importWithContext } from "./import-with-context";

type RunDOM = typeof import("@marko/runtime-tags/dom").run;

const markoExt = ".marko";
const markoRe = /\.marko$/;
const pageExt = ".page.mjs";
const loadExt = ".load.mjs";
const csrExt = ".csr.mjs";
const entryRe = /\.marko\.(load|page|csr)?\.mjs$/;
const assetRuntimeId = "\0asset-runtime";
const assetRuntimeIdRe = /\0asset-runtime$/;
const virtualFilePrefix = "v:";
const virtualRe = /(?:^|\/)v:/;

export async function createServerRunner<T extends Record<string, string>>(
  cwd: string,
  entries: T,
  config: compiler.Config,
  interop?: boolean,
): Promise<{
  assets: string;
  runServer(): Promise<Record<keyof T, Template>>;
  clientRunner?: (ctx: any) => Promise<{ template: Template; run: RunDOM }>;
  domBundle(): Promise<SnapshotResult>;
  htmlBundle(): Promise<SnapshotResult>;
}> {
  const optimize = !!config.optimize;
  const out = path.join(cwd, "dist", optimize ? "optimize" : "debug");
  const htmlOut = path.join(out, "html");
  const domOut = path.join(out, "dom");
  const virtual = virtualPlugin(cwd);
  const domEntry = entryPlugin();
  const entryNames = Object.keys(entries);
  const csrEntryId = optimize
    ? undefined
    : path.join(cwd, path.basename(entries[entryNames[0]])) + csrExt;
  const compileOpts: compiler.Config = {
    ...config,
    cache: new Map(),
    resolveVirtualDependency: virtual.resolveVirtualDependency,
    linkAssets: {
      runtime: assetRuntimeId,
      onAsset(kind, file, id) {
        domEntry.add(id, file + (kind === "load" ? loadExt : pageExt));
      },
    },
  };

  const domBuilt = build({
    cwd,
    ...(csrEntryId ? { input: { csr: csrEntryId } } : {}),
    platform: "browser",
    treeshake: optimize,
    experimental: { nativeMagicString: true },
    transform: { define: { MARKO_DEBUG: String(!optimize) } },
    moduleTypes: { ".css": "text" },
    plugins: [
      virtual.plugin,
      domEntry.plugin,
      optimize && remapDebugPlugin(),
      optimize && interop && remapDistPlugin(),
      markoPlugin({ ...compileOpts, output: "dom" }),
      {
        name: "dom-entry",
        resolveId: {
          filter: { id: entryRe },
          handler: (id) => path.resolve(cwd, id),
        },
        load: {
          filter: { id: entryRe },
          handler(id) {
            const file = id.replace(entryRe, markoExt);
            const kind = entryRe.exec(id)![1];
            if (kind === "csr") {
              return `export { default as template } from "./${path.basename(file)}";\n${
                interop
                  ? `import { run as _run } from "@marko/runtime-tags/dom";
import { ___componentLookup } from "marko/src/node_modules/@internal/components-util";
export function run() { _run(); Object.values(___componentLookup).forEach((c) => c.update()); };`
                  : `export { run } from "@marko/runtime-tags/dom";`
              }`;
            }

            const isPage = kind === "page";
            const { code } = compiler.compileFileSync(file, {
              ...compileOpts,
              output: "dom",
              entry: isPage ? "page" : "load",
              sourceMaps: false,
            });

            return isPage
              ? code +
                  `\nimport { run as _run } from "@marko/runtime-tags/dom"\n${
                    interop
                      ? `import { ___componentLookup } from "marko/src/node_modules/@internal/components-util"\nglobalThis.run=()=>{ _run(); Object.values(___componentLookup).forEach((c) => c.update())}`
                      : `globalThis.run=_run`
                  }`
              : code;
          },
        },
      },
    ],
    output: {
      dir: domOut,
      cleanDir: true,
      sourcemap: true,
      sourcemapExcludeSources: true,
      chunkFileNames: "[name].mjs",
    },
  });
  const htmlBuilt = build({
    cwd,
    input: {
      main: virtual.toVirtualFile(
        path.join(cwd, "main.mjs"),
        entryNames
          .map(
            (name) =>
              `export { default as ${name} } from "${entries[name] + pageExt}";`,
          )
          .join("\n"),
      ),
    },
    platform: "node",
    treeshake: optimize,
    transform: { define: { MARKO_DEBUG: String(!optimize) } },
    moduleTypes: { ".css": "text" },
    experimental: { nativeMagicString: true },
    plugins: [
      virtual.plugin,
      optimize && remapDebugPlugin(),
      optimize && interop && remapDistPlugin(),
      markoPlugin({ ...compileOpts, output: "html" }),
      {
        name: "html-entry",
        resolveId: {
          filter: { id: entryRe },
          handler: (id) => path.resolve(cwd, id),
        },
        load: {
          filter: { id: entryRe },
          handler(id) {
            const file = id.replace(entryRe, markoExt);
            const { code } = compiler.compileFileSync(file, {
              ...compileOpts,
              output: "html",
              entry: "page",
              sourceMaps: false,
            });

            return code;
          },
        },
      },
      {
        name: "asset-runtime",
        buildEnd: domEntry.end,
        resolveId: {
          filter: { id: assetRuntimeIdRe },
          handler: (id) => id,
        },
        load: {
          filter: { id: assetRuntimeIdRe },
          handler: () => `export function flush(g, type, asset) {
  const a = __MARKO_MANIFEST__[asset]?.[type] ?? "";
  return a;
}`,
        },
        async renderChunk(_code, _chunk, _options, meta) {
          const { output } = await domBuilt;
          const manifest: {
            [entry: string]: {
              block?: string;
              defer?: string;
            };
          } = {};

          for (const chunk of output) {
            if (
              chunk.type === "chunk" &&
              chunk.isEntry &&
              chunk.facadeModuleId
            ) {
              const id = domEntry.get(chunk.facadeModuleId);
              if (
                id &&
                Object.values(chunk.modules).some((m) => m.renderedLength > 0)
              )
                manifest[id] = {
                  defer: `<script async type=module src="${chunk.fileName}"></script>`,
                };
            }
          }
          return meta.magicString!.append(
            `;var __MARKO_MANIFEST__=${JSON.stringify(manifest)}`,
          );
        },
      },
    ],
    output: {
      dir: htmlOut,
      cleanDir: true,
      sourcemap: true,
      sourcemapExcludeSources: true,
      entryFileNames: "[name].mjs",
    },
  });

  const domResult = await domBuilt;
  const htmlResult = await htmlBuilt;

  const csrFileName =
    csrEntryId &&
    domResult.output.find((c) => c.type === "chunk" && c.name === "csr")
      ?.fileName;
  const clientRunner = csrFileName
    ? (ctx: any): Promise<{ template: Template; run: RunDOM }> =>
        importWithContext(
          path.join(domOut, csrFileName),
          { browser: true },
          ctx,
        )
    : undefined;

  return {
    assets: domOut,
    runServer: () =>
      import(path.join(htmlOut, "main.mjs")) as Promise<
        Record<keyof T, Template>
      >,
    clientRunner,
    domBundle: () => buildSnapshot(domResult, cwd, optimize),
    htmlBundle: () => buildSnapshot(htmlResult, cwd),
  };
}

interface SnapshotResult {
  snapshot: string;
  sizes: Record<string, ChunkSizes | Sizes> | undefined;
}
export interface ChunkSizes {
  total: Sizes;
  files: Record<string, number>;
}
async function buildSnapshot(
  result: RolldownOutput,
  cwd: string,
  includeSizes?: boolean,
): Promise<SnapshotResult> {
  const parts: string[] = [];
  const sizes: Record<string, ChunkSizes | Sizes> | undefined = includeSizes
    ? {}
    : undefined;
  for (const chunk of result.output) {
    if (!("code" in chunk) || !chunk.code) continue;
    const { modules } = chunk;
    const files: Record<string, number> = {};
    let fixtureCode = "";
    for (const id in modules) {
      if (!id.startsWith(cwd) || entryRe.test(id)) continue;
      const modCode = stripModuleCode(modules[id].code);
      if (!modCode) continue;
      const relId = path.relative(cwd, id);
      if (fixtureCode) fixtureCode += "\n\n";
      fixtureCode += `// ${relId}\n${modCode}`;
      if (sizes) files[relId] = modules[id].renderedLength;
    }
    if (!fixtureCode) continue;
    parts.push(fixtureCode);
    if (sizes) {
      const total = await getMinifiedSizes(chunk.code);
      sizes[chunk.fileName] =
        Object.keys(files).length === 1 ? total : { total, files };
    }
  }
  return { snapshot: parts.length ? `${parts.join("\n\n")}\n` : "", sizes };
}

function getMinifiedSizes(code: string) {
  const { code: minified } = minifySync("bundle.js", code, {
    compress: true,
    codegen: true,
    mangle: true,
    module: true,
  });
  return getSizes(minified);
}

export interface Sizes {
  min: number;
  brotli: number;
}
export async function getSizes(str: string): Promise<Sizes> {
  return {
    min: Buffer.byteLength(str),
    brotli: Buffer.byteLength(await brotli(str)),
  };
}

function virtualPlugin(cwd: string): {
  toVirtualFile(id: string, code: string): string;
  resolveVirtualDependency: NonNullable<
    compiler.Config["resolveVirtualDependency"]
  >;
  plugin: Plugin;
} {
  const modules = new Map<string, string>();
  const withPrefix = (id: string) => {
    const baseStart = id.lastIndexOf("/") + 1;
    if (!baseStart) return virtualFilePrefix + id;
    return id.slice(0, baseStart) + virtualFilePrefix + id.slice(baseStart);
  };
  return {
    toVirtualFile(file, code) {
      const id = withPrefix(path.relative(cwd, file));
      modules.set(id, code);
      return id;
    },
    resolveVirtualDependency(from, { code, virtualPath }) {
      const id = path.relative(
        cwd,
        path.resolve(from, "..", withPrefix(virtualPath)),
      );
      modules.set(id, code);
      return id;
    },
    plugin: {
      name: "virtual",
      resolveId: {
        filter: { id: virtualRe },
        handler: (id) => modules.has(id) && path.resolve(cwd, id),
      },
      load: {
        filter: { id: virtualRe },
        handler(id) {
          const code = modules.get(path.relative(cwd, id));
          if (code === undefined) return;
          if (/\.[cm]?js$/.test(id)) return code;
          return { code, moduleType: "text" };
        },
      },
    },
  };
}

function remapDebugPlugin(): Plugin {
  const debugRe = /\.debug\./;
  return {
    name: "production-accessor",
    load: {
      filter: { id: debugRe },
      handler: (id) => readFileSync(id.replace(debugRe, "."), "utf8"),
    },
  };
}

function remapDistPlugin(): Plugin {
  const distRe = /^marko\/dist\//;
  return {
    name: "remap-marko-dist",
    resolveId: {
      filter: { id: distRe },
      handler(id) {
        return this.resolve(id.replace(distRe, "marko/src/"));
      },
    },
    // runtime-class src files use "MARKO_DEBUG" (string literal) as an if-condition
    // that babel inlines to true/false when building dist. Since we're bypassing
    // dist and loading src directly, we substitute the value ourselves.
    transform: {
      filter: { id: /\/runtime-class\/src\// },
      handler(code, _id, meta) {
        if (!code.includes('"MARKO_DEBUG"')) return;
        return { code: meta.magicString!.replaceAll('"MARKO_DEBUG"', "false") };
      },
    },
  };
}

function markoPlugin(config: compiler.Config): Plugin {
  return {
    name: "marko",
    load: {
      filter: { id: markoRe },
      handler(id) {
        const { code, map } = compiler.compileFileSync(id, config);
        return { code, map };
      },
    },
  };
}

function entryPlugin(): {
  end(): void;
  get(id: string): string | undefined;
  add(name: string, id: string): void;
  plugin: Plugin;
} {
  const end = Promise.withResolvers<void>();
  const seen = new Map<string, string>();
  let emit: undefined | ((id: string) => void);
  let last: undefined | string;

  return {
    end: end.resolve,
    get: (id) => (id ? seen.get(id) : undefined),
    add(name, id) {
      if (seen.has(id)) return;
      seen.set(id, name);
      emit?.(id);
      last = id;
    },
    plugin: {
      name: "entries",
      buildStart() {
        emit = (id) => this.emitFile({ type: "chunk", id });
        seen.keys().forEach(emit);
        emit("\0");
      },
      resolveId: {
        filter: { id: /^\0$/ },
        async handler() {
          await end.promise;
          if (last) return this.resolve(last);
          this.error("No entries added");
        },
      },
    },
  };
}

function brotli(src: string): Promise<Buffer> {
  return new Promise((resolve, reject) =>
    zlib.brotliCompress(src, (error, result) =>
      error ? reject(error) : resolve(result),
    ),
  );
}

function stripModuleCode(code: string | null) {
  return (
    code &&
    code
      .replace(/\/\/#(?:region|endregion)[^\n]*/g, "")
      .replace(
        /\b(?:export\s*\{[^}]*\}|import\s*(?:(?:\{[^}]*\}|[^"'\n{]*)\s*from\s*)?(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'));?/gm,
        "",
      )
      .replace(/\n{2,}/g, "\n")
      .trim()
  );
}
