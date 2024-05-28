import fs from "fs";
import { getRootPackage } from "lasso-package-root";

const config = {
  // The default output mode for compiled templates
  output: "html",

  // Override the runtimeid used when calling `marko/components.init` in the `hydrate` output.
  runtimeId: null,

  /**
   * Remove all typescript types from the output.
   * By default, the compiler will remove types from the output if the
   * `output` option is not `source` or `migrate`.
   */
  stripTypes: undefined,

  // Have Marko provide the final AST in the compile result.
  ast: false,

  // Set the false to have Marko not generate the final code string, useful if just reading metadata or AST.
  code: true,

  /**
   * Whether the version should be written to the template as a comment e.g.
   * // Compiled using marko@x.x.x - DO NOT EDIT
   */
  writeVersionComment: true,

  /**
   * Whether unrecognized tags should be ignored or not. This flag will
   * be enabled by default when compiling XML.
   */
  ignoreUnrecognizedTags: false,

  /**
   * Whether source maps should be output with the compiled templates.
   * When `true` a `map` property will be available on the compile result.
   * When `"inline"` the sourcemap will be inlined as a comment in the output code.
   * When `"both"` both of the above will be used.
   */
  sourceMaps: false,

  /**
   * This option inlines all of the meta data in the template.
   * You can also access this metadata via `compile(...).meta`.
   * This API is sticking around for compatibility purposes.
   */
  meta: false,

  /**
   * Allows configuring Marko to compile to different runtimes.
   */
  translator: (() => {
    const translatorReg = /^(@marko\/|marko-)translator-/;
    let translator;
    let pkg;

    try {
      pkg = getRootPackage(process.cwd());
      // eslint-disable-next-line no-empty
    } catch {}

    if (pkg) {
      for (const name in pkg.dependencies) {
        if (translatorReg.test(name)) {
          if (translator && translator !== name) {
            return;
          }

          translator = name;
        }
      }

      for (const name in pkg.peerDependencies) {
        if (translatorReg.test(name)) {
          if (translator && translator !== name) {
            return;
          }

          translator = name;
        }
      }

      for (const name in pkg.devDependencies) {
        if (translatorReg.test(name)) {
          if (translator && translator !== name) {
            return;
          }

          translator = name;
        }
      }
    }

    return translator || "@marko/translator-default";
  })(),

  /**
   * Use a different file system object, eg webpacks CachedInputFileSystem or lasso-caching-fs
   */
  fileSystem: fs,
  /**
   * By default Marko 5 outputs esm, you can optionally specify commonjs.
   *
   * Valid options: esm | cjs
   */
  modules: "esm",

  /**
   * Enables production mode optimizations if true, or not if false.
   * If left as undefined checks for env === "production".
   */
  optimize: undefined,

  /**
   * If `optimize` is enabled you can provide a Map which the compiler will
   * use to store shorter registry/template id's in. This can only be used
   * if the same `optimizedRegistryIds` are used for both server and client compilations.
   */
  optimizedRegistryIds: undefined,

  /**
   * This option should be set if `hydrate` output is specified.
   * Maps a virtual dependency to a resolved file which can be implemented
   * for specific bundlers.
   */
  resolveVirtualDependency: null,

  /**
   * Compiling a Marko template may require other (used) Marko templates to compile.
   * To prevent compiling templates more than once, most of the compilation is cached.
   *
   * The default cache strategy is to clear the cache on every macrotask.
   * If the default cache is overwritten it is up to the user to determine when the
   * cache is cleared.
   */
  cache: new Map(),

  /**
   * A regexp or function that receives an import path that matches file types known to be client side assets.
   */
  hydrateIncludeImports:
    /\.(css|less|s[ac]ss|styl|png|jpe?g|gif|svg|ico|webp|avif|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$/,

  /**
   * When compiling in hydrate mode, this option will cause the compiler to
   * call the `marko/components.init` function to begin hydrating components.
   */
  hydrateInit: true,

  /**
   * Set to true in order to bring in the hot module replacement runtime.
   */
  hot: false,

  /**
   * Wether error diagnostics should be thrown as errors
   * before the compile result is returned.
   *
   * Note that the compiler can still throw errors even when true.
   * When the errorRecovery is true, any recoverable errors will be
   * returned in the `meta.diagnostics` property of the compile result.
   */
  errorRecovery: false,

  // When supplied, any diagnostics which have a fix specified in the lookup will be applied to the source code.
  applyFixes: undefined,
};

if (process.env.MARKO_CONFIG) {
  Object.assign(config, JSON.parse(process.env.MARKO_CONFIG));
}

export default config;

import taglibConfig from "./taglib/config";
taglibConfig.fs = config.fileSystem;
