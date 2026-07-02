const { compileFileSync } = require("@marko/compiler");
const fs = require("fs");
const path = require("path");

for (const entry of process.argv.slice(2)) {
  const inputFileName = path.resolve(entry);
  const { code } = compileFileSync(inputFileName, {
    output: process.env.OUTPUT || "html",
    optimize: process.env.OPT === "1",
    persisted: process.env.PERSISTED === "1",
    sourceMaps: false,
    modules: "cjs",
    babelConfig: { babelrc: false, configFile: false, browserslistConfigFile: false },
    translator: "@marko/runtime-tags/translator",
  });
  fs.writeFileSync(inputFileName + (process.env.OUTPUT === "dom" ? ".dom.cjs" : ".cjs"), code.replace(/\.marko"\)/g, process.env.OUTPUT === "dom" ? '.marko.dom.cjs")' : '.marko.cjs")'));
  console.log(inputFileName + (process.env.OUTPUT === "dom" ? ".dom.cjs" : ".cjs"));
}
