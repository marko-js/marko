import * as assert from "assert/strict";

import {
  stringifyClassObject,
  stringifyStyleObject,
  toDelimitedString,
} from "../common/helpers";

const emptyValues = [undefined, null, false, ""];

const classValue = (val: unknown) =>
  toDelimitedString(val, " ", stringifyClassObject);
const styleValue = (val: unknown) =>
  toDelimitedString(val, ";", stringifyStyleObject);

describe("runtime-tags/common/helpers", () => {
  describe("classValue", () => {
    it("should return empty string for empty values", () => {
      for (const value of emptyValues) {
        assert.equal(classValue(value), "");
        assert.equal(classValue([value]), "");
        assert.equal(classValue({ value }), "");
      }
    });

    it("should return the class name for non-empty values", () => {
      assert.equal(classValue("foo"), "foo");
      assert.equal(classValue(["foo"]), "foo");
      assert.equal(classValue({ foo: true }), "foo");
    });

    it("should return multiple class names for non-empty values", () => {
      assert.equal(classValue(["foo", "bar"]), "foo bar");
      assert.equal(classValue({ foo: true, bar: true }), "foo bar");
    });

    it("should return multiple class names and ignore empty values", () => {
      for (const value of emptyValues) {
        assert.equal(classValue(["foo", value, "bar"]), "foo bar");
        assert.equal(
          classValue(["foo", value, { bar: true, baz: value }]),
          "foo bar",
        );
        assert.equal(
          classValue({ foo: true, bar: true, baz: value }),
          "foo bar",
        );
      }
    });
  });

  describe("styleValue", () => {
    it("should return empty string for empty values", () => {
      for (const value of emptyValues) {
        assert.equal(styleValue(value), "");
        assert.equal(styleValue([value]), "");
        assert.equal(styleValue({ value }), "");
      }
    });

    it("should return the style for non-empty values", () => {
      assert.equal(styleValue("color:red"), "color:red");
      assert.equal(styleValue(["color:red"]), "color:red");
      assert.equal(styleValue({ color: "red" }), "color:red");
      assert.equal(styleValue([{ color: "red" }]), "color:red");
    });

    it("should return multiple styles for non-empty values", () => {
      assert.equal(
        styleValue(["color:red", "background:blue"]),
        "color:red;background:blue",
      );
      assert.equal(
        styleValue({ color: "red", background: "blue" }),
        "color:red;background:blue",
      );
    });

    it("should return multiple styles and ignore empty values", () => {
      for (const value of emptyValues) {
        assert.equal(
          styleValue(["color:red", value, "background:blue"]),
          "color:red;background:blue",
        );
        assert.equal(
          styleValue({ color: "red", background: "blue", border: value }),
          "color:red;background:blue",
        );
        assert.equal(
          styleValue([{ color: "red", border: value }, { background: "blue" }]),
          "color:red;background:blue",
        );
      }
    });
  });
});
