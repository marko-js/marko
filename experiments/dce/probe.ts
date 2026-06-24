import path from "path";

import { createServerRunner } from "../../packages/runtime-tags/src/__tests__/utils/bundle";
const clean = {
  babelrc: false,
  configFile: false,
  browserslistConfigFile: false,
};
async function run(entry: string) {
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
    `\n##### ${entry}  brotli=${total?.brotli} min=${total?.min} #####`,
  );
  console.log(dom.snapshot);
}
run(process.argv[2] || "./TryStatic.marko").catch((e) => {
  console.error(e);
  process.exit(1);
});
