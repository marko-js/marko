import * as assert from "assert/strict";

import { JSDOM } from "jsdom";

import * as helpers from "../html/content";

const falseishValues = [undefined, null, false];

describe("runtime-tags/html/content", () => {
  describe("escapeXML", () => {
    it("should return empty string for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers._escape(value), "");
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
      assert.equal(helpers._escape({ toString: () => "custom" }), "custom");
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

    it("should escape <script and <!--", () => {
      assert.equal(
        helpers._escape_script("foo <!--<script> bar"),
        "foo \\x3C!--\\x3Cscript> bar",
      );
    });

    it("prevents the double-escaped state from swallowing later content", () => {
      const dom = new JSDOM(
        `<script>var s = "${helpers._escape_script(
          "<!--<script>alert(1)</script>",
        )}";</script><div id="after"></div>`,
      );
      assert.ok(dom.window.document.getElementById("after"));
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
      assert.equal(
        helpers._escape_script({ toString: () => "custom" }),
        "custom",
      );
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

    it("should escape </STYLE case-insensitively, preserving case", () => {
      assert.equal(
        helpers._escape_style("foo </STYLE> bar"),
        "foo \\3C/STYLE> bar",
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
      assert.equal(
        helpers._escape_style({ toString: () => "custom" }),
        "custom",
      );
    });
  });

  describe("escapeScript", () => {
    it("should escape </SCRIPT case-insensitively, preserving case", () => {
      assert.equal(
        helpers._escape_script("foo </SCRIPT> bar"),
        "foo \\x3C/SCRIPT> bar",
      );
    });
  });

  describe("escapeComment", () => {
    it("should return empty string for falseish values", () => {
      for (const value of falseishValues) {
        assert.equal(helpers._escape_comment(value), "");
      }
    });

    it("should escape > to prevent comment termination", () => {
      assert.equal(helpers._escape_comment("-->"), "--&gt;");
      assert.equal(helpers._escape_comment("--!>"), "--!&gt;");
      assert.equal(helpers._escape_comment(">"), "&gt;");
    });

    it("should allow < and & through unchanged", () => {
      assert.equal(
        helpers._escape_comment("foo < bar & baz"),
        "foo < bar & baz",
      );
    });

    it("should toString anything else", () => {
      assert.equal(helpers._escape_comment(0), "0");
      assert.equal(helpers._escape_comment(42), "42");
      assert.equal(helpers._escape_comment(true), "true");
      assert.equal(helpers._escape_comment("foo"), "foo");
      assert.equal(
        helpers._escape_comment({ toString: () => "custom" }),
        "custom",
      );
    });
  });

  describe("silently dropped text values", () => {
    const captureWarns = (fn: () => void) => {
      const calls: string[] = [];
      const original = console.warn;
      console.warn = (msg: string) => calls.push(msg);
      try {
        fn();
      } finally {
        console.warn = original;
      }
      return calls;
    };

    it("warns when NaN renders as nothing", () => {
      const calls = captureWarns(() => {
        assert.equal(helpers._to_text(NaN), "");
        assert.equal(helpers._escape(NaN), "");
      });
      assert.equal(calls.length, 2);
      assert.match(calls[0], /`NaN` renders as nothing/);
    });

    it("warns when 0n renders as nothing", () => {
      const calls = captureWarns(() => {
        assert.equal(helpers._to_text(0n), "");
      });
      assert.equal(calls.length, 1);
      assert.match(calls[0], /`0n` renders as nothing/);
    });

    it("does not warn for values that render", () => {
      const calls = captureWarns(() => {
        assert.equal(helpers._to_text(0), "0");
        assert.equal(helpers._to_text(1n), "1");
        assert.equal(helpers._to_text(""), "");
        assert.equal(helpers._to_text(null), "");
      });
      assert.equal(calls.length, 0);
    });
  });
});
