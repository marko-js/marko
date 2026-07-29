import assert from "assert";
import fs from "fs";
import { createRequire } from "module";
import path from "path";

import * as compiler from "@marko/compiler";
import jsBeautify from "js-beautify";

const { html_beautify } = jsBeautify;

import type { Input } from "../common/types";
import { _merge_value_feedback } from "../common/value-claims";
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
  persistedPatchFrom,
  persistedRenderFrom,
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

const require = createRequire(import.meta.url);

type Step =
  | Input
  | Wait
  | Flush
  | Throws
  | Navigate
  | ((document: Document) => unknown);
export type Steps = [Input, ...Step[]];

export type TestConfig = {
  steps?: Steps | (() => Steps | Promise<Steps>);
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
   * Gates any dynamic chunk import whose specifier contains one of these
   * substrings until a step releases (or fails) its handle from
   * `window.__deferredLoads` — for pinning load-settlement races.
   */
  defer_load?: string[];
  error_dom?: boolean;
  error_html?: boolean;
  skip_optimize?: boolean;
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
  /** User-code sentinels that must tree-shake out of the optimized DOM bundle. */
  dom_bundle_excludes?: string[];
  /** Markup a constructed section registers as its static shell: it belongs in
   * the lazy `?persisted` entry and must not reach any eager module. */
  persisted_entry_only?: string[];
  /** Compiles the fixture with the `persisted` compiler option; pair with
   * `$global.persisted` (and `persistedCrossRoute` for divergent navigations). */
  persisted?: boolean;
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

/** Splits a bundle snapshot into its `// <module id>` blocks. */
function bundleModules(snapshot: string) {
  const modules: [id: string, code: string][] = [];
  for (const block of snapshot.split(/^\/\/ (?=\S)/m).slice(1)) {
    const end = block.indexOf("\n");
    modules.push([block.slice(0, end), block.slice(end + 1)]);
  }
  return modules;
}

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
          const rejectLoad =
            config.reject_load &&
            ((id: string) => config.reject_load!.some((s) => id.includes(s)));
          const deferLoad =
            config.defer_load &&
            ((id: string) => config.defer_load!.some((s) => id.includes(s)));

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
                  // The fix-guide only fires for an agent-driven terminal and a
                  // translator resolved from a specifier, so force both here.
                  const restore = config.fix_guide ? forceCodingAgent() : noop;
                  try {
                    for (const f of config.error_compiler === true
                      ? [templateFile]
                      : (config.error_compiler as string[]).map(resolve)) {
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
              if (optimize && output === "dom") {
                for (const excluded of config.dom_bundle_excludes || []) {
                  assert.ok(
                    !snapshot.includes(excluded),
                    `optimized DOM bundle must exclude ${JSON.stringify(excluded)}`,
                  );
                }
                for (const [id, code] of bundleModules(snapshot)) {
                  for (const persistedOnly of config.persisted_entry_only ||
                    []) {
                    assert.ok(
                      !code.includes(persistedOnly) ||
                        id.endsWith(".persisted.mjs"),
                      `${JSON.stringify(persistedOnly)} reached the eager module ${id}`,
                    );
                  }
                }
              }
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
              // semantics the ssr patch is meant to reproduce.
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
              const server = await runner.runServer();
              const { template } = server;
              // Marko 5 treats the second argument as a stream, so omit it normally.
              const persisted = persistedRenderFrom(
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

            const browser = createBrowser(
              runner.assets,
              config.load_order,
              rejectLoad || undefined,
              deferLoad || undefined,
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

            for (const group of logs) {
              for (const { type, args } of group) {
                window.console[type](...args);
              }
            }

            await browser.runAsyncScripts(() => tracker.logRender(input));
            const { run } =
              browser.ctx as typeof import("@marko/runtime-tags/dom");

            const navRunner = runner.navRunner;
            // The previous patch's committed //E1: feedback, echoed on the
            // next navigate exactly as the router's carrier does.
            let echoValues: string | undefined;
            await runSteps(steps, tracker, browser, run, {
              onFlush: hasFlush ? flushAndRun : undefined,
              onNavigate: navRunner
                ? async (nav) => {
                    const navigateInput = nav.navigateInput as Input;
                    const navEntry = await navRunner(
                      browser.ctx,
                      rejectLoad || undefined,
                      deferLoad || undefined,
                    );
                    navEntry.__ready("__navigate");

                    // Render the patch statelessly from the new input.
                    const server = await runner.runServer();
                    const { template } = server;
                    let html = "";
                    const navigateGlobal = {
                      ...(navigateInput.$global as object),
                      renderId: "navigate",
                    } as Record<string, unknown>;
                    // The echo snapshots the client's live possessions at
                    // request time, exactly as the router's carrier will:
                    // regions and committed value claims both pruned to
                    // what the page still provably holds.
                    const snapshot = navEntry.echo(echoValues);
                    if (echoValues !== undefined) {
                      echoValues = snapshot.values || undefined;
                    }
                    const persistedRender = persistedPatchFrom(
                      navigateGlobal,
                      navigateGlobal.persistedHeldRegions
                        ? snapshot.regions
                        : undefined,
                      navigateGlobal.persistedEcho === false
                        ? undefined
                        : snapshot.values,
                    );
                    // The carrier binds a reserved claim-set id in this hook;
                    // it must fire exactly once, at completion, with the
                    // post-cap delta the body actually carried ("" included).
                    const feedbackCalls: string[] = [];
                    persistedRender.onFeedback = (delta) =>
                      feedbackCalls.push(delta);
                    for await (const chunk of template.render(
                      { ...navigateInput, $global: navigateGlobal },
                      { persisted: persistedRender },
                    )) {
                      html += chunk;
                    }
                    // Apply newline-delimited frames in resolution order. The
                    // trailing //E1: feedback line is the carrier's, never
                    // the applier's (mirrors persisted-navigation).
                    let frames = html.split("\n").filter(Boolean);
                    // The footer is the completion marker, and the carrier
                    // trusts it only as the LAST content before EOF: every
                    // successful completion writes it (an all-held response
                    // as the bare `//E1:` line) and no late frame follows it.
                    assert.ok(
                      frames.at(-1)?.startsWith("//E1:"),
                      "navigate(): patch body must END with its //E1: completion marker",
                    );
                    let feedback: string | undefined;
                    frames = frames.filter((frame) => {
                      if (frame.startsWith("//E1:")) {
                        feedback = frame.slice(5);
                        return false;
                      }
                      return true;
                    });
                    assert.deepEqual(
                      feedbackCalls,
                      [feedback],
                      "navigate(): onFeedback must fire exactly once with the transmitted post-cap delta",
                    );
                    if (process.env.MARKO_WIRE_MEASURE) {
                      process.stdout.write(
                        `MARKO_WIRE_MEASURE:${Buffer.from(
                          JSON.stringify({
                            fixture: entry,
                            interop: !!interop,
                            optimize,
                            fromRoute: persistedRender?.patch?.fromRoute,
                            targetRoute: persistedRender?.patch?.targetRoute,
                            echoed: persistedRender?.patch?.echoValues,
                            feedback,
                            frames,
                          }),
                        ).toString("base64")}\n`,
                      );
                    }
                    nav.inspectWire?.({
                      frames,
                      feedback,
                      echoed: persistedRender?.patch?.echoValues,
                    });
                    // Fixture transforms run before any frame applies.
                    // Zero apply frames is a valid patch (everything held):
                    // it applies as a no-op and still commits feedback.
                    if (nav.mutateFrames) frames = nav.mutateFrames(frames);

                    // Post-apply failures reach run through this sink (run
                    // replaces the document); the harness pins them instead,
                    // and records them PER NAVIGATION so steps can assert
                    // fallback-vs-park for the navigation that just applied.
                    const fallbacks: string[] = ((
                      browser.window as any
                    ).__persistedNavFallbacks = []);
                    const applyFrame = navEntry.patch((error) => {
                      fallbacks.push(`${error}`);
                      browser.window.console.error(
                        `navigate() document fallback: ${error}`,
                      );
                    });
                    // Truncation models a superseded navigation between frames.
                    const frameCount = Math.min(
                      nav.abortAfterFrame ?? frames.length,
                      frames.length,
                    );
                    for (let i = 0; i < frameCount; i++) {
                      const result = applyFrame(frames[i]!);
                      if (!result) {
                        throw new Error(
                          `navigate(): frame ${i + 1} carried no resume fills`,
                        );
                      }
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
                    // Feedback commits only after every frame applied — a
                    // truncated (superseded) stream forgoes the update.
                    if (frameCount === frames.length && feedback) {
                      // Delta semantics: merge into the committed store
                      // (mirrors the carrier); absent entries mean keep.
                      echoValues = _merge_value_feedback(echoValues, feedback);
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
        if (update.expectError) {
          // A failed apply must throw so Run can replace the partial document.
          let error: unknown;
          try {
            await opts.onNavigate(update);
          } catch (err) {
            error = err;
          }
          if (!error) {
            throw new Error("navigate(): expected the apply to fail");
          }
          tracker.logUpdate(
            `\`${JSON.stringify(update.navigateInput)}\` failed: ${
              (error as Error).message
            }`,
          );
        } else {
          await opts.onNavigate(update);
          tracker.logUpdate(update.navigateInput as Input);
        }
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
    peek: () => cached,
    reset() {
      cached = undefined;
    },
  });
}
