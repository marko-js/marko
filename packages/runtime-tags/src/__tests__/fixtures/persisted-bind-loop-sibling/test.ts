import type { TestConfig } from "../../main.test";

// A constructed loop item binds a handler from a SIBLING loop's keyed item: up to the shared owner, then a keyed hop and a child link down.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a", show: false }, { title: "b", show: true }, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
