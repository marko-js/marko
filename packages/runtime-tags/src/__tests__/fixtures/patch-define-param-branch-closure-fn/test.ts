import type { TestConfig } from "../../main.test";

// A page closure a `<define>` body reads under its param ships where the
// calls' sources leave it unfilled; the plain twin is define-tag-param-branch-closure-fn.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { a: "A", x: true },
    click,
    { a: "B", x: false },
    { a: "C", x: true },
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
