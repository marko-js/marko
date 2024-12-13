import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import type { Input, Template } from "@marko/runtime-tags/common/types";
import assert from "assert";
import fs from "fs";
import type { DOMWindow } from "jsdom";
import snap from "mocha-snap";
import path from "path";
import glob from "tiny-glob";
import { isDeepStrictEqual } from "util";

import * as translator from "..";
import { bundle } from "./utils/bundle";
import createBrowser from "./utils/create-browser";
import { isThrows, isWait } from "./utils/resolve";
import { stripInlineRuntime } from "./utils/strip-inline-runtime";
import createMutationTracker from "./utils/track-mutations";

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
  error_compiler?: true | string[];
  error_runtime?: boolean;
};

type TestHooks = {
  before?: () => void;
  after?: () => void;
};

type Result = {
  browser: ReturnType<typeof createBrowser>;
  tracker: ReturnType<typeof createMutationTracker>;
};

const baseConfig: compiler.Config = {
  translator,
  babelConfig: {
    babelrc: false,
    configFile: false,
  },
  writeVersionComment: false,
};

const htmlConfig: compiler.Config = { ...baseConfig, output: "html" };
const domConfig: compiler.Config = { ...baseConfig, output: "dom" };
const snapCache = new Map<unknown, unknown>();

describe("runtime-tags/translator", () => {
  before(() => {
    register({ ...htmlConfig, modules: "cjs" });
  });

  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");
      const relativeFixtureDir = path.relative(process.cwd(), fixtureDir);
      const serverFile = resolve("server.ts");
      const resumeFile = resolve("resume.ts");
      const browserFile = resolve("browser.ts");
      const templateFile = resolve("template.marko");
      const hasTemplate = fs.existsSync(templateFile);
      const snapshotsDir = resolve("__snapshots__");
      const nameCacheFile = path.join(snapshotsDir, ".name-cache.json");
      const nameCache = (() => {
        try {
          return JSON.parse(fs.readFileSync(nameCacheFile, "utf-8")) as Record<
            string,
            unknown
          >;
        } catch {
          try {
            fs.mkdirSync(snapshotsDir, { recursive: true });
          } catch {
            // ignore
          }
          return {};
        }
      })();
      const initialNameCache = structuredClone(nameCache);
      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts"));
        } catch {
          return {};
        }
      })();
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
        config.skip_resume !== false &&
        (!(manualResume ? fs.existsSync(resumeFile) : hasTemplate) ||
          config.skip_resume ||
          skipSSR ||
          skipCSR);
      const stripFixtureDir = async (str: string | Promise<string>) =>
        (await str).replaceAll(relativeFixtureDir, "__tests__");
      const snapMD = (fn: () => Promise<string>) =>
        (config.error_runtime ? snap.catch : snap)(
          () => stripFixtureDir(fn()),
          {
            ext: `.md`,
            dir: fixtureDir,
          },
        );
      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        const additionalMarkoFiles = await glob(resolve("**/*.marko"), {
          absolute: true,
          cwd: fixtureDir,
        });
        const finalConfig: compiler.Config = {
          ...compilerConfig,
          cache: snapCache, // these need a different cache since they `resolveVirtualDependency` is relevant to the compile cache.
          resolveVirtualDependency(_filename, { code, virtualPath }) {
            return `virtual:${virtualPath} ${code}`;
          },
        };
        const errors: Error[] = [];

        for (const file of additionalMarkoFiles) {
          try {
            const name = path.relative(fixtureDir, file);
            let snapName = name;
            let targetSnap: typeof snap.catch = snap;
            if (
              config.error_compiler === true ||
              config.error_compiler?.includes(name)
            ) {
              snapName = name.replace(".marko", ".error.txt");
              targetSnap = snap.catch;
            } else {
              snapName = name.replace(".marko", ".js");
            }

            await targetSnap(
              () => stripFixtureDir(compileCode(file, finalConfig)),
              {
                file: snapName,
                dir: fixtureDir,
              },
            );

            if (
              compilerConfig.output === "dom" &&
              file === templateFile &&
              !skipResume &&
              !config.error_compiler
            ) {
              await targetSnap(
                () => stripFixtureDir(bundle(file, nameCache, finalConfig)),
                {
                  file: name.replace(".marko", ".hydrate.js"),
                  dir: fixtureDir,
                },
              );
            }
          } catch (e) {
            errors.push(e as Error);
          }
        }

        if (errors.length === 1) {
          throw errors[0];
        } else if (errors.length > 1) {
          console.error(errors);
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
        const hooks: TestHooks = (() => {
          try {
            return require(resolve("hooks.ts"));
          } catch {
            return {};
          }
        })();

        hooks.before?.();

        const serverTemplate = require(manualSSR ? serverFile : templateFile)
          .default as Template;

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
        const [input = {}] = (
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || []
        ) as [Input];

        document.open();

        const tracker = createMutationTracker(browser.window, document);

        try {
          for await (const data of serverTemplate.render(input)) {
            buffer += data;
            tracker.log(`# Write\n${indent(stripInlineRuntime(data))}`);
          }
          document.write(buffer);
          document.close();
          tracker.logUpdate("End");
        } catch (error) {
          tracker.log(`# Emit error\n${indent(error)}`);
          document.write(buffer);
          document.close();
          tracker.logUpdate("Error");
        }

        tracker.cleanup();

        hooks.after?.();

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

        const hooks: TestHooks = (() => {
          try {
            return browser.require(resolve("hooks.ts"));
          } catch {
            return {};
          }
        })();

        hooks.before?.();

        const { window } = browser;
        const { document } = window;
        const throwErrors = trackErrors(window);

        const [input, ...steps] = (
          typeof config.steps === "function"
            ? await config.steps()
            : config.steps || []
        ) as [Input, ...unknown[]];
        const { run } = browser.require<
          typeof import("@marko/runtime-tags/dom")
        >("@marko/runtime-tags/dom");
        const template = browser.require<{ default: Template }>(
          manualCSR ? browserFile : templateFile,
        ).default;
        const container = Object.assign(document.createElement("div"), {
          TEST_ROOT: true,
        });
        const tracker = createMutationTracker(browser.window, container);

        document.body.appendChild(container);

        const instance = template.mount(input, container, "afterbegin");
        throwErrors();
        tracker.logUpdate(input);

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (typeof update === "function") {
            tracker.beginUpdate();
            await update(document.documentElement);
            if (isThrows(update)) {
              try {
                run();
                throw new Error("Expected error to be thrown");
              } catch (err) {
                tracker.logUpdate(update, err as Error);
                throwErrors();
                break;
              }
            } else {
              run();
              tracker.logUpdate(update);
            }
          } else {
            instance.update(update);
            tracker.logUpdate(update);
          }

          throwErrors();
        }

        tracker.cleanup();

        hooks.after?.();

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

        // TODO: when this is removed, the resume test will fail if run by itself... why?
        await new Promise((resolve) => setTimeout(resolve, 10));

        const { run, init } = browser.require<
          typeof import("@marko/runtime-tags/dom")
        >("@marko/runtime-tags/dom");

        browser.require(manualResume ? resumeFile : templateFile);
        init();
        throwErrors();
        tracker.logUpdate(input);

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (typeof update === "function") {
            tracker.beginUpdate();
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

      after(() => {
        if (!isDeepStrictEqual(initialNameCache, nameCache)) {
          fs.writeFileSync(
            nameCacheFile,
            JSON.stringify(nameCache, null, 2) + "\n",
          );
        }
      });

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
            csrLogs.join("\n\n").replace(/[cs]M_[a-z0-9]+/g, "%id"),
            resumeLogs.join("\n\n").replace(/[cs]M_[a-z0-9]+/g, "%id"),
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
