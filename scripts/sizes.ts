import fs from "fs";
import path from "path";
import zlib from "zlib";
import * as compiler from "@marko/compiler";
import pluginTerser from "@rollup/plugin-terser";
import pluginVirtual from "@rollup/plugin-virtual";
import kleur from "kleur";
import { type OutputChunk, rollup } from "rollup";
import { table } from "table";

interface Sizes {
  min: number;
  gzip: number;
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
  const measure = (process.env.MEASURE as undefined | keyof Sizes) || "gzip";

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
  const results: Result[] = [
    {
      name: "*",
      total: (await bundleExample(runtimePath, false))[2], // await getSizesForSrc(fs.readFileSync(runtimePath, "utf-8")),
    },
  ];

  for (const [exampleName, examplePath] of Object.entries(examples)) {
    for (const hydrate of ["", " 💧"]) {
      const [user, runtime, total] = await bundleExample(
        examplePath,
        !!hydrate,
      );
      results.push({
        name: exampleName + hydrate,
        user,
        runtime,
        total,
      });
    }
  }

  return results;
}

async function getSizesForSrc(minified: string): Promise<Sizes> {
  const [gzipped, brotlied] = await Promise.all([
    gzip(minified),
    brotli(minified),
  ]);

  return {
    min: minified.length,
    gzip: gzipped.length,
    brotli: brotlied.length,
  };
}

function addSizes(all: Sizes[]) {
  const total = { min: 0, gzip: 0, brotli: 0 };
  for (const { min, gzip, brotli } of all) {
    total.min += min;
    total.gzip += gzip;
    total.brotli += brotli;
  }
  return total;
}

async function bundleExample(examplePath: string, hydrate: boolean) {
  const bundle = await rollup({
    input: hydrate ? "./hydrate.js" : examplePath,
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
              })
            ).code;
          }
          return null;
        },
      },
      hydrate &&
        pluginVirtual({
          "./hydrate.js": `import ${JSON.stringify(
            examplePath,
          )}; import { init } from "@marko/runtime-tags/dom"; init();`,
        }),
      pluginTerser({ compress: {}, mangle: { module: true } }),
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
  const runtimeChunk = output.find(
    (o) => o.name === "runtime" && "code" in o,
  ) as OutputChunk;
  const userCodeChunks = output.filter(
    (o) => o !== runtimeChunk && "code" in o,
  ) as OutputChunk[];
  const runtimeSize = runtimeChunk && (await getSizesForSrc(runtimeChunk.code));
  const userSize = addSizes(
    await Promise.all(
      userCodeChunks.map((chunk) => getSizesForSrc(chunk.code)),
    ),
  );
  const totalSize = addSizes([userSize, runtimeSize].filter(Boolean));
  return [userSize, runtimeSize, totalSize];
}

function brotli(src: string): Promise<Buffer> {
  return new Promise((resolve, reject) =>
    zlib.brotliCompress(src, (error, result) =>
      error ? reject(error) : resolve(result),
    ),
  );
}

function gzip(src: string): Promise<Buffer> {
  return new Promise((resolve, reject) =>
    zlib.gzip(src, (error, result) =>
      error ? reject(error) : resolve(result),
    ),
  );
}
