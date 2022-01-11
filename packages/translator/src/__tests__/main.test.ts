import fs from "fs";
import path from "path";
import snap from "mocha-snap";
import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import createBrowser from "./utils/create-browser";
import createMutationTracker from "./utils/track-mutations";

type TestConfig = {
  steps?: unknown[];
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
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
      const snapMD = (fn: () => unknown) => snap(fn, ".md", fixtureDir);
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

      (config.skip_csr ? it.skip : it)("csr", async () => {
        await snapMD(async () => {
          const browser = createBrowser({
            dir: __dirname,
            extensions: register({
              ...domConfig,
              extensions: {},
            }),
          });
          const document = browser.window.document;
          const [input, ...steps] = config.steps || [];
          const { run } = browser.require(
            "@marko/runtime-fluurt/dist/dom"
          ) as typeof import("../../../runtime/src/dom");
          const render = browser.require(templateFile).default;
          const container = Object.assign(document.createElement("div"), {
            TEST_ROOT: true,
          });
          const tracker = createMutationTracker(browser.window, container);

          document.body.appendChild(container);

          const instance = render(input);
          container.appendChild(instance);

          tracker.logUpdate(input);

          for (const update of steps) {
            // if (isWait(update)) {
            //   await update();
            //   return;
            // }

            if (typeof update === "function") {
              update(document.documentElement);
              run();
              tracker.logUpdate(update);
            } else {
              instance.update(update);
              tracker.logUpdate(update);
            }
          }

          return tracker.getLogs();
        });
      });
    });
  }
});

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}
