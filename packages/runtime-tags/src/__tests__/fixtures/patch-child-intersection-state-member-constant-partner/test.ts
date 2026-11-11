import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A child template's intersection of an input its caller passes client state with
// one it passes a constant: no patch changes the partner, so the page ships no member.
export const config: TestConfig = {
  patches: true,
  steps: [{ y: 1 }, click, { y: 2 }, click],
};
