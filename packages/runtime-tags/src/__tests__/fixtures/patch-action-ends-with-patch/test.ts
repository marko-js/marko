import type { TestConfig } from "../../main.test";
import { navigate, flushRAF, resolveAfter } from "../../utils/resolve";

const click = { click: "#go" };

function pending(document: Document, expected: boolean) {
  if (
    document.querySelector("p")!.textContent !==
    `pending ${expected ? "true" : ""}`
  ) {
    throw new Error(`Expected pending ${expected}`);
  }
}

// An act whose click started a patch waits on that patch: its end, an abort
// with no successor, or the end of the newer patch that replaced it.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { label: "one", a: Promise.resolve("a1") },
    navigate(
      () => ({ label: "two", a: resolveAfter("a2") }),
      (document) => pending(document, true),
      click,
    ),
    flushRAF,
    (document: Document) => pending(document, false),
    navigate(
      () => ({ label: "three", a: resolveAfter("a3") }),
      () => "abandon",
      click,
    ),
    flushRAF,
    (document: Document) => pending(document, false),
    navigate(
      () => ({ label: "four", a: resolveAfter("a4") }),
      () => "supersede",
      click,
    ),
    flushRAF,
    (document: Document) => pending(document, true),
    navigate(() => ({ label: "five", a: resolveAfter("a5") }), flushRAF),
    flushRAF,
    (document: Document) => pending(document, false),
  ],
};
