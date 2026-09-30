import assert from "assert";
import fs from "fs";
import { createRequire } from "module";
import path from "path";

import * as compiler from "@marko/compiler";
import jsBeautify from "js-beautify";

const { html_beautify } = jsBeautify;

import * as tagsTranslator from "../translator";
import {
  type ChunkSizes,
  createServerRunner,
  getSizes,
  type Sizes,
} from "./utils/bundle";
import {
  type Browser,
  createHostRunner,
  type Render,
  renderCSR,
  renderSSR,
  type ServerRunner,
  type Steps,
  wrappers,
} from "./utils/render";
import { allTestsPassed, snap } from "./utils/snap";
import {
  stripDebugRuntime,
  stripOptimizeRuntime,
} from "./utils/strip-inline-runtime";

const require = createRequire(import.meta.url);
const sweepWrappers = process.env.MARKO_TEST_WRAPPERS ? wrappers : [];

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
  /** Rendered inside a host's `<if>`, `<for>` and other content, the fixture
   * logs differently by design, so the `MARKO_TEST_WRAPPERS` sweep skips it. */
  skip_wrapped?: boolean;
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
  for (const { area, entry } of listFixtures(fixturesDir, interop)) {
    if (!inShard(fixtureIndex++)) continue;

    describe(area ? `${area} ${entry}` : entry, () => {
      const fixtureDir = path.join(fixturesDir, area, entry);
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
          const browsers: Browser[] = [];

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
            for (const runner of [ssrRunner, hostRunner, ...wrappedRunners]) {
              runner.peek()?.then(
                (built) => built.disposeServer(),
                () => {},
              );
              runner.reset();
            }
            csr.reset();
            ssr.reset();
            unwrapped.reset();
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
                    .filter(
                      (f) =>
                        f.endsWith(".marko") &&
                        !f.startsWith(`dist${path.sep}`),
                    )
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
          const hostRunner = once(() =>
            createHostRunner(fixtureDir, getModeOpts(), interop),
          );
          const wrappedRunners = sweepWrappers.map((wrapper) =>
            once(() =>
              createHostRunner(fixtureDir, getModeOpts(), interop, wrapper),
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

          const render: Render = {
            config,
            page: ssrRunner,
            browsers,
            settle: settles,
          };
          const csr = once(() => renderCSR(render));
          const ssr = once(() => renderSSR(render));

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

          // Rendered inside any content of a host, the fixture must log what
          // it logs under the plain host; `MARKO_TEST_WRAPPERS=1` opts in.
          const hosted = (runner: () => Promise<ServerRunner>): Render => ({
            config,
            page: runner,
            browsers,
            settle: false,
            hosted: true,
          });
          const unwrapped = once(async () => ({
            ssr: (await renderSSR(hosted(hostRunner))).tracker.getLogs(),
            csr: (await renderCSR(hosted(hostRunner))).tracker.getLogs(),
          }));
          interop ||
            optimize ||
            skipSSR ||
            skipCSR ||
            config.error_html ||
            config.error_dom ||
            config.skip_wrapped ||
            sweepWrappers.forEach((wrapper, i) =>
              it(`wrapped in ${wrapper.name}`, async () => {
                const expected = await unwrapped();
                assert.strictEqual(
                  (
                    await renderSSR(hosted(wrappedRunners[i]))
                  ).tracker.getLogs(),
                  expected.ssr,
                  "the resumed page logs differently when wrapped",
                );
                assert.strictEqual(
                  (
                    await renderCSR(hosted(wrappedRunners[i]))
                  ).tracker.getLogs(),
                  expected.csr,
                  "the client render logs differently when wrapped",
                );
              }),
            );

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

// The main suite groups fixtures by the area they pin
// (`fixtures/<area>/<fixture>`); the interop suite is one flat list.
function listFixtures(fixturesDir: string, interop?: true) {
  const fixtures: { area: string; entry: string }[] = [];
  for (const area of interop ? [""] : fs.readdirSync(fixturesDir)) {
    const areaDir = path.join(fixturesDir, area);
    if (!interop && fs.existsSync(path.join(areaDir, "template.marko"))) {
      throw new Error(
        `Fixture "${area}" is outside an area; move it to fixtures/<area>/${area}.`,
      );
    }
    for (const entry of fs.readdirSync(areaDir)) {
      if (!entry.endsWith(".skip")) fixtures.push({ area, entry });
    }
  }
  return fixtures;
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
