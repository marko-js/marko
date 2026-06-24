import path from "path";

import { createServerRunner } from "../../packages/runtime-tags/src/__tests__/utils/bundle";
const clean = {
  babelrc: false,
  configFile: false,
  browserslistConfigFile: false,
};
const cjs = {
  babelrc: false,
  configFile: false,
  browserslistConfigFile: false,
  presets: [
    ["@babel/preset-env", { modules: "commonjs", targets: { node: "20" } }],
  ],
};
async function run(entry: string, label: string, babelConfig: any) {
  const runner = await createServerRunner(
    path.join(__dirname),
    { page: entry },
    {
      optimize: true,
      translator: "@marko/runtime-tags/translator" as any,
      babelConfig,
    } as any,
  );
  const dom = await runner.domBundle();
  const sz = Object.values(dom.sizes ?? {})[0] as any;
  const total = sz?.total ?? sz;
  const mods = dom.snapshot
    .split("\n\n")
    .filter((s) => s.startsWith("// "))
    .map((s) => s.slice(3).split("\n")[0]);
  console.log(
    `${label.padEnd(26)} min=${String(total?.min).padStart(6)} brotli=${String(total?.brotli).padStart(5)} [${mods.join(", ")}]`,
  );
}
async function main() {
  await run("./islandonly.marko", "island-only ESM", clean);
  await run("./islandonly.marko", "island-only CJS", cjs);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
