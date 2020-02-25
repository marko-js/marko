var config;

var g = typeof window === "undefined" ? global : window;

if (g.__MARKO_CONFIG) {
  config = g.__MARKO_CONFIG;
} else {
  config = g.__MARKO_CONFIG = {
    // The default output mode for compiled templates
    output: "html",

    /**
     * Whether the version should be written to the template as a comment e.g.
     * // Compiled using marko@4.0.0 - DO NOT EDIT
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
    meta: true
  };

  if (process.env.MARKO_CONFIG) {
    Object.assign(config, JSON.parse(process.env.MARKO_CONFIG));
  }
}

module.exports = config;
