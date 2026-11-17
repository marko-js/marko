import assert from "assert/strict";
import { execFileSync } from "node:child_process";
import path from "node:path";

const here = import.meta.dirname;
const root = path.join(here, "..", "..", "..");
const script = path.join(here, "fixtures", "register", "run.cjs");

// In a child process on purpose: requiring the hook installs a `.marko`
// handler onto the real `require.extensions`, which would outlive this test
// and change how every other suite resolves a template.
const run = (env) =>
  execFileSync(process.execPath, ["-r", "~ts", script], {
    cwd: root,
    encoding: "utf8",
    env: { ...process.env, ...env },
  }).trim();

describe("compiler/register", () => {
  it("compiles templates required through the hook", () => {
    assert.equal(run(), "<div>hello world</div><p>second 2</p>");
  });

  it("maps a stack back to the template it came from", () => {
    assert.equal(run({ REGISTER_MODE: "throw" }), "mapped");
  });

  it("checks what templates read against disk once per run, keeping what did not change", () => {
    assert.equal(
      run({ REGISTER_MODE: "rerun" }),
      [
        "first: a.marko,p.marko,tag-c.marko <aside>a</aside><div>c</div>",
        "same:  <aside>a</aside><div>c</div>",
        "child: p.marko,tag-c.marko <aside>a</aside><div>c2</div>",
        "tag: a.marko,aside.marko,c.marko <span>custom</span><span>custom</span>",
      ].join("\n"),
    );
  });

  it("compiles with source maps off", () => {
    assert.equal(
      run({ NODE_ENV: "production" }),
      "<div>hello world</div><p>second 2</p>",
    );
  });
});
