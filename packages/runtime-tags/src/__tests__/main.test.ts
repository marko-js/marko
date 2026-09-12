import assert from "assert";
import fs from "fs";
import { createRequire } from "module";
import path from "path";

import * as compiler from "@marko/compiler";
import jsBeautify from "js-beautify";

const { html_beautify, js_beautify } = jsBeautify;

import { DEFAULT_RENDER_ID } from "../common/meta";
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
  /** Compares a patched page's control defaults, not live values, with a
   * fresh render (a patch refreshes defaults and leaves typed input). */
  compare_defaults?: boolean;
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
  /** Persisted: never render a step's input as a document (client effects
   * leave state a fresh render lacks, or an input no document can serialize),
   * so patches compare against the initial document instead. */
  skip_fresh_render?: boolean;
};

// `scripts/test-parallel` fans the fixtures across CPU cores by giving each
// worker a subset of round-robin "slots" via the env below: a fixture runs here
// when `index % slotTotal` is one of this worker's slots. Round-robin keeps the
// expensive fixtures spread evenly across workers. With no env set (any run
// outside that script, such as `pnpm run test:serial`) `slots` is null and
// every fixture runs.
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
      // Render logs by file, then mode, for the parity check below.
      const renderLogs = new Map<string, Map<string, string>>();
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
            // Only a fixture asset can fail to load, never a runtime module
            // (the prebuilt runtime splits `dom/load.ts` into a chunk).
            ((id: string) =>
              !id.includes("/dist/dom-") &&
              config.reject_load!.some((s) => id.includes(s)));

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

          const snapMode = async (
            fn: () => unknown,
            file: string,
            expectErr?: boolean,
            actualFile?: string,
          ) => {
            const resolvedFile =
              expectErr && actualFile ? `${actualFile}.error.txt` : file;
            const actual = await snap(
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
            if (resolvedFile.startsWith("render")) {
              let logs = renderLogs.get(resolvedFile);
              if (!logs) renderLogs.set(resolvedFile, (logs = new Map()));
              logs.set(mode, actual);
            }
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
            // The document each patch is measured against (same input).
            const freshDocs: string[] = [];
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
            const tracker = createMutationTracker(
              browser,
              config.expect_rejection ? /^A patch rejected/ : undefined,
            );
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
            const { patch, run } =
              browser.ctx as typeof import("@marko/runtime-tags/dom");
            const [, applyPatch] = persisted
              ? patch({ renderId: DEFAULT_RENDER_ID })
              : [];
            let rejected = false;

            // Until a client-side step diverges the page from what the
            // server would render for the same input, every applied patch
            // must leave the DOM as a fresh render of that input would.
            let diverged = false;
            const freshRenders = !hasFlush && !config.skip_fresh_render;
            // The document for a step's input: what the step's patch must
            // cost less than, diverged or not.
            const renderFresh = async (input: Input) => {
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
              freshDocs[patches.length - 1] = stripDefaultScript(
                freshChunks.join(""),
              );
              return freshChunks;
            };
            const assertPatchedLikeFresh = async (input: Input) => {
              const freshChunks = await renderFresh(input);
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
              const expected = formatBody(
                fresh.window.document.body,
                false,
                config.compare_defaults,
              );
              // Effects the patch re-ran render on the scheduler's next
              // frame turn, as the fresh page's did before its snapshot.
              browser.flush("raf");
              await new Promise((resolve) => setImmediate(resolve));
              await new Promise((resolve) => setImmediate(resolve));
              const actual = formatBody(
                browser.window.document.body,
                false,
                config.compare_defaults,
              );
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
                ? async (input, betweenFlushes) => {
                    tracker.beginUpdate();
                    let applied = true;
                    const flushes: string[] = [];
                    for await (const flush of template.patch(input)) {
                      if (flushes.length && betweenFlushes) {
                        tracker.logUpdate(input);
                        tracker.beginUpdate();
                        await betweenFlushes(browser.window.document);
                        run();
                        await browser.runAsyncScripts();
                        run();
                        tracker.logUpdate(betweenFlushes);
                        tracker.beginUpdate();
                      }
                      flushes.push(flush);
                      // The wire delimits frames by newline (as the run
                      // client reads them), so a flush must be one line.
                      const frames = flush.split("\n").filter(Boolean);
                      assert.equal(frames.length, 1, "a flush spans lines");
                      // A production caller navigates on the first failed
                      // flush; later flushes must not mutate further.
                      const result = applyPatch!(frames[0]);
                      if (typeof result !== "boolean") {
                        // A deferred patch is waiting on a lazy module; load
                        // triggers schedule via setTimeout, so a macrotask
                        // tick must pass before the chunk can be imported.
                        await resolveAfter(0, 1);
                        await browser.runAsyncScripts();
                      }
                      if (!(applied = await result)) break;
                    }
                    patches.push(flushes.join(""));
                    tracker.logUpdate(input);
                    if (applied && !betweenFlushes && freshRenders) {
                      if (diverged) await renderFresh(input);
                      else await assertPatchedLikeFresh(input);
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

            return { browser, tracker, chunks, patches, freshDocs };
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
                  const { tracker, chunks, patches, freshDocs } = await ssr();
                  if (persisted) {
                    // Each wire flush is one expression; format them
                    // independently so beautify cannot glue `}{`.
                    await snapMode(
                      () =>
                        patches
                          .map((joined) => {
                            const flushes = joined
                              .split("\n")
                              .map((flush) => flush.trimEnd())
                              .filter(Boolean)
                              .map((flush) =>
                                js_beautify(flush, {
                                  indent_size: 2,
                                }).trimEnd(),
                              )
                              .join("\n");
                            return "// PATCH\n" + flushes;
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
                        // A response must cost less on the wire, raw and
                        // compressed, than the document for the same input;
                        // a larger one ships what the client already has.
                        for (let i = 0; i < patches.length; i++) {
                          const doc: Sizes = freshDocs[i]
                            ? await getSizes(freshDocs[i])
                            : stats.html;
                          const flush = await getSizes(patches[i]);
                          assert.ok(
                            flush.min < doc.min && flush.brotli < doc.brotli,
                            `persisted response ${i} (${flush.min}b/${flush.brotli}b brotli) is not smaller than its document (${doc.min}b/${doc.brotli}b) for "${entry}"`,
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
      if (!config.skip_optimize && !config.skip_parity) {
        after(function parity() {
          for (const [file, logs] of renderLogs) {
            const debug = logs.get("debug");
            const optimize = logs.get("optimize");
            if (debug !== undefined && optimize !== undefined) {
              assert.strictEqual(
                optimize,
                debug,
                `${file} diverges between optimize and debug`,
              );
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
      betweenFlushes?: (document: Document) => unknown,
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
      const input = isNavigate(update)
        ? typeof update.navigateInput === "function"
          ? update.navigateInput()
          : update.navigateInput
        : update;
      const between = isNavigate(update) ? update.betweenFlushes : undefined;
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
