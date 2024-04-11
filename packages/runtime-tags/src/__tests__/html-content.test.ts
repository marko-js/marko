import * as assert from "assert/strict";
import * as helpers from "../html/content";

const falseishValues = [undefined, null, false];

describe("runtime-tags/html/content", () => {
  describe("escapeXML", () => {
    it("should return &zwj; for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers.escapeXML(value), "&zwj;");
      }
    });

    it("should escape < and & characters", () => {
      assert.equal(
        helpers.escapeXML("foo < bar & baz"),
        "foo &lt; bar &amp; baz",
      );
    });

    it("should toString anything else", () => {
      assert.equal(helpers.escapeXML(0), "0");
      assert.equal(helpers.escapeXML(42), "42");
      assert.equal(helpers.escapeXML(true), "true");
      assert.equal(helpers.escapeXML("foo"), "foo");
      assert.equal(helpers.escapeXML({}), "[object Object]");
    });
  });

  describe("escapeScript", () => {
    it("should return empty string for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers.escapeScript(value), "");
      }
    });

    it("should escape </script", () => {
      assert.equal(
        helpers.escapeScript("foo </script> bar"),
        "foo \\x3C/script> bar",
      );
    });

    it("should allow normally escaped html stuff", () => {
      assert.equal(helpers.escapeScript("foo < bar & baz"), "foo < bar & baz");
    });

    it("should toString anything else", () => {
      assert.equal(helpers.escapeScript(0), "0");
      assert.equal(helpers.escapeScript(42), "42");
      assert.equal(helpers.escapeScript(true), "true");
      assert.equal(helpers.escapeScript("foo"), "foo");
      assert.equal(helpers.escapeScript({}), "[object Object]");
    });
  });

  describe("escapeStyle", () => {
    it("should return empty string for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers.escapeStyle(value), "");
      }
    });

    it("should escape </style", () => {
      assert.equal(
        helpers.escapeStyle("foo </style> bar"),
        "foo \\3C/style> bar",
      );
    });

    it("should allow normally escaped html stuff", () => {
      assert.equal(helpers.escapeStyle("foo < bar & baz"), "foo < bar & baz");
    });

    it("should toString anything else", () => {
      assert.equal(helpers.escapeStyle(0), "0");
      assert.equal(helpers.escapeStyle(42), "42");
      assert.equal(helpers.escapeStyle(true), "true");
      assert.equal(helpers.escapeStyle("foo"), "foo");
      assert.equal(helpers.escapeStyle({}), "[object Object]");
    });
  });
});
