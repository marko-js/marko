import * as compiler from "@marko/compiler";
import assert from "assert";
import fs from "fs";
import snap from "mocha-snap";
import path from "path";
import glob from "tiny-glob";

import type { Input } from "../common/types";
import * as tagsTranslator from "../translator";
import { bundle, createCSRRunner, createLinkedRunner } from "./utils/bundle";
import { captureConsole, type ConsoleRecord } from "./utils/capture-console";
import createBrowser from "./utils/create-browser";
import {
  type Flush,
  isFlush,
  isThrows,
  isWait,
  resetResolveState,
  resolveAfter,
  type Throws,
  type Wait,
} from "./utils/resolve";
import { stripInlineRuntime } from "./utils/strip-inline-runtime";
import createMutationTracker from "./utils/track-mutations";

type Step = Input | Wait | Flush | Throws | ((container: Element) => unknown);
type Steps = [Input, ...Step[]];
export type TestConfig = {
  steps?: Steps | (() => Steps | Promise<Steps>);
  embedded?: true;
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  skip_equivalent?: boolean;
  skip_resume?: boolean;
  error_compiler?: true | string[];
  error_runtime?: boolean;
};

describe("runtime-tags/translator", () => {
  testFixtures();
});

describe("translator-interop", () => {
  testFixtures(true);
});

function testFixtures(interop?: true) {
  const translator = interop
    ? require.resolve("marko/translator")
    : tagsTranslator;
  const fixturesDir = path.join(
    __dirname,
    interop ? "fixtures-interop" : "fixtures",
  );
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const fixtureDir = path.join(fixturesDir, entry);
      const resolve = (file: string) => path.join(fixtureDir, file);
      const relativeFixtureDir = path.relative(process.cwd(), fixtureDir);
      const templateFile = resolve("template.marko");
      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts")).config ?? {};
        } catch {
          return {};
        }
      })();
      const compileOpts: compiler.Config = {
        translator,
        writeVersionComment: false,
        babelConfig: {
          babelrc: false,
          configFile: false,
          browserslistConfigFile: false,
        },
      };
      const ssrCompileOpts: compiler.Config = {
        ...compileOpts,
        output: "html",
      };
      const csrCompileOpts: compiler.Config = {
        ...compileOpts,
        output: "dom",
      };
      const skipHTML = config.skip_html;
      const skipDOM = config.skip_dom;
      const skipSSR = skipHTML || config.skip_ssr || config.error_compiler; // TODO: remove
      const skipCSR = skipDOM || config.skip_csr || config.error_compiler;
      const skipResume =
        config.skip_resume !== false &&
        (config.skip_resume || skipSSR || skipCSR);
      const skipEquivalent = config.skip_equivalent || skipCSR || skipResume;
      const stripFixtureDir = async (str: string | Promise<string>) =>
        (await str).replaceAll(relativeFixtureDir, "__tests__");
      const snapMD = (fn: () => Promise<string>) =>
        (config.error_runtime ? snap.catch : snap)(
          () => stripFixtureDir(fn()),
          { ext: ".md", dir: fixtureDir },
        );
      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        const additionalMarkoFiles = await glob(resolve("**/*.marko"), {
          absolute: true,
          cwd: fixtureDir,
        });
        const finalConfig: compiler.Config = {
          ...compilerConfig,
          resolveVirtualDependency(_filename, { code, virtualPath }) {
            return `virtual:${virtualPath} ${code}`;
          },
        };
        const errors: Error[] = [];

        for (const file of additionalMarkoFiles) {
          try {
            const name = path.relative(fixtureDir, file);
            const isError =
              config.error_compiler === true ||
              config.error_compiler?.includes(name);
            const targetSnap = isError ? snap.catch : snap;

            await targetSnap(
              () => stripFixtureDir(compileCode(file, finalConfig)),
              {
                dir: fixtureDir,
                file: name.replace(".marko", isError ? ".error.txt" : ".js"),
              },
            );

            if (
              compilerConfig.output === "dom" &&
              file === templateFile &&
              !skipResume &&
              !config.error_compiler
            ) {
              await targetSnap(
                () => stripFixtureDir(bundle(file, finalConfig)),
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
        }

        if (errors.length > 1) {
          throw new AggregateError(
            errors,
            "\n" + errors.map((e) => e.toString()).join("\n"),
          );
        }
      };

      const csr = once(async () => {
        const browser = createBrowser();
        const runCSR = await createCSRRunner(
          templateFile,
          compileOpts,
          interop,
        );
        const { window } = browser;
        const { document } = window;
        const { input, steps } = await getSteps(config);
        const container = document.createElement("div");
        const tracker = createMutationTracker(browser, container);

        document.body.appendChild(container);

        const { default: template, run } = await runCSR(browser.ctx);
        const instance = template.mount(input, container, "afterbegin");
        tracker.logUpdate(input);

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (isFlush(update)) {
            continue;
          } else if (typeof update === "function") {
            tracker.beginUpdate();
            await update(document.documentElement);
            if (isThrows(update)) {
              try {
                run();
                throw new Error("Expected error to be thrown");
              } catch (err) {
                tracker.logError(update, err as Error);
                break;
              }
            } else {
              run();
              await 1; // allow a microtask before we log the update in order to catch mutation observers.
              tracker.logUpdate(update);
            }
          } else {
            instance.update(update);
            tracker.logUpdate(update);
          }
        }

        tracker.cleanup();
        return { browser, tracker };
      });

      const resume = once(async () => {
        const runner = await createLinkedRunner(
          fixtureDir,
          { template: "./template.marko" },
          compileOpts,
          interop,
        );
        const { input, steps } = await getSteps(config);
        const chunks: string[] = [];
        const logs: ConsoleRecord[][] = [];
        const capture = captureConsole();
        const { template } = await runner.runServer();

        try {
          for await (const data of template.render(
            config.embedded
              ? {
                  ...input,
                  $global: {
                    ...(input.$global as any),
                    renderId: "embedded",
                  },
                }
              : input,
          )) {
            chunks.push(data);
            logs.push(capture.records());
          }
          logs.push(capture.records());
        } finally {
          resetResolveState();
          capture.cleanup();
        }

        const browser = createBrowser(runner.assets);
        const { window } = browser;
        const { document } = window;
        const flushNext = browser.stream(chunks);
        let hasFlush = flushNext();
        let flushIndex = 0;
        const flushWithLog = () => {
          tracker.log(
            `# Write\n\`\`\`html\n${indent(stripInlineRuntime(chunks[++flushIndex]))}\n\`\`\``,
          );
          return flushNext();
        };
        const tracker = createMutationTracker(browser, document);

        for (const group of logs) {
          for (const { type, args } of group) {
            window.console[type](...args);
          }
        }

        tracker.beginUpdate();
        await browser.runAsyncScripts(() => tracker.logUpdate(input));
        const { run } = browser.ctx as typeof import("@marko/runtime-tags/dom");

        for (const update of steps) {
          if (isWait(update)) {
            await update();
          } else if (isFlush(update)) {
            if (hasFlush) {
              tracker.beginUpdate();
              hasFlush = flushWithLog();
              await browser.runAsyncScripts();
              tracker.logUpdate("FLUSH");
            }
          } else if (typeof update === "function") {
            tracker.beginUpdate();
            await update(document.documentElement);
            run();
            await 1; // allow a microtask before we log the update in order to catch mutation observers
            tracker.logUpdate(update);
          } else {
            // if new input is detected, stop testing
            // this will be covered by the client tests
            break;
          }
        }

        while (hasFlush) {
          await resolveAfter(0, 1);
          tracker.beginUpdate();
          hasFlush = flushWithLog();
          await browser.runAsyncScripts();
          run();
          tracker.logUpdate("FLUSH (auto)");
        }

        tracker.cleanup();

        return { browser, tracker };
      });

      describe("compile", () => {
        skipHTML || it("html", () => snapAllTemplates(ssrCompileOpts));
        skipDOM || it("dom", () => snapAllTemplates(csrCompileOpts));
      });

      describe("render", () => {
        beforeEach(resetResolveState);

        skipResume ||
          it("resume", async () => {
            await snapMD(async () => (await resume()).tracker.getLogs());
          });

        skipCSR ||
          it("csr", async () => {
            await snapMD(async () => (await csr()).tracker.getLogs());
          });
      });

      describe("sanitized", () => {
        beforeEach(resetResolveState);

        skipResume ||
          it("resume-sanitized", async () => {
            await snapMD(async () => (await resume()).tracker.getLogs(true));
          });

        skipCSR ||
          it("csr-sanitized", async () => {
            await snapMD(async () => (await csr()).tracker.getLogs(true));
          });

        skipEquivalent ||
          it("equivalent", async () => {
            if (config.error_runtime) {
              const resumeError = await resume()
                .then(() => {})
                .catch((err: Error) => err);
              const csrError = await csr()
                .then(() => {})
                .catch((err: Error) => err);
              if (!resumeError) throw new Error("Resume did not error.");
              if (!csrError) throw new Error("CSR did not error.");
              assert.strictEqual(resumeError.message, csrError.message);
              return;
            }

            const normalizeLog = (log: string) =>
              log.replace(/[cs]M_[a-z0-9]+/g, "%id");

            const resumeLogs = (await resume()).tracker
              .getRawLogs(true)
              .map(normalizeLog);
            const csrLogs = (await csr()).tracker
              .getRawLogs(true)
              .map(normalizeLog);

            let csrIndex = 0;
            let resumeIndex = 0;
            let actual = "";
            let expected = "";
            let prevResumeLog = "";

            while (resumeIndex < resumeLogs.length) {
              const resumeLog = resumeLogs[resumeIndex++].replace(
                /(# Render)[^\n]+/,
                "$1",
              );
              if (resumeLog !== prevResumeLog) {
                while (csrIndex < csrLogs.length) {
                  const csrLog = csrLogs[csrIndex++].replace(
                    /(# Render)[^\n]+/,
                    "$1",
                  );
                  if (csrLog === resumeLog) {
                    if (expected) expected += "\n\n";
                    expected += csrLog;
                    break;
                  }
                }
                if (actual) actual += "\n\n";
                actual += resumeLog;
              }
              prevResumeLog = resumeLog;
            }

            if (!expected && actual) {
              assert.strictEqual(csrLogs.join("\n\n"), resumeLogs.join("\n\n"));
            } else {
              assert.strictEqual(actual, expected);
            }
          });
      });
    });
  }
}

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}

async function getSteps(config: TestConfig) {
  const [input = {} as Input, ...steps] =
    typeof config.steps === "function"
      ? await config.steps()
      : (config.steps ?? []);
  return { input, steps };
}

function once<T>(fn: () => Promise<T>): () => Promise<T> {
  let cached: Promise<T> | undefined;
  return () => (cached ??= fn());
}

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");
}
