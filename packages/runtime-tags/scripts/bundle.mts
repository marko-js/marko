import path from "node:path";

import { build, rolldown } from "rolldown";

import debugPlugin from "./build-plugins/debug.mts";
import declHoistPlugin from "./build-plugins/decl-hoist.mts";

const cwd = path.join(import.meta.dirname, "..");

function inDom(id: string, files: string[]) {
  const norm = id.replace(/\\/g, "/");
  return files.some((f) => norm.endsWith("/dom/" + f));
}
const isUpdateFamily = (id: string) =>
  inDom(id, ["update.ts", "update-merges.ts"]);
const isBranchFamily = (id: string) => inDom(id, ["control-flow.ts"]);

await Promise.all([
  // Build translator
  build({
    cwd,
    input: "src/translator/index.ts",
    platform: "node",
    external: [/^[^./]/, path.join(cwd, "package.json")],
    transform: {
      define: {
        MARKO_DEBUG: "false",
      },
    },
    output: {
      format: "cjs",
      strict: true,
      sourcemap: false,
      minify: "dce-only",
      dir: "dist/translator",
    },
  }),
  // The page and persisted-update facades bundle as one multi-entry graph so
  // the update applier shares the resume registry/scheduler instance with `dom`.
  ...["dist/debug", "dist"].flatMap((out) => [
    bundleRuntime(out, {
      dom: "src/dom.ts",
      "dom-persisted": "src/dom-persisted.ts",
    }),
    bundleRuntime(out, { html: "src/html.ts" }, "node"),
  ]),
]);

async function bundleRuntime(
  out: string,
  input: Record<string, string>,
  platform: "browser" | "node" = "browser",
) {
  const isProd = out === "dist";
  const minify = isProd
    ? { mangle: false, codegen: false, compress: true }
    : ("dce-only" as const);
  const bundle = await rolldown({
    cwd,
    input,
    platform,
    // Chunk-group splitting (below) requires this; set it explicitly so
    // Rolldown does not warn about choosing it implicitly.
    preserveEntrySignatures: "allow-extension",
    experimental: { nativeMagicString: true },
    transform: {
      define: { MARKO_DEBUG: String(!isProd) },
    },
    plugins: isProd ? [debugPlugin(), declHoistPlugin()] : undefined,
  });

  // A module lives in exactly one application chunk, so machinery bundled
  // beside the eager write helpers would ride eagerly even when only lazy
  // graphs (persisted update dispatch, branch construction, controllables)
  // reach it. Splitting those modules into their own chunk lets an
  // application bundler host them lazily; everything else keeps the
  // default shared-chunk layout.
  const codeSplitting =
    platform === "browser"
      ? {
          includeDependenciesRecursively: false,
          // Two groups, deliberately: routes that render dynamic tags reach
          // the branches family (control-flow) eagerly, so folding it into
          // the update-only group would drag update dispatch into those
          // routes' first load. Update stays reachable only from lazy
          // update graphs; branches rides eagerly only where hops already
          // require it.
          groups: [
            { name: "update", test: isUpdateFamily },
            { name: "branches", test: isBranchFamily },
          ],
        }
      : undefined;

  try {
    await Promise.all([
      bundle.write({
        dir: out,
        entryFileNames: "[name].mjs",
        chunkFileNames: "_[name]-[hash].mjs",
        format: "esm",
        minify,
        sourcemap: false,
        codeSplitting,
      }),
      bundle.write({
        dir: out,
        entryFileNames: "[name].js",
        chunkFileNames: "_[name]-[hash].js",
        format: "cjs",
        strict: true,
        minify,
        sourcemap: false,
        codeSplitting,
      }),
    ]);
  } finally {
    await bundle.close();
  }
}
