// Runs TypeScript sources directly on Node (native type stripping) — no
// transforms, just a resolve hook for extensionless bundler-style imports.
// aliased as ~ts via package.json
globalThis.MARKO_DEBUG = true;
require("complain").silence = true;

// Every fixture compiles unique sources into its own vm context, so V8's
// compilation cache never hits but pins each context (jsdom windows, bundles).
require("v8").setFlagsFromString("--no-compilation-cache");

const { registerHooks } = require("module");
const { fileURLToPath, pathToFileURL } = require("url");
const { resolveSync } = require("resolve-sync");

registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (err) {
      if (context.parentURL?.startsWith("file:")) {
        const resolved = resolveSync(specifier, {
          from: fileURLToPath(context.parentURL),
          exts: [".ts", ".js", ".json"],
          silent: true,
        });
        if (resolved) {
          return { url: pathToFileURL(resolved).href, shortCircuit: true };
        }
      }
      throw err;
    }
  },
});
