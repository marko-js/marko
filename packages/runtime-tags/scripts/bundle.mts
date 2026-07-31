import { globSync, rmSync } from "node:fs";
import path from "node:path";

import { build, rolldown } from "rolldown";

import debugPlugin from "./build-plugins/debug.mts";
import declHoistPlugin from "./build-plugins/decl-hoist.mts";

const cwd = path.join(import.meta.dirname, "..");
const featureEntries = globSync("src/{dom,html}/**/*.feat.ts", { cwd }).map(
  (file) => file.replaceAll(path.sep, "/").slice("src/".length, -".ts".length),
);

rmSync(path.join(cwd, "dist"), { recursive: true, force: true });

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
  // Build runtime, with each feature module as an extra entry
  ...["dom", "html"].flatMap((name) =>
    ["dist/debug", "dist"].map(async (out) => {
      const isProd = out === "dist";
      const minify = isProd
        ? { mangle: false, codegen: false, compress: true }
        : ("dce-only" as const);
      const bundle = await rolldown({
        cwd,
        input: {
          [name]: `src/${name}.ts`,
          ...Object.fromEntries(
            featureEntries
              .filter((entry) => entry.startsWith(`${name}/`))
              .map((entry) => [entry, `src/${entry}.ts`]),
          ),
        },
        platform: name === "dom" ? "browser" : "node",
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
            chunkFileNames: `${name}-[hash].mjs`,
            format: "esm",
            minify,
            sourcemap: false,
          }),
          bundle.write({
            dir: out,
            entryFileNames: "[name].js",
            chunkFileNames: `${name}-[hash].js`,
            format: "cjs",
            strict: true,
            minify,
            sourcemap: false,
          }),
        ]);
      } finally {
        await bundle.close();
      }
    }),
  ),
]);
