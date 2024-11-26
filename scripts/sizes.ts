import * as compiler from "@marko/compiler";
import pluginTerser from "@rollup/plugin-terser";
import pluginVirtual from "@rollup/plugin-virtual";
import fs from "fs";
import kleur from "kleur";
import path from "path";
import { format } from "prettier";
import { type OutputAsset, type OutputChunk, rollup } from "rollup";
import { table } from "table";
import { minify } from "terser";
import glob from "tiny-glob";
import zlib from "zlib";

const compiledOutputDir = path.join(process.cwd(), ".sizes");
const nameCacheFile = path.join(process.cwd(), ".sizes", "name-cache.json");
const nameCache = (() => {
  try {
    return JSON.parse(fs.readFileSync(nameCacheFile, "utf-8"));
  } catch {
    return {};
  }
})();

fs.rmSync(compiledOutputDir, { recursive: true });
fs.mkdirSync(compiledOutputDir);

interface Sizes {
  min: number;
  brotli: number;
}

interface Result {
  name: string;
  user?: Sizes;
  runtime?: Sizes;
  total?: Sizes;
}

interface Saved {
  examples: Record<string, string>;
  results: Result[];
}

const rootDir = path.join(__dirname, "..");
const runtimePath = path.join(rootDir, "packages/runtime-tags/dist/dom.mjs");
const translatorPath = path.join(
  rootDir,
  "packages/translator-tags/dist/index.js",
);
const configPath = path.join(rootDir, ".sizes.json");
const skipExamples = process.argv.includes("--no-examples");

run(configPath);

async function run(configPath: string) {
  const { examples, results: previous } = loadData(configPath);
  const current = await getResults(skipExamples ? {} : examples);
  const measure = (process.env.MEASURE as undefined | keyof Sizes) || "brotli";

  console.log(measure);

  console.log(renderTable(current, previous, measure));
  writeData(configPath, current);
  await fs.promises.writeFile(nameCacheFile, JSON.stringify(nameCache));
}

function loadData(configPath: string): Saved {
  const data = JSON.parse(fs.readFileSync(configPath, "utf-8")) as Saved;
  Object.keys(data.examples).forEach((name) => {
    data.examples[name] = path.resolve(
      path.dirname(configPath),
      data.examples[name],
    );
  });
  return data;
}

function writeData(configPath: string, results: Result[]) {
  const data = JSON.parse(fs.readFileSync(configPath, "utf-8")) as Saved;
  data.results = results;
  fs.writeFileSync(configPath, JSON.stringify(data, null, 2));
}

function renderTable(
  current: Result[],
  previous: Result[],
  measure: keyof Sizes,
) {
  const columns = ["name", "user", "runtime", "total"].map((n) =>
    kleur.bold(n),
  );
  let unsynced = false;
  return table(
    [columns].concat(
      current.map((result, i) => {
        let p = previous && previous[i];
        if (!p || p.name !== result.name) {
          unsynced = true;
          p = previous.find((p) => p.name === result.name)!;
        }
        return [
          kleur.cyan(result.name),
          renderSize(result.user, !unsynced ? p.user : undefined, measure),
          renderSize(
            result.runtime,
            !unsynced ? p.runtime : undefined,
            measure,
          ),
          renderSize(result.total, p && p.total, measure),
        ];
      }),
    ),
    {
      columns: columns.reduce((r, _, i) => {
        r[i] = { alignment: "right" };
        return r;
      }, {} as any),
    },
  );
}

function renderSize(
  current: Sizes | undefined,
  previous: Sizes | undefined,
  measure: keyof Sizes,
) {
  let str = "";
  if (current && current[measure]) {
    str += current[measure];
    if (previous && previous[measure]) {
      const delta = current[measure] - previous[measure];
      str += "\n";
      if (delta === 0) {
        str += kleur.dim(delta);
      } else if (delta < 0) {
        str += kleur.green().dim(delta);
      } else {
        str += kleur.red().dim("+" + delta);
      }
    }
  }
  return str;
}

async function getResults(examples: Record<string, string>) {
  const [, , runtimeTotal, runtimeFiles] = await bundleExample(
    runtimePath,
    false,
  );
  const results: Result[] = [
    {
      name: "*",
      total: runtimeTotal,
    },
  ];

  for (const [name, code] of Object.entries(runtimeFiles)) {
    fs.writeFileSync(
      path.join(compiledOutputDir, name),
      await format(code, { parser: "babel" }),
    );
  }

  for (const [exampleName, examplePath] of Object.entries(examples)) {
    for (const hydrate of [false, true]) {
      const [user, runtime, total, files] = await bundleExample(
        examplePath,
        hydrate,
      );

      for (const [name, code] of Object.entries(files)) {
        const exampleOutputFolder = path.join(
          compiledOutputDir,
          exampleName + (hydrate ? ".ssr" : ".csr"),
        );
        fs.mkdirSync(exampleOutputFolder, { recursive: true });
        fs.writeFileSync(
          path.join(exampleOutputFolder, name),
          await format(code, { parser: "babel" }),
        );
      }

      results.push({
        name: exampleName + (hydrate ? " 💧" : ""),
        user,
        runtime,
        total,
      });
    }
  }

  return results;
}

async function analyzeChunk(chunk: OutputChunk) {
  const { name, code } = chunk;
  const minified = stripModuleCode(
    (
      await minify(code, {
        nameCache,
        compress: {},
        mangle: { module: true },
      })
    ).code!,
  );

  const sizes = {
    min: Buffer.byteLength(minified),
    brotli: Buffer.byteLength(await brotli(minified)),
  };
  return {
    name: name + ".js",
    code: `// size: ${sizes.min} (min) ${sizes.brotli} (brotli)\n${stripModuleCode(code)}`,
    sizes,
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

async function bundleExample(examplePath: string, hydrate: boolean) {
  const isRuntime = examplePath === runtimePath;
  const virtualEntry = "./entry.js";
  const optimizeKnownTemplates: string[] | undefined = isRuntime
    ? undefined
    : await glob(path.join(path.dirname(examplePath), "**/*.marko"), {
        absolute: true,
      });
  const bundle = await rollup({
    input: isRuntime ? runtimePath : virtualEntry,
    plugins: [
      {
        name: "marko",
        resolveId(source) {
          if (source === "@marko/runtime-tags/dom") {
            return runtimePath;
          }
        },
        async load(id) {
          if (id.endsWith(".marko")) {
            return (
              await compiler.compileFile(id, {
                translator: translatorPath,
                output: "dom",
                optimize: true,
                babelConfig: {
                  babelrc: false,
                  configFile: false,
                },
                writeVersionComment: false,
                optimizeKnownTemplates,
              })
            ).code;
          }
          return null;
        },
      },
      !isRuntime &&
        pluginVirtual({
          [virtualEntry]: hydrate
            ? `import ${JSON.stringify(
                examplePath,
              )}; import { init } from "@marko/runtime-tags/dom"; init();`
            : `import template from ${JSON.stringify(examplePath)};template.mount();`,
        }),
      pluginTerser({ compress: {}, mangle: false }),
    ],
  });

  const { output } = await bundle.generate({
    format: "es",
    compact: true,
    manualChunks(id) {
      if (id === runtimePath) {
        return "runtime";
      }
    },
  });
  const runtimeChunk = output.find(isRuntimeChunk);
  const [analyzedRuntimeCode, analyzedUserCode] = await Promise.all([
    runtimeChunk && analyzeChunk(runtimeChunk),
    Promise.all(output.filter(isUserChunk).map(analyzeChunk)),
  ]);
  const runtimeSize = analyzedRuntimeCode?.sizes;
  const userSize = addSizes(analyzedUserCode.map((it) => it.sizes));
  const totalSize = runtimeSize ? addSizes([userSize, runtimeSize]) : userSize;
  const files: Record<string, string> = {};

  for (const { name, code } of analyzedUserCode) {
    files[name] = code;
  }

  return [userSize, runtimeSize, totalSize, files] as const;
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

function isUserChunk(chunk: OutputChunk | OutputAsset): chunk is OutputChunk {
  return chunk.name !== "runtime" && "code" in chunk;
}

function isRuntimeChunk(
  chunk: OutputChunk | OutputAsset,
): chunk is OutputChunk {
  return chunk.name === "runtime" && "code" in chunk;
}
