import path from "node:path";

import { build, rolldown } from "rolldown";

import debugPlugin from "./build-plugins/debug.mts";
import declHoistPlugin from "./build-plugins/decl-hoist.mts";

const cwd = path.join(import.meta.dirname, "..");

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
    experimental: { nativeMagicString: true },
    transform: {
      define: { MARKO_DEBUG: String(!isProd) },
    },
    plugins: isProd ? [debugPlugin(), declHoistPlugin()] : undefined,
  });

  try {
    await Promise.all([
      bundle.write({
        dir: out,
        entryFileNames: "[name].mjs",
        chunkFileNames: "_[name]-[hash].mjs",
        format: "esm",
        minify,
        sourcemap: false,
      }),
      bundle.write({
        dir: out,
        entryFileNames: "[name].js",
        chunkFileNames: "_[name]-[hash].js",
        format: "cjs",
        strict: true,
        minify,
        sourcemap: false,
      }),
    ]);
  } finally {
    await bundle.close();
  }
}
