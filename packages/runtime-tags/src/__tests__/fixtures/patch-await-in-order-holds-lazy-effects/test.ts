import type { TestConfig } from "../../main.test";
import { flush, flushRAF, wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")?.click();
}

// The document holds the lazy child's effects until the in-order await
// completes; a patch then keeps the live child's state and handlers.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { label: "a" },
    flushRAF,
    click,
    flush,
    wait,
    flushRAF,
    click,
    flushRAF,
    { label: "b" },
    wait,
    click,
    flushRAF,
  ],
};
