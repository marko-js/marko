import fs from "fs/promises";
import path from "path";
import zlib from "zlib";
import * as compiler from "@marko/compiler";
import pluginTerser from "@rollup/plugin-terser";
import { format } from "prettier";
import { type OutputChunk, rollup } from "rollup";
import glob from "tiny-glob";

interface Sizes {
  min: number;
  brotli: number;
}

export async function bundle(
  entryTemplate: string,
  compilerConfig: compiler.Config,
) {
  const optimizeKnownTemplates: string[] = await glob(
    path.join(path.dirname(entryTemplate), "**/*.marko"),
    { absolute: true },
  );
  const hydratePrefix = "\0hydrate:";
  const entryCode = await fs.readFile(entryTemplate, "utf-8");
  const bundle = await rollup({
    input: hydratePrefix + entryTemplate,
    onwarn(warning, warn) {
      switch (warning.code) {
        case "EMPTY_BUNDLE":
        case "UNUSED_EXTERNAL_IMPORT":
          break;
        default:
          warn(warning);
          break;
      }
    },
    plugins: [
      {
        name: "marko",
        resolveId(id, importer) {
          if (!id.endsWith(".marko")) {
            return {
              id,
              external: true,
              moduleSideEffects: false,
            };
          }

          if (id.startsWith(hydratePrefix)) {
            return id;
          }

          if (importer?.startsWith(hydratePrefix)) {
            return this.resolve(id, importer.slice(hydratePrefix.length), {
              skipSelf: true,
            });
          }
        },
        load(id) {
          if (id.startsWith(hydratePrefix)) {
            id = id.slice(hydratePrefix.length);
          }

          if (id === entryTemplate) {
            return entryCode;
          }

          return null;
        },
        async transform(code, id) {
          if (id.endsWith(".marko")) {
            const isHydrate = id.startsWith(hydratePrefix);
            if (isHydrate) {
              id = id.slice(hydratePrefix.length);
            }

            return (
              await compiler.compile(code, id, {
                ...compilerConfig,
                optimize: true,
                optimizeKnownTemplates,
                output: isHydrate ? "hydrate" : "dom",
              })
            ).code;
          }
          return null;
        },
      },
      pluginTerser({ compress: {}, mangle: { module: true } }),
    ],
  });

  const { output } = await bundle.generate({
    format: "es",
    compact: true,
  });
  const chunks = output.filter((chunk) => "code" in chunk) as OutputChunk[];
  const size = addSizes(
    await Promise.all(chunks.map((chunk) => getSizesForSrc(chunk.code))),
  );

  if (size.min === 0) {
    return `// size: 0\n`;
  }

  let result = `// size: ${size.min} (min) ${size.brotli} (brotli)`;
  for (const chunk of chunks) {
    if (chunk.type === "chunk" && chunk.code) {
      if (chunks.length > 1) {
        result += `\n\n// chunk: ${chunk.name}`;
      }

      result += `\n\n${await format(chunk.code, { parser: "babel" })}`;
    }
  }

  return result;
}

async function getSizesForSrc(minified: string): Promise<Sizes> {
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
