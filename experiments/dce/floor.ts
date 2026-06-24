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
  const empty = !dom.snapshot.trim();
  console.log(
    `${label.padEnd(22)} min=${String(total?.min ?? 0).padStart(6)} brotli=${String(total?.brotli ?? 0).padStart(5)}  ${empty ? "(NO client JS emitted)" : ""}`,
  );
}
async function main() {
  await run("./static.marko", "static-only page");
  await run("./page.marko", "page: 1 button");
  await run("./Dashboard.marko", "page: button + <if>");
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
