import assert from "assert/strict";
import path from "node:path";

import { compileSync } from "@marko/compiler";
import {
  findAttributeTags,
  findParentTag,
  getMacroIdentifier,
  getMacroIdentifierForName,
  getTemplateId,
} from "@marko/compiler/babel-utils";
import * as marko from "marko/translator";

const filename = path.join(import.meta.dirname, "tags.marko");

// A translator is visitors plus taglibs, so borrowing Marko's taglibs gives
// real tag definitions -- `<if>` only counts as control flow through one --
// while these visitors do the looking.
const run = (src, { onTransform, onTranslate } = {}) => {
  const seen = [];
  // Babel rejects a visitor that returns anything, so swallow what these give.
  const visit = (fn) =>
    fn && {
      MarkoTag(tag) {
        fn(tag, seen);
      },
    };
  compileSync(src, filename, {
    output: "html",
    translator: {
      taglibs: marko.taglibs,
      tagDiscoveryDirs: [],
      version: "0.0.0",
      transform: visit(onTransform),
      translate: {
        ...visit(onTranslate),
        // Nothing above translates Marko nodes, so drop them before codegen.
        Program: {
          exit(program) {
            program.node.body = [];
          },
        },
      },
    },
  });
  return seen;
};

const named = (tag, name) => tag.node.name.value === name;

describe("compiler/babel-utils tags", () => {
  describe("findAttributeTags", () => {
    it("collects the attribute tags of a tag", () => {
      const [found] = run("<layout>\n  <@header>hi</@header>\n</layout>\n", {
        onTransform: (tag, seen) =>
          named(tag, "layout") &&
          seen.push(findAttributeTags(tag).map((p) => p.node.name.value)),
      });
      assert.deepEqual(found, ["@header"]);
    });

    it("reaches through a control flow tag", () => {
      const [found] = run(
        "<layout>\n  <@header>hi</@header>\n  <if(x)>\n    <@footer>f</@footer>\n  </if>\n</layout>\n",
        {
          onTransform: (tag, seen) =>
            named(tag, "layout") &&
            seen.push(findAttributeTags(tag).map((p) => p.node.name.value)),
        },
      );
      assert.deepEqual(found, ["@header", "@footer"]);
    });
  });

  describe("findParentTag", () => {
    it("finds the tag a nested one sits under", () => {
      const [found] = run("<div>\n  <span/>\n</div>\n", {
        onTransform: (tag, seen) =>
          named(tag, "span") && seen.push(findParentTag(tag)?.node.name.value),
      });
      assert.equal(found, "div");
    });

    it("finds nothing above a top level tag", () => {
      const [found] = run("<div/>\n", {
        onTransform: (tag, seen) => seen.push(findParentTag(tag)),
      });
      assert.equal(found, undefined);
    });
  });

  describe("macro identifiers", () => {
    const outsideTranslate = /can only be called during the translate phase/;

    it("refuses getMacroIdentifierForName before translate", () =>
      assert.throws(
        () =>
          run("<div/>\n", {
            onTransform: (tag) => getMacroIdentifierForName(tag, "greet"),
          }),
        outsideTranslate,
      ));

    it("refuses getMacroIdentifier before translate", () =>
      assert.throws(
        () => run("<div/>\n", { onTransform: getMacroIdentifier }),
        outsideTranslate,
      ));

    it("refuses a tag that references no macro", () =>
      assert.throws(
        () => run("<div/>\n", { onTranslate: getMacroIdentifier }),
        /called on non macro referencing tag/,
      ));

    it("refuses a macro that was never registered", () =>
      assert.throws(
        () =>
          run("<div/>\n", {
            onTranslate: (tag) => getMacroIdentifierForName(tag, "greet"),
          }),
        /was not registered via the 'registerMacro' api/,
      ));
  });

  describe("getTemplateId", () => {
    it("hashes the child into an optimized id", () => {
      const opts = { optimize: true };
      const parent = getTemplateId(opts, filename);
      assert.equal(getTemplateId(opts, filename), parent);
      assert.notEqual(getTemplateId(opts, filename, "child"), parent);
      assert.equal(
        getTemplateId(opts, filename, "child"),
        getTemplateId(opts, filename, "child"),
      );
    });
  });
});
