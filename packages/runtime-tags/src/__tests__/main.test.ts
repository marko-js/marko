import assert from "assert";
import fs from "fs";
import { createRequire } from "module";
import path from "path";

import * as compiler from "@marko/compiler";
import jsBeautify from "js-beautify";

const { html_beautify, js_beautify } = jsBeautify;

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
  type Destroy,
  type Flush,
  type FlushType,
  isDestroy,
  isFlush,
  isNavigate,
  isThrows,
  isWait,
  type Navigate,
  resetResolveState,
  resolveAfter,
  type Throws,
  type Wait,
} from "./utils/resolve";
import { allTestsPassed, snap } from "./utils/snap";
import {
  stripDebugRuntime,
  stripOptimizeRuntime,
} from "./utils/strip-inline-runtime";
import createMutationTracker, { formatBody } from "./utils/track-mutations";

const require = createRequire(import.meta.url);

type Step =
  | Input
  | Wait
  | Flush
  | Destroy
  | Throws
  | Navigate
  | ((document: Document) => unknown);
type Steps = [Input, ...Step[]];
export type TestConfig = {
  steps?: Steps | ((signal?: AbortSignal) => Steps | Promise<Steps>);
  embedded?: true;
  equivalent?: boolean;
  /**
   * Completes lazy load module scripts in the given order (file names);
   * unlisted load scripts follow in document order.
   */
  load_order?: string[];
  /**
   * Rejects any dynamic chunk import whose specifier contains one of these
   * substrings, simulating a network-level lazy-chunk load failure.
   */
  reject_load?: string[];
  /**
   * Streams this many extra flushes into the document before the page's
   * entry module runs, simulating a bundle that loads slower than the
   * server streams (reordered content lands before resume starts).
   */
  entry_delay?: number;
  /** Aborts the SSR render once the first flush streams, simulating a disconnect. */
  abort_ssr?: boolean;
  error_dom?: boolean;
  error_html?: boolean;
  skip_optimize?: boolean;
  /** Debug intentionally logs a dev-only diagnostic the optimized build cannot. */
  skip_parity?: boolean;
  // A fixture whose patches are MEANT to reject declares it; anything else
  // rejecting fails the test rather than snapshotting the navigation.
  expect_rejection?: boolean;
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  error_compiler?: true | string[];
  /**
   * Compiles the error fixture as if a coding agent were driving the terminal,
   * so the snapshot captures the compiler's cheat-sheet fix-guide.
   */
  fix_guide?: boolean;
  /** Compiles the fixture with a custom `runtimeId` compiler option. */
  runtime_id?: string;
  /** Compiles the fixture with the `persisted` compiler option. */
  persisted?: boolean;
  /** Persisted: skip checking each patched page against a fresh render of
   * the same input (client effects leave state a fresh render lacks). */
  skip_fresh_render?: boolean;
};

// `scripts/test-parallel` fans the fixtures across CPU cores by giving each
// worker a subset of round-robin "slots" via the env below: a fixture runs here
// when `index % slotTotal` is one of this worker's slots. Round-robin keeps the
// expensive fixtures spread evenly across workers. With no env set (a plain
// `pnpm test`, or a scoped `--grep`) `slots` is null and every fixture runs.
const slotTotal = Number(process.env.MARKO_TEST_SLOT_TOTAL) || 1;
const slots = process.env.MARKO_TEST_SLOTS
  ? new Set(process.env.MARKO_TEST_SLOTS.split(",").map(Number))
  : null;
function inShard(index: number) {
  return slots === null || slots.has(index % slotTotal);
}

function noop() {}

function forceCodingAgent() {
  const prev = process.env.CLAUDECODE;
  process.env.CLAUDECODE = "1";
  return () => {
    if (prev === undefined) delete process.env.CLAUDECODE;
    else process.env.CLAUDECODE = prev;
  };
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
    import.meta.dirname,
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
      const testFile = resolve("test.ts");
      // A present-but-broken `test.ts` must fail loudly; only an absent file is
      // optional (mirrors the `templateFile` guard below).
      const config: TestConfig = fs.existsSync(testFile)
        ? (require(testFile).config ?? {})
        : {};
      const hasCompilerError = !!config.error_compiler;
      const persisted = !!config.persisted;
      const skipHTML = config.skip_html;
      const skipDOM = config.skip_dom;
      const stripFixtureDir = async (str: string | Promise<string>) =>
        (await str).replaceAll(relativeFixtureDir, "__tests__");

      // The optimize sizes gate never runs for these fixtures, so a leftover
      // `sizes.json` would otherwise go stale silently.
      if (hasCompilerError || config.skip_optimize) {
        const sizesFile = resolve("sizes.json");
        after(function noSizesFile() {
          if (process.env.UPDATE_EXPECTATIONS) {
            fs.rmSync(sizesFile, { force: true });
          } else {
            assert(
              !fs.existsSync(sizesFile),
              `unexpected sizes.json for "${entry}" — run \`pnpm run test:update\``,
            );
          }
        });
      }

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
          // Persisted mode is inherently SSR: the client only resumes and
          // applies patches, so there is no meaningful CSR mount.
          const skipCSR =
            optimize ||
            persisted ||
            hasCompilerError ||
            skipDOM ||
            config.skip_csr;
          const stats: {
            dom?: Record<string, ChunkSizes | Sizes>;
            html?: Sizes;
            patch?: Sizes;
          } = {};
          const browsers: ReturnType<typeof createBrowser>[] = [];
          const rejectLoad =
            config.reject_load &&
            ((id: string) => config.reject_load!.some((s) => id.includes(s)));

          // Mocha retains suite closures for the entire run, so the cached
          // browsers/bundles are released once the fixture finishes to keep
          // memory from growing with the fixture count.
          after(() => {
            for (const browser of browsers) {
              browser.window.close();
            }
            browsers.length = 0;
            getModeOpts.reset();
            // The runner can survive in mocha's suite graph, so the fixture's
            // server module is dropped explicitly.
            ssrRunner.peek()?.then(
              (runner) => runner.disposeServer(),
              () => {},
            );
            ssrRunner.reset();
            csr.reset();
            ssr.reset();
          });
          const getModeOpts = once(
            (): compiler.Config => ({
              translator,
              // A compile cache is scoped to one configuration, and the
              // per-fixture `optimizeKnownTemplates` are part of it.
              cache: new Map(),
              runtimeId: config.runtime_id,
              writeVersionComment: false,
              babelConfig: {
                babelrc: false,
                configFile: false,
                browserslistConfigFile: false,
              },
              optimize,
              persisted,
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
            if (hasCompilerError) {
              await snapMode(
                () => {
                  // The fix-guide only fires for an agent-driven terminal and a
                  // translator resolved from a specifier, so force both here.
                  const restore = config.fix_guide ? forceCodingAgent() : noop;
                  try {
                    for (const f of Array.isArray(config.error_compiler)
                      ? config.error_compiler.map(resolve)
                      : [templateFile]) {
                      compiler.compileFileSync(f, {
                        ...getModeOpts(),
                        ...(config.fix_guide && {
                          translator: "@marko/runtime-tags/translator",
                        }),
                        linkAssets: { runtime: "asset-runtime", onAsset() {} },
                        output,
                      });
                    }
                  } finally {
                    restore();
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
            const { template, run } = await runClient(
              browser.ctx,
              rejectLoad || undefined,
            );
            const instance = template.mount(input, document.body, "afterbegin");
            tracker.logRender(input);

            await runSteps(steps, tracker, browser, run, {
              onInput(input) {
                instance.update(input);
                tracker.logUpdate(input);
              },
              onDestroy() {
                instance.destroy();
              },
            });

            tracker.cleanup();
            return { browser, tracker };
          });

          const ssr = once(async () => {
            resetResolveState();
            const runner = await ssrRunner();
            const abortController = config.abort_ssr
              ? new AbortController()
              : undefined;
            const { input, steps } = await getSteps(
              config,
              abortController?.signal,
            );
            const chunks: string[] = [];
            const patches: string[] = [];
            const logs: ConsoleRecord[][] = [];
            let template!: Awaited<
              ReturnType<typeof runner.runServer>
            >["template"];
            const capture = captureConsole();

            try {
              ({ template } = await runner.runServer());
              if (abortController) {
                input.$global = {
                  ...(input.$global as any),
                  signal: abortController.signal,
                };
              }
              let aborted = false;
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
                  if (abortController && !aborted) {
                    aborted = true;
                    // The abort rejects the pending read, ending the stream.
                    abortController.abort();
                  }
                }
              } catch (err) {
                // The disconnect is the point; anything else still throws.
                if (!aborted || (err as Error).name !== "AbortError") throw err;
              }
              if (abortController) {
                // Hold the capture open past the inputs' settlement so late
                // renders from a stranded body reach the snapshot.
                await new Promise((resolve) => setTimeout(resolve, 1100));
                logs.push(capture.records());
              }
            } finally {
              resetResolveState();
              capture.cleanup();
            }

            const browser = createBrowser(
              runner.assets,
              config.load_order,
              rejectLoad || undefined,
            );
            browsers.push(browser);
            const { window } = browser;
            const flushNext = browser.stream(chunks);
            const flushAndRun = async () => {
              hasFlush = flushNext();
              await browser.runAsyncScripts();
              run();
            };
            // Attach the tracker's error listener before the first flush so
            // errors thrown by inline resume scripts in it aren't swallowed.
            const tracker = createMutationTracker(browser);
            let hasFlush = flushNext();
            for (let i = config.entry_delay || 0; i && hasFlush; i--) {
              hasFlush = flushNext();
            }

            for (const group of logs) {
              for (const { type, args } of group) {
                window.console[type](...args);
              }
            }

            await browser.runAsyncScripts(() => tracker.logRender(input));
            const { applyPatch, run } =
              browser.ctx as typeof import("@marko/runtime-tags/dom");
            let rejected = false;

            // Until a client-side step diverges the page from what the
            // server would render for the same input, every applied patch
            // must leave the DOM as a fresh render of that input would.
            let diverged = hasFlush || !!config.skip_fresh_render;
            const assertPatchedLikeFresh = async (input: Input) => {
              const capture = captureConsole();
              const freshChunks: string[] = [];
              try {
                resetResolveState();
                for await (const data of template.render(input)) {
                  freshChunks.push(data);
                }
              } finally {
                resetResolveState();
                capture.cleanup();
              }
              // The fresh page resumes like the live one did, so client
              // effects and reorders land on both sides.
              const fresh = createBrowser(
                runner.assets,
                config.load_order,
                rejectLoad || undefined,
              );
              browsers.push(fresh);
              const freshFlush = fresh.stream(freshChunks);
              while (freshFlush());
              await fresh.runAsyncScripts();
              const expected = formatBody(fresh.window.document.body, false);
              const actual = formatBody(browser.window.document.body, false);
              if (expected !== actual) {
                throw new Error(
                  `A persisted patch left the page unlike a fresh render of ${JSON.stringify(input)}.\n--- fresh render\n${expected}\n--- patched page\n${actual}\n`,
                );
              }
            };
            await runSteps(steps, tracker, browser, run, {
              onFlush: hasFlush ? flushAndRun : undefined,
              onStep: () => {
                diverged = true;
              },
              onInput: persisted
                ? async (input, betweenFrames) => {
                    tracker.beginUpdate();
                    let applied = true;
                    const frames: string[] = [];
                    for await (const frame of template.patch(input)) {
                      if (frames.length && betweenFrames) {
                        tracker.logUpdate(input);
                        tracker.beginUpdate();
                        await betweenFrames(browser.window.document);
                        run();
                        await browser.runAsyncScripts();
                        run();
                        tracker.logUpdate(betweenFrames);
                        tracker.beginUpdate();
                      }
                      frames.push(frame);
                      // A production caller navigates on the first failed
                      // frame; later frames must not mutate further.
                      const result = applyPatch(frame);
                      if (typeof result !== "boolean") {
                        // A deferred patch is waiting on a lazy module; load
                        // triggers schedule via setTimeout, so a macrotask
                        // tick must pass before the chunk can be imported.
                        await resolveAfter(0, 1);
                        await browser.runAsyncScripts();
                      }
                      if (!(applied = await result)) break;
                    }
                    patches.push(frames.join(""));
                    tracker.logUpdate(input);
                    if (applied && !diverged && !betweenFrames) {
                      await assertPatchedLikeFresh(input);
                    }
                    if (!applied) {
                      if (!config.expect_rejection) {
                        throw new Error(
                          "A persisted patch unexpectedly rejected (set `expect_rejection` if intended).",
                        );
                      }
                      rejected = true;
                      tracker.logStatus("## Patch rejected (navigate)");
                    }
                    return applied;
                  }
                : undefined,
            });
            if (config.expect_rejection && !rejected) {
              throw new Error(
                "No persisted patch rejected (drop `expect_rejection` if the case now applies).",
              );
            }

            while (hasFlush) {
              await resolveAfter(0, 1);
              tracker.beginUpdate();
              await flushAndRun();
              tracker.logUpdate();
            }

            tracker.cleanup();

            return { browser, tracker, chunks, patches };
          });

          skipHTML || it("html", () => snapCompile("html"));
          skipDOM || it("dom", () => snapCompile("dom"));

          // Compile diagnostics live in `meta.diagnostics`, not the bundle output;
          // collect them from the html build (no extra compile). Analyze-time, so debug only.
          !optimize &&
            !hasCompilerError &&
            it("diagnostics", async () => {
              const { diagnostics } = await ssrRunner();
              await snap(
                () => {
                  const lines = diagnostics
                    .flatMap(({ id, items }) =>
                      items.map(
                        (d) =>
                          `- \`${path
                            .relative(fixtureDir, id)
                            .replace(/\\/g, "/")}\` ${d.type}: ${d.label}`,
                      ),
                    )
                    .sort();
                  return lines.length
                    ? `# Diagnostics\n\n${lines.join("\n")}\n`
                    : "";
                },
                fixtureDir,
                "diagnostics.md",
              );
            });

          optimize &&
            !hasCompilerError &&
            after(function sizesGate() {
              // `stats` is complete only when the whole mode ran green; on a
              // scoped or failed run both the assert and the rewrite would use
              // partial numbers.
              if (!allTestsPassed(this.test!.parent!)) return;
              // A grep that skips the dom/html tests collects no stats;
              // nothing ran, so there is nothing to compare.
              if (!Object.keys(stats).length) return;
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
                  `sizes.json out of date for "${entry}" — run \`pnpm run test:update\``,
                );
              }
            });

          skipSSR ||
            it("ssr", async () => {
              await snapMode(
                async () => {
                  const { tracker, chunks, patches } = await ssr();
                  if (persisted) {
                    // Each wire frame is one expression; format them
                    // independently so beautify cannot glue `}{`.
                    await snapMode(
                      () =>
                        patches
                          .map((joined) => {
                            const frames = joined
                              .split("\n")
                              .map((frame) => frame.trimEnd())
                              .filter(Boolean)
                              .map((frame) =>
                                js_beautify(frame, {
                                  indent_size: 2,
                                }).trimEnd(),
                              )
                              .join("\n");
                            return "// PATCH\n" + frames;
                          })
                          .join("\n\n")
                          .trimEnd() + "\n",
                      "patches.js",
                    );
                  }
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
                      if (persisted) {
                        stats.patch = await getSizes(patches.join(""));
                        // A frame must cost less on the wire than the page
                        // it patches; a larger one means a mechanism ships
                        // what the client already has.
                        for (const frame of patches) {
                          const bytes = Buffer.byteLength(frame);
                          assert.ok(
                            bytes < stats.html.min,
                            `persisted frame (${bytes}b) is not smaller than the page (${stats.html.min}b) for "${entry}"`,
                          );
                        }
                      }
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

      // A diverging render log means tree shaking or debug-only assertions
      // changed behavior (silently, since each mode snapshots separately).
      // An `after` hook: it must observe the snapshots THIS run wrote.
      if (!config.skip_optimize && !config.skip_parity) {
        after(function parity() {
          const snapshotsDir = resolve("__snapshots__");
          for (const name of fs.existsSync(snapshotsDir)
            ? fs.readdirSync(snapshotsDir)
            : []) {
            if (name.startsWith("render") && !name.includes(".debug.")) {
              const debugName = name.replace(/\.md$/, ".debug.md");
              const debugFile = path.join(snapshotsDir, debugName);
              if (fs.existsSync(debugFile)) {
                assert.strictEqual(
                  fs.readFileSync(path.join(snapshotsDir, name), "utf8"),
                  fs.readFileSync(debugFile, "utf8"),
                  `${name} diverges from ${debugName}`,
                );
              }
            }
          }
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
    onStep?: () => void;
    onInput?: (
      input: Input,
      betweenFrames?: (document: Document) => unknown,
    ) => void | boolean | Promise<void | boolean>;
    onFlush?: () => Promise<void>;
    onDestroy?: () => void;
  },
) {
  for (const update of steps) {
    if (isDestroy(update)) {
      // only the client tests have an instance to destroy
      if (!opts.onDestroy) break;
      tracker.beginUpdate();
      opts.onDestroy();
      run();
      tracker.logUpdate("Destroy");
    } else if (isWait(update)) {
      await update();
      await browser.runAsyncScripts();
      run();
      tracker.logUpdate();
    } else if (isFlush(update)) {
      opts.onStep?.();
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
      opts.onStep?.();
      tracker.beginUpdate();
      await update(browser.window.document);
      run();
      await browser.runAsyncScripts();
      run();
      if (isThrows(update)) {
        tracker.logErrors(update);
      } else {
        tracker.logUpdate(update);
      }
    } else if (opts.onInput) {
      const input = isNavigate(update) ? update.navigateInput : update;
      const between = isNavigate(update) ? update.betweenFrames : undefined;
      if ((await opts.onInput(input, between)) === false) break;
    } else {
      // if new input is detected, stop testing
      // this will be covered by the client tests
      break;
    }
  }
}

async function getSteps(config: TestConfig, signal?: AbortSignal) {
  const [input = {} as Input, ...steps] =
    typeof config.steps === "function"
      ? await config.steps(signal)
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
    peek: () => cached,
    reset() {
      cached = undefined;
    },
  });
}
