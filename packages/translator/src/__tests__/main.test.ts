import fs from "fs";
import path from "path";
import assert from "assert";
import snap from "mocha-snap";
import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import createBrowser from "./utils/create-browser";
import createMutationTracker from "./utils/track-mutations";
import glob from "tiny-glob";
import reorderRuntime from "@marko/runtime-fluurt/src/html/reorder-runtime";
import createTrackMutations from "./utils/track-mutations";
import type { Writable } from "stream";
import type { DOMWindow } from "jsdom";

const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

type TestConfig = {
  context?: Record<string, unknown>;
  steps?: unknown[] | (() => Promise<unknown[]>);
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  skip_hydrate?: boolean;
};

type Result = {
  browser: ReturnType<typeof createBrowser>;
  tracker: ReturnType<typeof createMutationTracker>;
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
      const snapMD = (fn: () => unknown, postfix = "") =>
        snap(fn, `${postfix}.md`, fixtureDir);
      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        const additionalMarkoFiles = await glob(resolve("**/*.marko"));
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

      let ssrResult: Result;
      let csrResult: Result;
      let hydrateResult: Result;

      const ssr = async () => {
        if (ssrResult) return ssrResult;

        const serverTemplate = require(templateFile);

        let buffer = "";
        // let flushCount = 0;

        const browser = createBrowser({
          dir: __dirname,
          extensions: register({
            ...domConfig,
            extensions: {},
          }),
        });
        const document = browser.window.document;
        const [input] =
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || [];

        document.open();

        const tracker = createTrackMutations(browser.window, document);

        await serverTemplate.render(input, config.context, {
          write(data: string) {
            buffer += data;
            tracker.log(
              `# Write\n${indent(
                data.replace(reorderRuntimeString, "REORDER_RUNTIME")
              )}`
            );
          },
          flush() {
            // tracker.logUpdate("Flush");
            // document.write(buffer);
            // buffer = "";
          },
          end(data?: string) {
            document.write(buffer + (data || ""));
            document.close();
            tracker.logUpdate("End");
          },
          emit(type: string, ...args: unknown[]) {
            // console.log(...args);
            tracker.log(
              `# Emit ${type}${args.map((arg) => `\n${indent(arg)}`)}`
            );
          },
        } as Writable & { flush(): void });

        tracker.cleanup();

        return (ssrResult = { browser, tracker });
      };

      const csr = async () => {
        if (csrResult) return csrResult;

        const browser = createBrowser({
          dir: __dirname,
          extensions: register({
            ...domConfig,
            extensions: {},
          }),
        });

        const { window } = browser;
        const { document } = window;
        const throwErrors = trackErrors(window);

        const [input, ...steps] =
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || [];
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

        tracker.cleanup();

        return (csrResult = { browser, tracker });
      };

      const hydrate = async () => {
        if (hydrateResult) return hydrateResult;
        const { browser } = await ssr();
        const { window } = browser;
        const { document } = window;
        const throwErrors = trackErrors(window);
        const tracker = createTrackMutations(window, document);
        const [input, ...steps] =
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || [];

        const { run, init } = browser.require(
          "@marko/runtime-fluurt/src/dom"
        ) as typeof import("@marko/runtime-fluurt/src/dom");

        if (!config.skip_hydrate) {
          browser.require(templateFile);
          init();
          throwErrors();
          tracker.logUpdate(input);
        }

        for (const update of steps) {
          if (typeof update === "function") {
            await update(document.documentElement);
            run();
            tracker.logUpdate(update);
          } else {
            // if new input is detected, stop testing
            // this will be covered by the client tests
            break;
          }

          throwErrors();
        }

        tracker.cleanup();

        return (hydrateResult = { browser, tracker });
      };

      describe("compile", () => {
        (config.skip_html ? it.skip : it)("html", () =>
          snapAllTemplates(htmlConfig)
        );

        (config.skip_dom ? it.skip : it)("dom", () =>
          snapAllTemplates(domConfig)
        );
      });

      describe("render", () => {
        (config.skip_ssr ? it.skip : it)("ssr", async () => {
          await snapMD(async () => (await ssr()).tracker.getLogs());
        });

        (config.skip_ssr || config.skip_hydrate ? it.skip : it)(
          "hydrate",
          async () => {
            await snapMD(async () => (await hydrate()).tracker.getLogs());
          }
        );

        (config.skip_csr ? it.skip : it)("csr", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs());
        });
      });

      describe("sanitized", () => {
        (config.skip_ssr ? it.skip : it)("ssr-sanitized", async () => {
          await snapMD(async () => (await ssr()).tracker.getLogs(true), "");
        });

        (config.skip_ssr || config.skip_hydrate ? it.skip : it)(
          "hydrate-sanitized",
          async () => {
            await snapMD(
              async () => (await hydrate()).tracker.getLogs(true),
              ""
            );
          }
        );

        (config.skip_csr ? it.skip : it)("csr-sanitized", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs(true), "");
        });

        (config.skip_ssr || config.skip_csr || config.skip_hydrate
          ? it.skip
          : it)("equivalent", async () => {
          assert.strictEqual(
            (await csr()).tracker.getLogs(true).replace(/[cs]\d+/g, "%id"),
            (await hydrate()).tracker.getLogs(true).replace(/[cs]\d+/g, "%id")
          );
        });
      });
    });
  }
});

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");
}

function trackErrors(window: DOMWindow) {
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

  return throwErrors;
}
