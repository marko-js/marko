import { createRequire } from "module";
const require = createRequire(import.meta.url);
import fs from "fs";
import path from "path";

import * as compiler from "@marko/compiler";
const dir = path.dirname(new URL(import.meta.url).pathname);
const file = path.join(dir, "t.marko");
const { code } = compiler.compileFileSync(file, {
  translator: "@marko/runtime-tags/translator",
  output: "html",
  optimize: true,
  persisted: true,
  writeVersionComment: false,
  modules: "cjs",
  cache: new Map(),
});
fs.writeFileSync(path.join(dir, "t.marko.cjs"), code);
const { default: template } = require(path.join(dir, "t.marko.cjs"));
const { renderPatch } = require("@marko/runtime-tags/html");
console.log(
  "DOC:",
  (await template.render({ name: "world", tagline: "first" })).replace(
    /<script>[\s\S]*/,
    "<script>…",
  ),
);
let s = "";
for await (const c of renderPatch(template, {
  name: "there",
  tagline: "second",
}))
  s += c;
console.log("PATCH:", JSON.stringify(s));
