import assert from "assert/strict";
import path from "node:path";

import { compileSync } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertAttributesOrArgs,
  assertAttributesOrSingleArg,
  assertNoArgs,
  assertNoAttributes,
  assertNoAttributeTags,
  assertNoParams,
  assertNoVar,
} from "@marko/compiler/babel-utils";
import * as marko from "marko/translator";

const filename = path.join(import.meta.dirname, "assert.marko");

// Runs `check` on the `<test>` tag in `src` once each of its parts named
// `built` has no `loc`, as a node a migrator or transform builds, and returns
// the tag's `loc` with the error `check` threw.
const run = (src, check) => {
  let tagLoc;
  try {
    compileSync(src, filename, {
      output: "html",
      translator: {
        taglibs: marko.taglibs,
        tagDiscoveryDirs: [],
        version: "0.0.0",
        transform: {
          MarkoTag(tag) {
            const { node } = tag;
            if (node.name.value !== "test") return;
            tagLoc = node.loc;
            clearLocs(node.arguments);
            clearLocs(node.body.params);
            clearLocs(node.attributes);
            clearLocs(node.attributeTags);
            if (node.var && isBuilt(node.var)) node.var.loc = null;
            check(tag);
          },
        },
        translate: {},
      },
    });
  } catch (err) {
    return { err, tagLoc };
  }
  assert.fail("expected a compile error");
};

const assertMarksTag = (src, check, label) => {
  const { err, tagLoc } = run(src, check);
  assert.equal(err.label, label);
  assert.deepEqual(err.loc, tagLoc);
};

describe("compiler/babel-utils assert", () => {
  describe("marks the tag for a part without a loc", () => {
    it("assertAllowedAttributes: a spread attribute", () => {
      assertMarksTag(
        "<test ...built/>",
        (tag) => assertAllowedAttributes(tag, []),
        "Tag does not support spread attributes.",
      );
    });

    it("assertAllowedAttributes: an unsupported attribute", () => {
      assertMarksTag(
        "<test built=1/>",
        (tag) => assertAllowedAttributes(tag, []),
        "Tag does not support the `built` attribute.",
      );
    });

    it("assertNoAttributes", () => {
      assertMarksTag(
        "<test built=1/>",
        assertNoAttributes,
        "Tag does not support attributes.",
      );
    });

    it("assertNoParams", () => {
      assertMarksTag(
        "<test|built|>x</test>",
        assertNoParams,
        "Tag does not support parameters.",
      );
    });

    it("assertNoAttributeTags", () => {
      assertMarksTag(
        "<test>\n  <@built/>\n</test>",
        (tag) => assertNoAttributeTags(tag),
        "Tag does not support nested attribute tags.",
      );
    });

    it("assertNoArgs", () => {
      assertMarksTag(
        "<test(built)/>",
        (tag) => assertNoArgs(tag),
        "Tag does not support arguments.",
      );
    });

    it("assertNoArgs: only the first argument has a loc", () => {
      assertMarksTag(
        "<test(1, built)/>",
        (tag) => assertNoArgs(tag),
        "Tag does not support arguments.",
      );
    });

    it("assertNoArgs: only the last argument has a loc", () => {
      assertMarksTag(
        "<test(built, 1)/>",
        (tag) => assertNoArgs(tag),
        "Tag does not support arguments.",
      );
    });

    it("assertNoVar", () => {
      assertMarksTag(
        "<test/built/>",
        assertNoVar,
        "Tag does not support a variable.",
      );
    });

    it("assertAttributesOrArgs", () => {
      assertMarksTag(
        "<test(built) x=1/>",
        assertAttributesOrArgs,
        "Tag does not support arguments when attributes or body present.",
      );
    });

    it("assertAttributesOrSingleArg: arguments with a body", () => {
      assertMarksTag(
        "<test(built)>x</test>",
        assertAttributesOrSingleArg,
        "Tag does not support arguments when attributes or body present.",
      );
    });

    it("assertAttributesOrSingleArg: several arguments", () => {
      assertMarksTag(
        "<test(1, built)/>",
        assertAttributesOrSingleArg,
        "Tag does not support multiple arguments.",
      );
    });

    it("assertAttributesOrSingleArg: a spread argument", () => {
      assertMarksTag(
        "<test(...built)/>",
        assertAttributesOrSingleArg,
        "Tag does not support spread arguments.",
      );
    });
  });
});

function clearLocs(nodes) {
  if (nodes) {
    for (const node of nodes) {
      if (isBuilt(node)) node.loc = null;
    }
  }
}

function isBuilt(node) {
  switch (node.type) {
    case "Identifier":
    case "MarkoAttribute":
      return node.name === "built";
    case "MarkoSpreadAttribute":
      return isBuilt(node.value);
    case "SpreadElement":
      return isBuilt(node.argument);
    case "MarkoTag":
      return node.name.value === "@built";
    default:
      return false;
  }
}
