import assert from "assert";
import fs from "fs";
import { createRequire } from "module";
import path from "path";

import * as compiler from "@marko/compiler";
import jsBeautify from "js-beautify";

const { html_beautify } = jsBeautify;

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
  isThrows,
  isWait,
  resetResolveState,
  resolveAfter,
  type Throws,
  type Wait,
  wait,
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
  /** The resumed page and the client render end differently by design
   * (server and client ids, server-only content, a load the steps never
   * trigger), so the settled check does not compare them. */
  skip_settled?: boolean;
  /** Debug intentionally logs a dev-only diagnostic the optimized build
   * cannot, so each mode keeps its own render log. */
  skip_parity?: boolean;
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

const modeIndependentRe = /^(?:render|error-compile)/;

function noop() {}

// Sets the override rather than an agent marker, which a terminal's
// `MARKO_AGENT_FIX_GUIDE=0` would beat.
function forceCodingAgent() {
  const prev = process.env.MARKO_AGENT_FIX_GUIDE;
  process.env.MARKO_AGENT_FIX_GUIDE = "1";
  return () => {
    if (prev === undefined) delete process.env.MARKO_AGENT_FIX_GUIDE;
    else process.env.MARKO_AGENT_FIX_GUIDE = prev;
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
      const templateFile = resolve("template.marko");
      const testFile = resolve("test.ts");
      // A present-but-broken `test.ts` must fail loudly; only an absent file is
      // optional (mirrors the `templateFile` guard below).
      const config: TestConfig = fs.existsSync(testFile)
        ? (require(testFile).config ?? {})
        : {};
      const hasCompilerError = !!config.error_compiler;
      const skipHTML = config.skip_html;
      const skipDOM = config.skip_dom;

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
          const skipCSR =
            optimize || hasCompilerError || skipDOM || config.skip_csr;
          // A resumed page's input is fixed, so the SSR run stops at an input
          // update; only a run through every step can settle like the client's.
          const settles =
            !equivalent &&
            !skipSSR &&
            !skipCSR &&
            !config.error_html &&
            !config.error_dom &&
            !config.skip_settled &&
            Array.isArray(config.steps) &&
            config.steps.slice(1).every((step) => typeof step === "function");
          const stats: {
            dom?: Record<string, ChunkSizes | Sizes>;
            html?: Sizes;
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

          // Render logs and compile errors are one snapshot for both modes, so
          // tree shaking or a debug-only assertion cannot change them unseen.
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
              optimize ||
                (!config.skip_parity && modeIndependentRe.test(resolvedFile))
                ? resolvedFile
                : resolvedFile.replace(/(\.[^.]+)$/, ".debug$1"),
              expectErr,
              actualFile && (optimize ? actualFile : `${actualFile}.debug`),
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
                "error-compile.txt",
                true,
              );
              return;
            }

            await snapMode(async () => {
              const runner = await ssrRunner();
              const { snapshot, sizes } = await runner[`${output}Bundle`]();
              if (optimize && sizes) stats.dom = sizes;
              return snapshot;
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
            return { browser, tracker, settled: await settle(browser, run) };
          });

          // Pending async work lands before the settled check compares.
          const settle = async (
            browser: ReturnType<typeof createBrowser>,
            run: () => void,
          ) => {
            if (!settles) return "";
            await wait();
            await browser.runAsyncScripts();
            run();
            return formatBody(browser.window.document.body);
          };

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
            const logs: ConsoleRecord[][] = [];
            const capture = captureConsole();

            try {
              const { template } = await runner.runServer();
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
            // As in a browser, a resumed chunk's work schedules its own flush; a
            // missing one leaves it pending.
            const flushAndResume = async () => {
              hasFlush = flushNext();
              await browser.runAsyncScripts();
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
            const { run } =
              browser.ctx as typeof import("@marko/runtime-tags/dom");

            await runSteps(steps, tracker, browser, run, {
              onFlush: hasFlush ? flushAndResume : undefined,
            });

            while (hasFlush) {
              await resolveAfter(0, 1);
              tracker.beginUpdate();
              await flushAndResume();
              tracker.logUpdate();
            }

            tracker.cleanup();
            const settled = await settle(browser, run);

            return { browser, tracker, chunks, settled };
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

                    // The inlined walker and reorder runtimes are measured by
                    // `build:sizes`; what is left is what the fixture wrote.
                    if (optimize) {
                      stats.html = await getSizes(
                        stripOptimizeRuntime(
                          stripDefaultScript(chunks.join("")),
                        ),
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
                async () => (await csr()).tracker.getLogs(),
                equivalent ? "render.md" : "render-csr.md",
                config.error_dom,
                "csr",
              ));

          // Streaming and load timing may render different steps, but once
          // every step ran the resumed page and the client render must agree.
          settles &&
            it("settled", async () => {
              assert.strictEqual(
                (await ssr()).settled,
                (await csr()).settled,
                "the resumed page and the client render settle differently",
              );
            });
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
      opts.onInput(update);
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
