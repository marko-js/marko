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
const markoRe = new RegExp(`\\${markoExt}$`);
const entryId = "entry";
const entryIdRe = new RegExp(`^${entryId}$`);
const templateEntryPrefix = "\0entry:";
const templateEntryRe = new RegExp(`^${templateEntryPrefix}`);
const virtualPrefix = "\0virtual:";
const virtualRe = new RegExp(`^${virtualPrefix}`);

export async function bundle(template: string, config: compiler.Config) {
  const cache = new Map<unknown, unknown>();
  const virtual = createVirtual();
  const compileOpts: compiler.Config = {
    ...config,
    cache,
    resolveVirtualDependency: virtual.resolveVirtualDependency,
  };
  const optimizeKnownTemplates: string[] = await glob(
    path.join(path.dirname(template), `**/*${markoExt}`),
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
      virtual.plugin,
      markoPlugin({
        ...compileOpts,
        optimize: true,
        optimizeKnownTemplates,
        output: "dom",
      }),
      entryPlugin(
        compiler.compileFileSync(template, {
          ...compileOpts,
          optimize: true,
          sourceMaps: false,
          optimizeKnownTemplates,
          output: "hydrate",
        }).code,
        template,
      ),
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

export async function createCSRRunner(
  template: string,
  config: compiler.Config,
  interop?: boolean,
) {
  const out = path.join(template, "../dist/csr");
  const virtual = createVirtual();
  await build({
    input: entryId,
    platform: "browser",
    transform: { define: { MARKO_DEBUG: "true" } },
    plugins: [
      virtual.plugin,
      markoPlugin({
        ...config,
        output: "dom",
        resolveVirtualDependency: virtual.resolveVirtualDependency,
      }),
      entryPlugin(
        `export { default } from ${JSON.stringify(template)};\n${
          interop
            ? `import { run as _run } from "@marko/runtime-tags/dom";
import { ___componentLookup } from "marko/src/node_modules/@internal/components-util";
export function run() { _run(); Object.values(___componentLookup).forEach((c) => c.update()); };
`
            : `export { run } from "@marko/runtime-tags/dom";`
        }`,
        template,
      ),
    ],
    output: {
      dir: out,
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
  const virtual = createVirtual();
  const entryTemplates = Object.keys(entries).reduce(
    (input, name) => {
      input[name as keyof T] = templateEntryPrefix + name;
      return input;
    },
    {} as Record<keyof T, string>,
  );
  const compileOpts: compiler.Config = {
    ...config,
    cache: new Map(),
    resolveVirtualDependency: virtual.resolveVirtualDependency,
  };

  const csrBuilt = build({
    cwd,
    input: entryTemplates,
    platform: "browser",
    transform: { define: { MARKO_DEBUG: "true" } },
    plugins: [
      virtual.plugin,
      markoPlugin({ ...compileOpts, output: "dom" }),
      {
        name: "csr-template-entry",
        resolveId(id, importer) {
          if (templateEntryRe.test(id)) return id;
          if (importer && templateEntryRe.test(importer)) {
            return this.resolve(
              id,
              path.join(
                cwd,
                entries[importer.slice(templateEntryPrefix.length)],
              ),
            );
          }
        },
        load: {
          filter: { id: { include: templateEntryRe } },
          handler(id) {
            const name = id.slice(templateEntryPrefix.length);
            const file = path.join(cwd, entries[name]);
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
      sourcemap: true,
      sourcemapExcludeSources: true,
      entryFileNames: "[name].mjs",
    },
  });
  const ssrBuilt = build({
    cwd,
    input: entryId,
    platform: "node",
    transform: { define: { MARKO_DEBUG: "true" } },
    experimental: { nativeMagicString: true },
    plugins: [
      virtual.plugin,
      markoPlugin({ ...compileOpts, output: "html" }),
      entryPlugin(
        Object.entries(entryTemplates)
          .map(
            ([name, file]) =>
              `export { default as ${name} } from ${JSON.stringify(file)};`,
          )
          .join("\n"),
      ),
      {
        name: "ssr-template-entry",
        resolveId(id, importer) {
          if (templateEntryRe.test(id)) return id;
          if (importer && templateEntryRe.test(importer)) {
            return this.resolve(
              id,
              path.join(
                cwd,
                entries[importer.slice(templateEntryPrefix.length)],
              ),
            );
          }
        },
        load: {
          filter: { id: { include: templateEntryRe } },
          handler(id) {
            const name = id.slice(templateEntryPrefix.length);
            const file = entries[name];
            // TODO: facade that adds assets.
            return `export { default } from ${JSON.stringify(file)}`;
          },
        },
      },
    ],
    output: {
      dir: ssrOut,
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
  plugin: Plugin;
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
    plugin: {
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

function entryPlugin(code: string, from?: string): Plugin {
  return {
    name: "entry",
    resolveId(id, importer) {
      if (id === entryId) {
        return id;
      }

      if (importer === entryId) {
        if (id[0] === "/" || id[0] === "\0") {
          return id;
        }

        return this.resolve(id, from);
      }
    },
    load: {
      filter: { id: { include: entryIdRe } },
      handler: () => code,
    },
  };
}

function markoPlugin(config: compiler.Config): Plugin {
  return {
    name: "marko",
    load: {
      filter: { id: { include: markoRe } },
      handler(id) {
        const { code, map } = compiler.compileFileSync(id, config);
        return { code, map };
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
