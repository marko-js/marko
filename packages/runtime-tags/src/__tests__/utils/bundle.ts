import * as compiler from "@marko/compiler";
import path from "path";
import { format } from "prettier";
import { build, type OutputChunk } from "rolldown";
import { minifySync } from "rolldown/utils";
import glob from "tiny-glob";
import zlib from "zlib";

interface Sizes {
  min: number;
  brotli: number;
}

const markoExt = ".marko";
const markoRe = new RegExp(`\\${markoExt}$`);
const virtualEntry = "entry";
const virtualEntryRe = new RegExp(`^${virtualEntry}$`);

export async function bundle(
  entryTemplate: string,
  compilerConfig: compiler.Config,
) {
  const cache = new Map<unknown, unknown>();
  const optimizeKnownTemplates: string[] = await glob(
    path.join(path.dirname(entryTemplate), `**/*${markoExt}`),
    { absolute: true },
  );
  const { output } = await build({
    input: virtualEntry,
    external: (id) => !markoRe.test(id),
    treeshake: {
      moduleSideEffects: "no-external",
    },
    plugins: [
      {
        name: "entry",
        resolveId(id, importer) {
          if (id === virtualEntry) {
            return id;
          }

          if (importer === virtualEntry) {
            return this.resolve(id, entryTemplate);
          }
        },
        load: {
          filter: { id: { include: virtualEntryRe } },
          async handler() {
            const { code } = await compiler.compileFile(entryTemplate, {
              ...compilerConfig,
              cache,
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
              ...compilerConfig,
              cache,
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

function brotli(src: string): Promise<Buffer> {
  return new Promise((resolve, reject) =>
    zlib.brotliCompress(src, (error, result) =>
      error ? reject(error) : resolve(result),
    ),
  );
}

function stripModuleCode(code: string) {
  return code.replace(
    /\s*(?:export\s*\{[^}]+\}|import\s*.*\s*from\s*['"][^'"]+['"]);?\s*/gm,
    "",
  );
}
