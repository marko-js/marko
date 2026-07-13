import * as compiler from "@marko/compiler";
import assert from "assert";
import fs from "fs";
import { html_beautify } from "js-beautify";
import path from "path";

import { DEFAULT_RUNTIME_ID } from "../common/meta";
import type { Input } from "../common/types";
import * as tagsTranslator from "../translator";
import {
  type ChunkSizes,
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
  isNavigate,
  isThrows,
  isWait,
  type Navigate,
  persistedModeFrom,
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

type Step =
  Input | Wait | Flush | Throws | Navigate | ((container: Element) => unknown);
type Steps = [Input, ...Step[]];
export type TestConfig = {
  steps?: Steps | (() => Steps | Promise<Steps>);
  embedded?: true;
  equivalent?: boolean;
  /**
   * Completes lazy load module scripts in the given order (file names);
   * unlisted load scripts follow in document order.
   */
  load_order?: string[];
  error_dom?: boolean;
  error_html?: boolean;
  skip_optimize?: boolean;
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  error_compiler?: true | string[];
  /** Compiles the fixture with a custom `runtimeId` compiler option. */
  runtime_id?: string;
  /**
   * Compiles the fixture with the `persisted` compiler option (single-page
   * server-first updates). Pair with `$global.persisted` in the fixture
   * input to exercise persisted-mode serialization. Persisted entries ship no
   * fills-path construction material for never-rendered content; pair
   * divergent navigations with `$global.persistedFragment`.
   */
  persisted?: boolean;
};

// `scripts/test-parallel` fans the fixtures across CPU cores by giving each
// worker a subset of round-robin "slots" via the env below: a fixture runs here
// when `index % slotTotal` is one of this worker's slots. Round-robin keeps the
// expensive fixtures spread evenly across workers. With no env set (a plain
// `npm test`, or a scoped `--grep`) `slots` is null and every fixture runs.
const slotTotal = Number(process.env.MARKO_TEST_SLOT_TOTAL) || 1;
const slots = process.env.MARKO_TEST_SLOTS
  ? new Set(process.env.MARKO_TEST_SLOTS.split(",").map(Number))
  : null;
function inShard(index: number) {
  return slots === null || slots.has(index % slotTotal);
}

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
  let fixtureIndex = 0;
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;
    if (!inShard(fixtureIndex++)) continue;

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
          const skipCSR =
            optimize || hasCompilerError || skipDOM || config.skip_csr;
          const stats: {
            dom?: Record<string, ChunkSizes | Sizes>;
            html?: Sizes;
          } = {};
          const browsers: ReturnType<typeof createBrowser>[] = [];

          // Mocha retains suite closures for the entire run, so the cached
          // browsers/bundles are released once the fixture finishes to keep
          // memory from growing with the fixture count.
          after(() => {
            for (const browser of browsers) {
              browser.window.close();
            }
            browsers.length = 0;
            getModeOpts.reset();
            ssrRunner.reset();
            csr.reset();
            ssr.reset();
          });
          const getModeOpts = once((): compiler.Config => ({
            translator,
            runtimeId: config.runtime_id,
            persisted: config.persisted,
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
          }));

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
                    compiler.compileFileSync(f, {
                      ...getModeOpts(),
                      linkAssets: { runtime: "asset-runtime", onAsset() {} },
                      output,
                    });
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
            browsers.push(browser);
            const runClient = (await ssrRunner()).clientRunner!;
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
              // csr navigation is simply new input to the root -- the
              // semantics the ssr update patch is meant to reproduce.
              onNavigate(nav) {
                instance.update(nav.navigateInput as Input);
                tracker.logUpdate(nav.navigateInput as Input);
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
              // The persisted render mode rides `render()`'s options argument,
              // extracted from the fixture's ergonomic `$global` flags (see
              // persistedModeFrom) -- `$global` and the snapshot's Render header
              // stay pristine. Only pass the argument when persisted: a class
              // (marko 5) interop template reads render()'s second argument as a
              // stream, so a non-persisted render must stay a one-arg call.
              // Navigate steps pass their own below.
              const persisted = persistedModeFrom(
                input.$global as Record<string, unknown> | undefined,
              );
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
                persisted && { persisted },
              )) {
                chunks.push(data);
                logs.push(capture.records());
              }
              logs.push(capture.records());
            } finally {
              resetResolveState();
              capture.cleanup();
            }

            const browser = createBrowser(runner.assets, config.load_order);
            browsers.push(browser);
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

            const updateRunner = runner.updateRunner;
            await runSteps(steps, tracker, browser, run, {
              onFlush: hasFlush ? flushAndRun : undefined,
              onNavigate: updateRunner
                ? async (nav) => {
                    const navigateInput = nav.navigateInput as Input;
                    // Pair with the live root BEFORE rendering the update:
                    // register a capture handler and drive it through the
                    // page's own effect machinery. Reading it first lets the
                    // update render carry the possession echo (`x-marko-have`)
                    // -- what renderer the live page holds at each dynamic-tag
                    // hop -- the same order the real client sends it (from its
                    // live tree, before the server responds).
                    const updateEntry = await updateRunner(browser.ctx);
                    const runtimeId = config.runtime_id ?? DEFAULT_RUNTIME_ID;
                    const renders = (browser.window as any)[runtimeId];
                    const renderId = Object.keys(renders)[0];
                    let liveRoot: unknown;
                    updateEntry.__register(
                      "__navigate_root",
                      (scope: unknown) => (liveRoot = scope),
                    );
                    renders[renderId].r.push("__navigate_root 1");
                    updateEntry.__ready("__navigate");
                    if (!liveRoot) {
                      throw new Error(
                        "navigate(): could not pair the live root scope",
                      );
                    }

                    // Render the update payload server-side (a stateless
                    // update render of the same template with the new input)
                    // and extract its resume fills.
                    const { template } = await runner.runServer();
                    let html = "";
                    const navigateGlobal = {
                      ...(navigateInput.$global as object),
                      persisted: "update",
                      renderId: "navigate",
                    };
                    const persistedMode = persistedModeFrom(navigateGlobal);
                    // The real client always computes the echo (`@marko/run`'s
                    // `have?.()` call is unconditional -- see its
                    // `runtime/persisted.ts`) and sends the header whenever it's
                    // non-empty, so this harness matches that regardless of
                    // build mode: persisted builds need it for dynamic-tag hop
                    // swaps (dropped fills-path construction graph -- a
                    // renderer mismatch ships a fragment instead of failing the
                    // apply), and every persisted build now also needs it for a
                    // client-pending `<try>` boundary (see the "!"-prefixed half
                    // of the echo in dom/update.ts's `_have`). `__have` is the
                    // real client primitive (re-exported from the `?update`
                    // entry): it walks the live tree and returns the JSON the
                    // run router sends as `x-marko-have`, decoded here the same
                    // way the run server does.
                    if (persistedMode) {
                      const have = updateEntry.__have(liveRoot as any);
                      if (have) {
                        // The full echo is sent for every persisted build,
                        // exactly like the run router: the server side is
                        // responsible for applying dynamic-tag possession and
                        // pending-boundary entries to the current render.
                        const decoded = JSON.parse(have);
                        if (Object.keys(decoded).length) {
                          persistedMode.possessed = decoded;
                        }
                      }
                    }
                    for await (const chunk of template.render(
                      { ...navigateInput, $global: navigateGlobal },
                      { persisted: persistedMode },
                    )) {
                      html += chunk;
                    }
                    // Update responses are a newline-delimited stream of
                    // serializer frames: each line is a bare JS array of
                    // fills plus effect entries (strings; the applier runs
                    // them only for scopes it freshly created) plus fragment
                    // entries (arrays; a content-hop branch delivered as
                    // resumable HTML). Frames apply one at a time (the
                    // streaming model -- async boundary bodies arrive in
                    // later frames, in resolution order).
                    const frames: (
                      ((ctx: unknown) => unknown) | string | unknown[]
                    )[][] = [];
                    for (const line of html.split("\n")) {
                      if (line) {
                        const fills: (
                          ((ctx: unknown) => unknown) | string | unknown[]
                        )[] = [];
                        for (const item of new Function(`return (${line})`)()) {
                          if (
                            typeof item === "function" ||
                            typeof item === "string" ||
                            Array.isArray(item)
                          ) {
                            fills.push(item);
                          }
                        }
                        if (fills.length) frames.push(fills);
                      }
                    }
                    if (!frames.length) {
                      throw new Error(
                        "navigate(): update render carried no resume fills",
                      );
                    }

                    // Intermediate frames log their own mutation batches
                    // (the last frame's log is the step's, via runSteps) so
                    // snapshots show the page settling frame by frame.
                    const applyFrame = updateEntry.__createUpdate(
                      updateEntry.default,
                      liveRoot as any,
                    );
                    // A truncated apply models the run router aborting a
                    // superseded navigation between frames (its per-frame
                    // `signal.aborted` check): the dropped frames never
                    // reach the applier.
                    const frameCount = Math.min(
                      nav.abortAfterFrame ?? frames.length,
                      frames.length,
                    );
                    for (let i = 0; i < frameCount; i++) {
                      applyFrame(frames[i] as any);
                      await browser.runAsyncScripts();
                      run();
                      if (i < frameCount - 1) {
                        tracker.logUpdate(
                          `update frame ${i + 1} of ${frames.length}`,
                        );
                        tracker.beginUpdate();
                        if (nav.betweenFrames) {
                          await nav.betweenFrames(
                            browser.window.document.documentElement,
                            i,
                          );
                          run();
                          tracker.logUpdate(
                            `between frame ${i + 1} and ${i + 2}`,
                          );
                          tracker.beginUpdate();
                        }
                      }
                    }
                  }
                : undefined,
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
              const sizesFile = path.join(fixtureDir, "sizes.json");
              const actual = JSON.stringify(stats, null, 2) + "\n";
              // Assert instead of rewriting: a --grep test:update refreshes only
              // matched fixtures, so a silent rewrite would bury stale sizes.
              if (process.env.UPDATE_EXPECTATIONS) {
                fs.writeFileSync(sizesFile, actual);
              } else {
                const expected = fs.existsSync(sizesFile)
                  ? fs.readFileSync(sizesFile, "utf8")
                  : "";
                assert.strictEqual(
                  actual,
                  expected,
                  `sizes.json out of date for "${entry}" — run \`npm run test:update\``,
                );
              }
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
    onNavigate?: (nav: Navigate) => void | Promise<void>;
  },
) {
  for (const update of steps) {
    if (isNavigate(update)) {
      if (opts.onNavigate) {
        tracker.beginUpdate();
        await opts.onNavigate(update);
        tracker.logUpdate(update.navigateInput as Input);
      }
    } else if (isWait(update)) {
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

function once<T>(fn: () => T) {
  let cached: T | undefined;
  return Object.assign(() => (cached ??= fn()), {
    reset() {
      cached = undefined;
    },
  });
}
