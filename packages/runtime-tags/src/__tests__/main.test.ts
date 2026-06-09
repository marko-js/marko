import * as compiler from "@marko/compiler";
import fs from "fs";
import { html_beautify } from "js-beautify";
import path from "path";

import type { Input } from "../common/types";
import * as tagsTranslator from "../translator";
import {
  type ChunkSizes,
  createClientRunner,
  createServerRunner,
  getSizes,
  type Sizes,
} from "./utils/bundle";
import { captureConsole, type ConsoleRecord } from "./utils/capture-console";
import createBrowser from "./utils/create-browser";
import {
  type Flush,
  type FlushType,
  isFlush,
  isThrows,
  isWait,
  resetResolveState,
  resolveAfter,
  type Throws,
  type Wait,
} from "./utils/resolve";
import { snap } from "./utils/snap";
import {
  stripDebugRuntime,
  stripOptimizeRuntime,
} from "./utils/strip-inline-runtime";
import createMutationTracker from "./utils/track-mutations";

type Step = Input | Wait | Flush | Throws | ((container: Element) => unknown);
type Steps = [Input, ...Step[]];
export type TestConfig = {
  steps?: Steps | (() => Steps | Promise<Steps>);
  embedded?: true;
  equivalent?: boolean;
  error_dom?: boolean;
  error_html?: boolean;
  skip_optimize?: boolean;
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  error_compiler?: true | string[];
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
      const hasCompilerError = !!config.error_compiler;
      const skipHTML = config.skip_html;
      const skipDOM = config.skip_dom;
      const stripFixtureDir = async (str: string | Promise<string>) =>
        (await str).replaceAll(relativeFixtureDir, "__tests__");

      if (!fs.existsSync(templateFile)) {
        console.warn(
          `Template missing for fixture: ${path.relative(process.cwd(), templateFile)}`,
        );
        return;
      }

      for (const mode of config.skip_optimize
        ? ["debug"]
        : (["debug", "optimize"] as const)) {
        describe(mode, () => {
          const optimize = mode === "optimize";
          const equivalent = config.equivalent !== false;
          const skipSSR =
            hasCompilerError || skipDOM || skipHTML || config.skip_ssr;
          const skipCSR = hasCompilerError || skipDOM || config.skip_csr;
          const stats: {
            dom?: Record<string, ChunkSizes | Sizes>;
            html?: Sizes;
          } = {};
          const getModeOpts = once(
            (): compiler.Config => ({
              translator,
              writeVersionComment: false,
              babelConfig: {
                babelrc: false,
                configFile: false,
                browserslistConfigFile: false,
              },
              optimize,
              optimizeKnownTemplates: optimize
                ? (
                    fs.readdirSync(fixtureDir, {
                      recursive: true,
                    }) as string[]
                  )
                    .filter((f) => f.endsWith(".marko"))
                    .map((f) => path.join(fixtureDir, f))
                : undefined,
            }),
          );

          const ssrRunner = once(() =>
            createServerRunner(
              fixtureDir,
              { template: "./template.marko" },
              getModeOpts(),
              interop,
            ),
          );

          const snapMode = (
            fn: () => unknown,
            file: string,
            expectErr?: boolean,
            actualFile?: string,
          ) => {
            const resolvedFile =
              expectErr && actualFile ? `${actualFile}.error.txt` : file;
            return snap(
              fn,
              fixtureDir,
              optimize
                ? resolvedFile
                : resolvedFile.replace(/(\.[^.]+)$/, ".debug$1"),
              expectErr,
              actualFile &&
                (optimize
                  ? actualFile
                  : actualFile.replace(/(\.[^.]+)$/, ".debug$1")),
            );
          };

          const snapCompile = async (output: "html" | "dom") => {
            if (config.error_compiler) {
              await snapMode(
                () => {
                  for (const f of config.error_compiler === true
                    ? [templateFile]
                    : (config.error_compiler as string[]).map(resolve)) {
                    compiler.compileFileSync(f, { ...getModeOpts(), output });
                  }
                },
                `error-compile-${output}.txt`,
                true,
              );
              return;
            }

            await snapMode(async () => {
              const runner = await ssrRunner();
              const { snapshot, sizes } = await runner[`${output}Bundle`]();
              if (optimize && sizes) stats.dom = sizes;
              return stripFixtureDir(snapshot);
            }, `${output}.bundle.js`);
          };

          const csr = once(async () => {
            resetResolveState();
            const browser = createBrowser();
            const runClient = await createClientRunner(
              templateFile,
              getModeOpts(),
              interop,
            );
            const { document } = browser.window;
            const { input, steps } = await getSteps(config);
            const tracker = createMutationTracker(browser);
            const { template, run } = await runClient(browser.ctx);
            const instance = template.mount(input, document.body, "afterbegin");
            tracker.logRender(input);

            await runSteps(steps, tracker, browser, run, {
              onInput(input) {
                instance.update(input);
                tracker.logUpdate(input);
              },
            });

            tracker.cleanup();
            return { browser, tracker };
          });

          const ssr = once(async () => {
            resetResolveState();
            const runner = await ssrRunner();
            const { input, steps } = await getSteps(config);
            const chunks: string[] = [];
            const logs: ConsoleRecord[][] = [];
            const capture = captureConsole();

            try {
              const { template } = await runner.runServer();
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
            const flushNext = browser.stream(chunks);
            const flushAndRun = async () => {
              hasFlush = flushNext();
              await browser.runAsyncScripts();
              run();
            };
            let hasFlush = flushNext();
            const tracker = createMutationTracker(browser);

            for (const group of logs) {
              for (const { type, args } of group) {
                window.console[type](...args);
              }
            }

            await browser.runAsyncScripts(() => tracker.logRender(input));
            const { run } =
              browser.ctx as typeof import("@marko/runtime-tags/dom");

            await runSteps(steps, tracker, browser, run, {
              onFlush: hasFlush ? flushAndRun : undefined,
            });

            while (hasFlush) {
              await resolveAfter(0, 1);
              tracker.beginUpdate();
              await flushAndRun();
              tracker.logUpdate();
            }

            tracker.cleanup();

            return { browser, tracker, chunks };
          });

          skipHTML || it("html", () => snapCompile("html"));
          skipDOM || it("dom", () => snapCompile("dom"));

          optimize &&
            !hasCompilerError &&
            after(() => {
              fs.writeFileSync(
                path.join(fixtureDir, "sizes.json"),
                JSON.stringify(stats, null, 2) + "\n",
              );
            });

          skipSSR ||
            it("ssr", async () => {
              await snapMode(
                async () => {
                  const { tracker, chunks } = await ssr();
                  await snapMode(async () => {
                    const pretty = html_beautify(
                      (optimize ? stripOptimizeRuntime : stripDebugRuntime)(
                        stripDefaultScript(
                          chunks.join("\n\n<!-- FLUSH -->\n\n"),
                        ),
                      ),
                      {
                        indent_size: 2,
                        wrap_line_length: 80,
                        end_with_newline: false,
                      },
                    );

                    if (optimize) {
                      stats.html = await getSizes(
                        stripDefaultScript(chunks.join("")),
                      );
                    }

                    return `${pretty}\n`;
                  }, "writes.html");
                  return tracker.getLogs();
                },
                equivalent ? "render.md" : "render-ssr.md",
                config.error_html,
                "ssr",
              );
            });

          skipCSR ||
            it("csr", () =>
              snapMode(
                async () => stripFixtureDir((await csr()).tracker.getLogs()),
                equivalent ? "render.md" : "render-csr.md",
                config.error_dom,
                "csr",
              ));
        });
      }
    });
  }
}

async function runSteps(
  steps: Step[],
  tracker: ReturnType<typeof createMutationTracker>,
  browser: ReturnType<typeof createBrowser>,
  run: () => void,
  opts: {
    onInput?: (input: Input) => void;
    onFlush?: () => Promise<void>;
  },
) {
  for (const update of steps) {
    if (isWait(update)) {
      await update();
      await browser.runAsyncScripts();
      run();
      tracker.logUpdate();
    } else if (isFlush(update)) {
      if (update.flushType === "stream") {
        if (opts.onFlush) {
          tracker.beginUpdate();
          await opts.onFlush();
          tracker.logUpdate();
        }
      } else {
        tracker.beginUpdate();
        browser.flush(update.flushType as Exclude<FlushType, "stream">);
        run();
        tracker.logUpdate();
      }
    } else if (typeof update === "function") {
      tracker.beginUpdate();
      await update(browser.window.document.documentElement);
      run();
      await browser.runAsyncScripts();
      run();
      if (isThrows(update)) {
        tracker.logErrors(update);
      } else {
        tracker.logUpdate(update);
      }
    } else if (opts.onInput) {
      opts.onInput(update);
    } else {
      // if new input is detected, stop testing
      // this will be covered by the client tests
      break;
    }
  }
}

async function getSteps(config: TestConfig) {
  const [input = {} as Input, ...steps] =
    typeof config.steps === "function"
      ? await config.steps()
      : (config.steps ?? []);
  return { input, steps };
}

function stripDefaultScript(html: string) {
  return html.replace(
    `<script async type=module src="template.marko.page.mjs"></script>`,
    "",
  );
}

function once<T>(fn: () => T): () => T {
  let cached: T | undefined;
  return () => (cached ??= fn());
}
