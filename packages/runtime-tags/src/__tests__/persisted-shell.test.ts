import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import * as compiler from "@marko/compiler";

import * as tagsTranslator from "../translator";

// The shell is a section's values-free structure: static markup kept, values
// dropped, and a hole's marker carried with the runtime comment prefix and the
// per-instance scope id elided for a constructing client to supply.
function shellFor(source: string) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-shell-"));
  const file = path.join(dir, "template.marko");
  try {
    fs.writeFileSync(file, source);
    const { code } = compiler.compileFileSync(file, {
      translator: tagsTranslator,
      output: "html",
      optimize: true,
      persisted: true,
      writeVersionComment: false,
      cache: new Map(),
    });
    return code.match(/__shell = "((?:[^"\\]|\\.)*)"/)?.[1];
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

describe("runtime-tags/persisted-shell", () => {
  it("keeps static structure and drops values", () => {
    assert.equal(
      shellFor(`<div class="card">\n  <h1>\${input.title}</h1>\n</div>\n`),
      `<div class=card><h1><!--\\0*a--></h1></div>`,
    );
  });

  it("marks every hole in document order", () => {
    assert.equal(
      shellFor(`<p>\${input.a}</p>\n<p>\${input.b}</p>\n`),
      `<p><!--\\0*a--></p><p><!--\\0*b--></p>`,
    );
  });

  it("keeps a statically known attribute", () => {
    assert.equal(
      shellFor(`<a href="/x" class="y">\${input.t}</a>\n`),
      `<a href=/x class=y><!--\\0*a--></a>`,
    );
  });

  it("omits a request-derived attribute rather than guessing at it", () => {
    // An attribute has no marker of its own yet, so it cannot be a hole; the
    // shell must not invent a value for it either.
    const shell = shellFor(`<input value=input.q>\n`);
    assert.ok(shell !== undefined, "expected a shell");
    assert.ok(
      !shell!.includes("value"),
      `a dynamic attribute must not reach the shell, got ${shell}`,
    );
  });

  // Known gap: a template whose entire content is one placeholder has no
  // element to hang a marker on, so it yields no shell and cannot be
  // constructed. Pinned here so the limit is visible rather than surprising.
  it("yields no shell when the whole template is one placeholder", () => {
    assert.equal(shellFor(`\${input.only}\n`), undefined);
  });

  it("is absent without the persisted option", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-shell-"));
    const file = path.join(dir, "template.marko");
    try {
      fs.writeFileSync(file, `<div>\${input.t}</div>\n`);
      const { code } = compiler.compileFileSync(file, {
        translator: tagsTranslator,
        output: "html",
        optimize: true,
        writeVersionComment: false,
        cache: new Map(),
      });
      assert.ok(!code.includes("__shell"), "a plain build emits no shell");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
