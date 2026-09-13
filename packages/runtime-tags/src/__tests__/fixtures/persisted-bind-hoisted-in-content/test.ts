import type { TestConfig } from "../../main.test";

// A hoisted tag variable from inside a content body binds outside it: hoisting registers at the definer, so the path is a plain owner hop.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a", show: false }, { title: "b", show: true }, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
