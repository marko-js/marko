import { decode } from "@jridgewell/sourcemap-codec";
import * as compiler from "@marko/compiler";
import * as assert from "assert/strict";
import path from "path";

import * as translator from "../translator";

const baseConfig: compiler.Config = {
  translator,
  writeVersionComment: false,
  babelConfig: {
    babelrc: false,
    configFile: false,
    browserslistConfigFile: false,
  },
};

const fixture = (name: string) => path.join(__dirname, "fixtures", name);

describe("runtime-tags/translator-api", () => {
  describe("getRuntimeEntryFiles", () => {
    it("returns the debug runtime entries when not optimized", () => {
      assert.deepEqual(translator.getRuntimeEntryFiles("html", false), [
        "@marko/runtime-tags/debug/html",
      ]);
      assert.deepEqual(translator.getRuntimeEntryFiles("dom", false), [
        "@marko/runtime-tags/debug/dom",
      ]);
    });

    it("returns the optimized runtime entries when optimized", () => {
      assert.deepEqual(translator.getRuntimeEntryFiles("html", true), [
        "@marko/runtime-tags/html",
      ]);
      assert.deepEqual(translator.getRuntimeEntryFiles("dom", true), [
        "@marko/runtime-tags/dom",
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
      compiler.compileSync(styleSrc, path.join(__dirname, "tmp.marko"), {
        ...baseConfig,
        cache: new Map(),
        output: "html",
        sourceMaps,
        resolveVirtualDependency(_filename, dep) {
          deps.push(dep);
          return `./${dep.virtualPath}`;
        },
      });
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
      compiler.compileSync(src, path.join(__dirname, "tmp.marko"), {
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

  describe("option validation", () => {
    it("requires linkAssets for load imports", () => {
      assert.throws(
        () =>
          compiler.compileFileSync(fixture("lazy-tag/template.marko"), {
            ...baseConfig,
            cache: new Map(),
            output: "html",
          }),
        /The `load` import attribute requires the `linkAssets` compiler option to be configured\./,
      );
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

    it("validates the runtimeId option", () => {
      for (const runtimeId of ["123-bad", "$bad"]) {
        assert.throws(
          () =>
            compiler.compileSync("<div/>", path.join(__dirname, "tmp.marko"), {
              ...baseConfig,
              cache: new Map(),
              output: "html",
              runtimeId,
            }),
          /Invalid runtimeId: .* The runtimeId must start with a letter or underscore and only contain letters, numbers, and underscores\./,
        );
      }
    });
  });

  describe("embed determination", () => {
    const compileHTML = (src: string, linkAssets: boolean) =>
      compiler.compileSync(src, path.join(__dirname, "tmp.marko"), {
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
        compiler.compileSync(src, path.join(__dirname, "tmp.marko"), {
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
        compiler.compileSync(src, path.join(__dirname, "tmp.marko"), {
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
