import * as assert from "assert/strict";

import * as helpers from "../common/helpers";

const emptyValues = [undefined, null, false, ""];

describe("runtime-tags/common/helpers", () => {
  describe("classValue", () => {
    it("should return empty string for empty values", () => {
      for (const value of emptyValues) {
        assert.equal(helpers.classValue(value), "");
        assert.equal(helpers.classValue([value]), "");
        assert.equal(helpers.classValue({ value }), "");
      }
    });

    it("should return the class name for non-empty values", () => {
      assert.equal(helpers.classValue("foo"), "foo");
      assert.equal(helpers.classValue(["foo"]), "foo");
      assert.equal(helpers.classValue({ foo: true }), "foo");
    });

    it("should return multiple class names for non-empty values", () => {
      assert.equal(helpers.classValue(["foo", "bar"]), "foo bar");
      assert.equal(helpers.classValue({ foo: true, bar: true }), "foo bar");
    });

    it("should return multiple class names and ignore empty values", () => {
      for (const value of emptyValues) {
        assert.equal(helpers.classValue(["foo", value, "bar"]), "foo bar");
        assert.equal(
          helpers.classValue(["foo", value, { bar: true, baz: value }]),
          "foo bar",
        );
        assert.equal(
          helpers.classValue({ foo: true, bar: true, baz: value }),
          "foo bar",
        );
      }
    });
  });

  describe("styleValue", () => {
    it("should return empty string for empty values", () => {
      for (const value of emptyValues) {
        assert.equal(helpers.styleValue(value), "");
        assert.equal(helpers.styleValue([value]), "");
        assert.equal(helpers.styleValue({ value }), "");
      }
    });

    it("should return the style for non-empty values", () => {
      assert.equal(helpers.styleValue("color:red"), "color:red");
      assert.equal(helpers.styleValue(["color:red"]), "color:red");
      assert.equal(helpers.styleValue({ color: "red" }), "color:red");
      assert.equal(helpers.styleValue([{ color: "red" }]), "color:red");
    });

    it("should return multiple styles for non-empty values", () => {
      assert.equal(
        helpers.styleValue(["color:red", "background:blue"]),
        "color:red;background:blue",
      );
      assert.equal(
        helpers.styleValue({ color: "red", background: "blue" }),
        "color:red;background:blue",
      );
    });

    it("should return multiple styles and ignore empty values", () => {
      for (const value of emptyValues) {
        assert.equal(
          helpers.styleValue(["color:red", value, "background:blue"]),
          "color:red;background:blue",
        );
        assert.equal(
          helpers.styleValue({
            color: "red",
            background: "blue",
            border: value,
          }),
          "color:red;background:blue",
        );
        assert.equal(
          helpers.styleValue([
            { color: "red", border: value },
            { background: "blue" },
          ]),
          "color:red;background:blue",
        );
      }
    });
  });
});
