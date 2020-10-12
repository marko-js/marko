import fs from "fs";
import { CachedInputFileSystem } from "enhanced-resolve";
import * as translator from "@marko/translator-default";

let config;
const globalThis = typeof window === "undefined" ? global : window;
const MARKO_CONFIG_KEY = Symbol("Default Marko Compiler Config");

if (globalThis[MARKO_CONFIG_KEY]) {
  config = globalThis[MARKO_CONFIG_KEY];
} else {
  config = globalThis[MARKO_CONFIG_KEY] = {
    // The default output mode for compiled templates
    output: "html",

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
    translator,

    /**
     * Use a different file system object, eg webpacks CachedInputFileSystem or lasso-caching-fs
     */
    fileSystem: new CachedInputFileSystem(
      fs,
      60000 /* We manually purge but the duration is required */
    ),
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
     * Compiling a Marko template may require other (used) Marko templates to compile.
     * To prevent compiling templates more than once, most of the compilation is cached.
     *
     * The default cache strategy is to clear the cache on every macrotask.
     * If the default cache is overwritten it is up to the user to determine when the
     * cache is cleared.
     */
    cache: new Map()
  };

  if (process.env.MARKO_CONFIG) {
    Object.assign(config, JSON.parse(process.env.MARKO_CONFIG));
  }
}

export default config;
