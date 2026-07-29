import * as assert from "assert/strict";
import { createRequire } from "module";
import path from "path";

import { decode } from "@jridgewell/sourcemap-codec";
import * as compiler from "@marko/compiler";

import * as translator from "../translator";

const require = createRequire(import.meta.url);

const baseConfig: compiler.Config = {
  translator,
  writeVersionComment: false,
  babelConfig: {
    babelrc: false,
    configFile: false,
    browserslistConfigFile: false,
  },
};

const fixture = (name: string) =>
  path.join(import.meta.dirname, "fixtures", name);

describe("runtime-tags/translator-api", () => {
  describe("getRuntimeEntryFiles", () => {
    it("returns the debug runtime entries when not optimized", () => {
      assert.deepEqual(translator.getRuntimeEntryFiles("html", false), [
        "@marko/runtime-tags/debug/html",
      ]);
      assert.deepEqual(translator.getRuntimeEntryFiles("dom", false), [
        "@marko/runtime-tags/debug/dom",
      ]);
      assert.deepEqual(
        translator.getRuntimeEntryFiles("dom-persisted", false),
        ["@marko/runtime-tags/debug/dom-persisted"],
      );
    });

    it("returns the optimized runtime entries when optimized", () => {
      assert.deepEqual(translator.getRuntimeEntryFiles("html", true), [
        "@marko/runtime-tags/html",
      ]);
      assert.deepEqual(translator.getRuntimeEntryFiles("dom", true), [
        "@marko/runtime-tags/dom",
      ]);
      assert.deepEqual(translator.getRuntimeEntryFiles("dom-persisted", true), [
        "@marko/runtime-tags/dom-persisted",
      ]);
    });

    it("includes both runtimes for the interop translator", () => {
      const interop = require("marko/translator") as ReturnType<
        typeof import("../translator/interop").createInteropTranslator
      >;
      const entries = interop.getRuntimeEntryFiles("html", false);
      assert.ok(entries.includes("@marko/runtime-tags/debug/html"));
      assert.ok(entries.length > 1);
    });
  });

  describe("style blocks with sourceMaps", () => {
    const styleSrc = `<style>\n  .foo { color: red }\n</style>\n<div class="foo"/>\n`;
    const compileWithSourceMaps = (sourceMaps: "both" | "inline" | true) => {
      const deps: { code: string; map?: unknown }[] = [];
      compiler.compileSync(
        styleSrc,
        path.join(import.meta.dirname, "tmp.marko"),
        {
          ...baseConfig,
          cache: new Map(),
          output: "html",
          sourceMaps,
          resolveVirtualDependency(_filename, dep) {
            deps.push(dep);
            return `./${dep.virtualPath}`;
          },
        },
      );
      return deps[0];
    };

    it("appends the map url and keeps the map with sourceMaps: both", () => {
      const dep = compileWithSourceMaps("both");
      assert.ok(dep.code.includes("sourceMappingURL=data:application/json"));
      assert.ok(dep.map);
    });

    it("appends only the inline map url with sourceMaps: inline", () => {
      const dep = compileWithSourceMaps("inline");
      assert.ok(dep.code.includes("sourceMappingURL=data:application/json"));
      assert.equal(dep.map, undefined);
    });

    it("keeps the map separate with sourceMaps: true", () => {
      const dep = compileWithSourceMaps(true);
      assert.ok(!dep.code.includes("sourceMappingURL"));
      assert.ok(dep.map);
    });

    it("maps the generated var() reference back to the source interpolation", () => {
      const src = `<style>\n  .foo { color: \${input.color} }\n</style>\n<div class="foo"/>\n`;
      const deps: { code: string; map?: { mappings: string } }[] = [];
      compiler.compileSync(src, path.join(import.meta.dirname, "tmp.marko"), {
        ...baseConfig,
        cache: new Map(),
        output: "html",
        sourceMaps: true,
        resolveVirtualDependency(_filename, dep) {
          deps.push(dep as (typeof deps)[number]);
          return `./${dep.virtualPath}`;
        },
      });

      const { code, map } = deps[0];
      const codeLines = code.split("\n");
      const genLine = codeLines.findIndex((line) => line.includes("var("));
      const genColumn = codeLines[genLine].indexOf("var(");
      const srcLine = src.split("\n").findIndex((line) => line.includes("${"));
      const srcColumn = src.split("\n")[srcLine].indexOf("${");

      const mapped = decode(map!.mappings)[genLine].find(
        ([, , line, column]) => line === srcLine && column === srcColumn,
      );
      assert.ok(
        mapped,
        "expected a mapping back to the `${...}` interpolation",
      );
      assert.equal(mapped[0], genColumn);
    });
  });

  describe("getStyleFile name handling", () => {
    const getStyleFile =
      require("../translator/util/get-style-file") as typeof import("../translator/util/get-style-file");
    const fakeFile = (filename: string, dirFiles: string[]) =>
      ({
        opts: { filename },
        markoOpts: {
          fileSystem: { readdirSync: () => dirFiles },
        },
      }) as never;

    it("matches a style file for an extension-less template name", () => {
      assert.equal(
        getStyleFile.default(fakeFile("/dir/widget", ["widget.style.css"])),
        "./widget.style.css",
      );
    });

    it("strips arc flags from the template name", () => {
      assert.equal(
        getStyleFile.default(
          fakeFile("/dir/widget[mobile].marko", ["widget.style.css"]),
        ),
        "./widget.style.css",
      );
    });

    it("returns undefined when no style file matches", () => {
      assert.equal(
        getStyleFile.default(fakeFile("/dir/widget.marko", ["other.css"])),
        undefined,
      );
    });
  });

  describe("compile cache", () => {
    // `persisted` shapes analysis (serialize reasons, registry ids, update
    // merges), so one cache must not share entries across the flag. The
    // counter keeps the template membrane-live: nucleus-free templates
    // compile identically with or without `persisted`.
    const src =
      "<let/n=0/><button onClick() { n++ }>${n}</button><if=input.show><div/></if>";
    const filename = path.join(import.meta.dirname, "persisted-cache.marko");
    const compileWith = (
      cache: Map<unknown, unknown>,
      persisted: boolean,
      entry?: "page",
    ) =>
      compiler.compileSync(src, filename, {
        ...baseConfig,
        cache,
        output: "html",
        persisted,
        ...(entry
          ? {
              entry,
              linkAssets: { runtime: "asset-runtime", onAsset() {} },
            }
          : null),
      }).code;

    it("does not reuse non-persisted analysis for a persisted compile", () => {
      const cache = new Map();
      compileWith(cache, false);
      assert.match(compileWith(cache, true), /_renderer_shells|update_if/);
    });

    it("keeps non-persisted output identical after a persisted compile", () => {
      const cache = new Map();
      const cold = compileWith(new Map(), false);
      compileWith(cache, true);
      assert.equal(compileWith(cache, false), cold);
    });
  });

  describe("persisted document frame", () => {
    const frameSrc =
      '<let/n=0/><html lang="en"><head><title>t</title></head><body><button onClick() { n++ }>${n}</button></body></html>';
    const plainSrc =
      "<let/n=0/><main><button onClick() { n++ }>${n}</button></main>";
    const compilePersisted = (src: string, entry?: "persisted") =>
      compiler.compileSync(
        src,
        path.join(import.meta.dirname, "persisted-frame.marko"),
        {
          ...baseConfig,
          cache: new Map(),
          output: "dom",
          persisted: true,
          entry,
        },
      ).code;

    it("drops the document markup of a frame root", () => {
      const code = compilePersisted(frameSrc, "persisted");
      assert.doesNotMatch(code, /<html|<head|<body/);
      assert.match(code, /const \$template = "";/);
      assert.match(code, /const \$walks = "";/);
    });

    it("omits a frame root from the static shell registration", () => {
      assert.doesNotMatch(
        compilePersisted(frameSrc, "persisted"),
        /_static_shells/,
      );
    });

    it("keeps the markup and registration of a non-frame root", () => {
      const code = compilePersisted(plainSrc, "persisted");
      assert.match(code, /const \$template = "<main>/);
      assert.match(code, /_static_shells\(\{[^}]*\[\$template, \$walks\]/);
    });

    it("keeps the document markup out of the persisted entry only", () => {
      assert.match(compilePersisted(frameSrc), /const \$template = "<html/);
    });
  });

  describe("persisted composed document frame", () => {
    const compileComposed = (name: string) =>
      compiler.compileFileSync(
        path.join(import.meta.dirname, "composed-frame", name),
        {
          ...baseConfig,
          cache: new Map(),
          output: "dom",
          persisted: true,
          entry: "persisted",
        } as compiler.Config,
      ).code;
    const shellIds = (code: string) => {
      const call = /_static_shells\(\{([^}]*)\}\)/.exec(code);
      return call
        ? [...call[1].matchAll(/"([^"]+)":/g)].map(([, id]) => id)
        : [];
    };
    const branchIds = (ids: string[]) => ids.filter((id) => /_1_/.test(id));
    /** Shell ids without the template-id prefix, which is a build path. */
    const suffixes = (ids: string[]) =>
      ids.map((id) => id.replace(/^.*\.marko/, ""));

    it("omits a branch splicing a frame child", () => {
      const ids = shellIds(compileComposed("branch-splice.marko"));
      assert.deepEqual(branchIds(ids), []);
      assert.ok(ids.some((id) => id.endsWith("_0_update")));
    });

    it("omits a root splicing a frame child without emptying its template", () => {
      const code = compileComposed("root-splice.marko");
      assert.deepEqual(shellIds(code), []);
      assert.match(code, /const \$template = [^\n]*_Frame_template/);
    });

    it("propagates through a composed root to its own callers", () => {
      assert.deepEqual(
        branchIds(shellIds(compileComposed("transitive-splice.marko"))),
        [],
      );
    });

    it("omits a branch splicing a head-only child", () => {
      assert.deepEqual(
        branchIds(shellIds(compileComposed("head-branch-splice.marko"))),
        [],
      );
    });

    it("omits a branch holding the frame in this same file", () => {
      const code = compileComposed("same-file-branch.marko");
      assert.deepEqual(branchIds(shellIds(code)), []);
      assert.match(code, /const \$template = "<button>/);
    });

    it("keeps a branch splicing a frameless child", () => {
      const ids = shellIds(compileComposed("plain-branch-splice.marko"));
      assert.deepEqual(branchIds(ids).length, 2);
    });

    it("omits a branch recursing into this file before its own frame", () => {
      const code = compileComposed("self-recursion-before.marko");
      assert.deepEqual(branchIds(shellIds(code)), []);
      assert.match(code, /const \$template = "";/);
    });

    it("omits a branch recursing into this file after its own frame", () => {
      const code = compileComposed("self-recursion-after.marko");
      assert.deepEqual(branchIds(shellIds(code)), []);
      assert.match(code, /const \$template = "";/);
    });

    it("omits a branch splicing a child that cycles back to this frame", () => {
      const code = compileComposed("cycle-frame.marko");
      assert.deepEqual(branchIds(shellIds(code)), []);
      assert.match(code, /const \$template = "";/);
    });

    it("omits a branch invoking a local define whose body holds the frame", () => {
      // A direct define reference splices the body section's own writes and
      // walks into the invoking section, so the frame composes exactly as an
      // inlined child template does. Section 1 is the define body (already
      // skipped for its own markup); section 2 is the branch that splices it.
      const code = compileComposed("define-frame.marko");
      assert.deepEqual(suffixes(shellIds(code)), ["_0_update", ""]);
    });

    it("keeps a branch invoking a frameless local define", () => {
      const code = compileComposed("define-plain.marko");
      assert.deepEqual(suffixes(shellIds(code)), [
        "_2_update",
        "_2_content",
        "_1_update",
        "_1_content",
        "_0_update",
        "",
      ]);
    });

    it("omits only the invoking branch when a loop nests a frame define", () => {
      // Section 1 is the loop body, 2 the define body, 3 the branch that
      // invokes it. Omission follows the splice, not the nesting: the loop
      // shell holds nothing but its own row markup and an anchor, so it
      // stays claimable even though a descendant composes the frame.
      const code = compileComposed("define-loop-branch.marko");
      assert.deepEqual(suffixes(shellIds(code)), [
        "_1_update",
        "_1_content",
        "_0_update",
        "",
      ]);
      assert.match(code, /\$for_content__template = "<li class=row>/);
    });

    it("resolves define→define and define→custom-tag frame chains", () => {
      // Two hops to the same frame: a define body invoking another define,
      // and a define body splicing an imported frame template. Both the
      // intermediate bodies and the branches invoking them drop; the root
      // holds only anchors, so its own claim survives.
      const code = compileComposed("define-chain.marko");
      assert.deepEqual(suffixes(shellIds(code)), ["_0_update", ""]);
    });

    it("omits only the direct section when one define is used both ways", () => {
      // A non-direct reference keeps its define body out of the invoking
      // section's template (it renders through `_dynamic_tag` from the
      // body's own shell), so that branch stays claimable while the
      // directly-splicing branch does not.
      const code = compileComposed("define-mixed.marko");
      assert.deepEqual(suffixes(shellIds(code)), [
        "_1_update",
        "_1_content",
        "_0_update",
        "",
      ]);
      assert.match(
        code,
        /\$if_content__template = "<!><!><span class=dynamic>/,
      );
      assert.match(code, /_dynamic_tag\(/);
    });
  });

  describe("option validation", () => {
    it("embeds renderer shells in persisted html modules", () => {
      const { code } = compiler.compileSync(
        "<let/n=0/><button onClick() { n++ }>${n}</button><if=input.show><div/></if>",
        path.join(import.meta.dirname, "persisted-page.marko"),
        {
          ...baseConfig,
          cache: new Map(),
          output: "html",
          persisted: true,
        },
      );
      assert.match(code, /_renderer_shells/);
      assert.match(code, /update_if/);
    });

    it("registers only the composition shell for nucleus-free templates", () => {
      // A template with no client state compiles without persisted update
      // machinery: it registers only its root update-id shell (so live
      // parents composing it by reference resolve), never its template id —
      // that absence is the dynamic-tag liveness signal.
      const { code } = compiler.compileSync(
        "<if=input.show><div/></if>",
        path.join(import.meta.dirname, "persisted-scaffold.marko"),
        {
          ...baseConfig,
          cache: new Map(),
          output: "html",
          persisted: true,
        },
      );
      assert.doesNotMatch(code, /update_if/);
      assert.match(code, /_renderer_shells\(\{[^}]*\.marko_0_update"/);
      assert.doesNotMatch(code, /\.marko": \[/);
    });

    it("compiles load imports eagerly when linkAssets is not configured", () => {
      for (const output of ["html", "dom"] as const) {
        const { code } = compiler.compileFileSync(
          fixture("lazy-tag/template.marko"),
          {
            ...baseConfig,
            cache: new Map(),
            output,
          },
        );
        assert.doesNotMatch(
          code,
          /load-tag|withLoadAssets|_load_template|import\(/,
          `${output} output should not include lazy loading machinery`,
        );
        assert.doesNotMatch(
          code,
          /with\s*\{\s*load/,
          `${output} output should strip the load import attribute`,
        );
        assert.match(
          code,
          /child\.marko/,
          `${output} output should still import the child template`,
        );
      }
    });

    it("requires linkAssets for the entry option", () => {
      assert.throws(
        () =>
          compiler.compileFileSync(fixture("basic-counter/template.marko"), {
            ...baseConfig,
            cache: new Map(),
            output: "html",
            entry: "page",
          } as compiler.Config),
        /The "entry" option requires the `linkAssets` compiler option to be configured\./,
      );
    });

    it("requires the persisted option for the persisted entry", () => {
      assert.throws(
        () =>
          compiler.compileFileSync(fixture("basic-counter/template.marko"), {
            ...baseConfig,
            cache: new Map(),
            output: "dom",
            entry: "persisted",
          } as compiler.Config),
        /The "persisted" entry kind requires the `persisted` compiler option to be enabled\./,
      );
    });

    it("emits a data-only shell map for the renderers entry", () => {
      const { code } = compiler.compileSync(
        "<let/n=0/><h1 onClick() { n++ }>${input.title}</h1><if=input.show><button onClick() { n++ }>go</button></if>",
        path.join(import.meta.dirname, "persisted-renderers.marko"),
        {
          ...baseConfig,
          cache: new Map(),
          output: "dom",
          entry: "renderers",
          persisted: true,
        } as compiler.Config,
      );
      // Pure data: per-section [template, walks] keyed by update register id,
      // with no imports, registrations, or user expressions.
      assert.match(code, /export default \{/);
      assert.match(code, /"[^"]*update[^"]*": \["<h1> <\/h1>/);
      assert.match(code, /\["<button>go<\/button>", " b"\]/);
      assert.doesNotMatch(code, /import |_resume|input\./);
    });

    it("embeds shells in persisted html output", () => {
      const { code } = compiler.compileSync(
        "<let/n=0/><h1 onClick() { n++ }>${input.title}</h1>",
        path.join(import.meta.dirname, "persisted-shells.marko"),
        {
          ...baseConfig,
          cache: new Map(),
          output: "html",
          persisted: true,
        } as compiler.Config,
      );
      assert.match(code, /_renderer_shells\(\{/);
      assert.match(code, /\["<h1> <\/h1>"/);
    });

    it("requires the persisted option for the renderers entry", () => {
      assert.throws(
        () =>
          compiler.compileFileSync(fixture("basic-counter/template.marko"), {
            ...baseConfig,
            cache: new Map(),
            output: "dom",
            entry: "renderers",
          } as compiler.Config),
        /The "renderers" entry kind requires the `persisted` compiler option to be enabled\./,
      );
    });

    it("validates the runtimeId option", () => {
      for (const runtimeId of ["123-bad", "$bad"]) {
        assert.throws(
          () =>
            compiler.compileSync(
              "<div/>",
              path.join(import.meta.dirname, "tmp.marko"),
              {
                ...baseConfig,
                cache: new Map(),
                output: "html",
                runtimeId,
              },
            ),
          /Invalid runtimeId: .* The runtimeId must start with a letter or underscore and only contain letters, numbers, and underscores\./,
        );
      }
    });
  });

  describe("embed determination", () => {
    const compileHTML = (src: string, linkAssets: boolean) =>
      compiler.compileSync(src, path.join(import.meta.dirname, "tmp.marko"), {
        ...baseConfig,
        cache: new Map(),
        output: "html",
        ...(linkAssets
          ? { linkAssets: { runtime: "asset-runtime", onAsset() {} } }
          : {}),
      }).code;

    // A template renders as an "embed" (with a randomized, non-idempotent render
    // id to avoid scope-id collisions between sibling renders) unless the third
    // `_template` argument marks it as a page. A non-page template is only an
    // embed for asset-linked builds; without `linkAssets` it stays deterministic.
    const isEmbed = (code: string) => !/\}, 1\);\s*$/.test(code.trimEnd());

    it("treats a non-page template as an embed only when linkAssets is set", () => {
      assert.equal(isEmbed(compileHTML("<div>Hello</div>", true)), true);
      assert.equal(isEmbed(compileHTML("<div>Hello</div>", false)), false);
    });

    it("never treats a page (html/body/head) template as an embed", () => {
      const page = "<html><body><div>Hi</div></body></html>";
      assert.equal(isEmbed(compileHTML(page, true)), false);
      assert.equal(isEmbed(compileHTML(page, false)), false);
    });
  });

  describe("camelCase style key warning", () => {
    const warnings = (src: string) =>
      (
        compiler.compileSync(src, path.join(import.meta.dirname, "tmp.marko"), {
          ...baseConfig,
          cache: new Map(),
          output: "html",
        }).meta.diagnostics ?? []
      )
        .filter((d) => d.type === "warning")
        .map((d) => d.label);

    it("warns on a camelCased style object key and suggests kebab-case", () => {
      const [label, ...rest] = warnings(
        '<div style={ backgroundColor: "red" }>Hi</div>',
      );
      assert.equal(rest.length, 0);
      assert.match(label, /`backgroundColor` is not a CSS property name/);
      assert.match(label, /`background-color`/);
    });

    it("warns for camelCase keys inside a style array and vendor prefixes", () => {
      assert.match(
        warnings(
          '<div style=["display:block", { marginRight: 16 }]>Hi</div>',
        )[0],
        /`margin-right`/,
      );
      assert.match(
        warnings('<div style={ WebkitTransform: "scale(2)" }>Hi</div>')[0],
        /`-webkit-transform`/,
      );
      // The Microsoft `ms` prefix is lowercase, so it needs the leading dash added.
      assert.match(
        warnings('<div style={ msFlexAlign: "center" }>Hi</div>')[0],
        /`-ms-flex-align`/,
      );
    });

    it("does not warn on kebab-case keys, custom properties, or computed keys", () => {
      assert.equal(
        warnings('<div style={ "background-color": "red" }>Hi</div>').length,
        0,
      );
      assert.equal(
        warnings('<div style={ "--fooBar": "1px" }>Hi</div>').length,
        0,
      );
      assert.equal(warnings('<div style={ color: "red" }>Hi</div>').length, 0);
      assert.equal(
        warnings('<let/k="color"><div style={ [k]: "red" }>Hi</div>').length,
        0,
      );
      assert.equal(
        warnings('<div style="background-color: red">Hi</div>').length,
        0,
      );
      assert.equal(warnings('<div style={ 0: "1px" }>Hi</div>').length, 0);
    });
  });

  describe("diagnostic branch coverage", () => {
    const compileError = (src: string) => {
      try {
        compiler.compileSync(src, path.join(import.meta.dirname, "tmp.marko"), {
          ...baseConfig,
          cache: new Map(),
          output: "html",
        });
      } catch (err) {
        return (err as Error).message;
      }
      return "";
    };

    it("tailors the `<for key=>` suggestion to the loop type", () => {
      assert.match(
        compileError("<for|k, v| in={ a: 1 } key=k>${k}</for>"),
        /keys items with the `by=` attribute.*`by=\(key, value\) => key`/s,
      );
      assert.match(
        compileError("<for|i| to=3 key=i>${i}</for>"),
        /keys items with the `by=` attribute.*`by=\(num\) => key`/s,
      );
    });

    it("only hints text syntax for concise-mode prose, not real tags", () => {
      // Angle-bracket tag with boolean attrs: no prose hint.
      const html = compileError("<Modal open/>");
      assert.match(html, /Unable to find entry point/);
      assert.doesNotMatch(html, /meant to be text/);
      // Concise word tag with a valued attribute: also not prose.
      assert.doesNotMatch(compileError("Foo bar=1"), /meant to be text/);
    });
  });
});
