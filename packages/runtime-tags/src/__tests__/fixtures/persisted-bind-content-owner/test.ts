import type { TestConfig } from "../../main.test";

// A constructed branch inside a content body binds the definer's sibling handler: the owner hop leaves the content toward where it was defined, not the child rendering it.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a", show: false }, { title: "b", show: true }, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
