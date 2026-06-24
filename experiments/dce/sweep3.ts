import path from "path";

import { createServerRunner } from "../../packages/runtime-tags/src/__tests__/utils/bundle";
const clean = {
  babelrc: false,
  configFile: false,
  browserslistConfigFile: false,
};
async function run(entry: string, label: string) {
  const runner = await createServerRunner(
    path.join(__dirname),
    { page: entry },
    {
      optimize: true,
      translator: "@marko/runtime-tags/translator" as any,
      babelConfig: clean,
    } as any,
  );
  const dom = await runner.domBundle();
  const sz = Object.values(dom.sizes ?? {})[0] as any;
  const total = sz?.total ?? sz;
  console.log(
    `${label.padEnd(20)} min=${String(total?.min).padStart(6)} brotli=${String(total?.brotli).padStart(5)}`,
  );
  console.log(dom.snapshot.replace(/^/gm, "    "));
}
async function main() {
  await run("./List.marko", "List ESM");
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
