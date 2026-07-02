const { compileFileSync } = require("@marko/compiler");
const fs = require("fs");
const path = require("path");

for (const entry of process.argv.slice(2)) {
  const inputFileName = path.resolve(entry);
  const { code } = compileFileSync(inputFileName, {
    output: "html",
    optimize: process.env.OPT === "1",
    sourceMaps: false,
    modules: "cjs",
    babelConfig: { babelrc: false, configFile: false, browserslistConfigFile: false },
    translator: "@marko/runtime-tags/translator",
  });
  fs.writeFileSync(inputFileName + ".cjs", code.replace(/\.marko"\)/g, '.marko.cjs")'));
  console.log(inputFileName + ".cjs");
}
