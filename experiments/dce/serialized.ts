import path from "path";

import { createServerRunner } from "../../packages/runtime-tags/src/__tests__/utils/bundle";
const clean = {
  babelrc: false,
  configFile: false,
  browserslistConfigFile: false,
};
async function main(entry: string, input: any) {
  const runner = await createServerRunner(
    path.join(__dirname),
    { page: entry },
    {
      optimize: true,
      translator: "@marko/runtime-tags/translator" as any,
      babelConfig: clean,
    } as any,
  );
  const { page } = (await runner.runServer()) as any;
  // render to string
  const out = await new Promise<string>((res, rej) => {
    let s = "";
    const stream = page.render(input);
    stream.on?.("data", (c: any) => (s += c));
    stream.on?.("end", () => res(s));
    stream.on?.("error", rej);
    if (typeof stream.then === "function")
      stream.then((r: any) => res(String(r)), rej);
  }).catch(() => (page.render(input) as any).toString?.() ?? "");
  console.log(`\n##### ${entry} HTML (${out.length} bytes) #####`);
  console.log(out.slice(0, 1200));
}
main(process.argv[2], { x: "hello" }).catch((e) => {
  console.error(e);
  process.exit(1);
});
