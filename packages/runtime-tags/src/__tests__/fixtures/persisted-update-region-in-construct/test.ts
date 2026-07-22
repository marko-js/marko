import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate, wait } from "../../utils/resolve";

// A nucleus-free (region) loop as the only child of its container, inside a
// shell-constructed hop branch, beside a stateful child: the region must
// fill the fresh container and the sibling child's state must survive later
// region swaps. (The sibling's *initial* let seed inside a constructed hop
// is a known gap shared with the pre-membranes implementation — see
// agent-feedback/bugs.md — so this fixture asserts survival from the first
// client write onward.)
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "a", kind: "spec" } },
    navigate({ $global: { persisted: true, view: "b", kind: "spec" } }),
    (document: Document) => {
      assert.equal(
        document.querySelector("section.b ul")?.textContent,
        "spec onespec two",
      );
      assert.ok(document.querySelector("button.sticky"));
    },
    wait,
    // A constant (client-renderable) loop inside the constructed branch's
    // streamed boundary: its rows render at construction, no wire needed.
    (document: Document) => {
      assert.equal(document.querySelectorAll("div.review").length, 3);
      assert.equal(
        document.querySelector("div.review")?.textContent,
        "review 1",
      );
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.sticky")!.click(),
    (document: Document) => {
      assert.equal(document.querySelector("button.sticky")?.textContent, "s1");
    },
    navigate({ $global: { persisted: true, view: "b", kind: "load" } }),
    (document: Document) => {
      assert.equal(
        document.querySelector("section.b ul")?.textContent,
        "load oneload two",
      );
      // The stateful sibling survived the region swap beside it.
      assert.equal(document.querySelector("button.sticky")?.textContent, "s1");
    },
  ],
};
