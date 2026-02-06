/**
 * TODO:
 * This file should replace ./build.ts once rolldown adds the following optimizations.
 *
 * https://github.com/oxc-project/oxc/issues/6073
 * https://github.com/oxc-project/oxc/issues/15375
 */

import path from "node:path";

import { build } from "rolldown";

const cwd = path.join(import.meta.dirname, "..");

await Promise.all(
  [
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
        sourcemap: false,
        dir: "dist/translator",
        intro: "'use strict';",
      },
    }),
    // Build runtime
    ["dist/debug", "dist"].map((env) =>
      ["dom", "html"].map((name) =>
        (["esm", "cjs"] as const).map(async (format) => {
          const isProd = env === "dist";
          await build({
            cwd,
            input: `src/${name}.ts`,
            platform: name === "dom" ? "browser" : "node",
            // mangleProps: isProd ? /^___/ : undefined,
            transform: {
              define: { MARKO_DEBUG: String(!isProd) },
            },
            plugins: isProd
              ? [
                  {
                    name: "debug",
                    resolveId: {
                      filter: { id: { include: /^\..*\.debug$/ } },
                      handler(id, importer, opts) {
                        return this.resolve(
                          id.replace(/\.debug$/, ""),
                          importer,
                          opts,
                        );
                      },
                    },
                  },
                ]
              : undefined,
            output: {
              format,
              sourcemap: false,
              file: `${env}/${name}.${format === "esm" ? "mjs" : "js"}`,
              intro: format === "cjs" ? "'use strict';" : undefined,
            },
          });
        }),
      ),
    ),
  ].flat(),
);
