import * as assert from "assert/strict";
import path from "path";

import * as compiler from "../src/index.js";

const interop = require("marko/translator");
const tags = require("@marko/runtime-tags/translator");

const fixture = (...parts) =>
  path.join(__dirname, "fixtures", "get-template-api", ...parts);

describe("compiler/getTemplateApi", () => {
  it("always returns 'tags' for the Tags API translator", () => {
    assert.equal(
      compiler.getTemplateApi(
        fixture("class-default", "class-block.marko"),
        tags,
      ),
      "tags",
    );
    assert.equal(
      compiler.getTemplateApi(fixture("class-default", "plain.marko"), tags),
      "tags",
    );
  });

  describe("interop translator", () => {
    it("detects the Tags API from a `tags/` directory (no parse needed)", () => {
      assert.equal(
        compiler.getTemplateApi(
          fixture("with-tags-dir", "tags", "in-dir.marko"),
          interop,
        ),
        "tags",
      );
    });

    it("detects the Tags API from a Tags API feature", () => {
      assert.equal(
        compiler.getTemplateApi(
          fixture("class-default", "tags-feature.marko"),
          interop,
        ),
        "tags",
      );
    });

    it("detects the Class API from a class block", () => {
      assert.equal(
        compiler.getTemplateApi(
          fixture("class-default", "class-block.marko"),
          interop,
        ),
        "class",
      );
    });

    it("detects the Class API from a dynamic scriptlet", () => {
      assert.equal(
        compiler.getTemplateApi(
          fixture("class-default", "scriptlet.marko"),
          interop,
        ),
        "class",
      );
    });

    it("detects the Class API from a style block", () => {
      assert.equal(
        compiler.getTemplateApi(
          fixture("class-default", "style-block.marko"),
          interop,
        ),
        "class",
      );
    });

    it("ignores features shared by both APIs (static scriptlet)", () => {
      assert.equal(
        compiler.getTemplateApi(
          fixture("class-default", "static-scriptlet.marko"),
          interop,
        ),
        "class",
      );
    });

    it("defaults to the Class API for a plain template", () => {
      assert.equal(
        compiler.getTemplateApi(
          fixture("class-default", "plain.marko"),
          interop,
        ),
        "class",
      );
    });

    it("falls back to `exclusiveTagDiscoveryDirs` for a plain template beside a `tags/` dir", () => {
      assert.equal(
        compiler.getTemplateApi(
          fixture("with-tags-dir", "sibling.marko"),
          interop,
        ),
        "tags",
      );
    });
  });
});
