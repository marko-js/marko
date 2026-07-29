import assert from "node:assert/strict";

import {
  createStructureValidator,
  type StructureSegment,
} from "../html/validate-structure";

function report(...segments: StructureSegment[]) {
  const messages: string[] = [];
  const original = console.error;
  console.error = (message: string) => messages.push(message);
  try {
    createStructureValidator()(segments);
  } finally {
    console.error = original;
  }
  return messages.join("\n");
}

function assertClean(...segments: StructureSegment[]) {
  assert.equal(report(...segments), "");
}

function assertReports(segments: StructureSegment[], expected: string) {
  const actual = report(...segments);
  assert.ok(
    actual.includes(expected),
    `expected a report containing ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
  );
}

function html(
  markup: string,
  opens?: (string | undefined)[],
): StructureSegment {
  return opens
    ? { kind: "sourced", html: markup, opens }
    : { kind: "runtime", html: markup };
}

describe("html structure validation", () => {
  describe("valid markup is not reported", () => {
    it("table", () =>
      assertClean(
        html("<table><tbody><tr><td>x</td></tr></tbody></table>", [
          "a:1:1",
          "a:1:8",
          "a:1:15",
          "a:1:19",
        ]),
      ));
    it("select", () =>
      assertClean(
        html("<select><option>a</option><option>b</option></select>", [
          "a:1:1",
          "a:1:9",
          "a:1:20",
        ]),
      ));
    it("list", () =>
      assertClean(
        html("<ul><li>a</li><li>b</li></ul>", ["a:1:1", "a:1:5", "a:1:14"]),
      ));
    it("misplaced list and select content the parser keeps as written", () =>
      assertClean(
        html("<div><li>a</li><option>b</option><dd>c</dd></div>", [
          "a:1:1",
          "a:1:6",
          "a:1:16",
          "a:1:32",
        ]),
      ));
    it("void elements", () =>
      assertClean(
        html('<div><br><img src="x"><input value="y"></div>', ["a:1:1"]),
      ));
    it("self closing", () =>
      assertClean(html("<div><span/></div>", ["a:1:1"])));
    it("raw text holding markup characters", () =>
      assertClean(
        html("<div><script>if (a < b) {}</script><style>a{}</style></div>", [
          "a:1:1",
        ]),
      ));
    it("textarea holding markup characters", () =>
      assertClean(html("<div><textarea>a < b</textarea></div>", ["a:1:1"])));
    it("a longer tag name does not end raw text", () =>
      assertClean(
        html("<div><script>x</scripts>y</script></div>", ["a:1:1"]),
        html("<div><title>a</titlebar>b</title></div>", ["a:1:1"]),
      ));
    it("unterminated raw text runs to the end", () =>
      assertClean(html("<div><script>a < b", ["a:1:1"])));
    it("comments", () =>
      assertClean(html("<div><!-- <tr> --></div>", ["a:1:1"])));
    it("template holds anything", () =>
      assertClean(
        html("<template><tr><td>x</td></tr></template>", [
          "a:1:1",
          "a:1:11",
          "a:1:15",
        ]),
      ));
    it("split across segments in flush order", () =>
      assertClean(
        html("<table><tbody>", ["a:1:1", "a:1:8"]),
        html("<tr><td>x</td>", ["a:2:1", "a:2:5"]),
        html("</tr></tbody></table>"),
      ));
  });

  describe("a wrapper the parser discards", () => {
    it("in a table body", () =>
      assertReports(
        [
          html(
            "<table><tbody><t hidden><tr><td>x</td></tr></t></tbody></table>",
            ["a:1:1", "a:1:8", "a:1:15", "a:1:25", "a:1:29"],
          ),
        ],
        "`<t>` is not allowed in `<tbody>`",
      ));
    it("in a select", () =>
      assertReports(
        [
          html("<select><t hidden><option>a</option></t></select>", [
            "a:1:1",
            "a:1:9",
            "a:1:19",
          ]),
        ],
        "`<t>` is dropped by the HTML parser inside `<select>`",
      ));
    it("in a colgroup", () =>
      assertReports(
        [
          html("<table><colgroup><t hidden><col></t></colgroup></table>", [
            "a:1:1",
            "a:1:8",
            "a:1:18",
          ]),
        ],
        "`<t>` is not allowed in `<colgroup>`",
      ));
  });

  describe("content that needs an ancestor it does not have", () => {
    it("a row outside a table", () =>
      assertReports(
        [
          html("<t hidden><tr><td>x</td></tr></t>", [
            "a:1:1",
            "a:1:11",
            "a:1:15",
          ]),
        ],
        "`<tr>` is dropped by the HTML parser outside",
      ));
    it("a cell outside a row", () =>
      assertReports(
        [html("<div><td>x</td></div>", ["a:1:1", "a:1:6"])],
        "`<td>` is dropped",
      ));
  });

  // The parser fills in the missing section, so the element sits one level
  // below where the walk looks. This survives SSR but crashes on the client.
  describe("a wrapper the parser inserts", () => {
    it("a row directly in a table", () =>
      assertReports(
        [
          html("<table><tr><td>x</td></tr></table>", [
            "a:1:1",
            "a:1:8",
            "a:1:12",
          ]),
        ],
        "`<tr>` makes the HTML parser insert a `<tbody>` around it",
      ));
    it("a cell directly in a table", () =>
      assertReports(
        [html("<table><td>x</td></table>", ["a:1:1", "a:1:8"])],
        "`<td>` makes the HTML parser insert a `<tbody>` around it",
      ));
    it("a column directly in a table", () =>
      assertReports(
        [html("<table><col></table>", ["a:1:1", "a:1:8"])],
        "`<col>` makes the HTML parser insert a `<colgroup>` around it",
      ));
  });

  // "In select" persists for every descendant, but only inside a `<select>`.
  describe("select content rules follow the select scope", () => {
    it("reports a block nested well below the select", () =>
      assertReports(
        [
          html("<select><span><option>a</option></span></select>", [
            "a:1:1",
            "a:1:9",
            "a:1:15",
          ]),
        ],
        "`<span>` is dropped by the HTML parser inside `<select>`",
      ));
    it("leaves a standalone optgroup alone", () =>
      assertClean(
        html("<optgroup><div>x</div></optgroup>", ["a:1:1", "a:1:11"]),
      ));
    it("leaves a standalone option alone", () =>
      assertClean(html("<option><div>x</div></option>", ["a:1:1", "a:1:9"])));
    it("lets a template escape the select scope", () =>
      assertClean(
        html("<select><template><div>x</div></template></select>", [
          "a:1:1",
          "a:1:9",
          "a:1:19",
        ]),
      ));
  });

  it("treats a `<` that opens nothing as text", () =>
    assertReports(
      [html("<table><</table>", ["a:1:1"])],
      "Text is moved out of `<table>`",
    ));

  // The parser builds an element from these rather than discarding them.
  describe("an end tag the parser turns into an element", () => {
    it("a stray `</br>`", () =>
      assertReports(
        [html("<div>a</br>b</div>", ["a:1:1"])],
        "`</br>` is turned into a `<br>` element",
      ));
    it("a stray `</p>`", () =>
      assertReports(
        [html("<div></p></div>", ["a:1:1"])],
        "`</p>` with no open `<p>` makes the parser insert an empty `<p>`",
      ));
    it("any other unmatched end tag still reads as unmatched", () =>
      assertReports(
        [html("<div></span></div>", ["a:1:1"])],
        "`</span>` has no matching start tag",
      ));
    it("names the raw site the stray end tag came from", () =>
      assertReports(
        [
          html("<div>", ["a:1:1"]),
          { kind: "raw", html: "a</br>b", source: "t.marko:2:6" },
          html("</div>", []),
        ],
        "at t.marko:2:6+1",
      ));
  });

  describe("markup the parser re-nests", () => {
    it("a block inside a paragraph", () =>
      assertReports(
        [html("<p>a<div>b</div></p>", ["a:1:1", "a:1:5"])],
        "`<div>` closes the open `<p>`",
      ));
    it("an end tag that closes an ancestor early", () =>
      assertReports(
        [html("<div><span>a</div>", ["a:1:1", "a:1:6"])],
        "`</div>` closes `<span>` before its own end tag",
      ));
    it("an end tag with no start tag", () =>
      assertReports(
        [html("<div>a</div></span>", ["a:1:1"])],
        "`</span>` has no matching start tag",
      ));
  });

  it("text the parser moves out of a table", () =>
    assertReports(
      [html("<table><tbody>stray</tbody></table>", ["a:1:1", "a:1:8"])],
      "Text is moved out of",
    ));

  describe("segment boundaries", () => {
    it("a start tag split across writes is still one tag", () =>
      assertClean(
        { kind: "sourced", html: "<table><tbody><tr><td", opens: [] },
        {
          kind: "sourced",
          html: ' class="x">cell</td></tr></tbody></table>',
          opens: [],
        },
      ));

    it("a problem is still found when the tag is split", () => {
      const messages = report(
        { kind: "sourced", html: "<table><tbody><div", opens: ["a.marko:1:1"] },
        { kind: "sourced", html: ">x</div></tbody></table>", opens: [] },
      );
      assert.ok(
        messages.includes("`<div>` is not allowed in `<tbody>`"),
        messages,
      );
    });

    it("a separator is a comment, not text moved out of a table", () =>
      assertClean(
        html("<table><tbody><!><tr><td>x</td></tr></tbody></table>"),
      ));

    it("a processing instruction is a comment, not text", () =>
      assertClean(
        html("<table><tbody><?pi?><tr><td>x</td></tr></tbody></table>"),
      ));

    it("an empty end tag is dropped, not text", () =>
      assertClean(
        html("<table><tbody></><tr><td>x</td></tr></tbody></table>"),
      ));

    it("an unparseable tag really is text and is reported", () =>
      assertReports(
        [html("<table><tbody><123><tr><td>x</td></tr></tbody></table>")],
        "Text is moved out of",
      ));

    it("a bogus declaration is not text", () =>
      assertClean(
        html("<table><tbody><!bogus><tr><td>x</td></tr></tbody></table>"),
      ));
  });

  it("reports the same problem at each distinct position", () => {
    const messages = report(
      html("<table><tbody><div>a</div><div>b</div></tbody></table>", [
        "a:1:1",
        "a:1:8",
        "a:1:15",
        "a:1:26",
      ]),
    );
    assert.equal(messages.split("Invalid HTML structure").length - 1, 2);
  });

  it("reports a repeated problem at one position once", () => {
    const messages = report(
      html("<table><tbody><div>a</div><div>b</div></tbody></table>"),
    );
    assert.equal(messages.split("Invalid HTML structure").length - 1, 1);
  });

  describe("omitted end tags build the intended DOM and are not reported", () => {
    it("list items", () => assertClean(html("<ul><li>a<li>b</ul>")));
    it("a list item through a div does restructure, so it reports", () =>
      assertReports(
        [html("<ul><li>a<div><li>b</div></li></ul>")],
        "`</div>` has no matching start tag",
      ));
    it("table cells and rows", () =>
      assertClean(
        html("<table><tbody><tr><td>a<td>b<tr><td>c</tbody></table>"),
      ));
    it("options in a select", () =>
      assertClean(html("<select><option>a<option>b</select>")));
  });

  it("a block closing a paragraph reparents, so it is reported", () =>
    assertReports(
      [html("<p>a<div>b</div></p>")],
      "`<div>` closes the open `<p>` early",
    ));

  describe("a block closes a paragraph through phrasing", () => {
    it("formatting element between p and div", () =>
      assertReports(
        [html("<p><b>x<div>y</div></b></p>", ["a:1:1", "a:1:4", "a:1:8"])],
        "`<div>` closes the open `<p>` early",
      ));
    it("points at the block's source", () =>
      assertReports(
        [
          html("<p><b>x<div>y</div></b></p>", [
            "template.marko:1:1",
            "template.marko:1:4",
            "template.marko:1:8",
          ]),
        ],
        "at template.marko:1:8",
      ));
    it("span and nested formatting", () =>
      assertReports(
        [
          html("<p><span><i>x</i></span><table></table></p>", [
            "a:1:1",
            "a:1:4",
            "a:1:10",
            "a:1:26",
          ]),
        ],
        "`<table>` closes the open `<p>` early",
      ));
    it("does not close p through a div (scope barrier)", () =>
      // `<p>` is already closed by the first div; a nested div inside that
      // div is fine and must not re-report against a p that is gone.
      assertClean(
        html("<div><b><div>y</div></b></div>", ["a:1:1", "a:1:6", "a:1:9"]),
      ));
  });

  describe("interactive and form restructures", () => {
    it("nested anchors", () =>
      assertReports(
        [html("<a href=#>x<a href=#>y</a></a>", ["a:1:1", "a:1:12"])],
        "`<a>` closes the open `<a>` early",
      ));
    it("nested anchors through a span", () =>
      assertReports(
        [
          html("<a href=#>x<span><a href=#>y</a></span></a>", [
            "a:1:1",
            "a:1:12",
            "a:1:18",
          ]),
        ],
        "`<a>` closes the open `<a>` early",
      ));
    it("nested buttons", () =>
      assertReports(
        [html("<button>x<button>y</button></button>", ["a:1:1", "a:1:10"])],
        "`<button>` closes the open `<button>` early",
      ));
    it("nested headings", () =>
      assertReports(
        [html("<h1>a<h2>b</h2></h1>", ["a:1:1", "a:1:6"])],
        "`<h2>` closes the open `<h1>` early",
      ));
    it("heading through a span stays nested and is not reported", () =>
      // HTML only pops when the current node is a heading.
      assertClean(
        html("<h1><span><h2>b</h2></span></h1>", ["a:1:1", "a:1:5", "a:1:11"]),
      ));
    it("nested form is dropped", () =>
      assertReports(
        [
          html("<form><div><form></form></div></form>", [
            "a:1:1",
            "a:1:7",
            "a:1:12",
          ]),
        ],
        "`<form>` is dropped by the HTML parser inside another `<form>`",
      ));
    it("sibling forms are fine", () =>
      assertClean(html("<form></form><form></form>", ["a:1:1", "a:1:14"])));
    it("reports the inner form's source", () =>
      assertReports(
        [
          html("<form><form></form></form>", [
            "template.marko:1:1",
            "template.marko:1:7",
          ]),
        ],
        "at template.marko:1:7",
      ));
  });

  it("an unquoted attribute ending in a slash is not self closing", () =>
    assertClean(html("<div><a href=/foo/>x</a></div>")));

  describe("source location from open-tag list", () => {
    it("assigns the Nth open source to the Nth start tag", () => {
      assertReports(
        [
          html("<table><tbody><t hidden></t></tbody></table>", [
            "template.marko:1:1",
            "template.marko:2:3",
            "template.marko:3:5",
          ]),
        ],
        "at template.marko:3:5",
      );
    });

    it("close-tag diagnostics use the open element's source from the stack", () => {
      assertReports(
        [
          html("<div><span>a</div>", [
            "template.marko:1:1",
            "template.marko:1:6",
          ]),
        ],
        "at template.marko:1:6",
      );
      const messages = report(
        html("<div><span>a</div>", [
          "template.marko:1:1",
          "template.marko:1:6",
        ]),
      );
      assert.ok(messages.includes("`</div>` closes `<span>`"));
    });

    it("runtime segments report without a source", () => {
      const messages = report(html("<table><tbody>", ["a:1:1", "a:1:8"]), {
        kind: "runtime",
        html: "<t hidden><tr></tr></t>",
      });
      assert.ok(messages.includes("`<t>` is not allowed in `<tbody>`"));
      assert.ok(!messages.includes("\n  at "));
    });

    it("runtime segments can carry a source for injected wrappers", () => {
      assertReports(
        [
          html("<table><tbody>", ["a:1:1", "a:1:8"]),
          {
            kind: "runtime",
            html: "<t hidden>",
            source: "template.marko:3:5",
          },
          html("<tr></tr>", ["a:3:12"]),
          { kind: "runtime", html: "</t>" },
          html("</tbody></table>"),
        ],
        "at template.marko:3:5",
      );
    });
  });

  describe("raw HTML segments", () => {
    it("scans raw markup so the element stack stays correct", () => {
      // Unclosed <div> inside raw would leave a parent if skipped.
      assertReports(
        [
          { kind: "raw", html: "<div>", source: "template.marko:2:5" },
          html("</span>", []),
        ],
        "`</span>` has no matching start tag",
      );
    });

    it("reports structure issues inside raw at site+offset", () => {
      assertReports(
        [
          {
            kind: "raw",
            html: "<table><tbody><div>x</div></tbody></table>",
            source: "template.marko:3:10",
          },
        ],
        "at template.marko:3:10+14",
      );
    });

    it("does not let raw tags steal ordered opens of a later sourced segment", () => {
      const messages = report(
        html("<div>", ["template.marko:1:1"]),
        {
          kind: "raw",
          html: "<table><tbody><div>x</div></tbody></table>",
          source: "template.marko:2:1",
        },
        html("<span><td>y</td></span>", [
          "template.marko:3:1",
          "template.marko:3:7",
        ]),
      );
      assert.ok(
        messages.includes("at template.marko:2:1+"),
        `raw issue should use raw site: ${messages}`,
      );
      assert.ok(
        messages.includes("at template.marko:3:7"),
        `later sourced open should keep its own loc: ${messages}`,
      );
    });
  });

  describe("dynamic-tag open declared at write time", () => {
    it("maps a runtime-declared native open to its source", () => {
      // Simulates _html_opens([source], 0) then _html(`<${name}...>`)
      assertReports(
        [
          html("<div>", ["template.marko:1:1"]),
          html("<tbody>", ["template.marko:2:1"]),
          html("</tbody></div>"),
        ],
        "at template.marko:2:1",
      );
      const messages = report(
        html("<div>", ["template.marko:1:1"]),
        html("<tbody>", ["template.marko:2:1"]),
        html("</tbody></div>"),
      );
      assert.ok(messages.includes("`<tbody>` is dropped"));
    });

    it("skips the source when a dynamic tag delegates to a renderer", () => {
      // No open reserved: only the component's own segments carry sources.
      assertReports(
        [
          html("<div>", ["template.marko:1:1"]),
          html("<p><tr></tr></p>", ["child.marko:1:1", "child.marko:1:4"]),
          html("</div>"),
        ],
        "at child.marko:1:4",
      );
    });
  });
});
