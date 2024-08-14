import { compileFileSync } from "@marko/compiler";
import fs from "fs";

const compiled = compileFileSync(process.argv[2], {
  output: (process.env.OUT as any) || "dom",
  sourceMaps: false,
  modules: "esm",
  babelConfig: {
    configFile: false,
    babelrc: false,
  },
  translator:
    process.env.TRANSLATOR === "class"
      ? "@marko/translator-default"
      : "@marko/translator-tags",
});

fs.writeFileSync(process.argv[2] + ".js", compiled.code);
