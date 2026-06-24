import path from "path";

import { createServerRunner } from "../../packages/runtime-tags/src/__tests__/utils/bundle";

const clean = {
  babelrc: false,
  configFile: false,
  browserslistConfigFile: false,
};
// Simulate a real-world pre-bundle transform that downlevels ESM->CJS
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
    `${label.padEnd(22)} min=${String(total?.min).padStart(6)}  brotli=${String(total?.brotli).padStart(5)}  modules:[${mods.join(", ")}]`,
  );
}

async function main() {
  for (const [entry, name] of [
    ["./page.marko", "page (1 island)"],
    ["./Dashboard.marko", "Dashboard"],
    ["./Layout.marko", "Layout (deep static)"],
  ] as const) {
    await run(entry, name + " ESM", clean);
    await run(entry, name + " CJS", cjs);
    console.log();
  }
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
