// Builds and serves the keyed js-framework-benchmark app against the *local*
// `@marko/runtime-tags` source in this repo, so the in-development runtime and
// translator can be profiled directly (no published Marko, no separate
// `dist` build step required).
//
// It mirrors the approach used by `scripts/sizes.ts`: compile each `.marko`
// file with the local translator via `@marko/compiler`, then bundle with
// rolldown while aliasing the DOM runtime to this package's source.
//
// Run via the package's `~ts` register hook (see the `benchmark` /
// `benchmark:build` scripts in package.json):
//
//   node -r ~ts ./benchmark/scripts/serve.ts          # build + serve
//   node -r ~ts ./benchmark/scripts/serve.ts --build   # build only
import path from "node:path";

import * as compiler from "@marko/compiler";
import express from "express";
import { build } from "rolldown";

const benchDir = path.join(__dirname, "..");
const pkgDir = path.join(benchDir, "..");
const runtimeSrc = path.join(pkgDir, "src", "dom.ts");
const translatorSrc = path.join(pkgDir, "src", "translator", "index.ts");
const entryPath = path.join(benchDir, "src", "entry.ts");
const indexHtml = path.join(benchDir, "index.html");
const publicDir = path.join(benchDir, "public");
const outDir = path.join(benchDir, "dist");
const markoRe = /\.marko$/;
const buildOnly = process.argv.includes("--build");
const port = Number(process.env.PORT) || 8080;

run();

async function run() {
  await bundle();
  if (!buildOnly) {
    serve();
  }
}

async function bundle() {
  const cache = new Map<unknown, unknown>();
  await build({
    input: { app: entryPath },
    resolve: { alias: { "@marko/runtime-tags/dom": runtimeSrc } },
    transform: { define: { MARKO_DEBUG: "false" } },
    plugins: [
      {
        name: "marko",
        load: {
          filter: { id: { include: markoRe } },
          async handler(id) {
            const { code, map } = await compiler.compileFile(id, {
              translator: translatorSrc,
              cache,
              output: "dom",
              optimize: true,
              writeVersionComment: false,
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
    output: {
      dir: outDir,
      entryFileNames: "[name].js",
      minify: true,
    },
  });

  console.log(
    `✔ Built benchmark against local @marko/runtime-tags → ${path.relative(process.cwd(), outDir)}`,
  );
}

function serve() {
  const app = express();
  app.use(express.static(outDir));
  app.use(express.static(publicDir));
  app.get("/", (_req, res) => res.sendFile(indexHtml));
  app.listen(port, () => {
    console.log(`▶ Marko benchmark running at http://localhost:${port}`);
  });
}
