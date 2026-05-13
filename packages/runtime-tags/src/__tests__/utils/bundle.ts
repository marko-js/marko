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

const markoExt = ".marko";
const markoRe = /\.marko$/;
const entryExt = ".entry.mjs";
const entryRe = /\.marko\.entry\.mjs$/;
const virtualFilePrefix = "v:";
const virtualRe = /(?:^|\/)v:/;

export async function bundle(template: string, config: compiler.Config) {
  const cwd = path.dirname(template);
  const virtual = virtualPlugin(cwd);
  const compileOpts: compiler.Config = {
    ...config,
    resolveVirtualDependency: virtual.resolveVirtualDependency,
    cache: new Map(),
    optimize: true,
    optimizeKnownTemplates: await glob(`**/*${markoExt}`, {
      cwd,
      absolute: true,
    }),
  };
  const { output } = await build({
    cwd,
    write: false,
    input: { main: path.relative(cwd, template) + entryExt },
    external: (id) => !(markoRe.test(id) || virtualRe.test(id)),
    treeshake: { moduleSideEffects: "no-external" },
    plugins: [
      virtual.plugin,
      markoPlugin({ ...compileOpts, output: "dom" }),
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
            const { code } = compiler.compileFileSync(file, {
              ...compileOpts,
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
  const virtual = virtualPlugin(cwd);
  const compileOpts: compiler.Config = {
    ...config,
    cache: new Map(),
    resolveVirtualDependency: virtual.resolveVirtualDependency,
  };
  await build({
    cwd,
    input: {
      main: virtual.toVirtualFile(
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
  }> => importWithContext(path.join(out, "main.mjs"), { browser: true }, ctx);
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
  const virtual = virtualPlugin(cwd);
  const csrEntry = entryPlugin();
  const entryNames = Object.keys(entries);
  const compileOpts: compiler.Config = {
    ...config,
    cache: new Map(),
    resolveVirtualDependency: virtual.resolveVirtualDependency,
  };

  const csrBuilt = build({
    cwd,
    platform: "browser",
    transform: { define: { MARKO_DEBUG: "true" } },
    plugins: [
      virtual.plugin,
      csrEntry.plugin,
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
            const { code } = compiler.compileFileSync(file, {
              ...compileOpts,
              output: "hydrate",
              sourceMaps: false,
            });
            return `${code}\nimport { run as _run } from "@marko/runtime-tags/dom"\n${
              interop
                ? `import { ___componentLookup } from "marko/src/node_modules/@internal/components-util"\nglobalThis.run=()=>{ _run(); Object.values(___componentLookup).forEach((c) => c.update())}`
                : `globalThis.run=_run`
            }`;
          },
        },
      },
    ],
    output: {
      dir: csrOut,
      cleanDir: true,
      sourcemap: true,
      sourcemapExcludeSources: true,
      chunkFileNames: "[name].mjs",
    },
  });
  const ssrBuilt = build({
    cwd,
    input: {
      main: virtual.toVirtualFile(
        path.join(cwd, "main.mjs"),
        entryNames
          .map((name) => {
            const id = entries[name] + entryExt;
            csrEntry.add(name, id);
            return `export { default as ${name} } from "${id}";`;
          })
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
        buildEnd: csrEntry.end,
        resolveId: {
          filter: { id: entryRe },
          handler: (id) => path.resolve(cwd, id),
        },
        load: {
          filter: { id: entryRe },
          handler(id) {
            const file = id.replace(entryRe, markoExt);
            // TODO: facade that adds assets.
            return `export { default } from ${JSON.stringify(file)}`;
          },
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
      import(path.join(ssrOut, "main.mjs")) as Promise<
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

function stripModuleCode(code: string) {
  return code.replace(
    /\b(?:export\s*\{[^}]*\}|import\s*(?:\{[^}]*\}|[^"'\n{]*)\s*from\s*(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'));?/gm,
    "",
  );
}
