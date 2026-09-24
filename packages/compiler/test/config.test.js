import assert from "assert/strict";
import { execFileSync } from "node:child_process";
import path from "node:path";

const fixtures = path.join(import.meta.dirname, "fixtures", "config");

// The translator is chosen once, while the module loads, from the package.json
// nearest the working directory -- so each case needs its own process.
const read = (dir, env, script = "print.mjs") =>
  JSON.parse(
    execFileSync(process.execPath, ["-r", "~ts", path.join(fixtures, script)], {
      cwd: path.join(fixtures, dir),
      encoding: "utf8",
      env: { ...process.env, ...env },
    }),
  );

describe("compiler/config", () => {
  describe("translator", () => {
    it("prefers the class-tags interop when it is depended on", () =>
      assert.equal(
        read("interop").translator,
        "@marko/translator-interop-class-tags",
      ));

    it("takes a runtime from dependencies", () =>
      assert.equal(read("dep").translator, "marko-runtime-example/translator"));

    it("takes a runtime from peerDependencies", () =>
      assert.equal(
        read("peer").translator,
        "@marko/runtime-example/translator",
      ));

    it("takes a runtime from devDependencies", () =>
      assert.equal(read("dev").translator, "marko-runtime-example/translator"));

    // Two runtimes and no way to choose, so it declines rather than guessing --
    // which also means the `marko/translator` fallback is not reached.
    for (const [dir, where] of [
      ["conflict", "dependencies"],
      ["conflict-peer", "peerDependencies"],
      ["conflict-dev", "devDependencies"],
    ]) {
      it(`chooses none when two runtimes disagree in ${where}`, () =>
        assert.equal(read(dir).translator, undefined));
    }

    it("names both runtimes when compiling without a translator", () =>
      assert.match(
        read("conflict", {}, "compile.mjs").error,
        /depends on both "marko-runtime-one" and "marko-runtime-two"; set the "translator" option/,
      ));

    it("keeps marko@5's translator alongside @marko/runtime-tags", () =>
      assert.equal(read("marko5").translator, "marko/translator"));
  });

  it("applies MARKO_CONFIG over the defaults", () =>
    assert.equal(
      read("dep", { MARKO_CONFIG: '{"output":"dom"}' }).output,
      "dom",
    ));
});
