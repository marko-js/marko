import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const items = (entries: [id: number, view: string][]) => ({
  $global: {
    persisted: true,
    topic: "x",
    items: entries.map(([id, view]) => ({ id, view })),
  },
});

const panels = (document: Document) =>
  [...document.querySelectorAll("ul > span.a, ul > section.b")].map(
    (el) => el.className,
  );

// A group held across a keyed reorder, then a later patch flips its
// conditional renderer: the new branch must replace the held branch's
// DOM, not construct beside it.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    items([
      [1, "a"],
      [2, "b"],
    ]),
    navigate(
      items([
        [1, "b"],
        [2, "b"],
      ]),
    ),
    (document: Document) => assert.deepEqual(panels(document), ["b", "b"]),
    // The flipped rows hold through a pure reorder ...
    navigate(
      items([
        [2, "b"],
        [1, "b"],
      ]),
    ),
    (document: Document) => assert.deepEqual(panels(document), ["b", "b"]),
    // ... and a second flip must replace the held branch, not accrete.
    navigate(
      items([
        [1, "a"],
        [2, "b"],
      ]),
    ),
    (document: Document) => assert.deepEqual(panels(document), ["a", "b"]),
  ],
};
