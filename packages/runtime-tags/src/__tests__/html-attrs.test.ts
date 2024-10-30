import * as assert from "assert/strict";

import * as helpers from "../html/attrs";

const falseishValues = [undefined, null, false];
const emptyValues = [...falseishValues, ""];

describe("runtime-tags/html/attrs", () => {
  describe("attr", () => {
    it("should return empty string for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers.attr("foo", value), "");
      }
    });

    it("should return a boolean attribute for empty string and true", () => {
      assert.equal(helpers.attr("foo", true), " foo");
      assert.equal(helpers.attr("foo", ""), " foo");
    });

    it("should return an attribute for non-empty values", () => {
      assert.equal(helpers.attr("foo", "bar"), " foo=bar");
    });

    it("should quote invalid characters in html attributes", () => {
      assert.equal(helpers.attr("foo", 'bar"baz'), " foo='bar\"baz'");
      assert.equal(helpers.attr("foo", "bar'baz"), ' foo="bar\'baz"');
      assert.equal(helpers.attr("foo", "bar>baz"), ' foo="bar>baz"');
      assert.equal(helpers.attr("foo", "bar baz"), ' foo="bar baz"');
      assert.equal(helpers.attr("foo", "bar\tbaz"), ' foo="bar\tbaz"');
      assert.equal(helpers.attr("foo", "bar\nbaz"), ' foo="bar\nbaz"');
      assert.equal(helpers.attr("foo", "bar\rbaz"), ' foo="bar\rbaz"');
      assert.equal(helpers.attr("foo", "bar\fbaz"), ' foo="bar\fbaz"');
      assert.equal(
        helpers.attr("foo", "bar\"baz'qux"),
        " foo='bar\"baz&#39;qux'",
      );
      assert.equal(
        helpers.attr("foo", "bar'baz\"qux"),
        ' foo="bar\'baz&#34;qux"',
      );
    });

    it("should return the source when passed a regexp", () => {
      const regexp = /foo/;
      assert.equal(helpers.attr("foo", regexp), ` foo=${regexp.source}`);
    });
  });

  describe("attrs", () => {
    it("should remove falseish values", () => {
      assert.equal(helpers.attrs({}), "");
      for (const value of falseishValues) {
        assert.equal(helpers.attrs({ foo: value }), "");
        assert.equal(helpers.attrs({ foo: "bar", baz: value }), " foo=bar");
      }
    });

    it("should return a single attribute for a single key-value pair", () => {
      assert.equal(helpers.attrs({ foo: "bar" }), " foo=bar");
    });

    it("should return multiple attributes for multiple key-value pairs", () => {
      assert.equal(
        helpers.attrs({ foo: "bar", baz: "qux" }),
        " foo=bar baz=qux",
      );
    });

    it("should strip event handlers, invalid attribute names and renderBody", () => {
      // assert.equal(helpers.attrs({ onClick() {} }), "");
      // assert.equal(helpers.attrs({ "on-click"() {} }), "");
      assert.equal(helpers.attrs({ renderBody() {} }), "");
      assert.equal(helpers.attrs({ "foo bar": "baz" }), "");
      assert.equal(helpers.attrs({ "foo\tbar": "baz" }), "");
      assert.equal(helpers.attrs({ "foo\nbar": "baz" }), "");
      assert.equal(helpers.attrs({ "foo\rbar": "baz" }), "");
      assert.equal(helpers.attrs({ "foo\fbar": "baz" }), "");
      assert.equal(helpers.attrs({ "=foo": "bar" }), "");
      assert.equal(helpers.attrs({ "'foo": "bar" }), "");
      assert.equal(helpers.attrs({ '"foo': "bar" }), "");
      assert.equal(helpers.attrs({ "/foo": "bar" }), "");
      assert.equal(helpers.attrs({ ">foo": "bar" }), "");
    });
  });

  describe("classAttr", () => {
    it("should return empty string for empty values", () => {
      for (const value of emptyValues) {
        assert.equal(helpers.classAttr(value), "");
        assert.equal(helpers.classAttr([value]), "");
        assert.equal(helpers.classAttr({ value }), "");
      }
    });

    it("should return the class name for non-empty values", () => {
      assert.equal(helpers.classAttr("foo"), " class=foo");
      assert.equal(helpers.classAttr(["foo"]), " class=foo");
      assert.equal(helpers.classAttr({ foo: true }), " class=foo");
    });

    it("should return multiple class names for non-empty values", () => {
      assert.equal(helpers.classAttr(["foo", "bar"]), ' class="foo bar"');
      assert.equal(
        helpers.classAttr({ foo: true, bar: true }),
        ' class="foo bar"',
      );
    });

    it("should return multiple class names and ignore empty values", () => {
      for (const value of emptyValues) {
        assert.equal(
          helpers.classAttr(["foo", value, "bar"]),
          ' class="foo bar"',
        );
        assert.equal(
          helpers.classAttr(["foo", value, { bar: true, baz: value }]),
          ' class="foo bar"',
        );
        assert.equal(
          helpers.classAttr({ foo: true, bar: true, baz: value }),
          ' class="foo bar"',
        );
      }
    });

    it("should quote invalid characters in html attributes", () => {
      assert.equal(helpers.classAttr('foo"bar'), " class='foo\"bar'");
      assert.equal(helpers.classAttr("foo'bar"), ' class="foo\'bar"');
      assert.equal(helpers.classAttr("foo>bar"), ' class="foo>bar"');
      assert.equal(helpers.classAttr("foo bar"), ' class="foo bar"');
      assert.equal(helpers.classAttr("foo\tbar"), ' class="foo\tbar"');
      assert.equal(helpers.classAttr("foo\nbar"), ' class="foo\nbar"');
      assert.equal(helpers.classAttr("foo\rbar"), ' class="foo\rbar"');
      assert.equal(helpers.classAttr("foo\fbar"), ' class="foo\fbar"');
      assert.equal(
        helpers.classAttr("foo\"bar'baz"),
        " class='foo\"bar&#39;baz'",
      );
      assert.equal(
        helpers.classAttr("foo'bar\"baz"),
        ' class="foo\'bar&#34;baz"',
      );
    });
  });

  describe("styleAttr", () => {
    it("should return empty string for empty values", () => {
      for (const value of emptyValues) {
        assert.equal(helpers.styleAttr(value), "");
        assert.equal(helpers.styleAttr([value]), "");
        assert.equal(helpers.styleAttr({ value }), "");
      }
    });

    it("should return the style for non-empty values", () => {
      assert.equal(helpers.styleAttr("color:red"), " style=color:red");
      assert.equal(helpers.styleAttr(["color:red"]), " style=color:red");
      assert.equal(helpers.styleAttr({ color: "red" }), " style=color:red");
      assert.equal(helpers.styleAttr([{ color: "red" }]), " style=color:red");
    });

    it("should return multiple styles for non-empty values", () => {
      assert.equal(
        helpers.styleAttr(["color:red", "background:blue"]),
        " style=color:red;background:blue",
      );
      assert.equal(
        helpers.styleAttr({ color: "red", background: "blue" }),
        " style=color:red;background:blue",
      );
    });

    it("should return multiple styles and ignore empty values", () => {
      for (const value of emptyValues) {
        assert.equal(
          helpers.styleAttr(["color:red", value, "background:blue"]),
          " style=color:red;background:blue",
        );
        assert.equal(
          helpers.styleAttr({
            color: "red",
            background: "blue",
            border: value,
          }),
          " style=color:red;background:blue",
        );
        assert.equal(
          helpers.styleAttr([
            { color: "red", border: value },
            { background: "blue" },
          ]),
          " style=color:red;background:blue",
        );
      }
    });

    it("should quote invalid characters in html attributes", () => {
      assert.equal(helpers.styleAttr('color:"red"'), " style='color:\"red\"'");
      assert.equal(helpers.styleAttr("color:'red'"), " style=\"color:'red'\"");
      assert.equal(helpers.styleAttr("color:>red"), ' style="color:>red"');
      assert.equal(helpers.styleAttr("color: red"), ' style="color: red"');
      assert.equal(helpers.styleAttr("color:\tred"), ' style="color:\tred"');
      assert.equal(helpers.styleAttr("color:\nred"), ' style="color:\nred"');
      assert.equal(helpers.styleAttr("color:\rred"), ' style="color:\rred"');
      assert.equal(helpers.styleAttr("color:\fred"), ' style="color:\fred"');
      assert.equal(
        helpers.styleAttr('color:"red\'blue"'),
        " style='color:\"red&#39;blue\"'",
      );
      assert.equal(
        helpers.styleAttr("color:'red\"blue'"),
        " style=\"color:'red&#34;blue'\"",
      );
    });
  });
});
