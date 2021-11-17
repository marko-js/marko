import fs from "fs";
import path from "path";
// import { Writable } from "stream";
// import autotest, { TestRunnerOpts } from "mocha-autotest";
import snap from "mocha-snap";
import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import type renderAndTrackMutations from "./utils/render-and-track-mutations";

type TestConfig = {
  inputDOM?: Parameters<typeof renderAndTrackMutations>[1];
  inputHTML?: unknown;
  skip_dom?: boolean;
  skip_html?: boolean;
};

const baseConfig: compiler.Config = {
  translator: require.resolve(".."),
  babelConfig: {
    babelrc: false,
    configFile: false,
  },
  writeVersionComment: false,
};

const htmlConfig: compiler.Config = { ...baseConfig, output: "html" };
const domConfig: compiler.Config = { ...baseConfig, output: "dom" };
register(htmlConfig);

describe("translator", () => {
  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");
      const templateFile = resolve("template.marko");
      const snapJS = (fn: () => unknown) => snap(fn, ".js", fixtureDir);
      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts"));
          // eslint-disable-next-line no-empty
        } catch {
          return {};
        }
      })();

      (config.skip_html ? it.skip : it)("html", () =>
        snapJS(() => compileCode(templateFile, htmlConfig))
      );

      (config.skip_dom ? it.skip : it)("dom", () =>
        snapJS(() => compileCode(templateFile, domConfig))
      );
    });
  }
});

// function runHTMLRenderTest({
//   main = {},
//   mode,
//   test,
//   resolve,
//   snapshot
// }: TestRunnerOpts & { main: TestConfigFile }) {
//   const templateFile = resolve("template.marko");
//   const snapshotsDir = resolve("snapshots");
//   const name = `snapshots${path.sep + mode}`;

//   test(async () => {
//     await ensureDir(snapshotsDir);
//     const { render } = await import(templateFile);
//     let html = "";

//     try {
//       await render(
//         main.inputHTML || {},
//         new Writable({
//           write(chunk: string) {
//             html += chunk;
//           }
//         })
//       );
//     } catch (err) {
//       snapshot(stripCwd(err.message), {
//         name: `${name}-error`,
//         ext: ".txt"
//       });
//       return;
//     }

//     snapshot(html, {
//       name,
//       ext: ".html"
//     });
//   });
// }

// function runDOMRenderTest({
//   main = {},
//   mode,
//   test,
//   resolve
// }: TestRunnerOpts & { main: TestConfigFile }) {
//   const templateFile = resolve("template.marko");
//   const snapshotsDir = resolve("snapshots");

//   test(async () => {
//     await ensureDir(snapshotsDir);

//     snapshot(
//       snapshotsDir,
//       `${mode}.md`,
//       await renderAndTrackMutations(templateFile, main.inputDOM)
//     );
//   });
// }

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}
