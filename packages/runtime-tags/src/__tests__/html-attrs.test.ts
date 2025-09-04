import * as assert from "assert/strict";

import * as helpers from "../html/attrs";

const falseishValues = [undefined, null, false];
const emptyValues = [...falseishValues, ""];

describe("runtime-tags/html/attrs", () => {
  describe("attr", () => {
    it("should return empty string for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers._attr("foo", value), "");
      }
    });

    it("should return a boolean attribute for empty string and true", () => {
      assert.equal(helpers._attr("foo", true), " foo");
      assert.equal(helpers._attr("foo", ""), " foo");
    });

    it("should return an attribute for non-empty values", () => {
      assert.equal(helpers._attr("foo", "bar"), " foo=bar");
    });

    it("should quote invalid characters in html attributes", () => {
      assert.equal(helpers._attr("foo", "bar/baz"), " foo=bar/baz"); // only escape slash at end.
      assert.equal(helpers._attr("foo", "bar/"), ' foo="bar/"');
      assert.equal(helpers._attr("foo", 'bar"baz'), " foo='bar\"baz'");
      assert.equal(helpers._attr("foo", "bar&baz"), " foo=bar&baz"); // only escape entity like ranges.
      assert.equal(
        helpers._attr("foo", "bar&quot;baz"),
        ' foo="bar&amp;quot;baz"',
      );
      assert.equal(helpers._attr("foo", "bar'baz"), ' foo="bar\'baz"');
      assert.equal(helpers._attr("foo", "bar>baz"), ' foo="bar>baz"');
      assert.equal(helpers._attr("foo", "bar baz"), ' foo="bar baz"');
      assert.equal(helpers._attr("foo", "bar\tbaz"), ' foo="bar\tbaz"');
      assert.equal(helpers._attr("foo", "bar\nbaz"), ' foo="bar\nbaz"');
      assert.equal(helpers._attr("foo", "bar\rbaz"), ' foo="bar\rbaz"');
      assert.equal(helpers._attr("foo", "bar\fbaz"), ' foo="bar\fbaz"');
      assert.equal(
        helpers._attr("foo", "bar\"baz'qux"),
        " foo='bar\"baz&#39;qux'",
      );
      assert.equal(
        helpers._attr("foo", "bar'baz\"qux"),
        ' foo="bar\'baz&#34;qux"',
      );
    });

    it("should return the source when passed a regexp", () => {
      const regexp = /foo/;
      assert.equal(helpers._attr("foo", regexp), ` foo=${regexp.source}`);
    });
  });

  describe("attrs", () => {
    it("should remove falseish values", () => {
      assert.equal(helpers._attrs({}, 0, 0, ""), "");
      for (const value of falseishValues) {
        assert.equal(helpers._attrs({ foo: value }, 0, 0, ""), "");
        assert.equal(
          helpers._attrs({ foo: "bar", baz: value }, 0, 0, ""),
          " foo=bar",
        );
      }
    });

    it("should return a single attribute for a single key-value pair", () => {
      assert.equal(helpers._attrs({ foo: "bar" }, 0, 0, ""), " foo=bar");
    });

    it("should return multiple attributes for multiple key-value pairs", () => {
      assert.equal(
        helpers._attrs({ foo: "bar", baz: "qux" }, 0, 0, ""),
        " foo=bar baz=qux",
      );
    });

    it("should strip event handlers, invalid attribute names and content", () => {
      // assert.equal(helpers.attrs({ onClick() {} }, 0, 0, ""), "");
      // assert.equal(helpers.attrs({ "on-click"() {}, 0, 0, "" }), "");
      assert.equal(helpers._attrs({ content() {} }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ "foo bar": "baz" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ "foo\tbar": "baz" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ "foo\nbar": "baz" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ "foo\rbar": "baz" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ "foo\fbar": "baz" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ "=foo": "bar" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ "'foo": "bar" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ '"foo': "bar" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ "/foo": "bar" }, 0, 0, ""), "");
      assert.equal(helpers._attrs({ ">foo": "bar" }, 0, 0, ""), "");
    });
  });

  describe("classAttr", () => {
    it("should return empty string for empty values", () => {
      for (const value of emptyValues) {
        assert.equal(helpers._attr_class(value), "");
        assert.equal(helpers._attr_class([value]), "");
        assert.equal(helpers._attr_class({ value }), "");
      }
    });

    it("should return the class name for non-empty values", () => {
      assert.equal(helpers._attr_class("foo"), " class=foo");
      assert.equal(helpers._attr_class(["foo"]), " class=foo");
      assert.equal(helpers._attr_class({ foo: true }), " class=foo");
    });

    it("should return multiple class names for non-empty values", () => {
      assert.equal(helpers._attr_class(["foo", "bar"]), ' class="foo bar"');
      assert.equal(
        helpers._attr_class({ foo: true, bar: true }),
        ' class="foo bar"',
      );
    });

    it("should return multiple class names and ignore empty values", () => {
      for (const value of emptyValues) {
        assert.equal(
          helpers._attr_class(["foo", value, "bar"]),
          ' class="foo bar"',
        );
        assert.equal(
          helpers._attr_class(["foo", value, { bar: true, baz: value }]),
          ' class="foo bar"',
        );
        assert.equal(
          helpers._attr_class({ foo: true, bar: true, baz: value }),
          ' class="foo bar"',
        );
      }
    });

    it("should quote invalid characters in html attributes", () => {
      assert.equal(helpers._attr_class('foo"bar'), " class='foo\"bar'");
      assert.equal(helpers._attr_class("foo'bar"), ' class="foo\'bar"');
      assert.equal(helpers._attr_class("foo>bar"), ' class="foo>bar"');
      assert.equal(helpers._attr_class("foo bar"), ' class="foo bar"');
      assert.equal(helpers._attr_class("foo\tbar"), ' class="foo\tbar"');
      assert.equal(helpers._attr_class("foo\nbar"), ' class="foo\nbar"');
      assert.equal(helpers._attr_class("foo\rbar"), ' class="foo\rbar"');
      assert.equal(helpers._attr_class("foo\fbar"), ' class="foo\fbar"');
      assert.equal(
        helpers._attr_class("foo\"bar'baz"),
        " class='foo\"bar&#39;baz'",
      );
      assert.equal(
        helpers._attr_class("foo'bar\"baz"),
        ' class="foo\'bar&#34;baz"',
      );
    });
  });

  describe("styleAttr", () => {
    it("should return empty string for empty values", () => {
      for (const value of emptyValues) {
        assert.equal(helpers._attr_style(value), "");
        assert.equal(helpers._attr_style([value]), "");
        assert.equal(helpers._attr_style({ value }), "");
      }
    });

    it("should return the style for non-empty values", () => {
      assert.equal(helpers._attr_style("color:red"), " style=color:red");
      assert.equal(helpers._attr_style(["color:red"]), " style=color:red");
      assert.equal(helpers._attr_style({ color: "red" }), " style=color:red");
      assert.equal(helpers._attr_style([{ color: "red" }]), " style=color:red");
    });

    it("should return multiple styles for non-empty values", () => {
      assert.equal(
        helpers._attr_style(["color:red", "background:blue"]),
        " style=color:red;background:blue",
      );
      assert.equal(
        helpers._attr_style({ color: "red", background: "blue" }),
        " style=color:red;background:blue",
      );
    });

    it("should return multiple styles and ignore empty values", () => {
      for (const value of emptyValues) {
        assert.equal(
          helpers._attr_style(["color:red", value, "background:blue"]),
          " style=color:red;background:blue",
        );
        assert.equal(
          helpers._attr_style({
            color: "red",
            background: "blue",
            border: value,
          }),
          " style=color:red;background:blue",
        );
        assert.equal(
          helpers._attr_style([
            { color: "red", border: value },
            { background: "blue" },
          ]),
          " style=color:red;background:blue",
        );
      }
    });

    it("should quote invalid characters in html attributes", () => {
      assert.equal(
        helpers._attr_style('color:"red"'),
        " style='color:\"red\"'",
      );
      assert.equal(
        helpers._attr_style("color:'red'"),
        " style=\"color:'red'\"",
      );
      assert.equal(helpers._attr_style("color:>red"), ' style="color:>red"');
      assert.equal(helpers._attr_style("color: red"), ' style="color: red"');
      assert.equal(helpers._attr_style("color:\tred"), ' style="color:\tred"');
      assert.equal(helpers._attr_style("color:\nred"), ' style="color:\nred"');
      assert.equal(helpers._attr_style("color:\rred"), ' style="color:\rred"');
      assert.equal(helpers._attr_style("color:\fred"), ' style="color:\fred"');
      assert.equal(
        helpers._attr_style('color:"red\'blue"'),
        " style='color:\"red&#39;blue\"'",
      );
      assert.equal(
        helpers._attr_style("color:'red\"blue'"),
        " style=\"color:'red&#34;blue'\"",
      );
    });
  });
});
