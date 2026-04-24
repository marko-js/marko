import * as compiler from "@marko/compiler";
import type { Template } from "@marko/runtime-tags/common/types";
import { createRequire } from "module";
import path from "path";
import { format } from "prettier";
import { build, type OutputChunk, type Plugin } from "rolldown";
import { minifySync } from "rolldown/utils";
import glob from "tiny-glob";
import vm from "vm";
import zlib from "zlib";

export type RunnerMode = "ssr" | "csr" | "resume";
type RunDOM = typeof import("@marko/runtime-tags/dom").run;
const runOpts = { filename: path.join(process.cwd(), "entry.js") };
const nodeRequire = createRequire(runOpts.filename);

interface Sizes {
  min: number;
  brotli: number;
}

const markoExt = ".marko";
const markoRe = new RegExp(`\\${markoExt}$`);
const entryId = "entry";
const entryIdRe = new RegExp(`^${entryId}$`);
const virtualPrefix = "\0virtual:";
const virtualRe = new RegExp(`^${virtualPrefix}`);
const runtimeExports = {
  tags: `export { run } from "@marko/runtime-tags/dom";`,
  interop: `import { run as _run } from "@marko/runtime-tags/dom";
import { ___componentLookup } from "marko/src/node_modules/@internal/components-util";
export function run() { _run(); Object.values(___componentLookup).forEach((c) => c.update()); };
`,
};

export async function bundle(
  entryTemplate: string,
  compilerConfig: compiler.Config,
) {
  const cache = new Map<unknown, unknown>();
  const { resolveVirtualDependency, virtualPlugin } = createVirtual();
  const resolvedConfig: compiler.Config = {
    ...compilerConfig,
    cache,
    resolveVirtualDependency,
  };
  const optimizeKnownTemplates: string[] = await glob(
    path.join(path.dirname(entryTemplate), `**/*${markoExt}`),
    { absolute: true },
  );
  const { output } = await build({
    write: false,
    input: entryId,
    external: (id) => !(markoRe.test(id) || virtualRe.test(id)),
    treeshake: {
      moduleSideEffects: "no-external",
    },
    plugins: [
      virtualPlugin,
      {
        name: "entry",
        resolveId(id, importer) {
          if (id === entryId) {
            return id;
          }

          if (importer === entryId) {
            return this.resolve(id, entryTemplate);
          }
        },
        load: {
          filter: { id: { include: entryIdRe } },
          async handler() {
            const { code } = await compiler.compileFile(entryTemplate, {
              ...resolvedConfig,
              optimize: true,
              optimizeKnownTemplates,
              output: "hydrate",
            });
            return code;
          },
        },
      },
      {
        name: "marko",
        load: {
          filter: { id: { include: markoRe } },
          async handler(id) {
            const { code, map } = await compiler.compileFile(id, {
              ...resolvedConfig,
              optimize: true,
              optimizeKnownTemplates,
              output: "dom",
            });

            return { code, map };
          },
        },
      },
    ],
    output: {
      minify: { compress: true, mangle: false, codegen: true },
    },
  });
  const chunks = output.filter((chunk) => "code" in chunk) as OutputChunk[];
  const size = addSizes(
    await Promise.all(chunks.map((chunk) => getSizesForSrc(chunk.code))),
  );

  if (size.min === 0) {
    return `// size: 0\n`;
  }

  let result = "";
  for (const chunk of chunks) {
    if (chunk.type === "chunk" && chunk.code) {
      if (chunks.length > 1) {
        result += `\n\n// chunk: ${chunk.name}`;
      }

      result += `\n\n${await format(chunk.code, { parser: "babel" })}`;
    }
  }

  return `// size: ${size.min} (min) ${size.brotli} (brotli)\n${stripModuleCode(result)}`;
}

let vmFileId = 0;
export async function createRunner<T extends RunnerMode>(
  entryTemplate: string,
  compilerConfig: compiler.Config,
  mode: T,
  interop?: boolean,
) {
  const code = await bundleRunner(entryTemplate, compilerConfig, mode, interop);
  const opts = {
    filename: path.resolve(`__${(++vmFileId).toString(36)}__.js`),
  };
  switch (mode) {
    case "ssr":
      return (() => {
        (globalThis as any).require = nodeRequire;
        vm.runInThisContext(code, opts);
        (globalThis as any).require = undefined;
        const __exports__ = (globalThis as any).__exports__;
        (globalThis as any).__exports__ = undefined;
        return __exports__;
      }) as T extends "ssr" ? () => { template: Template } : never;
    case "csr":
    case "resume":
      return ((ctx) => {
        vm.runInContext(code, ctx, opts);
        return (ctx as any).__exports__;
      }) as T extends "csr"
        ? (ctx: vm.Context) => { template: Template; run: RunDOM }
        : T extends "resume"
          ? (ctx: vm.Context) => { run: RunDOM }
          : never;
  }
}

async function bundleRunner(
  entryTemplate: string,
  compilerConfig: compiler.Config,
  mode: RunnerMode,
  interop?: boolean,
): Promise<string> {
  const { resolveVirtualDependency, virtualPlugin } = createVirtual();
  const resolvedConfig: compiler.Config = {
    ...compilerConfig,
    resolveVirtualDependency,
  };

  const { output } = await build({
    write: false,
    input: entryId,
    platform: mode === "ssr" ? "node" : "browser",
    transform: { define: { MARKO_DEBUG: "true" } },
    plugins: [
      virtualPlugin,
      {
        name: "entry",
        resolveId(id, importer) {
          if (id === entryId) return id;
          if (importer === entryId) return this.resolve(id, entryTemplate);
        },
        load: {
          filter: { id: { include: entryIdRe } },
          async handler() {
            switch (mode) {
              case "ssr":
                return `export { default as template } from ${JSON.stringify(entryTemplate)};`;
              case "csr": {
                return `export { default as template } from ${JSON.stringify(entryTemplate)};\n${interop ? runtimeExports.interop : runtimeExports.tags}`;
              }
              case "resume": {
                return `${
                  (
                    await compiler.compileFile(entryTemplate, {
                      ...resolvedConfig,
                      output: "hydrate",
                      sourceMaps: false,
                    })
                  ).code
                }\n${interop ? runtimeExports.interop : runtimeExports.tags}`;
              }
            }
          },
        },
      },
      {
        name: "marko",
        load: {
          filter: { id: { include: markoRe } },
          async handler(id) {
            const { code, map } = await compiler.compileFile(
              id,
              resolvedConfig,
            );
            return { code, map };
          },
        },
      },
    ],
    output: {
      format: "iife",
      name: "__exports__",
      sourcemap: "inline",
      sourcemapExcludeSources: true,
      sourcemapPathTransform(source, sourcemapPath) {
        return path.resolve(sourcemapPath, "..", source);
      },
    },
  });

  const chunks = output.filter((chunk) => "code" in chunk) as OutputChunk[];
  return chunks.map((chunk) => chunk.code).join("\n");
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

function addSizes(all: Sizes[]) {
  const total = { min: 0, brotli: 0 };
  for (const { min, brotli } of all) {
    total.min += min;
    total.brotli += brotli;
  }
  return total;
}

function createVirtual(): {
  resolveVirtualDependency: NonNullable<
    compiler.Config["resolveVirtualDependency"]
  >;
  virtualPlugin: Plugin;
} {
  const modules = new Map<string, string>();

  return {
    resolveVirtualDependency(filename, { code, virtualPath }) {
      if (/\.js$/.test(virtualPath)) {
        const id = virtualPrefix + path.join(filename, "..", virtualPath);
        modules.set(id, code);
        return id;
      }
    },
    virtualPlugin: {
      name: "virtual",
      resolveId(id, importer) {
        if (modules.has(id)) return id;

        if (importer && virtualRe.test(importer) && id[0] === ".") {
          return this.resolve(id, importer.replace(virtualPrefix, ""));
        }
      },
      load: {
        filter: { id: { include: virtualRe } },
        handler(id) {
          return modules.get(id);
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
    /\s*(?:export\s*\{[^}]*\}|import\s*(?:\{[^}]*\}|[^"'\n{]*)\s*from\s*(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'));?\s*/gm,
    "",
  );
}
