import assert from "assert/strict";
import path from "path";

import { compileSync } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

// `getFile`/`getProgram` read module state that only a running compilation
// sets, so a plugin reaching for either outside one has to be told.
const OUTSIDE = /outside of a compilation/;

describe("compiler/babel-utils getFile", () => {
  it("reports that there is no file outside a compilation", () =>
    assert.throws(getFile, OUTSIDE));

  it("reports that there is no program outside a compilation", () =>
    assert.throws(getProgram, OUTSIDE));

  it("resolves both while a compilation is running", () => {
    let file;
    let program;
    compileSync("<div/>", path.join(import.meta.dirname, "probe.marko"), {
      code: false,
      translator: {
        analyze: {
          Program() {
            file = getFile();
            program = getProgram();
          },
        },
        translate: {},
        taglibs: [],
        tagDiscoveryDirs: [],
      },
    });
    assert.ok(file);
    assert.equal(program, file.path);
  });
});
