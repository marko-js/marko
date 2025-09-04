import * as assert from "assert/strict";

import * as helpers from "../html/content";

const falseishValues = [undefined, null, false];

describe("runtime-tags/html/content", () => {
  describe("escapeXML", () => {
    it("should return &zwj; for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers._escape(value), "&zwj;");
      }
    });

    it("should escape < and & characters", () => {
      assert.equal(
        helpers._escape("foo < bar & baz"),
        "foo &lt; bar &amp; baz",
      );
    });

    it("should toString anything else", () => {
      assert.equal(helpers._escape(0), "0");
      assert.equal(helpers._escape(42), "42");
      assert.equal(helpers._escape(true), "true");
      assert.equal(helpers._escape("foo"), "foo");
      assert.equal(helpers._escape({}), "[object Object]");
    });
  });

  describe("escapeScript", () => {
    it("should return empty string for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers._escape_script(value), "");
      }
    });

    it("should escape </script", () => {
      assert.equal(
        helpers._escape_script("foo </script> bar"),
        "foo \\x3C/script> bar",
      );
    });

    it("should allow normally escaped html stuff", () => {
      assert.equal(
        helpers._escape_script("foo < bar & baz"),
        "foo < bar & baz",
      );
    });

    it("should toString anything else", () => {
      assert.equal(helpers._escape_script(0), "0");
      assert.equal(helpers._escape_script(42), "42");
      assert.equal(helpers._escape_script(true), "true");
      assert.equal(helpers._escape_script("foo"), "foo");
      assert.equal(helpers._escape_script({}), "[object Object]");
    });
  });

  describe("escapeStyle", () => {
    it("should return empty string for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers._escape_style(value), "");
      }
    });

    it("should escape </style", () => {
      assert.equal(
        helpers._escape_style("foo </style> bar"),
        "foo \\3C/style> bar",
      );
    });

    it("should allow normally escaped html stuff", () => {
      assert.equal(helpers._escape_style("foo < bar & baz"), "foo < bar & baz");
    });

    it("should toString anything else", () => {
      assert.equal(helpers._escape_style(0), "0");
      assert.equal(helpers._escape_style(42), "42");
      assert.equal(helpers._escape_style(true), "true");
      assert.equal(helpers._escape_style("foo"), "foo");
      assert.equal(helpers._escape_style({}), "[object Object]");
    });
  });
});
