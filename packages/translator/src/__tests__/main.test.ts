import "./test-globals";
import fs from "fs";
import path from "path";
import assert from "assert";
import snap from "mocha-snap";
import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import glob from "tiny-glob";
import reorderRuntime from "@marko/runtime-fluurt/src/html/reorder-runtime";
import type { DOMWindow } from "jsdom";
import createBrowser from "./utils/create-browser";
import createMutationTracker from "./utils/track-mutations";
import { isWait } from "./utils/resolve";

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
  skip_resume?: boolean;
  manual_csr?: boolean;
  manual_ssr?: boolean;
  manual_resume?: boolean;
  error_compiler?: boolean;
  error_runtime?: boolean;
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

describe("translator-tags", () => {
  before(() => {
    register({ ...htmlConfig, modules: "cjs" });
  });

  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");
      const serverFile = resolve("server.ts");
      const resumeFile = resolve("resume.ts");
      const browserFile = resolve("browser.ts");
      const templateFile = resolve("template.marko");
      const hasTemplate = fs.existsSync(templateFile);
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
        const targetSnap = config.error_compiler ? snap.catch : snap;

        for (const file of additionalMarkoFiles) {
          try {
            const name = path
              .relative(fixtureDir, file)
              .replace(".marko", config.error_compiler ? ".error.txt" : ".js");
            await targetSnap(() => compileCode(file, finalConfig), {
              file: name,
              dir: fixtureDir,
            });
          } catch (e) {
            errors.push(e as Error);
          }
        }

        if (errors.length === 1) {
          throw errors[0];
        } else if (errors.length > 1) {
          throw new AggregateError(
            errors,
            "\n" + errors.map((e) => e.toString()).join("\n")
          );
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
      let resumeResult: Result;

      const skipHTML = !hasTemplate || config.skip_html;
      const skipDOM = !hasTemplate || config.skip_dom;

      const manualSSR = skipHTML || config.manual_ssr;
      const manualCSR = skipDOM || config.manual_csr;
      const manualResume = skipHTML || skipDOM || config.manual_resume;

      const skipSSR =
        !(manualSSR ? fs.existsSync(serverFile) : hasTemplate) ||
        config.skip_ssr ||
        config.error_compiler;
      const skipCSR =
        !(manualCSR ? fs.existsSync(browserFile) : hasTemplate) ||
        config.skip_csr ||
        config.error_compiler;
      const skipResume =
        !(manualResume ? fs.existsSync(resumeFile) : hasTemplate) ||
        config.skip_resume ||
        skipSSR ||
        skipCSR;

      const ssr = async () => {
        if (ssrResult) return ssrResult;

        const serverTemplate = require(manualSSR
          ? serverFile
          : templateFile).default;

        let buffer = "";
        // let flushCount = 0;

        const browser = createBrowser({
          dir: __dirname,
          extensions: register({
            ...domConfig,
            modules: "cjs",
            extensions: {},
          }),
        });
        const document = browser.window.document;
        const [input] =
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || [];

        document.open();

        const tracker = createMutationTracker(browser.window, document);

        await serverTemplate.writeTo(
          {
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
          },
          input,
          config.context
        );

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
        const template = browser.require(
          manualCSR ? browserFile : templateFile
        ).default;
        const container = Object.assign(document.createElement("div"), {
          TEST_ROOT: true,
        });
        const tracker = createMutationTracker(browser.window, container);

        document.body.appendChild(container);

        const instance = template.insertBefore(container, null, input);
        throwErrors();
        tracker.logUpdate(input);

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (typeof update === "function") {
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
          "@marko/runtime-fluurt/src/dom"
        ) as typeof import("@marko/runtime-fluurt/src/dom");

        browser.require(manualResume ? resumeFile : templateFile);
        init();
        throwErrors();
        tracker.logUpdate(input);

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (typeof update === "function") {
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

        return (resumeResult = { browser, tracker });
      };

      describe("compile", () => {
        (skipHTML ? it.skip : it)("html", () => snapAllTemplates(htmlConfig));

        (skipDOM ? it.skip : it)("dom", () => snapAllTemplates(domConfig));
      });

      describe("render", () => {
        (skipSSR ? it.skip : it)("ssr", async () => {
          await snapMD(async () => (await ssr()).tracker.getLogs());
        });

        (skipResume ? it.skip : it)("resume", async () => {
          await snapMD(async () => (await resume()).tracker.getLogs());
        });

        (skipCSR ? it.skip : it)("csr", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs());
        });
      });

      describe("sanitized", () => {
        (skipSSR ? it.skip : it)("ssr-sanitized", async () => {
          await snapMD(async () => (await ssr()).tracker.getLogs(true));
        });

        (skipResume ? it.skip : it)("resume-sanitized", async () => {
          await snapMD(async () => (await resume()).tracker.getLogs(true));
        });

        (skipCSR ? it.skip : it)("csr-sanitized", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs(true));
        });

        (skipCSR || skipResume ? it.skip : it)("equivalent", async () => {
          const resumeLogs = (await resume()).tracker.getRawLogs(true);
          // when the steps for a test contains more than one input,
          // the updates are not run for the resume test
          // so we trim the csrLogs to match the number of resumeLogs
          const csrLogs = (await csr()).tracker
            .getRawLogs(true)
            .slice(0, resumeLogs.length);
          assert.strictEqual(
            csrLogs.join("\n\n").replace(/[cs]\d+/g, "%id"),
            resumeLogs.join("\n\n").replace(/[cs]\d+/g, "%id")
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
