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
      assert.throws(
        () =>
          compiler.compileSync("<div/>", path.join(__dirname, "tmp.marko"), {
            ...baseConfig,
            cache: new Map(),
            output: "html",
            runtimeId: "123-bad",
          }),
        /Invalid runtimeId: "123-bad"\. The runtimeId must be a valid JavaScript identifier\./,
      );
    });
  });
});
