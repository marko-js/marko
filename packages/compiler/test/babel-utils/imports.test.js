import assert from "assert/strict";
import path from "node:path";

import { compileSync } from "@marko/compiler";
import { importDefault, importStar } from "@marko/compiler/babel-utils";
import * as translator from "@marko/runtime-tags/translator";

const template = path.join(
  import.meta.dirname,
  "..",
  "fixtures",
  "register",
  "template.marko",
);

// Runs `importing` on the template's program in the transform stage, and
// gives what it returns with the specifiers of the program's import of "./x.js".
const withImports = (importing) => {
  let result;
  let specifiers;
  compileSync("<div/>", template, {
    translator: Object.create(translator, {
      transform: {
        value: {
          Program(program) {
            result = importing(program.hub.file);
            specifiers = program.node.body
              .filter((node) => node.type === "ImportDeclaration")
              .flatMap((node) => node.specifiers);
          },
        },
      },
    }),
    code: false,
  });
  return [result, specifiers];
};

describe("compiler/babel-utils imports", () => {
  it("reuses a request's default import", () => {
    const [[a, b], specifiers] = withImports((file) => [
      importDefault(file, "./x.js", "a"),
      importDefault(file, "./x.js", "b"),
    ]);
    assert.equal(a.name, b.name);
    assert.equal(specifiers.length, 1);
  });

  it("reuses a request's namespace import", () => {
    const [[a, b], specifiers] = withImports((file) => [
      importStar(file, "./x.js", "a"),
      importStar(file, "./x.js", "b"),
    ]);
    assert.equal(a.name, b.name);
    assert.equal(specifiers.length, 1);
  });
});
