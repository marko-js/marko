import * as compiler from "@marko/compiler";
import * as assert from "assert/strict";
import path from "path";

import { inert } from "../comptime";
import * as translator from "../translator";
import { createComptimeGuard } from "../translator/comptime/evaluate";

const baseConfig: compiler.Config = {
  translator,
  optimize: true,
  output: "html",
  writeVersionComment: false,
  babelConfig: {
    babelrc: false,
    configFile: false,
    browserslistConfigFile: false,
  },
};

const assetsDir = path.join(__dirname, "comptime-compile");

const compileTemplate = (
  src: string,
  config?: compiler.Config & { filename?: string },
) => {
  const { filename = "template.marko", ...overrides } = config ?? {};
  return compiler.compileSync(src, path.join(assetsDir, filename), {
    ...baseConfig,
    cache: new Map(),
    ...overrides,
  });
};

const testGlobals = globalThis as Record<string, unknown>;

describe("runtime-tags/comptime compile", () => {
  afterEach(() => {
    delete testGlobals.__cmsContent;
    delete testGlobals.__evalSentinel;
    delete testGlobals.__comptimeSharedLoads;
  });

  it("reads build-defined globals (the CMS channel) and folds them", () => {
    testGlobals.__cmsContent = inert({
      banner: "Welcome to the build",
      meta: { locale: "en" },
    });

    const { code } = compileTemplate(
      `comptime const banner = __cmsContent.banner.toUpperCase();\n` +
        `<h1>${"${banner}"} (${"${__cmsContent.meta.locale}"})</h1>`,
    );

    assert.ok(code.includes("WELCOME TO THE BUILD"));
    assert.ok(!code.includes("__cmsContent.banner"));
  });

  it("flags evaluated templates through meta.comptime", () => {
    const evaluated = compileTemplate(
      `comptime const n = 1;\n<p>${"${n}"}</p>`,
    );
    assert.deepEqual(evaluated.meta.comptime, { evaluated: true });

    const plain = compileTemplate(`<p>static</p>`);
    assert.equal(plain.meta.comptime, undefined);
  });

  it("surfaces <-log> as a compiler diagnostic", () => {
    const { meta } = compileTemplate(`<-log=6 * 7/>\n<p>ok</p>`);
    const logged = meta.diagnostics.find((diagnostic) =>
      diagnostic.label.includes("`<-log>` 42"),
    );
    assert.equal(logged?.type, "warning");
    assert.ok(logged?.loc);
  });

  it("preserves without evaluating under errorRecovery", () => {
    testGlobals.__evalSentinel = 0;
    const src =
      `comptime __evalSentinel = 1;\n` +
      `comptime const greeting = "hi";\n` +
      `<-if=true>\n  <p>kept ${"${greeting}"}</p>\n</-if>\n` +
      `<-for|item| of=[1, 2]>\n  <span>${"${item}"}</span>\n</-for>\n` +
      `<-log="never evaluated"/>\n`;

    const preserved = compileTemplate(src, { errorRecovery: true });
    assert.equal(testGlobals.__evalSentinel, 0);
    assert.equal(preserved.meta.comptime, undefined);
    assert.deepEqual(
      preserved.meta.diagnostics.filter((d) => d.type === "error"),
      [],
    );
    // Constructs lower to runtime analogues: the comptime code ships as
    // source, and bodies compile with their bindings in scope.
    assert.ok(preserved.code.includes("__evalSentinel = 1"));
    assert.ok(preserved.code.includes("kept"));

    const evaluated = compileTemplate(src);
    assert.equal(testGlobals.__evalSentinel, 1);
    assert.deepEqual(evaluated.meta.comptime, { evaluated: true });
  });

  it("shares one module instance per build cache across templates", () => {
    const cache = new Map();
    const src = `comptime import { load } from "./shared";\n<p>load ${"${load}"}</p>`;

    const first = compileTemplate(src, { cache, filename: "a.marko" });
    const second = compileTemplate(src, { cache, filename: "b.marko" });
    assert.ok(first.code.includes("load 1"));
    assert.ok(second.code.includes("load 1"));

    const fresh = compileTemplate(src, { filename: "c.marko" });
    assert.ok(fresh.code.includes("load 2"));
  });

  it("serializes module-export functions as imports (identity handoff)", () => {
    const { code } = compileTemplate(
      `comptime import { describeLoad } from "./shared";\n` +
        `comptime const handlers = { describe: describeLoad };\n` +
        `<p>${"${handlers}"}</p>`,
    );
    assert.ok(code.includes(`from "./shared"`));
    assert.ok(/describe: _?describeLoad/.test(code));
  });

  it("chains the user error as cause with a statement code frame", () => {
    assert.throws(
      () =>
        compileTemplate(
          `comptime const ok = 1;\ncomptime throwsHere();\n<p>${"${ok}"}</p>`,
          { filename: "boom.marko" },
        ),
      (err: Error & { cause?: Error }) => {
        assert.ok(err.message.includes("Error evaluating comptime code:"));
        assert.ok(err.message.includes("throwsHere"));
        assert.ok(/> 2 \|/.test(err.message));
        assert.ok(err.cause instanceof Error);
        return true;
      },
    );
  });

  it("terminates runaway evaluation at the guard budget", () => {
    const guard = createComptimeGuard(50);
    assert.equal(
      guard.run(() => 42),
      42,
    );
    assert.throws(
      () =>
        guard.run(() => {
          for (;;);
        }),
      /comptime budget/,
    );
  });

  const fnSrc =
    `comptime const base = 10;\n` +
    `comptime function bump(n) { return n + base; }\n` +
    `<let/n=1/>\n<button onClick() { n = bump(n); }>${"${n}"}</button>`;

  it("emits comptime-born functions inline without a bundler hook", () => {
    const { code } = compileTemplate(fnSrc);
    assert.ok(/const \$\w*bump\w* = base => function bump\(n\)/.test(code));
    assert.ok(code.includes("(10)"));
  });

  it("emits comptime-born functions as a content-addressed virtual module", () => {
    const virtual: { virtualPath: string; code: string }[] = [];
    const { code } = compileTemplate(fnSrc, {
      resolveVirtualDependency(_filename, dep) {
        virtual.push({ virtualPath: dep.virtualPath, code: dep.code });
        return `./virtual/${dep.virtualPath}`;
      },
    });

    assert.equal(virtual.length, 1);
    assert.ok(/\.comptime\.[0-9a-f]{8}\.js$/.test(virtual[0].virtualPath));
    assert.ok(
      virtual[0].code.includes("export const _fn0 = base => function bump(n)"),
    );
    assert.ok(code.includes(`from "./virtual/${virtual[0].virtualPath}"`));
    assert.ok(code.includes("(10)"));
  });

  it("dispatches snippet values through comptime data", () => {
    const { code } = compileTemplate(
      `<-define/Alpha>\n  <i>a</i>\n</-define>\n` +
        `<-define/Beta>\n  <b>b</b>\n</-define>\n` +
        `<-for|Part| of=[Alpha, Beta]>\n  <-Part/>\n</-for>`,
    );
    assert.ok(code.includes("<i>a</i><b>b</b>"));
  });
});
