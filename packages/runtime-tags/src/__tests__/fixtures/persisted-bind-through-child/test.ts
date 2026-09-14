import type { TestConfig } from "../../main.test";

// A handler passed as input binds inside the child's constructed branch: up through the child to the parent, then down the sibling's child link.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a", show: false }, { title: "b", show: true }, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
