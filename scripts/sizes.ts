import * as compiler from "@marko/compiler";
import fs from "fs";
import kleur from "kleur";
import path from "path";
import { format } from "prettier";
import { build, type OutputAsset, type OutputChunk } from "rolldown";
import { minifySync } from "rolldown/utils";
import { table } from "table";
import glob from "tiny-glob";
import zlib from "zlib";

const compiledOutputDir = path.join(process.cwd(), ".sizes");

try {
  fs.rmSync(compiledOutputDir, { recursive: true });
} catch {
  // ignore
} finally {
  fs.mkdirSync(compiledOutputDir);
}

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
  "packages/runtime-tags/dist/translator/index.js",
);
const configPath = path.join(rootDir, ".sizes.json");
const skipExamples = process.argv.includes("--no-examples");

const markoRe = /\.marko$/;
const virtualEntry = "entry";
const virtualEntryRe = new RegExp(`^${virtualEntry}$`);

run(configPath);

async function run(configPath: string) {
  const { examples, results: previous } = loadData(configPath);
  const current = await getResults(skipExamples ? {} : examples);
  const measure = (process.env.MEASURE as undefined | keyof Sizes) || "brotli";

  console.log(measure);
  console.log(renderTable(current, previous, measure));
  writeData(configPath, current);
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
  const [runtimeTotal, runtimeFiles] = await bundleRuntime();
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
      const [user, runtime, total, files] = await bundleUserCode(
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
    minifySync("chunk.js", code, {
      compress: true,
      codegen: true,
      mangle: true,
      module: true,
    }).code,
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

async function bundleRuntime() {
  const { output } = await build({ input: runtimePath });
  const chunk = output.find((c): c is OutputChunk => "code" in c)!;
  const analyzed = await analyzeChunk(chunk);
  return [analyzed.sizes, { [analyzed.name]: analyzed.code }] as const;
}

async function bundleUserCode(examplePath: string, hydrate: boolean) {
  const cache = new Map<unknown, unknown>();
  const optimizeKnownTemplates: string[] = await glob(
    path.join(path.dirname(examplePath), "**/*.marko"),
    { absolute: true },
  );
  const { output } = await build({
    input: virtualEntry,
    resolve: { alias: { "@marko/runtime-tags/dom": runtimePath } },
    plugins: [
      {
        name: "entry",
        resolveId(id, importer) {
          if (id === virtualEntry) {
            return id;
          }

          if (importer === virtualEntry) {
            return this.resolve(id, examplePath);
          }
        },
        load: {
          filter: { id: { include: virtualEntryRe } },
          handler: () => {
            return hydrate
              ? `import ${JSON.stringify(examplePath)}; import { init } from "@marko/runtime-tags/dom"; init();`
              : `import template from ${JSON.stringify(examplePath)};template.mount();`;
          },
        },
      },
      {
        name: "marko",
        load: {
          filter: { id: { include: markoRe } },
          async handler(id) {
            const { code, map } = await compiler.compileFile(id, {
              translator: translatorPath,
              cache,
              output: "dom",
              writeVersionComment: false,
              optimize: true,
              optimizeKnownTemplates,
              babelConfig: {
                babelrc: false,
                configFile: false,
                browserslistConfigFile: false,
              },
            });
            return { code, map };
          },
        },
      },
    ],
    output: { manualChunks },
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

  if (analyzedRuntimeCode) files["runtime.js"] = analyzedRuntimeCode.code;
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

function manualChunks(id: string) {
  if (id === runtimePath) {
    return "runtime";
  }
}
