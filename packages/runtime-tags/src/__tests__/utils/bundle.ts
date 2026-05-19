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
const entryExt = ".entry.mjs";
const entryRe = /\.marko\.entry\.mjs$/;
const virtualFilePrefix = "v:";
const virtualRe = /(?:^|\/)v:/;

export async function createClientRunner(
  template: string,
  config: compiler.Config,
  interop?: boolean,
) {
  const optimize = !!config.optimize;
  const cwd = path.dirname(template);
  const out = path.join(cwd, "dist", "csr", optimize ? "optimize" : "debug");
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
        `export { default as template } from "./${path.basename(template)}";\n${
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
    treeshake: optimize,
    experimental: { nativeMagicString: true },
    transform: { define: { MARKO_DEBUG: String(!optimize) } },
    moduleTypes: { ".css": "text" },
    plugins: [
      virtual.plugin,
      optimize && remapDebugPlugin(),
      optimize && interop && remapDistPlugin(),
      markoPlugin({ ...compileOpts, output: "dom" }),
    ],
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
    template: Template;
    run: RunDOM;
  }> => importWithContext(path.join(out, "main.mjs"), { browser: true }, ctx);
}

export async function createServerRunner<T extends Record<string, string>>(
  cwd: string,
  entries: T,
  config: compiler.Config,
  interop?: boolean,
): Promise<{
  assets: string;
  runServer(): Promise<Record<keyof T, Template>>;
  domBundle(): Promise<string>;
  htmlBundle(): Promise<string>;
}> {
  const optimize = !!config.optimize;
  const out = path.join(cwd, "dist", "ssr", optimize ? "optimize" : "debug");
  const htmlOut = path.join(out, "html");
  const domOut = path.join(out, "dom");
  const virtual = virtualPlugin(cwd);
  const domEntry = entryPlugin();
  const entryNames = Object.keys(entries);
  const compileOpts: compiler.Config = {
    ...config,
    cache: new Map(),
    resolveVirtualDependency: virtual.resolveVirtualDependency,
  };

  const domBuilt = build({
    cwd,
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
          .map((name) => {
            const id = entries[name] + entryExt;
            domEntry.add(name, id);
            return `export { default as ${name} } from "${id}";`;
          })
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
        buildEnd: domEntry.end,
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
      dir: htmlOut,
      cleanDir: true,
      sourcemap: true,
      sourcemapExcludeSources: true,
      entryFileNames: "[name].mjs",
    },
  });

  const domResult = await domBuilt;
  const htmlResult = await htmlBuilt;

  return {
    assets: domOut,
    runServer: () =>
      import(path.join(htmlOut, "main.mjs")) as Promise<
        Record<keyof T, Template>
      >,
    domBundle: () => buildSnapshot(domResult, cwd, optimize),
    htmlBundle: () => buildSnapshot(htmlResult, cwd),
  };
}

async function buildSnapshot(
  result: RolldownOutput,
  cwd: string,
  includeSizes?: boolean,
): Promise<string> {
  const parts: string[] = [];
  for (const chunk of result.output) {
    if (!("code" in chunk) || !chunk.code) continue;
    const { modules } = chunk;
    let fixtureCode = "";
    for (const id in modules) {
      if (!id.startsWith(cwd) || entryRe.test(id)) continue;
      const modCode = stripModuleCode(modules[id].code);
      if (!modCode) continue;
      if (fixtureCode) fixtureCode += "\n\n";
      fixtureCode += `// ${path.relative(cwd, id)}${includeSizes ? `: ${await getMinifiedSizes(modCode)}` : ""}\n${modCode}`;
    }
    if (!fixtureCode) continue;
    parts.push(
      includeSizes
        ? `// total: ${await getMinifiedSizes(chunk.code)}\n${fixtureCode}`
        : fixtureCode,
    );
  }
  if (!parts.length) return "";
  return `${parts.join("\n\n")}\n`;
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

export async function getSizes(str: string) {
  return `${Buffer.byteLength(str)} (min) ${Buffer.byteLength(await brotli(str))} (brotli)`;
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
