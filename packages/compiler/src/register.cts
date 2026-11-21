// CommonJS on purpose: `require("@marko/compiler/register")` is the hook itself.
const shouldOptimize = (
  require("./util/should-optimize") as typeof import("./util/should-optimize")
).default;
const compiler = require(".") as typeof import(".");

const requiredOptions = { modules: "cjs" } as const;
const isDev = !shouldOptimize();

module.exports = register;
register();

function register({
  extensions = require.extensions,
  ...options
}: {
  extensions?: NodeJS.RequireExtensions;
} & import("@marko/compiler").Config = {}) {
  // Node maps stack traces through the inline source map each template carries.
  if (isDev) process.setSourceMapsEnabled(true);

  extensions[".marko"] = (module, filename) => {
    const compiled = compiler.compileFileSync(
      filename,
      Object.assign(
        {
          meta: true,
          hot: process.env.BROWSER_REFRESH_URL !== undefined,
          sourceMaps: isDev ? ("inline" as const) : false,
        },
        options,
        requiredOptions,
      ),
    );

    // Node's internal `_compile` runs the module's code.
    return (
      module as NodeJS.Module & {
        _compile(code: string, filename: string): unknown;
      }
    )._compile(compiled.code!, filename);
  };

  return extensions;
}
