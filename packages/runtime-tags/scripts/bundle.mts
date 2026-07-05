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
  // Build runtime
  ...["dom", "html"].flatMap((name) =>
    ["dist/debug", "dist"].map(async (out) => {
      const file = `${out}/${name}`;
      const isProd = out === "dist";
      const minify = isProd
        ? { mangle: false, codegen: false, compress: true }
        : ("dce-only" as const);
      const bundle = await rolldown({
        cwd,
        input: `src/${name}.ts`,
        platform: name === "dom" ? "browser" : "node",
        experimental: { nativeMagicString: true },
        transform: {
          define: { MARKO_DEBUG: String(!isProd) },
        },
        plugins: isProd ? [debugPlugin(), declHoistPlugin()] : undefined,
      });

      try {
        await Promise.all([
          name === "dom"
            ? // The browser runtime ships as preserved modules behind the
              // `dom.mjs` re-export facade so application bundlers chunk it
              // at file granularity: a lazily-loaded importer (eg a
              // persisted app's `?persisted`/`?update` graphs) pulls the
              // machinery it uses into lazy chunks instead of forcing every
              // retained export into the eager chunk hosting one big module.
              bundle.write({
                dir: out,
                format: "esm",
                entryFileNames: "[name].mjs",
                chunkFileNames: "[name].mjs",
                preserveModules: true,
                preserveModulesRoot: path.join(cwd, "src"),
                minify,
                sourcemap: false,
              })
            : bundle.write({
                file: `${file}.mjs`,
                format: "esm",
                minify,
                sourcemap: false,
              }),
          bundle.write({
            file: `${file}.js`,
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
