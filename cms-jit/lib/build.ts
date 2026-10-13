import { readFileSync } from "node:fs";
import path from "node:path";

import * as compiler from "@marko/compiler";
import { build, type OutputChunk, type Plugin } from "rolldown";

const markoRe = /\.marko$/;
const entryRe = /\.marko\.(load|page)\.mjs$/;
const assetRuntimeId = "\0asset-runtime";
const assetRuntimeIdRe = /\0asset-runtime$/;
const virtualFilePrefix = "v:";
const virtualRe = /(?:^|\/)v:/;

const runtimeRe = /^@marko\/runtime-tags\/(html|dom)$/;

/** The host app's runtime, built once: every JIT bundle links to this one instance instead of carrying its own copy. */
export interface HostRuntime {
  html: string;
  dom: string;
}

export async function buildHostRuntime(outDir: string): Promise<HostRuntime> {
  const [html, dom] = await Promise.all(
    (["html", "dom"] as const).map(async (target) => {
      const { output } = await build({
        input: { [target]: `@marko/runtime-tags/${target}` },
        platform: target === "html" ? "node" : "browser",
        preserveEntrySignatures: "strict",
        plugins: [remapDebugPlugin()],
        experimental: { nativeMagicString: true },
        transform: { define: { MARKO_DEBUG: "false" } },
        output: {
          dir: path.join(outDir, target),
          cleanDir: true,
          minify: target === "dom",
          entryFileNames: "[name]-[hash].mjs",
        },
      });
      return path.join(outDir, target, output[0].fileName);
    }),
  );
  return { html, dom };
}

export interface BuildResult {
  /** Server bundle; its default export is the page template. */
  serverFile: string;
  /** Client chunks by file name. */
  chunks: Map<string, OutputChunk>;
  /** Asset id (page template id or lazy ready id) → client entry chunk file name. */
  manifest: Record<string, string>;
  ms: number;
}

/**
 * Compiles one page entry for both targets the way a JIT bundler would: the
 * client build discovers its page and lazy entries from `linkAssets`, and the
 * server bundle carries the asset manifest the client build produced.
 */
export async function buildEntry(
  entryFile: string,
  outDir: string,
  cache: Map<unknown, unknown>,
  host?: HostRuntime,
): Promise<BuildResult> {
  const start = performance.now();
  const cwd = path.dirname(entryFile);
  const virtual = virtualPlugin(cwd);
  const domEntry = entryPlugin();
  const compileOpts: compiler.Config = {
    optimize: true,
    modules: "esm",
    babelConfig: { babelrc: false, configFile: false },
    cache,
    resolveVirtualDependency: virtual.resolveVirtualDependency,
    linkAssets: {
      runtime: assetRuntimeId,
      onAsset(kind, file, id) {
        domEntry.add(id, file + (kind === "load" ? ".load.mjs" : ".page.mjs"));
      },
    },
  };
  const shared = {
    cwd,
    treeshake: true,
    experimental: { nativeMagicString: true },
    transform: { define: { MARKO_DEBUG: "false" } },
    moduleTypes: { ".css": "text" as const },
  };

  const domBuilt = build({
    ...shared,
    platform: "browser",
    plugins: [
      host && hostRuntimePlugin(host.dom),
      virtual.plugin,
      domEntry.plugin,
      remapDebugPlugin(),
      markoPlugin({ ...compileOpts, output: "dom" }),
      entryLoader(cwd, compileOpts, "dom"),
    ],
    output: {
      dir: path.join(outDir, "dom"),
      cleanDir: true,
      minify: true,
      chunkFileNames: "[name]-[hash].mjs",
      entryFileNames: "[name]-[hash].mjs",
    },
  });

  let manifest: Record<string, string> = {};
  const htmlBuilt = build({
    ...shared,
    input: { page: entryFile + ".page.mjs" },
    platform: "node",
    plugins: [
      host && hostRuntimePlugin(host.html),
      virtual.plugin,
      remapDebugPlugin(),
      markoPlugin({ ...compileOpts, output: "html" }),
      entryLoader(cwd, compileOpts, "html"),
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
  const file = __MARKO_MANIFEST__[asset];
  if (!file || type !== "defer") return "";
  globalThis.__onAssetFlush?.(asset, file);
  return \`<script async type=module src="/assets/\${file}"></script>\`;
}`,
        },
        async renderChunk(_code, _chunk, _options, meta) {
          const { output } = await domBuilt;
          manifest = {};
          for (const chunk of output) {
            if (chunk.type !== "chunk" || !chunk.isEntry) continue;
            const id = domEntry.get(chunk.facadeModuleId!);
            if (id) manifest[id] = chunk.fileName;
          }
          return meta.magicString!.append(
            `;var __MARKO_MANIFEST__=${JSON.stringify(manifest)}`,
          );
        },
      },
    ],
    output: {
      dir: path.join(outDir, "html"),
      cleanDir: true,
      entryFileNames: "[name].mjs",
    },
  });

  const [domResult] = await Promise.all([domBuilt, htmlBuilt]);
  const chunks = new Map<string, OutputChunk>();
  for (const chunk of domResult.output) {
    if (chunk.type === "chunk") chunks.set(chunk.fileName, chunk);
  }

  return {
    serverFile: path.join(outDir, "html", "page.mjs"),
    chunks,
    manifest,
    ms: performance.now() - start,
  };
}

function hostRuntimePlugin(file: string): Plugin {
  return {
    name: "host-runtime",
    resolveId: {
      filter: { id: runtimeRe },
      handler: () => ({ id: file, external: "absolute" }),
    },
  };
}

function entryLoader(
  cwd: string,
  compileOpts: compiler.Config,
  output: "html" | "dom",
): Plugin {
  return {
    name: `${output}-entry`,
    resolveId: {
      filter: { id: entryRe },
      handler: (id) => path.resolve(cwd, id),
    },
    load: {
      filter: { id: entryRe },
      handler(id) {
        const file = id.replace(entryRe, ".marko");
        const isPage = entryRe.exec(id)![1] === "page";
        const { code } = compiler.compileFileSync(file, {
          ...compileOpts,
          output,
          entry: isPage ? "page" : "load",
          sourceMaps: false,
        });
        return output === "dom" && isPage
          ? code + `\nimport { run } from "@marko/runtime-tags/dom";\nrun();`
          : code;
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

function virtualPlugin(cwd: string) {
  const modules = new Map<string, string>();
  const withPrefix = (id: string) => {
    const baseStart = id.lastIndexOf("/") + 1;
    if (!baseStart) return virtualFilePrefix + id;
    return id.slice(0, baseStart) + virtualFilePrefix + id.slice(baseStart);
  };
  return {
    resolveVirtualDependency(
      from: string,
      { code, virtualPath }: { code: string; virtualPath: string },
    ) {
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
        handler: (id: string) => modules.has(id) && path.resolve(cwd, id),
      },
      load: {
        filter: { id: virtualRe },
        handler(id: string) {
          const code = modules.get(path.relative(cwd, id));
          if (code === undefined) return;
          if (/\.[cm]?js$/.test(id)) return code;
          return { code, moduleType: "text" as const };
        },
      },
    } satisfies Plugin,
  };
}

/** Client entries only become known while the server compiles, so the client build waits on a sentinel entry until the server build ends. */
function entryPlugin() {
  const end = Promise.withResolvers<void>();
  const seen = new Map<string, string>();
  let emit: undefined | ((id: string) => void);
  let last: undefined | string;

  return {
    end: () => end.resolve(),
    get: (id: string) => seen.get(id),
    add(name: string, id: string) {
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
    } satisfies Plugin,
  };
}
