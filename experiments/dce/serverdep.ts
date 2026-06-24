// Measures whether a server-only dependency (heavy-lib) leaks into the client
// bundle for: (1) a page root that computes a static value, (2) an interactive
// parent embedding a static child that does. Run setup-deps.mjs first.
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
  const leak = /heavy-lib|payload_chunk|renderMarkdown/.test(dom.snapshot);
  console.log(
    `${label.padEnd(28)} brotli=${String(total?.brotli).padStart(5)}  server-dep leaked: ${leak}`,
  );
  console.log(dom.snapshot.replace(/^/gm, "    "));
}
async function main() {
  await run("./ServerData.marko", "page root, static const");
  await run("./ArticlePage.marko", "interactive parent + child");
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
