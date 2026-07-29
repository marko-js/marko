// Development-only check that the HTML we stream survives parsing unchanged.
// The parser silently relocates, drops or re-nests markup it considers invalid,
// which desynchronizes the resume walk from the DOM the browser actually built.
// This does not emulate the parser; it only detects where it would intervene.

const voidElements = new Set(
  "area base br col embed hr img input link meta param source track wbr".split(
    " ",
  ),
);
const rawTextElements = new Set(["script", "style", "textarea", "title"]);

// Parents that relocate or discard any child outside their allow list.
const allowedChildren: Record<string, Set<string>> = {
  table: new Set([
    "caption",
    "colgroup",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "template",
    "script",
    "style",
  ]),
  thead: new Set(["tr", "template", "script", "style"]),
  tbody: new Set(["tr", "template", "script", "style"]),
  tfoot: new Set(["tr", "template", "script", "style"]),
  tr: new Set(["td", "th", "template", "script", "style"]),
  colgroup: new Set(["col", "template"]),
};

// "In select" persists for every descendant, so a stray element is dropped
// however deep it sits. Outside a `<select>` an `<optgroup>` keeps its
// children as written, so the restriction cannot be a per-parent rule.
const selectContent = new Set([
  "option",
  "optgroup",
  "hr",
  "script",
  "template",
]);

// Directly inside `<table>` the parser inserts the missing wrapper rather than
// dropping, which still lands the element a level below where the walk looks.
const impliedWrappers: Record<string, string> = {
  tr: "tbody",
  td: "tbody",
  th: "tbody",
  col: "colgroup",
};
// Parents that also discard text, so a stray expression is lost too.
const discardsText = new Set([
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "colgroup",
]);

// Children the parser drops unless one of these ancestors is open. Only table
// markup is listed: an `<li>` or `<option>` out of place violates the content
// model but is still built as written, so hydration is unaffected.
const requiredAncestors: Record<string, string[]> = {
  tr: ["table", "thead", "tbody", "tfoot"],
  td: ["tr"],
  th: ["tr"],
  tbody: ["table"],
  thead: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["colgroup"],
};

// Start tags that make the parser close an open element early.
const closesOpen: Record<string, string[]> = {
  li: ["li"],
  dt: ["dt", "dd"],
  dd: ["dt", "dd"],
  option: ["option"],
  optgroup: ["optgroup", "option"],
  td: ["td", "th"],
  th: ["td", "th"],
  tr: ["tr", "td", "th"],
  tbody: ["tbody", "thead", "tfoot", "tr", "td", "th"],
  thead: ["tbody", "thead", "tfoot"],
  tfoot: ["tbody", "thead", "tfoot"],
  // Nested interactive / form content: the parser closes (or drops) the outer
  // element so the DOM is no longer what the template described.
  a: ["a"],
  button: ["button"],
  h1: ["h1", "h2", "h3", "h4", "h5", "h6"],
  h2: ["h1", "h2", "h3", "h4", "h5", "h6"],
  h3: ["h1", "h2", "h3", "h4", "h5", "h6"],
  h4: ["h1", "h2", "h3", "h4", "h5", "h6"],
  h5: ["h1", "h2", "h3", "h4", "h5", "h6"],
  h6: ["h1", "h2", "h3", "h4", "h5", "h6"],
};
// `<li>`/`<dd>`/`<dt>` look past these for an element to close, so
// `<li><div><li>` still moves the boundary.
const closesThrough = new Set(["li", "dd", "dt"]);
// Elements the parser closes implicitly, so skipping them is not a restructure.
const optionalEndTags = new Set([
  "li",
  "dd",
  "dt",
  "p",
  "option",
  "optgroup",
  "td",
  "th",
  "tr",
  "tbody",
  "thead",
  "tfoot",
]);
const scopeBreakers = new Set(["div", "address", "p"]);

// Nested interactive closes look past phrasing so `<a><span><a>` still reports.
const phrasingThrough = new Set(
  "a abbr b bdi bdo br button cite code data dfn em i kbd mark math meter noscript output progress q ruby s samp script select small span strong sub sup svg template textarea time u var wbr".split(
    " ",
  ),
);

// A second form is ignored entirely (not closed); hydration still desyncs if
// the template expected a nested form node.
const dropsNested = new Set(["form"]);

function findLast<T extends { name: string }>(
  stack: T[],
  match: (el: T) => boolean,
  through: Set<string>,
) {
  for (let i = stack.length; i--;) {
    if (match(stack[i])) return stack[i];
    if (!through.has(stack[i].name)) return;
  }
}

// Blocks that close an open `<p>` (HTML button scope). The parser looks past
// phrasing/formatting, so `<p><b><div>` still reparents.
const closesParagraph = new Set(
  "address article aside blockquote details div dl fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul".split(
    " ",
  ),
);

export type StructureSegment =
  | { kind: "sourced"; html: string; opens: (string | undefined)[] }
  | { kind: "raw"; html: string; source?: string }
  | { kind: "runtime"; html: string; source?: string };

export function createStructureValidator() {
  const open: { name: string; source?: string }[] = [];
  const reported = new Set<string>();
  // Per validator: `lastIndex` is mutable state and renders can interleave.
  // Bogus declarations match no group so they stay out of the tree, while a
  // `<` that opens nothing is text (the trailing alternative) as in a browser.
  const tokens =
    /<!--[\s\S]*?-->|<[!?][^>]*>|<\/(?![a-zA-Z])[^>]*>|<(\/?)([a-zA-Z][^\s/>]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>|([^<]+|<)/g;
  return (segments: StructureSegment[]) => {
    // Marko splits a start tag across writes, so the concatenation is scanned
    // and each match attributed to the segment its `<` fell in.
    const starts: number[] = [];
    const cursors: number[] = [];
    let html = "";
    for (const segment of segments) {
      starts.push(html.length);
      cursors.push(0);
      html += segment.html;
    }
    scan(html, segments, starts, cursors);
  };

  function scan(
    html: string,
    segments: StructureSegment[],
    starts: number[],
    cursors: number[],
  ) {
    let segmentIndex = 0;
    tokens.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = tokens.exec(html))) {
      const [, closing, rawName, attrs, text] = match;
      // A bogus comment or declaration matches no group; the parser keeps it
      // out of the tree, so it is neither an element nor text.
      if (rawName === undefined && text === undefined) continue;
      while (
        segmentIndex + 1 < starts.length &&
        starts[segmentIndex + 1] <= match.index
      ) {
        segmentIndex++;
      }
      const segment = segments[segmentIndex];
      const parent = open[open.length - 1];

      if (text !== undefined) {
        if (text.trim() && parent && discardsText.has(parent.name)) {
          report(
            `Text is moved out of \`<${parent.name}>\` by the HTML parser.`,
            parent.source,
          );
        }
        continue;
      }

      const name = rawName.toLowerCase();
      if (closing) {
        const openIndex = open.findLastIndex((el) => el.name === name);
        if (openIndex === -1) {
          report(`\`</${name}>\` has no matching start tag.`);
        } else {
          const skipped = open.slice(openIndex + 1);
          if (skipped.some((el) => !optionalEndTags.has(el.name))) {
            const inner = open[open.length - 1];
            report(
              `\`</${name}>\` closes \`<${inner.name}>\` before its own end tag.`,
              inner.source,
            );
          }
          open.length = openIndex;
        }
        continue;
      }

      const source = nextOpenSource(
        segment,
        cursors[segmentIndex],
        match.index - starts[segmentIndex],
      );
      if (segment.kind === "sourced") cursors[segmentIndex]++;

      // `<template>` content parses on its own, so it ends any select scope.
      const scoped = open.findLast(
        (el) => el.name === "select" || el.name === "template",
      );
      if (scoped?.name === "select" && !selectContent.has(name)) {
        report(
          `\`<${name}>\` is dropped by the HTML parser inside \`<select>\`.`,
          source,
        );
      }

      let wrapped = false;
      if (parent) {
        const wrapper =
          parent.name === "table" ? impliedWrappers[name] : undefined;
        const allowed = allowedChildren[parent.name];
        if (wrapper) {
          wrapped = true;
          report(
            `\`<${name}>\` makes the HTML parser insert a \`<${wrapper}>\` around it.`,
            source,
          );
        } else if (allowed && !allowed.has(name)) {
          report(
            `\`<${name}>\` is not allowed in \`<${parent.name}>\` and the HTML parser moves or drops it.`,
            source,
          );
        }
        // An omitted end tag builds the DOM the author meant, so it only
        // updates the stack. A block closing a `<p>` reparents, so it reports.
        // Nested `<a>`/`<button>` look past phrasing; headings only close when
        // the current node is a heading (HTML "in body" rules).
        const closes = closesOpen[name];
        let closed: { name: string; source?: string } | undefined;
        if (closes) {
          if (closesThrough.has(name)) {
            closed = findLast(
              open,
              (el) => closes.includes(el.name),
              scopeBreakers,
            );
          } else if (name === "a" || name === "button") {
            closed = findLast(
              open,
              (el) => closes.includes(el.name),
              phrasingThrough,
            );
            if (closed) {
              report(
                `\`<${name}>\` closes the open \`<${closed.name}>\` early.`,
                source,
              );
            }
          } else if (closes.includes(parent.name)) {
            closed = parent;
            if (/^h[1-6]$/.test(name)) {
              report(
                `\`<${name}>\` closes the open \`<${closed.name}>\` early.`,
                source,
              );
            }
          }
        }
        if (closed) {
          open.length = open.indexOf(closed);
        } else if (closesParagraph.has(name)) {
          // Look past phrasing/formatting for an open `<p>` (button scope).
          const openP = findLast(
            open,
            (el) => el.name === "p",
            phrasingThrough,
          );
          if (openP) {
            report(`\`<${name}>\` closes the open \`<p>\` early.`, source);
            open.length = open.indexOf(openP);
          }
        }

        if (dropsNested.has(name)) {
          const outer = open.findLast((el) => el.name === name);
          if (outer) {
            report(
              `\`<${name}>\` is dropped by the HTML parser inside another \`<${name}>\`.`,
              source,
            );
            // Parser ignores the token; do not push a second form.
            continue;
          }
        }
      }

      const needs = requiredAncestors[name];
      if (
        !wrapped &&
        needs &&
        !open.some((el) => el.name === "template" || needs.includes(el.name))
      ) {
        report(
          `\`<${name}>\` is dropped by the HTML parser outside \`<${needs.join(">` / `<")}>\`.`,
          source,
        );
      }

      if (voidElements.has(name) || /(^|\s)\/$/.test(attrs)) continue;

      if (rawTextElements.has(name)) {
        const start = html.toLowerCase().indexOf(`</${name}`, tokens.lastIndex);
        const end = start === -1 ? -1 : html.indexOf(">", start);
        tokens.lastIndex = end === -1 ? html.length : end + 1;
        continue;
      }

      open.push({ name, source });
    }
  }

  function nextOpenSource(
    segment: StructureSegment,
    openCursor: number,
    offset: number,
  ) {
    if (segment.kind === "sourced") return segment.opens[openCursor];
    if (segment.kind === "raw" && segment.source != null) {
      return segment.source + "+" + offset;
    }
    if (segment.kind === "runtime" && segment.source != null) {
      return segment.source + (offset ? "+" + offset : "");
    }
  }

  function report(message: string, source?: string) {
    // One report per distinct problem; a loop would otherwise repeat it.
    const key = message + source;
    if (reported.has(key)) return;
    reported.add(key);
    console.error(
      "Invalid HTML structure. The browser will not build the DOM this markup describes, " +
        "so hydration will not match:\n  " +
        message +
        (source ? "\n  at " + source : ""),
    );
  }
}
