const { register } = require("esbuild-register/dist/node");

register({
  define: { MARKO_DEBUG: "true", MARKO_SRC: "true" },
});
