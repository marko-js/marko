import fs from "fs";
import path from "path";
import zlib from "zlib";
import chalk from "chalk";
import assert from "assert";
import rollup from "rollup";
import { table } from "table";
import { terser } from "rollup-plugin-terser";
import hypothetical from "rollup-plugin-hypothetical";

interface Sizes {
  min: number;
  gzip: number;
  brotli: number;
}

interface Result {
  name: string;
  individual?: Sizes;
  cumulative?: Sizes;
  increment?: Sizes;
}

interface Saved {
  file: string;
  exports: string[];
  results: Result[];
  preminified: boolean;
}

const configPath = path.join(__dirname, "../.sizes.json");
const shouldWrite = process.argv.includes("--write");

run(configPath).catch(console.error);

async function run(configPath: string) {
  const {
    file,
    exports,
    preminified,
    results: previous,
  } = loadData(configPath);
  const current = await getExportResults(file, exports, preminified);

  console.log(
    renderTable(
      current,
      previous,
      (process.env.MEASURE as undefined | keyof Sizes) || "gzip"
    )
  );

  if (shouldWrite) {
    writeData(configPath, current);
    console.log(
      chalk.green(`${path.relative(process.cwd(), configPath)} updated!`)
    );
  } else {
    try {
      assert.deepStrictEqual(previous, current);
      console.log(
        chalk.green(`${path.relative(process.cwd(), configPath)} matches!`)
      );
    } catch (e) {
      console.log(
        chalk.red(`${path.relative(process.cwd(), configPath)} does not match!`)
      );
      process.exit(1);
    }
  }
}

function loadData(configPath: string): Saved {
  const data = JSON.parse(fs.readFileSync(configPath, "utf-8")) as Saved;
  data.file = path.resolve(path.dirname(configPath), data.file);
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
  measure: keyof Sizes
) {
  const columns = ["name", "individual", "cumulative", "increment"].map((n) =>
    chalk.bold(n)
  );
  let unsynced = false;
  return table(
    [columns].concat(
      current.map((result, i) => {
        let p = previous && previous[i];
        if (!p || p.name !== result.name) {
          unsynced = true;
          p = previous && previous.find((p) => p.name === result.name);
        }
        return [
          chalk.cyan(result.name),
          renderSize(result.individual, p && p.individual, measure),
          renderSize(result.cumulative, !unsynced && p.cumulative, measure),
          renderSize(result.increment, !unsynced && p.increment, measure),
        ];
      })
    ),
    {
      columns: columns.reduce((r, _, i) => {
        r[i] = { alignment: "right" };
        return r;
      }, {}),
    }
  );
}

function renderSize(
  current: Sizes | undefined,
  previous: Sizes | undefined,
  measure: keyof Sizes
) {
  let str = "";
  if (current && current[measure]) {
    str += current[measure];
    if (previous && previous[measure]) {
      const delta = current[measure] - previous[measure];
      str += "\n";
      if (delta === 0) {
        str += chalk.dim(delta);
      } else if (delta < 0) {
        str += chalk.green.dim(delta);
      } else {
        str += chalk.red.dim("+" + delta);
      }
    }
  }
  return str;
}

async function getExportResults(
  file: string,
  exports: string[],
  preminified: boolean
) {
  const results: Result[] = [
    {
      name: "*",
      individual: await getSizesForAll(file, preminified),
    },
  ];
  const exportsSoFar: string[] = [];
  let previous = {
    min: 0,
    gzip: 0,
    brotli: 0,
  };
  for (const e of exports) {
    exportsSoFar.push(e);
    const individual = await getSizesForExports(file, [e], preminified);
    const cumulative = await getSizesForExports(
      file,
      exportsSoFar,
      preminified
    );
    results.push({
      name: e,
      individual,
      cumulative,
      increment: {
        min: cumulative.min - previous.min,
        gzip: cumulative.gzip - previous.gzip,
        brotli: cumulative.brotli - previous.brotli,
      },
    });
    previous = cumulative;
  }

  return results;
}

async function getSizesForAll(file: string, preminified: boolean) {
  return getSizesForSrc(await bundleAll(file, preminified));
}

async function getSizesForExports(
  file: string,
  exports: string[],
  preminified: boolean
) {
  return getSizesForSrc(await bundleExports(file, exports, preminified));
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

async function bundleAll(file: string, preminified: boolean) {
  return bundle(`export * from ${JSON.stringify(file)}`, preminified);
}

async function bundleExports(
  file: string,
  exports: string[],
  preminified: boolean
) {
  return bundle(
    `export { ${exports.join(", ")} } from ${JSON.stringify(file)}`,
    preminified
  );
}

async function bundle(src: string, preminified: boolean) {
  const bundle = await rollup.rollup({
    input: "./entry.js",
    output: {
      compact: true,
    },
    plugins: [
      hypothetical({
        files: {
          "./entry.js": src,
        },
        allowFallthrough: true,
      }),
      !preminified && terser({ compress: {}, mangle: { module: true } }),
    ],
  });

  const { output } = await bundle.generate({ format: "es", compact: true });
  return output[0].code;
}

function brotli(src: string): Promise<Buffer> {
  return new Promise((resolve, reject) =>
    zlib.brotliCompress(src, (error, result) =>
      error ? reject(error) : resolve(result)
    )
  );
}

function gzip(src: string): Promise<Buffer> {
  return new Promise((resolve, reject) =>
    zlib.gzip(src, (error, result) => (error ? reject(error) : resolve(result)))
  );
}
