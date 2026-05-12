import * as compiler from "@marko/compiler";
import type { Template } from "@marko/runtime-tags/common/types";
import path from "path";
import { format } from "prettier";
import { build, type OutputChunk, type Plugin } from "rolldown";
import { minifySync } from "rolldown/utils";
import glob from "tiny-glob";
import zlib from "zlib";

import { importWithContext } from "./import-with-context";

type RunDOM = typeof import("@marko/runtime-tags/dom").run;

interface Sizes {
  min: number;
  brotli: number;
}

const entryId = "entry";
const markoExt = ".marko";
const markoRe = /\.marko$/;
const entryExt = ".entry.mjs";
const entryRe = /\.marko(\.lazy)?\.entry\.mjs$/;
const lazyEntryExt = ".lazy.entry.mjs";
const assetRuntimeId = "\0asset-runtime";
const assetRuntimeIdRe = /\0asset-runtime$/;
const virtualFilePrefix = "v:";
const virtualRe = /(?:^|\/)v:/;

export async function bundle(template: string, config: compiler.Config) {
  const cwd = path.dirname(template);
  const virtual = createVirtual(cwd);
  const compileOpts: compiler.Config = {
    ...config,
    cache: new Map(),
    resolveVirtualDependency: virtual.resolveVirtualDependency,
    optimize: true,
    optimizeKnownTemplates: await glob(`**/*${markoExt}`, {
      cwd,
      absolute: true,
    }),
  };
  const { output } = await build({
    cwd,
    write: false,
    input: { [entryId]: path.relative(cwd, template) + entryExt },
    external: (id) => !(markoRe.test(id) || virtualRe.test(id)),
    treeshake: { moduleSideEffects: "no-external" },
    plugins: [
      virtual.plugin,
      markoPlugin({ ...compileOpts, output: "dom" }),
      {
        name: "lazy-chunks",
        resolveId: {
          filter: { id: markoRe },
          async handler(id, importer, opts) {
            if (opts.kind === "dynamic-import") {
              const resolved = await this.resolve(id, importer, opts);
              if (resolved) {
                this.emitFile({
                  type: "chunk",
                  id: path.relative(cwd, resolved.id) + lazyEntryExt,
                });
              }
            }
          },
        },
      },
      {
        name: "entry",
        resolveId: {
          filter: { id: entryRe },
          handler: (id) => path.resolve(cwd, id),
        },
        load: {
          filter: { id: entryRe },
          handler(id) {
            const file = id.replace(entryRe, markoExt);
            const hydrateInit = !entryRe.exec(id)![1];
            const { code } = compiler.compileFileSync(file, {
              ...compileOpts,
              hydrateInit,
              output: "hydrate",
              sourceMaps: false,
            });

            return code;
          },
        },
      },
    ],
    output: { minify: { compress: true, mangle: false, codegen: true } },
  });
  const chunks = output.filter(
    (chunk) => "code" in chunk && chunk.code,
  ) as OutputChunk[];
  if (!chunks.length) return `// size: 0\n`;

  return (
    await Promise.all(
      chunks.map(async (chunk) => {
        const { code } = chunk;
        const [formatted, size] = await Promise.all([
          format(stripModuleCode(code), { parser: "babel" }),
          getSizesForSrc(code),
        ]);
        let prefix = `// size: ${size.min} (min) ${size.brotli} (brotli)\n`;
        if (!chunk.isEntry) {
          prefix += `// chunk: ${chunk.name}\n`;
        }

        return prefix + formatted;
      }),
    )
  ).join("\n");
}

export async function createCSRRunner(
  template: string,
  config: compiler.Config,
  interop?: boolean,
) {
  const cwd = path.dirname(template);
  const out = path.join(cwd, "dist/csr");
  const virtual = createVirtual(cwd);
  const compileOpts: compiler.Config = {
    ...config,
    cache: new Map(),
    resolveVirtualDependency: virtual.resolveVirtualDependency,
  };
  await build({
    cwd,
    input: {
      [entryId]: virtual.toVirtualFile(
        template + entryExt,
        `export { default } from "./${path.basename(template)}";\n${
          interop
            ? `import { run as _run } from "@marko/runtime-tags/dom";
import { ___componentLookup } from "marko/src/node_modules/@internal/components-util";
export function run() { _run(); Object.values(___componentLookup).forEach((c) => c.update()); };
`
            : `export { run } from "@marko/runtime-tags/dom";`
        }`,
      ),
    },
    platform: "browser",
    transform: { define: { MARKO_DEBUG: "true" } },
    plugins: [virtual.plugin, markoPlugin({ ...compileOpts, output: "dom" })],
    output: {
      dir: out,
      cleanDir: true,
      sourcemap: true,
      sourcemapExcludeSources: true,
      entryFileNames: "[name].mjs",
    },
  });
  return (
    ctx: any,
  ): Promise<{
    default: Template;
    run: RunDOM;
  }> =>
    importWithContext(path.join(out, `${entryId}.mjs`), { browser: true }, ctx);
}

export async function createLinkedRunner<T extends Record<string, string>>(
  cwd: string,
  entries: T,
  config: compiler.Config,
  interop?: boolean,
) {
  const out = path.join(cwd, "dist");
  const ssrOut = path.join(out, "resume/ssr");
  const csrOut = path.join(out, "resume/csr");
  const virtual = createVirtual(cwd);
  const csrEntries = createEntries();
  const entryNames = Object.keys(entries);
  const compileOpts: compiler.Config = {
    ...config,
    cache: new Map(),
    resolveVirtualDependency: virtual.resolveVirtualDependency,
    linkAssets: {
      runtime: assetRuntimeId,
      onAsset(kind, file, id) {
        csrEntries.add(id, file + (kind === "lazy" ? lazyEntryExt : entryExt));
      },
    },
  };

  const csrBuilt = build({
    cwd,
    platform: "browser",
    transform: { define: { MARKO_DEBUG: "true" } },
    plugins: [
      virtual.plugin,
      csrEntries.plugin,
      markoPlugin({ ...compileOpts, output: "dom" }),
      {
        name: "csr-entry",
        resolveId: {
          filter: { id: entryRe },
          handler: (id) => path.resolve(cwd, id),
        },
        load: {
          filter: { id: entryRe },
          handler(id) {
            const file = id.replace(entryRe, markoExt);
            const hydrateInit = !entryRe.exec(id)![1];
            const { code } = compiler.compileFileSync(file, {
              ...compileOpts,
              hydrateInit,
              output: "hydrate",
              sourceMaps: false,
            });

            return hydrateInit
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
      dir: csrOut,
      cleanDir: true,
      sourcemap: true,
      sourcemapExcludeSources: true,
      entryFileNames: "[name].mjs",
    },
  });
  const ssrBuilt = build({
    cwd,
    input: {
      [entryId]: virtual.toVirtualFile(
        path.join(cwd, "server.mjs"),
        entryNames
          .map(
            (name) =>
              `export { default as ${name} } from "${entries[name] + entryExt}";`,
          )
          .join("\n"),
      ),
    },
    platform: "node",
    transform: { define: { MARKO_DEBUG: "true" } },
    experimental: { nativeMagicString: true },
    plugins: [
      virtual.plugin,
      markoPlugin({ ...compileOpts, output: "html" }),
      {
        name: "ssr-entry",
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
              output: "server-entry",
              sourceMaps: false,
            });

            return code;
          },
        },
      },
      {
        name: "asset-runtime",
        buildEnd: csrEntries.end,
        resolveId: {
          filter: { id: assetRuntimeIdRe },
          handler: (id) => id,
        },
        load: {
          filter: { id: assetRuntimeIdRe },
          handler: () => `const kSeen = Symbol("Seen Assets");
const kPending = Symbol("Pending Assets");
export default {
  add(g, assets) {
    const seen = (g[kSeen] ||= new Set());
    if (!seen.has(assets)) {
      seen.add(assets);
      (g[kPending] ||= []).push(assets);
    }
  },
  print(g, slot) {
    let html = ""
    if (slot === "head") {
      for (const p of g[kPending]) {
        const a = __MARKO_MANIFEST__[p];
        if (a) html += \`<script async src="\${a.head}"></script>\`;
      }
      g[kPending] = [];
    }
    return html;
  }
}`,
        },
        async renderChunk(_code, _chunk, _options, meta) {
          const { output } = await csrBuilt;
          const manifest: {
            [entry: string]: {
              "head-prepend"?: string;
              head?: string;
              "body-prepend"?: string;
              body?: string;
            };
          } = {};

          for (const chunk of output) {
            if (
              chunk.type === "chunk" &&
              chunk.isEntry &&
              chunk.facadeModuleId
            ) {
              const name = csrEntries.get(chunk.facadeModuleId);
              if (name) manifest[name] = { head: chunk.fileName };
            }
          }
          return meta.magicString!.append(
            `;var __MARKO_MANIFEST__=${JSON.stringify(manifest)}`,
          );
        },
      },
    ],
    output: {
      dir: ssrOut,
      cleanDir: true,
      sourcemap: true,
      sourcemapExcludeSources: true,
      entryFileNames: "[name].mjs",
    },
  });

  await csrBuilt;
  await ssrBuilt;

  return {
    assets: csrOut,
    runServer: () =>
      import(path.join(ssrOut, `${entryId}.mjs`)) as Promise<
        Record<keyof T, Template>
      >,
  };
}

async function getSizesForSrc(code: string): Promise<Sizes> {
  const minified = stripModuleCode(
    minifySync("bundle.js", code, {
      compress: true,
      codegen: true,
      mangle: true,
      module: true,
    }).code,
  );
  return {
    min: Buffer.byteLength(minified),
    brotli: Buffer.byteLength(await brotli(minified)),
  };
}

function createVirtual(cwd: string): {
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
      if (/\.js$/.test(virtualPath)) {
        const id = path.relative(
          cwd,
          path.resolve(from, "..", withPrefix(virtualPath)),
        );
        modules.set(id, code);
        return id;
      }
    },
    plugin: {
      name: "virtual",
      resolveId: {
        filter: { id: virtualRe },
        handler: (id) => modules.has(id) && path.resolve(cwd, id),
      },
      load: {
        filter: { id: virtualRe },
        handler: (id) => modules.get(path.relative(cwd, id)),
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

function createEntries(): {
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

function stripModuleCode(code: string) {
  return code.replace(
    /\b(?:export\s*\{[^}]*\}|import\s*(?:\{[^}]*\}|[^"'\n{]*)\s*from\s*(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'));?/gm,
    "",
  );
}
