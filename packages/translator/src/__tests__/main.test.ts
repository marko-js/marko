import fs from "fs";
import path from "path";
import snap from "mocha-snap";
import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import createBrowser from "./utils/create-browser";
import createMutationTracker from "./utils/track-mutations";
import glob from "tiny-glob";

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
      const snapMD = (fn: () => unknown) => snap(fn, ".md", fixtureDir);
      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        await snap(
          () => compileCode(templateFile, compilerConfig),
          ".js",
          fixtureDir
        );
        const additionalMarkoFiles = await glob(resolve("*/**/*.marko"));
        for (const file of additionalMarkoFiles) {
          const name = path.relative(fixtureDir, file).replace(".marko", ".js");
          await snap(() => compileCode(file, compilerConfig), name, fixtureDir);
        }
      };
      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts"));
          // eslint-disable-next-line no-empty
        } catch {
          return {};
        }
      })();

      (config.skip_html ? it.skip : it)("html", () =>
        snapAllTemplates(htmlConfig)
      );

      (config.skip_dom ? it.skip : it)("dom", () =>
        snapAllTemplates(domConfig)
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

          const { window } = browser;
          const { document } = window;
          const errors: Set<Error> = new Set();
          const throwErrors = () => {
            switch (errors.size) {
              case 0:
                return;
              case 1:
                throw [...errors][0];
              default:
                throw new AggregateError(errors);
            }
          };

          window.addEventListener("error", (ev) => {
            errors.add(ev.error.detail || ev.error);
            ev.preventDefault();
          });
          window.addEventListener("unhandledrejection", (ev) => {
            errors.add(ev.reason.detail || ev.reason);
            ev.preventDefault();
          });

          const [input, ...steps] = config.steps || [];
          const { run } = browser.require(
            "@marko/runtime-fluurt/src/dom"
          ) as typeof import("../../../runtime/src/dom");
          const render = browser.require(templateFile).default;
          const container = Object.assign(document.createElement("div"), {
            TEST_ROOT: true,
          });
          const tracker = createMutationTracker(browser.window, container);

          document.body.appendChild(container);

          const instance = render(input, container);
          throwErrors();
          tracker.logUpdate(input);

          for (const update of steps) {
            if (typeof update === "function") {
              await update(document.documentElement);
              run();
              tracker.logUpdate(update);
            } else {
              instance.update(update);
              tracker.logUpdate(update);
            }

            throwErrors();
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
