const { compileFileSync } = require("@marko/compiler");
const fs = require("fs");
const path = require("path");

// Output modes: default html (`.marko.cjs`), OUTPUT=dom (`.marko.dom.cjs`),
// UPDATE=1 compiles the persisted update entry (`.marko.update.cjs`, the
// `?update` virtual module). PERSISTED=1 sets the persisted compile option
// (implied by UPDATE=1).
const isUpdate = process.env.UPDATE === "1";
const output = isUpdate ? "dom" : process.env.OUTPUT || "html";
const suffix = isUpdate ? ".update.cjs" : output === "dom" ? ".dom.cjs" : ".cjs";

for (const entry of process.argv.slice(2)) {
  const inputFileName = path.resolve(entry);
  const { code } = compileFileSync(inputFileName, {
    output,
    optimize: process.env.OPT === "1",
    persisted: isUpdate ? "update" : process.env.PERSISTED === "1",
    sourceMaps: false,
    modules: "cjs",
    babelConfig: { babelrc: false, configFile: false, browserslistConfigFile: false },
    translator: "@marko/runtime-tags/translator",
  });
  fs.writeFileSync(
    inputFileName + suffix,
    code
      .replace(/\.marko\?update"\)/g, '.marko.update.cjs")')
      .replace(/\.marko"\)/g, ".marko" + suffix + '")'),
  );
  console.log(inputFileName + suffix);
}
