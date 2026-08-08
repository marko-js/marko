import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// The SSR runner stops at the first input update, so the transition coverage
// lives in the client run.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ tag: "div" }, { tag: undefined }, click, { tag: "span" }],
};
