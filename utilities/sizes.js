const fs = require("fs");
const zlib = require("zlib");
const chalk = require("chalk");
const { table } = require("table");
const rollup = require("rollup");
const hypothetical = require("rollup-plugin-hypothetical");

const path = require("path");
const assert = require("assert");
const { terser } = require("rollup-plugin-terser");
const configPath = path.join(__dirname, "../.sizes.json");

run(configPath).catch(console.error);

async function run(configPath) {
  const { file, exports, preminified, results: previous } = loadData(
    configPath
  );
  const current = await getExportResults(file, exports, preminified);

  console.log(renderTable(current, previous, process.env.MEASURE || "gzip"));

  if (process.env.WRITE) {
    writeData(configPath, current);
    console.log(
      chalk.green(`${path.relative(process.cwd(), configPath)} updated!`)
    );
  } else if (process.env.CHECK) {
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

function loadData(configPath) {
  const data = JSON.parse(fs.readFileSync(configPath));
  data.file = path.resolve(path.dirname(configPath), data.file);
  return data;
}

function writeData(configPath, results) {
  const data = JSON.parse(fs.readFileSync(configPath));
  data.results = results;
  fs.writeFileSync(configPath, JSON.stringify(data, null, 2));
}

function renderTable(current, previous, measure) {
  const columns = ["name", "individual", "cumulative", "increment"].map(n =>
    chalk.bold(n)
  );
  let unsynced = false;
  return table(
    [columns].concat(
      current.map((result, i) => {
        let p = previous && previous[i];
        if (!p || p.name !== result.name) {
          unsynced = true;
          p = previous && previous.find(p => p.name === result.name);
        }
        return [
          chalk.cyan(result.name),
          renderSize(result.individual, p && p.individual, measure),
          renderSize(result.cumulative, !unsynced && p.cumulative, measure),
          renderSize(result.increment, !unsynced && p.increment, measure)
        ];
      })
    ),
    { columns: columns.map(() => ({ alignment: "right" })) }
  );
}

function renderSize(current, previous, measure) {
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

async function getExportResults(file, exports, preminified) {
  const results = [
    {
      name: "*",
      individual: await getSizesForAll(file, preminified)
    }
  ];
  const exportsSoFar = [];
  let previous = {
    min: 0,
    gzip: 0,
    brotli: 0
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
        brotli: cumulative.brotli - previous.brotli
      }
    });
    previous = cumulative;
  }

  return results;
}

async function getSizesForAll(file, preminified) {
  return getSizesForSrc(await bundleAll(file, preminified));
}

async function getSizesForExports(file, exports, preminified) {
  return getSizesForSrc(await bundleExports(file, exports, preminified));
}

async function getSizesForSrc(minified) {
  const gzipped = await gzip(minified);
  const brotlied = await brotli(minified);

  return {
    min: minified.length,
    gzip: gzipped.length,
    brotli: brotlied.length
  };
}

async function bundleAll(file, preminified) {
  return bundle(`export * from ${JSON.stringify(file)}`, preminified);
}

async function bundleExports(file, exports, preminified) {
  return bundle(
    `export { ${exports.join(", ")} } from ${JSON.stringify(file)}`,
    preminified
  );
}

async function bundle(src, preminified) {
  const bundle = await rollup.rollup({
    input: "./entry.js",
    output: {
      compact: true
    },
    plugins: [
      hypothetical({
        files: {
          "./entry.js": src
        },
        allowFallthrough: true
      }),
      !preminified && terser({ compress: {}, mangle: { module: true } })
    ]
  });

  const { output } = await bundle.generate({ format: "es", compact: true });
  return output[0].code;
}

function brotli(src) {
  return new Promise((resolve, reject) =>
    zlib.brotliCompress(src, (error, result) =>
      error ? reject(error) : resolve(result)
    )
  );
}

function gzip(src) {
  return new Promise((resolve, reject) =>
    zlib.gzip(src, (error, result) => (error ? reject(error) : resolve(result)))
  );
}
