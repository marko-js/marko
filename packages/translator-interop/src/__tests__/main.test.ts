import fs from "fs";
import path from "path";
import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import type { Input, Template } from "@marko/runtime-tags/src/common/types";
import reorderRuntime from "@marko/runtime-tags/src/html/reorder-runtime";
import type { DOMWindow } from "jsdom";
import snap from "mocha-snap";
import glob from "tiny-glob";
import createBrowser from "../../../translator-tags/src/__tests__/utils/create-browser";
import { isWait } from "../../../translator-tags/src/__tests__/utils/resolve";
import createMutationTracker from "../../../translator-tags/src/__tests__/utils/track-mutations";

const runtimeId = "X";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId,
);

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

type Result = {
  browser: ReturnType<typeof createBrowser>;
  tracker: ReturnType<typeof createMutationTracker>;
};

type TestConfig = {
  steps?: unknown[] | (() => Promise<unknown[]>);
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  skip_resume?: boolean;
  manual_csr?: boolean;
  manual_ssr?: boolean;
  manual_resume?: boolean;
  error_compiler?: boolean;
  error_runtime?: boolean;
};

describe("translator-interop", () => {
  before(() => {
    uncachePackage("@marko/translator-default");
    uncachePackage("@marko/translator-tags");
    register({ ...htmlConfig, modules: "cjs" });
  });

  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");
      const templateFile = resolve("template.marko");

      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts"));
          // eslint-disable-next-line no-empty
        } catch {
          return {};
        }
      })();

      const snapMD = (fn: () => unknown) =>
        (config.error_runtime ? snap.catch : snap)(fn, {
          ext: `.md`,
          dir: fixtureDir,
        });

      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        const additionalMarkoFiles = await glob(resolve("**/*.marko"));
        const finalConfig: compiler.Config = {
          ...compilerConfig,
          resolveVirtualDependency(_filename, { code, virtualPath }) {
            return `virtual:${virtualPath} ${code}`;
          },
        };
        const errors: Error[] = [];
        const targetSnap = /* config.error_compiler ? snap.catch : */ snap;

        for (const file of additionalMarkoFiles) {
          const name = path
            .relative(fixtureDir, file)
            .replace(
              ".marko",
              /* config.error_compiler ? ".error.txt" : */ ".js",
            );
          await targetSnap(() => compileCode(file, finalConfig), {
            file: name,
            dir: fixtureDir,
          });
        }

        if (errors.length === 1) {
          throw errors[0];
        } else if (errors.length > 1) {
          throw new AggregateError(
            errors,
            "\n" + errors.map((e) => e.toString()).join("\n"),
          );
        }
      };

      let ssrResult: Result;
      let csrResult: Result;
      let resumeResult: Result;

      const ssr = async () => {
        if (ssrResult) return ssrResult;

        const serverTemplate = require(templateFile).default as Template;

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
        const [input] = (
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || []
        ) as [Input];

        document.open();

        const tracker = createMutationTracker(browser.window, document);

        try {
          const iteratable = serverTemplate.render(input);
          for await (const data of iteratable) {
            buffer += data;
            tracker.log(
              `# Write\n${indent(
                data.replace(reorderRuntimeString, "REORDER_RUNTIME"),
              )}`,
            );
          }
          document.write(`<html><body>${buffer}</body></html>`);
          document.close();
          tracker.logUpdate("End");
        } catch (error) {
          tracker.log(`# Emit error\n${indent(error)}`);
          document.write(`<html><body>${buffer}</body></html>`);
          document.close();
          tracker.logUpdate("Error");
        }

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

        const [input = {}, ...steps] = (
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || []
        ) as [Input, ...unknown[]];
        const template = browser.require(templateFile).default as Template;
        const container = Object.assign(document.createElement("div"), {
          TEST_ROOT: true,
        });
        const tracker = createMutationTracker(browser.window, container);

        document.body.appendChild(container);

        const instance = template.mount(input, container, "beforeend");

        const { run } = browser.require(
          "@marko/runtime-tags/dist/debug/dom",
        ) as typeof import("../../../runtime-tags/src/dom");
        const { ___componentLookup } = browser.require(
          "marko/src/node_modules/@internal/components-util/index-browser",
        );

        function runUpdates() {
          run();
          Object.values(___componentLookup).forEach((c: any) => c.update());
        }

        throwErrors();
        tracker.logUpdate(input);

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (typeof update === "function") {
            await update(document.documentElement);
            runUpdates();
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

      const resume = async () => {
        if (resumeResult) return resumeResult;
        const { browser } = await ssr();
        const { window } = browser;
        const { document } = window;
        const throwErrors = trackErrors(window);
        const tracker = createMutationTracker(window, document);
        const [input, ...steps] =
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || [];

        const { run, init } = browser.require(
          "@marko/runtime-tags/dist/debug/dom",
        ) as typeof import("@marko/runtime-tags/src/dom");

        browser.require(templateFile);
        browser.require("marko/src/runtime/components");
        init();
        browser.window.$initComponents();
        throwErrors();
        tracker.logUpdate(input);

        const { ___componentLookup } = browser.require(
          "marko/src/node_modules/@internal/components-util/index-browser",
        );

        function runUpdates() {
          run();
          Object.values(___componentLookup).forEach((c: any) => c.update());
        }

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (typeof update === "function") {
            await update(document.documentElement);
            runUpdates();
            tracker.logUpdate(update);
          } else {
            // if new input is detected, stop testing
            // this will be covered by the client tests
            break;
          }

          throwErrors();
        }

        tracker.cleanup();

        return (resumeResult = { browser, tracker });
      };

      describe("compile", () => {
        it("html", () => snapAllTemplates(htmlConfig));
        it("dom", () => snapAllTemplates(domConfig));
      });

      describe("render", () => {
        (config.skip_ssr ? it.skip : it)("ssr", async () => {
          await snapMD(async () => (await ssr()).tracker.getLogs());
        });

        (config.skip_resume ? it.skip : it)("resume", async () => {
          await snapMD(async () => (await resume()).tracker.getLogs());
        });

        (config.skip_csr ? it.skip : it)("csr", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs());
        });
      });
    });
  }
});

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}

function uncachePackage(packageName: string) {
  const resolved = require.resolve(packageName);
  const root = path.dirname(resolved);
  Object.keys(require.cache).forEach((key) => {
    if (key.startsWith(root)) {
      delete require.cache[key];
    }
  });
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

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");
}
